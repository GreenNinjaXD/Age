var a = +prompt('Введите ваш возраст')

if (a > 0 && a <= 18) {
    alert('Вы еще молоды, Вам нужно учиться');
} else if (a >= 19 && a <= 50) {
    alert('Вам нужно работать');
} else if (a >= 51 && a <= 59) {
    alert('Вам скоро на пенсию');
} else if (a >= 60 && a <= 100) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так или вы умерли')
}