const getInput = async () => {
  const file = await Bun.file("input.txt").text();

  return file.split("\n");
};

const isInt = (s: string): boolean => {
  return Number.isInteger(+s);
};

const SPELLED_NUM_MAP: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const replaceSpelledNums = (s: string): string => {
  let result = s;

  for (const num in SPELLED_NUM_MAP) {
    if (SPELLED_NUM_MAP.hasOwnProperty(num)) {
      const numericEquivalent = SPELLED_NUM_MAP[num];
      const regex = new RegExp(num, "gi");
      result = result.replace(regex, numericEquivalent);
    }
  }

  return result;
};

const main = async () => {
  const lines = await getInput();

  const numsToSum = [];

  const linesWithoutSpelled = lines.map(s => {
    return replaceSpelledNums(s);
  });

  for (const s of linesWithoutSpelled) {
    const currentNumber: string[] = [];
    const currentSpelledNums: string[] = [];
    const numsInString: string[] = [];

    for (let i = 0; i < s.length; i++) {
      if (isInt(s[i])) {
        numsInString.push(s[i]);
      }
    }

    const concatenatedNum = Number(
      `${numsInString[0]}${numsInString[numsInString.length - 1]}`
    );
    numsToSum.push(concatenatedNum);
  }

  return numsToSum.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

console.log(await main());
