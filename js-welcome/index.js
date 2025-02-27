/*

Задача 1
Найти факториал числа

5! = 5*4*3*2*1 = 120

*/

function factorial(number) {
    if(number === 1) {
        return  number;
    } else {
        return number * factorial(number - 1)
    }
}

console.log(factorial(5));


/*

Задача 2
Описать нахождение последовательности чисел Фибоначчи:
F(n) = F(n-1) + F(n-2)

Другими словами, следующее число является суммой двух предыдущих.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987....

0
1
0+1=1
1+1=2
1+2=3
2+3=5
3+5=8

*/

function Fibonacсhi(number) {
    if(number <= 1) {
        return number;
    } else {
        return Fibonacсhi(number - 1) + Fibonacсhi(number - 2);
    }
}

console.log(Fibonacсhi(9));