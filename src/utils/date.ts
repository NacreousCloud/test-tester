export const monthBefore = (month: number, howLong: number = 1) => {
  let result = month - howLong;
  if (result <= 0) result += 12;
  return result;
};

export const monthAfter = (month: number, howLong: number = 1) => {
  let result = month + howLong;
  if (result >= 13) result -= 12;
  return result;
};

export const getDaysOfMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};
