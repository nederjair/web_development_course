## Простые настройки CSS

1. Скопируйте и вставьте папку из предыдущей лабораторной работы и назовите её `lab_css`.

2. Откройте только что созданную папку `lab_css` с помощью `vscode`.

3. Создайте новый документ `html` с именем `cooking.html` с помощью `vscode`. Добавьте следующую разметку:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Cooking with Nada Surf</title>
    <link rel="stylesheet" href="css/cooking.css">
  </head>

  <body>
    <h1>Cooking with Daniel from Nada Surf</h1>

    <p>
      I had the pleasure of spending a crisp, Spring day in Portsmouth, NH
      cooking and chatting with Daniel Lorca of the band Nada Surf as he
      prepared a gourmet, sit-down dinner for 28 pals.
    </p>

    <p>
      When I first invited Nada Surf to be on the show, I was told that Daniel
      Lorca was the guy I wanted to talk to. Then Daniel emailed his response:
      "i'm way into it, but i don't want to talk about it, i wanna do it." After
      years of only having access to touring bands between their sound check and
      set, I've been doing a lot of <em>talking</em> about cooking with
      rockstars. To actually cook with a band was a dream come true.
    </p>

    <h2>Six-hour Salad</h2>

    <p><img src="salads.jpg" alt="Smoked tomato salads on plates" /></p>

    <p>
      Daniel prepared a salad of arugula, smoked tomatoes, tomato jam, and
      grilled avocado (it's as good as it sounds!). I jokingly called it "6-hour
      Salad" because that's how long he worked on it. The fresh tomatoes were
      slowly smoked over woodchips in the grill, and when they were softened,
      Daniel separated out the seeds which he reduced into a smoky jam. The
      tomatoes were cut into strips to put on the salads. As the day meandered,
      the avocados finally went on the grill after dark. I was on flashlight
      duty while Daniel checked for the perfect grill marks.
    </p>

    <p>
      I wrote up a streamlined adaptation of his recipe that requires
      <em>much</em> less time and serves 6 people instead of <em>five</em>times
      that amount.
    </p>

    <h2>The Main Course</h2>

    <p>
      In addition to the smoky grilled salad, Daniel served tarragon cornish
      hens with a cognac cream sauce loaded with chanterelles and grapes, and
      wild rice with grilled ramps (wild garlicky leeks). Dinner was served
      close to midnight, but it was a party so nobody cared.
    </p>

    <p>
      We left that night (technically, early the next morning) with full
      bellies, new cooking tips, and nearly 5 hours of footage. I'm considering
      renaming the show "Cooking with Nada Surf".
    </p>
  </body>
</html>
```

5. Создайте новую папку с именем `css`. В ней будут храниться все CSS-документы.

6. Внутри созданной папки (`css`) создайте новый документ `CSS` с именем `cooking.css`. Добавьте в документ следующие правила оформления:

```css
h1 {
  color: green;
}
p {
  font-size: large;
  font-family: sans-serif;
}
```

Сохраните файл и посмотрите на страницу в браузере. Вы должны заметить некоторые изменения (если ваш браузер уже использует шрифт без засечек, вы можете заметить только изменение размера).

7. Сделайте элемент h1 «серым» и посмотрите на него в браузере. Затем сделайте его «синим». Наконец, сделайте его «оранжевым».

8. Добавьте новое правило, которое также сделает элементы h2 оранжевыми.

9. Добавьте левое поле размером 100 пикселей к элементам абзаца (p), используя следующее объявление:

```css
margin-left: 100px;
```

10. Добавьте также левый отступ шириной 100 пикселей к заголовкам h2.

11. Добавьте оранжевую рамку шириной 1 пиксель к нижней части элемента h1, используя следующее объявление:

```css
border-bottom: 1px solid orange;
```

12. Переместите изображение к правому полю и разрешите тексту обтекать его с помощью свойства float. Сокращённое свойство margin, показанное в этом правиле, добавляет ноль пикселей сверху и снизу изображения и по 12 пикселей слева и справа.

```css
img {
float: right;
margin: 0 12px;
}
```

13. Добавьте текущую страницу в меню навигации (`nav`)

## Расширенные настройки с помощью CSS

### Создайте красивый макет

![[fig1.png]]

14. Создайте новый файл `html` с названием `bakery.html`. Добавьте следующую разметку и проверьте созданную страницу в браузере.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Black Goose Bakery</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/bakery.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Stint+Ultra+Expanded"
      rel="stylesheet"
    />
  </head>

  <body>
    <header>
      <nav>
        <ul>
          <li><a href="">Menu</a></li>
          <li><a href="">News</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <h1><img src="imgs/bgb_logo.png" alt="Black Goose Bakery" /></h1>
      <p>
        The delicious baked goods you love at Black Goose Bistro...now available
        to go!
      </p>
    </header>

    <main>
      <h2>Fresh from the Oven</h2>
      <h3>Breads</h3>
      <p>
        <img
          src="imgs/bread.png"
          alt="round loaf of bread on cutting board"
        />
        Our breads are made daily from highest-quality whole grain flour, water,
        salt, and yeast or sourdough starter. Simply and naturally, and never
        any preservatives. Patience is key to achieving the proper level of
        fermentation and baking each loaf to perfection. Available in whole
        grain, sourdough, olive loaf, classic rye, and potato-onion.
      </p>
      <p class="more"><a href="">Learn more about our baking process...</a></p>

      <h3>Muffins</h3>
      <p>
        <img src="imgs/muffin.png" alt="one chocolate chip muffin" /> Every
        day, we offer a large selection of muffins, including blueberry,
        multi-berry, bran, corn, lemon-poppyseed, and chocolate. Our muffins are
        made from scratch each day. Stop by to see our seasonal muffin flavors!
      </p>
      <p class="more">
        <a href="">Learn more about how we make our muffins...</a>
      </p>
    </main>

    <aside>
      <h2>Hours</h2>
      <p><span class="day">Monday:</span> 5am to 3pm</p>
      <p><span class="day">Tuesday:</span> 5am to 3pm</p>
      <p><span class="day">Wednesday:</span> 5am to 3pm</p>
      <p><span class="day">Thursday:</span> 5am to 3pm</p>
      <p><span class="day">Friday:</span> 5am to 3pm</p>
      <p><span class="day">Saturday:</span> 6am to 4pm</p>
      <p><span class="day">Sunday:</span> 6am to 4pm</p>
    </aside>

    <footer>
      <p>All content copyright &copy; 2017, Black Goose Bistro.</p>
        <div id="award">
          <img src="imgs/award.png" alt="Farmers' Market Award" />
        </div>
    </footer>
  </body>
</html>

```

15. Добавьте блок div вокруг всех элементов контента (от заголовка до подвала) и присвойте ему идентификатор «container». Сохраните HTML-файл.

```html
<body>
<div id="container">
<header>…</header>
<main>…</main>
<aside>…</aside>
<footer>…</footer>
</div>
</body>
```

16. В папке `css` создайте новый документ `CSS` с именем `bakery.css`. В таблице стилей (`bakery.css`) добавьте новый стиль, чтобы новый блок div отображался в виде сетки:

```css
#container {
  display: grid;
}
```

17. Сначала разберёмся со строками. На РИСУНКЕ 1 показано, что для создания макета нам понадобится три строки. Установите для высоты первой строки значение «автоматически», чтобы она учитывала настройки высоты элементов внутри неё и автоматически подстраивалась под содержимое. Во второй строке много текста, поэтому снова используйте значение «автоматически», чтобы гарантировать, что полоса будет расширяться как минимум настолько, насколько это необходимо для размещения текста. Для третьей строки высоты 5em должно быть достаточно, чтобы вместить несколько строк текста с комфортным пространством:

```css
#container {
  display: grid;
  grid-template-rows: auto auto 5em;
}
```

18. Теперь можно настроить полосы столбцов. Похоже, нам понадобится всего две: одна для основного контента и одна для боковой панели с часами. Я использовал значение minmax(), чтобы гарантировать, что текстовая колонка никогда не станет уже 25em, но её можно расширить, заполнив всё доступное пространство в браузере (1fr). Для колонки с часами мне подходит ширина 16em. Можете попробовать другие значения.

```css
#container {
display: grid;
grid-template-rows: auto auto 5em;
grid-template-columns: minmax(25em, 1fr) 16em;
}
```

19. Затем дайте имена областям сетки, чтобы мы могли легко и эффективно размещать в них элементы. Используйте свойство grid-template-areas для присвоения имен ячейкам сетки:

```css
#container {
  display: grid;
  grid-template-rows: auto auto 5em;
  grid-template-columns: minmax(25em, 1fr) 16em;
  grid-template-areas:
    "banner banner"
    "main hours"
    "footer footer";
}
```

20. Разместите элементы контента на своих местах. Создайте правило стиля для каждого элемента сетки и укажите его местоположение с помощью свойства grid-area:

```css
header {
  grid-area: banner;
}
main {
  grid-area: main;
}
aside {
  grid-area: hours;
}
footer {
  grid-area: footer;
}
```

сохраните файл и просмотрите страницу в браузере.

### Улучшить внешний вид страницы

22. Установите цвет фона и шрифт навигационного меню, а также другие изменения, используя следующие правила стиля навигации.

```css
/* nav styles */
nav, footer {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #783F27;
}
nav ul li a:link, nav ul li a:visited {
  color: #F9AB33;
}
nav ul li a:focus, nav ul li a:hover, nav ul li a:active {
  color: #fff;
}
nav ul {
  margin: 0;
}
nav ul li {
   font-size: .8em;
  text-transform: uppercase;
  letter-spacing: .2em;
}```

23. Improve the links appearence

```css
/* link styles */
a:link, a:visited { color: #DC6903; }
a:focus, a:hover, a:active { color: #F9AB33; }
a {
  text-decoration: none;
  border-bottom: 1px dotted;
  padding-bottom: .2em;
}
```

24. Примените стили заголовка, проверьте изменения в браузере. Меню навигации центрируется, добавляется фоновое изображение (и другие важные изменения).

```css
/* header styles */
header {
  color: white;
  background:  url(../imgs/croissants_banner.jpg) no-repeat center center;
  background-size: cover; 
  text-align: center;
  height: 15em;
}
header p {
  font-style: italic;
  font-size: 1.2em;
  margin-top: -12px;
}
header h1 {
  margin-top: 1.5em;
}
```
25. Добавьте следующие общие правила улучшения

```css
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 100%;
  background-color: lightgray;
  margin: 0;
}
/* main "products" styles */
main {
  font-family: 'Stint Ultra Expanded', Georgia, serif;
  background-color: white;
  line-height: 1.8em;
  color: #555;
  padding: 1em;
  border: double 4px #EADDC4;
  border-radius: 25px;
  margin: 2.5%;
}
h3 {
  text-transform: uppercase;
  letter-spacing: .2em;
  color: #7A0002;
  border-top: 1px solid;
  border-left: 3px solid;
  padding-left: 1em;
  margin-top: 2.5em;
}
p.more {
  font-family: verdana, sans-serif;
  text-transform: uppercase; 
  font-size: .8em;
  clear: left;
}
main img {
  float: left;
  margin: 0 1em 1em 0;
}

img[src*="bread"] {
  -webkit-shape-outside: ellipse(130px 95px at 50% 50%);
  shape-outside: ellipse(130px 95px at 50% 50%);
}

img[src*="muffin"] {
  margin-left: 50px;
  -webkit-shape-outside: circle(125px);  
  shape-outside: circle(125px);
  -webkit-shape-outside: polygon(0px 0px, 197px 0px, 241px 31px, 241px 68px, 226px 82px, 219px 131px, 250px 142px, 250px 158px, 0px 158px);
  shape-outside: polygon(0px 0px, 197px 0px, 241px 31px, 241px 68px, 226px 82px, 219px 131px, 250px 142px, 250px 158px, 0px 158px);  
}

/* aside "hours" styles */
aside {
  background: url(images/scallop.png) repeat-y left top;
  background-color: #F6F3ED;
  padding: 1em;
  padding-left: 45px;
  border-top-right-radius: 25px;
  margin: 1em 2.5% 0 10%;
}
/* misc styles */
footer {
  color: #EADDC4;
  text-align: center;
  font-size: .8em;
  padding: 1em;
}
#award { 	
  position: fixed; 	
  top: 30px; 	
  left: 50px;
}
h2 {
  font-family: 'Stint Ultra Expanded', Georgia, serif;
}
.day {
  color: #783F27;
  font-family: verdana, sans-serif;
  font-size: .8em;
  text-transform: uppercase;
}
```

### Улучшить навигационное меню

26. Добавьте следующие правила оформления в файл `bakery.css`, чтобы убрать круги из неупорядоченного списка.

```css
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```
Сохраните документ и посмотрите на изменения в браузере.

27. Превратите элемент ul во flexbox, установив для его свойства display значение flex. В результате все элементы li станут flex-элементами. Поскольку нам нужны строки без переносов, значения по умолчанию для flex-direction и flex-wrap вполне подходят, поэтому эти свойства можно опустить:

```css
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Сохраните документ и посмотрите на изменения в браузере. Вы увидите, что ссылки выстроились в ряд, что является улучшением.

28. Теперь мы можем поработать над внешним видом ссылок. Начнём с того, что сделаем элементы «a» в элементах списка навигации блочными, а не строчными. Задайте им скруглённые границы шириной 1 пиксель, отступы внутри границ (0,5em сверху и снизу, 1em слева и справа) и поля 0,5em, чтобы обеспечить им пространство и открыть коричневую панель навигации.

```css
nav ul li a {
  display: block;
  border: 1px solid;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: 0.5em;
}
```

29. Мы хотим, чтобы навигационное меню было центрировано по ширине раздела nav, для этого добавьте следующее объявление для элемента nav ul:

```css
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
```

30. Добавьте текущую страницу (`bakery.html`) в меню навигации (`nav`).
