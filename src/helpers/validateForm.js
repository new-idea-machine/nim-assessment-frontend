const formatPhone = (num) => {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let parsedNum = num
    .split("")
    .filter((s) => digits.includes(s))
    .join("");
  if (parsedNum.length === 10) {
    parsedNum = `(${parsedNum.slice(0, 3)}) ${parsedNum.slice(
      3,
      6
    )}-${parsedNum.slice(6)}`;
    return parsedNum;
  }
  return null;
};

const checkUnfilled = (obj) => {
  const emptyFields = Object.keys(obj).filter(
    (fieldName) => obj[fieldName].trim() === ""
  );

  return emptyFields;
};

export { formatPhone, checkUnfilled };
