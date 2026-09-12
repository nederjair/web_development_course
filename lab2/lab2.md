# Laboratory work 2
## Preparations
1. Make a new folder called `lab2`
2. Paste the `index.html` file and `goose.png` image of the previous laboratory work (laboratory work 1) in the just created folder `lab2`
![[Capture1.PNG]]
3. Open the  folder `lab2` with `vscode`
![[Capture2.PNG]]
![[Capture3.PNG]]
4. Create a new file called `news.html` inside the `lab2` folder
![[Capture4.PNG]]
![[Capture5.PNG]]

## Main Goal
Now that you’ve been introduced to the text elements, you can put them to work by marking up the News page for the Black Goose Bistro site. Get the starter text, once you have the text, follow the instructions listed after it.

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

The resulting page is should be something like this:

![[result.PNG]]


## Instructions


1. Start by adding the `DOCTYPE` declaration to tell browsers this is an HTML5 document.

2. Add all the document structure elements first (html, head, meta, title, and body). Give the document the title “The Black Goose Bistro News.”

3. The first thing we’ll do is identify the top-level heading and the list of links as the `header` for the document by wrapping them in a `header` element (don’t forget the closing tag). Within the `header`, the headline should be an `h1` and the list of links should be an unordered list (`ul`). Give the list more meaning by identifying it as the primary navigation for the site (`nav`).

4. The News page has two posts titled “Summer Menu Items” and “Low and Slow.” Mark up each one as an `article`.

5. Now we’ll get the first article into shape. Let’s create a header for this article that contains the heading (`h2` this time because we’ve moved down in the document hierarchy) and the publication information (`p`). Identify the publication date for the article with the `time` element.

6. The content after the header is a simple paragraph. However, the menu has some interesting things going on. It is divided into two conceptual sections (Appetizers and Main Courses), so mark those up as `section` elements. Be careful that the final closing section tag (`</section>`) appears before the closing article tag (`</article>`) so the elements are nested correctly and don’t overlap. Finally, let’s identify the sections with `id` attributes. Name the first one “appetizers” and the second “maincourses”.

7. With our sections in place, now we can mark up the content. We’re down to `h3` for the headings in each section. Choose the most appropriate list elements to describe the menu item names and their descriptions. Mark up the lists and each item within the lists.

8. Now we can add a few fine details. Classify each price as “price” using span elements.

9. Two of the dishes are new items. Change the double hyphens to an em dash character and mark up “new item!” as “strongly important.” Classify the title of each new dish as “newitem” (use the existing dt element; there is no need to add a span this time). This allows us to target menu titles with the “newitem” class and style them differently than other menu items.

10. That takes care of the first article. The second article is already mostly marked up by default, but you should mark up the header with the appropriate heading and publication date information.

11. Now make the remaining content that applies to the whole page a `footer`. Mark each line of content within the `footer` as a paragraph.

12. Give the location and hours information some context by putting them in a `div` named “about.” Make the labels “Location” and “Hours” appear on a line by themselves by adding line breaks (`br`) after them. Mark up the hours with the `time` element (you don’t need the date or time zone portions).

13. Finally, copyright information is typically “small print” on a document, so mark it up accordingly. As the final touch, add a copyright symbol after the word “copyright” using the keyboard or the `&copy`; character entity.
