import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { comparisonData } from "@/lib/constants";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";

const pages = [
  { slug: "whatsapp", label: "WhatsApp + Gallery", col: 2, title: "PropFlow vs WhatsApp + Gallery", desc: "WhatsApp is great for chatting, but it's not a CRM. See how PropFlow fills every gap." },
  { slug: "excel", label: "Excel / Sheets", col: 3, title: "PropFlow vs Excel / Sheets", desc: "Spreadsheets are flexible, but they weren't built for real estate. See what you're missing." },
  { slug: "crm", label: "Traditional CRM", col: 4, title: "PropFlow vs Traditional CRM", desc: "Most CRMs are over-engineered and miss what Indian brokers actually need. See how PropFlow compares." },
];

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.desc, path: `/compare/${slug}` });
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const competitorCol = page.col;

  function cellValue(rowIdx: number, colIdx: number) {
    return comparisonData.rows[rowIdx]?.[colIdx] ?? "";
  }

  function isBest(rowIdx: number, colIdx: number) {
    if (colIdx === 0) return false;
    const val = cellValue(rowIdx, colIdx);
    return val === "Built-in" || val === "Auto" || val === "Auto-tagged" || val === "Real-time" || val === "Included" || val === "1-click" || val === "AI-driven" || val === "Yes" || val === "₹999" || val === "Yes (included)";
  }

  function isNA(rowIdx: number, colIdx: number) {
    const val = cellValue(rowIdx, colIdx);
    return val === "N/A" || val === "Poor" || val === "Gallery chaos";
  }

  function renderCell(rowIdx: number, colIdx: number) {
    const val = cellValue(rowIdx, colIdx);
    if (val === "N/A") return <X className="h-4 w-4 text-fg-muted" />;
    return (
      <span className="inline-flex items-center gap-1 text-sm">
        {isBest(rowIdx, colIdx) && <Check className="h-4 w-4 shrink-0 text-success" />}
        {val}
      </span>
    );
  }

  return (
    <>
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/pricing"
            className="mb-8 inline-flex items-center gap-1 text-sm text-fg-tertiary transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pricing
          </Link>
          <span className="section-label">Compare</span>
          <h1 className="section-title">{page.title}</h1>
          <p className="section-sub mx-auto max-w-2xl">{page.desc}</p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-secondary">
                  {comparisonData.headers.map((header, i) => (
                    <th
                      key={header}
                      className={`px-4 py-3 font-semibold text-fg sm:px-6 ${
                        i === 0 ? "sticky left-0 bg-bg-secondary" : ""
                      } ${i === competitorCol ? "text-brand-500" : ""} ${
                        i > 0 && i !== competitorCol ? "text-fg-muted" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {i === competitorCol && <ArrowUpRight className="h-3.5 w-3.5" />}
                        {i === 1 ? <strong className="text-fg">{header}</strong> : header}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row, rowIdx) => (
                  <tr
                    key={row[0]}
                    className={`border-b border-border last:border-0 ${
                      rowIdx % 2 === 0 ? "bg-bg" : "bg-surface"
                    }`}
                  >
                    {row.map((_, colIdx) => (
                      <td
                        key={colIdx}
                        className={`px-4 py-3 sm:px-6 ${
                          colIdx === 0
                            ? "sticky left-0 font-medium text-fg"
                            : colIdx === competitorCol
                              ? "bg-brand-500/5 font-medium text-brand-600"
                              : "text-fg-secondary"
                        } ${colIdx === 0 ? "bg-bg" : ""} ${
                          colIdx === 0 && rowIdx % 2 === 1 ? "bg-surface" : ""
                        }`}
                      >
                        {colIdx === 0 ? row[0] : renderCell(rowIdx, colIdx)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-fg-muted">
            All features are included in PropFlow&apos;s Starter plan at ₹999/month. Competitor pricing may vary.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
