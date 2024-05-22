export function makeSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '_');
}
