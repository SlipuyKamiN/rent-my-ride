export const formatThousands = value => {
  return Number(value.replace(',', '')).toLocaleString('en-US');
};
