export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-GB", options);
};


