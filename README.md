дз неделя 14
1. Какие есть способы объявления функций?
- function declaration (когда функция объявляется как отдельная инструкция в коде)
- function expression (когда функция объявляется как часть выражения)
- стрелочные функции (значительно короче и быстрее, чем function declaration  и function expression)

2. Приведите примеры вызова одной и той же функции всеми известными вам способами.
a) function declaration
function mult(a,b) {
return a*b;}
b) function expression
let mult=function(a, b) {
return a*b;
};
c) let mult(a, b)=>a*b;

3. В чем разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
При тестировании мы ничего не исправляем в коде, а лишь проверяем его и ищем ошибки (баги), а дебаггинг уже выявляет их причину и исправляет. 
Логирование это вывод в консоль разработчика нужных нам данных для тестирования и отладки (выводится через функцию console.log)

4. В чем разница между Function Expression и Function Declaration?
Function Expression объявляется часть выражения, а Function Declaration как отдельная инструкция, Поэтому в конце кода не нужно ставить ; если это function declaration. А если используем function expression, то ставим ; потому что это выражение с присваиванием, где всегда ставится ; в конце.

5. Что делает функция console.log()?
Выводит необходимые введённые нами данные в консоль разработчика для тестирования и отладки

6. Что такое BOM и DOM?
BOM (browser object model) - набор объектов, которые управляют поведением браузера.
DOM (document object model) - это объектная модель документа, которую браузер создает в памяти компьютера на основании HTML-кода, полученного им от сервера. Иными словами, это представление HTML-документа в виде дерева тегов.


7. Есть вот такая страница: <!DOCTYPE HTML>
<html>

<body>
	<form name="search">
	<label>Поиск:
	<input type="text" name="search"> </label>
	<input type="submit" value="Search!"> </form>
	<hr>
	<form name="search-person">Поиск по посетителям:
	<table id="age-table">
	<tr>
	<td>Возраст:</td>
	<td id="age-list">
	<label>
	<input type="radio" name="age" value="young">до 18</label>
	<label>
	<input type="radio" name="age" value="mature">18-50</label>
	<label>
	<input type="radio" name="age"value="senior">старше 50</label>
	</td>
	</tr>
	<tr>
	<td>Дополнительно:</td>
	<td>
	<input type="text" name="info">
	<input type="text" name="info">
	<input type="text" name="info"> </td>
	</tr>
        </table>
	<input type="button" value="Search!"> </form>
</body>
</html>
 Как найти в ней?…
    1. Таблицу с id="age-table"
 let table = document.getElementById('age-table');
 console.log(table);

    2. Все элементы label внутри этой таблицы (их три)
let list = document.getElementsByTagName('label');
console.log(list);

    3. Форму form с именем name="search-person"
  let form = document.getElementsByName('search-person');
  console.log(form);

8. Как сделать переход на другую страницу при клике на кнопку (без <a href=...>, только средствами JavaScript)?
- в файле js с помощью объекта location 
document.location.href = «адрес сайта»
-в html файле  с помощью <…onclick=‘’location.href=‘ссылка’;’’>


9. Как можно обнулить (очистить) значение внутри input?

10. Как будет выглядеть ваша функция приветствия из прошлого домашнего задания, если ее переписать в стрелочном формате?
БЫЛО: 
function hello() {
    let person = prompt('Как тебя зовут?');
    alert(`Привет, ${person}! А я - Рита!`);
}
СТАЛО:
let hello = () => {
    let person = prompt('Как тебя зовут?');
    alert(`Привет, ${person}! А я - Рита!`);
}

