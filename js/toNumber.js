// to number

 //любое строчное значение к числу
let value = 'Bla Bla Bla';

// 1-й способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

 //строчное число к числу
value = '123';

// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

 //пустая строка к числу
value = '';

// 1-й способ
toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`пустая строка ${value}, через унарный плюс: `, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный плюс: `, typeof toNumber);

//строка с пробелом к числу
value = ' ';

// 1-й способ
toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных строка с пробелом ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный плюс: `, toNumber);
console.log(`тип данных строка с пробелом ${value}, через унарный плюс: `, typeof toNumber);

// ********

// булевое (логическое) true к числу
value = true;

// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

// булевое (логическое) false к строке
value = false;

// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

// undefined к числу
value = undefined;

// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);

// null к числу
value = null;

// 1-й способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2-й способ
toNumber = +value;
console.log(`${value}, через унарный плюс: `, toNumber);
console.log(`тип данных ${value}, через унарный плюс: `, typeof toNumber);