/**
 * Inline JSON-LD structured data renderer.
 *
 * Renders one or more schema.org objects as `<script type="application/ld+json">`
 * blocks. Safe to use in server components; no client JS is shipped.
 *
 * Pass a single schema object or an array of objects (multiple schemas on the
 * same page is supported by Google).
 *
 * `nonce` is forwarded to the <script> element so the block still satisfies
 * a strict Content-Security-Policy that requires a per-request nonce.
 *
 * Implementation notes:
 *  - React 19 rejects mixing `nonce` with `dangerouslySetInnerHTML` on the
 *    same element ("must be in the form `{__html: ...}`"). We sidestep that
 *    by rendering the whole `<script>` tag as raw HTML on a wrapping `<div>`.
 *    The payload is fully server-controlled — no user input ever reaches
 *    this string — so the innerHTML usage is safe.
 *  - The CSP nonce is a server-only value (it comes from the middleware via
 *    `headers()`). React 19 will compare the server-rendered HTML to the
 *    client tree during hydration and complain that the nonce attribute is
 *    missing on the client. `suppressHydrationWarning` on the wrapper tells
 *    React this divergence is intentional and expected.
 */
export function JsonLd({
  schema,
  id,
  nonce,
}: {
  schema: object | object[];
  id?: string;
  nonce?: string;
}) {
  const json = JSON.stringify(schema);
  const idAttr = id ? ` id="${id}"` : "";
  const nonceAttr = nonce ? ` nonce="${nonce}"` : "";

  return (
    <div
      aria-hidden="true"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json"${idAttr}${nonceAttr}>${json}</script>`,
      }}
    />
  );
}
