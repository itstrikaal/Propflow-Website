// Twitter card image — uses the same renderer as the OG image but with the
// twitter-image route convention. We import the default export and metadata
// fields individually because Next.js does not allow re-exporting `runtime`
// from another file.
import Image, { alt, size, contentType } from "./opengraph-image";

export { alt, size, contentType };
export default Image;
