'use strict';
/*
5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case "-":
            return minus(arg1, arg2);
            break;
        case "+":
            return sum(arg1, arg2)
            break;
        case "*":
            return multiple(arg1, arg2);
            break;
        case "/":
            return divide(arg1, arg2);
            break;
    }
}