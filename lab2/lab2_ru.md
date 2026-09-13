# Лабораторная работа 2
## Подготовка
1. Создайте новую папку с названием `lab2`
2. Вставьте файл `index.html` и изображение `goose.png` из предыдущей лабораторной работы (лабораторная работа 1) в только что созданную папку `lab2`
![[Capture1_.PNG]]
3. Откройте папку `lab2` с помощью `vscode`
![[Capture2_.PNG]]
![[Capture3_.PNG]]
4. Создайте новый файл с названием `news.html` внутри папки `lab2`
![[Capture4_.PNG]]
![[Capture5_.PNG]]

## Основная цель
Теперь, когда вы познакомились с текстовыми элементами, вы можете применить их на практике, разметив страницу новостей (News) для сайта Black Goose Bistro. Возьмите исходный текст; как только он будет у вас, следуйте инструкциям, приведенным после него.

```html
The Black Goose Bistro News
Home
Menu
News
Contact
Summer Menu Items
posted by BGB, June 18, 2017
Our chef has been busy putting together the perfect menu for the summer
months. Stop by to try these appetizers and main courses while the days
are still long.
Appetizers
Black bean purses
Spicy black bean and a blend of Mexican cheeses wrapped in sheets of
phyllo and baked until golden. $3.95
Southwestern napoleons with lump crab -- new item!
Layers of light lump crab meat, bean and corn salsa, and our handmade
flour tortillas. $7.95
Main courses
Shrimp sate kebabs with peanut sauce
Skewers of shrimp marinated in lemongrass, garlic, and fish sauce then
grilled to perfection. Served with spicy peanut sauce and jasmine rice.
$12.95
Jerk rotisserie chicken with fried plantains -- new item!
Tender chicken slow-roasted on the rotisserie, flavored with spicy and
fragrant jerk sauce and served with fried plantains and fresh mango.
$12.95
Low and Slow
posted by BGB, November 15, 2016
<p>This week I am <em>extremely</em> excited about a new cooking
technique called <dfn><i>sous vide</i></dfn>. In <i>sous vide</i>
cooking, you submerge the food (usually vacuum-sealed in plastic) into a
water bath that is precisely set to the target temperature you want the
food to be cooked to. In his book, <cite>Cooking for Geeks</cite>, Jeff
Potter describes it as <q>ultra-low-temperature poaching.</q></p>
<p>Next month, we will be serving <b><i>Sous Vide</i> Salmon with Dill
Hollandaise</b>. To reserve a seat at the chef table, contact us before
<time datetime="20161130">November 30</time>.</p>
Location: Baker’s Corner, Seekonk, MA
Hours: Tuesday to Saturday, 11am to 11pm
All content copyright 2017, Black Goose Bistro
```

Получившаяся страница должна выглядеть примерно так:

![[result.PNG]]

## Инструкции

1. Начните с добавления объявления `DOCTYPE`, чтобы сообщить браузерам, что это документ HTML5.

2. Сначала добавьте все элементы структуры документа (html, head, meta, title и body). Задайте документу заголовок «The Black Goose Bistro News».

3. Первое, что мы сделаем, это определим заголовок верхнего уровня и список ссылок как `header` (шапку) документа, обернув их в элемент `header` (не забудьте закрывающий тег). Внутри `header` заголовок должен быть `h1`, а список ссылок — неупорядоченным списком (`ul`). Придайте списку больше смысла, определив его как основную навигацию по сайту (`nav`).

![[Capture1.PNG]]

4. На странице новостей есть два поста с заголовками «Summer Menu Items» и «Low and Slow». Разметьте каждый из них как `article`.
![[Capture2.PNG]]
![[Capture3.PNG]]

5. Теперь мы приведем в порядок первую статью. Давайте создадим для этой статьи заголовок (header), который содержит заголовок (`h2` на этот раз, потому что мы спустились ниже в иерархии документа) и информацию о публикации (`p`). Определите дату публикации статьи с помощью элемента `time`.
![[Capture4.PNG]]

6. Содержимое после заголовка (header) — это простой абзац. Однако в меню происходят некоторые интересные вещи. Оно разделено на два концептуальных раздела (Appetizers и Main Courses), поэтому разметьте их как элементы `section`. Будьте внимательны: закрывающий тег секции (`</section>`) должен стоять перед закрывающим тегом статьи (`</article>`), чтобы элементы были вложены правильно и не перекрывались. Наконец, давайте идентифицируем разделы с помощью атрибутов `id`. Назовите первый «appetizers», а второй «maincourses».
![[Capture5.PNG]]
![[Capture6.PNG]]

7. Теперь, когда наши разделы на месте, мы можем разметить содержимое. Мы дошли до `h3` для заголовков в каждом разделе. Выберите наиболее подходящие элементы списка для описания названий пунктов меню и их описаний. Разметьте списки и каждый элемент внутри списков.
![[Capture7.PNG]]
![[Capture8.PNG]]

8. Теперь мы можем добавить несколько мелких деталей. Классифицируйте каждую цену как «price» с помощью элементов span.
![[Capture9.PNG]]

9. Два из блюд являются новинками. Замените двойные дефисы символом длинного тире (em dash) и разметьте «new item!» как «строго важное» (с помощью элемента сильного выделения). Классифицируйте название каждого нового блюда как «newitem» (используйте существующий элемент dt; на этот раз нет необходимости добавлять span). Это позволит нам обращаться к заголовкам меню с классом «newitem» и стилизовать их иначе, чем другие пункты меню.
![[Capture10.PNG]]

10. На этом с первой статьей всё. Вторая статья уже по большей части размечена по умолчанию, но вам следует разметить шапку (header) соответствующим заголовком и информацией о дате публикации.
![[Capture11.PNG]]

11. Теперь сделайте оставшееся содержимое, относящееся ко всей странице, подвалом (`footer`). Разметьте каждую строку содержимого внутри `footer` как абзац.
![[Capture12.PNG]]

12. Придайте информации о местоположении и часах работы некоторый контекст, поместив их в `div` с именем «about». Сделайте так, чтобы метки «Location» и «Hours» появлялись на отдельной строке, добавив после них разрывы строк (`br`). Разметьте часы работы с помощью элемента `time` (вам не нужны части с датой или часовым поясом).
![[Capture13.PNG]]

13. Наконец, информация об авторских правах обычно является «мелким шрифтом» в документе, поэтому разметьте ее соответствующим образом. В качестве последнего штриха добавьте символ авторского права после слова «copyright» с помощью клавиатуры или символьной сущности `&copy;`.
![[Capture14.PNG]]
