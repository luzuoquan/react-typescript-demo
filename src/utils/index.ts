interface Iprops {
  setName: <T>(str: T) => void;
}

const nameWrapper: Iprops = {
  setName: <T>(str: T) => {
    const userNameArr2: T[] = [];
    userNameArr2.push(str);
  },
};

nameWrapper.setName('云课堂');
nameWrapper.setName(123);

// let userNameArr2: number[];


// console.log();
