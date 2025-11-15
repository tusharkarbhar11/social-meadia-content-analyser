export function analyzeContent(text) {
  const sentiment = text.includes('good') ? 'positive' : text.includes('bad') ? 'negative' : 'neutral';
  const keywords = text.split(' ').slice(0,3);
  return {
    sentiment,
    keywords,
    length: text.length
  };
}
