export const getPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getShortName = (name: string) => {
  return name
    .replace(/(projectors?)|(subwoofers?)|(speakers?)|(invisibass?)|(rti?)|(designspeakers?)/i, " ")
    .toUpperCase();
};
