interface TextSummarizerProps {
  text: string;
  maxChars: number;
}
export function TextSummarizer({ text, maxChars }: TextSummarizerProps) {
  if (text.length > maxChars) {
    text = text.substring(0, maxChars) + "...";
  }
  return <span>{ text }</span>;
}
