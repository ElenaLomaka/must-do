// to boolean

 //любое строчное значение к булю
let value = 'Bla Bla Bla';

// 1-й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//любое строчное число к булю
value = '123';

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//пустая строка к булю
value = '';

// 1-й способ
toBoolean = Boolean(value);
console.log(` пустая строка${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустой строки ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(` пустая строка${value}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean);

//строка с пробелом к булю
value = ' ';

// 1-й способ
toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строки с пробелом ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`строка с пробелом ${value}, через !!: `, toBoolean);
console.log(`тип данных строки с пробелом ${value}, через !!: `, typeof toBoolean);

//число к булю

value = 0;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//число к булю

value = 1;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//undefined к булю

value = undefined;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//null к булю

value = null;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

 //NaN к булю
value = NaN;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//Infinity к булю
value = Infinity;

// 1-й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2-й способ
toBoolean =!!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);





