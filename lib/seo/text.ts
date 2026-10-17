/** Collapse whitespace and cut copy to a meta-description length, preferring a sentence boundary. */
export function toMetaDescription(text: string, maxLength = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;

  const slice = clean.slice(0, maxLength);
  const sentenceEnd = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('؟ '), slice.lastIndexOf('! '));
  if (sentenceEnd >= maxLength * 0.5) return slice.slice(0, sentenceEnd + 1);

  const wordEnd = slice.lastIndexOf(' ');
  const cut = wordEnd > 0 ? slice.slice(0, wordEnd) : slice;
  return `${cut.replace(/[\s,.;:،-]+$/, '')}…`;
}
