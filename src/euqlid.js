"use strict";

const euqlid = (val1, val2) => {
  try {
    if (typeof val1 !== "number" || typeof val2 !== "number") {
      throw new Error("Аргументами повинні бути числами");
    }
    if (val1 <= 0 || val2 <= 0) {
      throw new Error("Аргументами повинні бути додатними числами");
    }

    val1 = Math.round(val1);
    val2 = Math.round(val2);

    if (val1 % val2 === 0) {
      return val2;
    }
    return euqlid(val2, val1 % val2);
  } catch (error) {
    console.error("Помилка:", error.message);
    return null;
  }
};

// =============TEST=============
console.log(euqlid(20, 6));
console.log(euqlid(111, 17));
console.log(euqlid(2044, 60));
console.log(euqlid(10003, 99));
console.log(euqlid(20, 4));
console.log(euqlid(-3, 11));
