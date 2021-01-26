'use strict';
/*
1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
const results = ['четное число', 'нечетное число'];
for (let i = 0; i <= 10; i++) {
    if (i === 0) printResult(i, 'это ноль');
    else printResult(i, results[i % 2]);
}

function printResult(value, description) {
    console.log(`${value} - ${description}`)
}
