 // to string

 //число к строке
let value = 0;

// 1-й способ
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

 //число к строке
value = 1;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//значение бесконечности к строке
value = Infinity;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//не число к строке
value = NaN;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ********

// булевое (логическое) true к строке
value = true;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// булевое (логическое) false к строке
value = false;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// undefined к строке
value = undefined;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// null к строке
value = null;

// 1-й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2-й способ
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

