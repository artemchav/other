'use strict';

//пример 1
let a = 1, b = 1, c, d;

/*
a == 1; c == undefined;

++a вычисляется до присваивания, поэтому
1. a = a + 1  → 2
2. c = a → 2
*/
c = ++a
alert(c); // ответ: 2

//пример 2
/*
d == undefined; b == 1;

постинкремент выполняется после выполнения вычислений, поэтому
d = 1
b = b + 1
*/
d = b++;
alert(d); //ответ: 1

//пример 3
/*
a == 2; c == 2;

1. a++ → 3
2. c = 2 + 3 → 5
*/
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
/*
d == 1; b == 2;

1. d = 2 + b → 4
2. b++ → 3
*/
d = 2 + b++;
alert(d); //ответ: 4

/*
a в третьем примере стало равным 3
b в 4 примере стало равным 3
*/
alert(a); //3
alert(b); //3