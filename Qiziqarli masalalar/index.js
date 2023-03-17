//  1  ==================================
// numToStrign(num)=>function yasang. Agar num son bo'lsa
// uni string ko'rinishiga o'tqazing.

let num = "54567678689282";

let res1 = +num.slice(num.length - 1, num.length);
let res2 = +num.slice(num.length - 2, num.length - 1);
let res3 = +num.slice(num.length - 3, num.length - 2);
let res4 = +num.slice(num.length - 4, num.length - 3);
let res5 = +num.slice(num.length - 5, num.length - 4);
let res6 = +num.slice(num.length - 6, num.length - 5);
let res7 = +num.slice(num.length - 7, num.length - 6);
let res8 = +num.slice(num.length - 8, num.length - 7);
let res9 = +num.slice(num.length - 9, num.length - 8);
let res10 = +num.slice(num.length - 10, num.length - 9);
let res11 = +num.slice(num.length - 11, num.length - 10);
let res12 = +num.slice(num.length - 12, num.length - 11);
let res13 = +num.slice(num.length - 13, num.length - 12);
let res14 = +num.slice(num.length - 14, num.length - 13);
let res15 = +num.slice(num.length - 15, num.length - 14);

let res = "";

const getNum = (res1) => {
  if (res1 == 1) {
    return ` bir`;
  } else if (res1 == 2) {
    return ` ikki`;
  } else if (res1 == 3) {
    return ` uch`;
  } else if (res1 == 4) {
    return ` to'rt`;
  } else if (res1 == 5) {
    return ` besh`;
  } else if (res1 == 6) {
    return ` olti`;
  } else if (res1 == 7) {
    return ` yetti`;
  } else if (res1 == 8) {
    return ` sakkiz`;
  } else if (res1 == 9) {
    return ` to'qqiz`;
  } else {
    return "";
  }
};

const getNum2 = (res2) => {
  if (res2 == 1) {
    return ` o'n`;
  } else if (res2 == 2) {
    return ` yigirma`;
  } else if (res2 == 3) {
    return ` o'ttiz`;
  } else if (res2 == 4) {
    return ` qirq`;
  } else if (res2 == 5) {
    return ` ellik`;
  } else if (res2 == 6) {
    return ` oltmish`;
  } else if (res2 == 7) {
    return ` yetmish`;
  } else if (res2 == 8) {
    return ` sakson`;
  } else if (res2 == 9) {
    return ` to'qson`;
  } else {
    return ``;
  }
};
if (num.length > 12) {
  // 100 trillionliklar
  if (res15 == 0) {
    res += ``;
  } else if (num.length > 14) {
    res += `${getNum(res15)} yuz`;
  }

  // 10 trillionliklar
  if (res14 == 0) {
    res += ``;
  } else if (num.length > 13) {
    res += `${getNum2(res14)}`;
  }

  // 1 trillionliklar
  if (res13 == 0) {
    res += ``;
  } else if (num.length > 12) {
    res += `${getNum(res13)}`;
  }

  if (res13 == 0 && res14 == 0 && res15 == 0) {
    res += ``;
  } else {
    res += ` trillion`;
  }
}

if (num.length > 9) {
  // 100 milliardliklar
  if (res12 == 0) {
    res += ``;
  } else if (num.length > 11) {
    res += `${getNum(res12)} yuz`;
  }

  // 10 milliardliklar
  if (res11 == 0) {
    res += ``;
  } else if (num.length > 10) {
    res += `${getNum2(res11)}`;
  }

  // 1 milliardliklar
  if (res10 == 0) {
    res += ``;
  } else if (num.length > 9) {
    res += `${getNum(res10)}`;
  }

  if (res10 == 0 && res11 == 0 && res12 == 0) {
    res += ``;
  } else {
    res += ` milliard`;
  }
}
if (num.length > 6) {
  // 100 millionliklar
  if (res9 == 0) {
    res += ``;
  } else if (num.length > 8) {
    res += `${getNum(res9)} yuz`;
  }

  // 10 millionliklar
  if (res8 == 0) {
    res += ``;
  } else if (num.length > 7) {
    res += `${getNum2(res8)} `;
  }

  // 1 millionliklar
  if (res7 == 0) {
    res += ``;
  } else if (num.length > 6) {
    res += `${getNum(res7)} `;
  }
  if (res7 == 0 && res8 == 0 && res9 == 0) {
    res += ``;
  } else {
    res += ` million`;
  }
}
if (num.length > 3) {
  // 100 ming
  if (res6 == 0) {
    res += ``;
  } else if (num.length > 5) {
    res += `${getNum(res6)} yuz`;
  }

  // 10 minglar
  if (res5 == 0) {
    res += ``;
  } else if (num.length > 4) {
    res += `${getNum2(res5)}`;
  }
  //1 mingliklar
  if (res4 == 0) {
    res += ``;
  } else if (num.length > 3) {
    res += `${getNum(res4)}`;
  }
  if (res4 == 0 && res5 == 0 && res6 == 0) {
    res += ``;
  } else {
    res += ` ming`;
  }
}
// 100
if (res3 == 0) {
  res += ``;
} else if (num.length > 2) {
  res += `${getNum(res3)} yuz`;
}
if (num.length > 1) {
  res += getNum2(res2);
}
res += getNum(res1);

console.log(res);

// console.log(res);
// ex:num=1261 , output: bir ming ikki yuz olmish bir
