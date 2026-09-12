# Лабораторная работа 2
## Подготовка
1. Создайте новую папку с названием `lab2`
2. Скопируйте файл `index.html` и изображение `goose.png` из предыдущей лабораторной работы (лабораторная работа 1) в только что созданную папку `lab2`
![[Capture1.PNG]]
3. Откройте папку `lab2` в `vscode`
![[Capture2.PNG]]
![[Capture3.PNG]]
4. Создайте новый файл с названием `news.html` внутри папки `lab2`
![[Capture4.PNG]]
![[Capture5.PNG]]

## Основная цель
Теперь, когда вы познакомились с текстовыми элементами, вы можете применить их на практике, разметив страницу новостей для сайта Black Goose Bistro. Возьмите исходный текст, а затем следуйте приведённым после него инструкциям.

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
Location: Baker's Corner, Seekonk, MA
Hours: Tuesday to Saturday, 11am to 11pm
All content copyright 2017, Black Goose Bistro
```

Итоговая страница должна выглядеть примерно так:

![[result.PNG]]


## Инструкции


1. Начните с добавления объявления `DOCTYPE`, чтобы сообщить браузерам, что это документ HTML5.

2. Добавьте сначала все структурные элементы документа (html, head, meta, title и body). Задайте документу заголовок «The Black Goose Bistro News».

3. Первым делом определим заголовок верхнего уровня и список ссылок как `header` документа, обернув их в элемент `header` (не забудьте закрывающий тег). Внутри `header` заголовок должен быть оформлен как `h1`, а список ссылок — как маркированный список (`ul`). Придайте списку больше смысла, определив его как основную навигацию сайта (`nav`).

4. На странице новостей есть два поста с заголовками «Summer Menu Items» и «Low and Slow». Разметьте каждый из них как `article`.

5. Теперь приведём в порядок первую статью. Создадим для неё заголовок (`header`), содержащий заголовок (`h2` — на этот раз, поскольку мы спустились на уровень ниже в иерархии документа) и информацию о публикации (`p`). Обозначьте дату публикации статьи с помощью элемента `time`.

6. Содержимое после заголовка представляет собой обычный абзац. Однако с меню всё интереснее. Оно разделено на два смысловых раздела (Appetizers и Main Courses), поэтому оформите их как элементы `section`. Будьте внимательны, чтобы закрывающий тег последнего раздела (`</section>`) стоял перед закрывающим тегом статьи (`</article>»), чтобы элементы были вложены правильно и не пересекались. Наконец, обозначьте разделы с помощью атрибутов `id`. Назовите первый «appetizers», а второй — «maincourses».

7. Теперь, когда разделы на месте, можно разметить содержимое. Для заголовков внутри каждого раздела мы спускаемся до `h3`. Выберите наиболее подходящие элементы списков для описания названий блюд и их описаний. Разметьте списки и каждый элемент внутри них.

8. Теперь добавим несколько деталей. Обозначьте каждую цену классом «price» с помощью элементов span.

9. Два блюда являются новинками. Замените двойные дефисы на символ длинного тире и разметьте фразу «new item!» как «особо важную» (strongly important). Обозначьте название каждого нового блюда классом «newitem» (используйте существующий элемент dt; добавлять span в этом случае не нужно). Это позволит применять стили к названиям новых блюд отдельно от остальных пунктов меню.

10. С первой статьёй разобрались. Вторая статья уже почти размечена по умолчанию, но вам нужно оформить заголовок с соответствующим уровнем заголовка и информацией о дате публикации.

11. Теперь оформите оставшееся содержимое, относящееся ко всей странице, как `footer`. Разметьте каждую строку содержимого внутри `footer` как отдельный абзац.

12. Добавьте контекст информации о местоположении и часах работы, поместив их в `div` с названием «about». Сделайте так, чтобы подписи «Location» и «Hours» располагались на отдельной строке, добавив после них разрывы строк (`br`). Разметьте часы работы с помощью элемента `time` (дата и часовой пояс не нужны).

13. Наконец, информация об авторских правах обычно оформляется «мелким шрифтом» в документе, поэтому разметьте её соответствующим образом. В качестве завершающего штриха добавьте символ авторского права после слова «copyright», используя клавиатуру или символьную сущность `&copy;`.
