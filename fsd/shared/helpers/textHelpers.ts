export const sliceText = (text: string, limit: number) => {
  const slicedText = text.slice(0, limit);
  return `${slicedText}...`;
};
