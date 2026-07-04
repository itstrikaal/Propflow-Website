import { promises as fs } from "fs";
import path from "path";

/**
 * Tiny frontmatter parser for our MDX blog posts.
 *
 * The format is YAML-ish but very restricted:
 *   ---
 *   key: value
 *   tags: [a, b, c]
 *   ---
 *   <markdown body>
 *
 * We deliberately avoid adding gray-matter as a dependency for this — the
 * shape of our frontmatter is small and stable. If it ever grows beyond
 * primitives, swap this for `gray-matter` and delete this parser.
 */

export interface BlogFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  author: string;
  category: string;
  readingTime: string;
  featured?: boolean;
  tags?: string[];
}

export interface BlogPost extends BlogFrontmatter {
  body: string;
  url: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { data: BlogFrontmatter; body: string } {
  if (!raw.startsWith("---")) {
    throw new Error("MDX file is missing frontmatter block");
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    throw new Error("MDX frontmatter is not closed with ---");
  }
  const fmBlock = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, "");

  const data: Record<string, unknown> = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colon = trimmed.indexOf(":");
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let value: unknown = trimmed.slice(colon + 1).trim();

    // Strip surrounding quotes
    if (
      typeof value === "string" &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = (value as string).slice(1, -1);
    }

    // YAML-ish array: [a, b, c]
    if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
    }

    // Booleans
    if (value === "true") value = true;
    else if (value === "false") value = false;

    data[key] = value;
  }

  return { data: data as unknown as BlogFrontmatter, body };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let files: string[];
  try {
    files = await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
        const { data, body } = parseFrontmatter(raw);
        return {
          ...data,
          body,
          url: `/blog/${data.slug}`,
        } satisfies BlogPost;
      })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
