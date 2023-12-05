const getInput = async () => {
  const file = await Bun.file("input.txt").text();

  return file.split("\n");
};

const isInt = (s: string): boolean => {
  return Number.isInteger(+s);
};

const main = async () => {
  const lines = await getInput();

  const numsToSum = [];

  for (const s of lines) {
    const currentNumber = [];

    for (let i = 0; i < s.length; i++) {
      if (isInt(s[i])) {
        currentNumber.push(s[i]);
        break;
      }
    }

    for (let i = s.length - 1; i >= 0; i--) {
      if (isInt(s[i])) {
        currentNumber.push(s[i]);
        break;
      }
    }
    console.log(currentNumber);

    const concatenatedNum = Number(`${currentNumber[0]}${currentNumber[1]}`);
    numsToSum.push(concatenatedNum);
  }

  return numsToSum.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

console.log(await main());
