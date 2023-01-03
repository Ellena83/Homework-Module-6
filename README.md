# Homework-Module-6

Создан репозиторий goit-js-hw-06.
Задания выполнены строго по ТЗ.
Код отформатирован Prettier.

## Задание 1

В HTML есть список категорий `ul#categories`.
`<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>`

Написан скрипт, который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов `li.item`.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега `<h2>`) и количество элементов в категории (всех вложенных в него `<li>`).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

## Задание 2

В HTML есть пустой список `ul#ingredients`.
`<ul id="ingredients"></ul>`

В JavaScript есть массив строк.

`const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];`

Написан скрипт, который для каждого элемента массива `ingredients`:

Создаст отдельный элемент `<li>`. Обзательно используй метод `document.createElement()`.
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс `item`.
После чего вставит все `<li>` за одну операцию в список `ul#ingredients`.

## Задание 3

Написан скрипт для создания галереи изображений по массиву данных. В HTML есть список `ul.gallery`.
`<ul class="gallery"></ul>`

Использован массив объектов `images` для создания элементов `<img>`, вложенных в `<li>`. Для создания разметки использованы шаблонные строки и метод `insertAdjacentHTML()`.

Все элементы галереи добавляются в DOM за одну операцию вставки.
Добавлено минимальное оформление галереи флексбоксами или гридами через CSS классы.

`const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];`

## Задание 4

Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

`<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>`

Создана переменная `counterValue`, в которой будет храниться текущее значение счетчика, и инициализировано её значением `0`.
Добавлены слушатели кликов на кнопки, внутри которых увеличивается или уменьшается значение счтетчика.
Обновляется интерфейс новым значением переменной `counterValue`.

## Задание 5

Написан скрипт, который при наборе текста в инпуте `input#name-input` (событие input) подставляет его текущее значение в `span#name-output`. Если инпут пустой, в спане будет отображаться строка "Anonymous".

`<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`

## Задание 6

Написан скрипт, который при потере фокуса на инпуте (событие `blur`) проверяет его содержимое на правильное количество введённых символов.

`<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>`

Сколько символов должно быть в инпуте, указывается в его атрибуте `data-length`.

Если введено подходящее количество символов, то `border` инпута становится зелёным, если неправильное - красным.
Для добавления стилей, использованы CSS-классы `valid` и `invalid`, которые добавлены в исходные файлы задания.
`
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}`

## Задание 7

Написан скрипт, который реагирует на изменение значения `input#font-size-control` (событие input) и изменяет инлайн-стиль `span#text`, обновляя свойство `font-size`. В результате при перетаскивании ползунка будет меняться размер текста.

## Задание 8

Написан скрипт управления формой логина.

Обработка отправки формы `form.login-form` - по событию `submit`.
При отправке формы страница не перезагружается.
Если в форме есть незаполненные поля, выводится `alert` с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собираются значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы использовано свойство `elements`.
Выводится обьект с введенными данными в консоль и очищается значения полей формы методом `reset`.

## Задание 9

Написан скрипт, который изменяет цвета фона элемента `body` через инлайн стиль при клику на `button.change-color` и выводит значение цвета в `span.color`.

Для генерации случайного цвета используем функцию `getRandomHexColor`.

`function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}`

## Задание 10 

Написан скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в `input` и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создана функция `createBoxes(amount)`, которая принимает один параметр - число. Функция создает столько `<div>`, сколько указано в `amount` и добавляет их в `div#boxes`.

Размеры самого первого `<div>` - 30px на 30px.
Каждый элемент после первого - шире и выше предыдущего на 10px.
Все элементы имеют случайный цвет фона в формате HEX. Использована функция `getRandomHexColor` для получения цвета.

`function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}`

Создана функцию `destroyBoxes()`, которая очищает содержимое `div#boxes`, тем самым удаляя все созданные элементы.
