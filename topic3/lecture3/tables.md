# TABLES

After covering how to establish the basic structure of an HTML document, how to mark up text to give it meaning and structure, how to make links, and how to embed simple images on the page we will study how to markup tables. We’ll start out by reviewing how tables should be used, then learn the elements used to create them. Remember, this is all about semantic markup, so we’re going to focus on the markup that structures the content into tables, and we won’t be concerned with how the tables look.

<div class="page-break" style="page-break-before: always;"></div>

### HOW TO USE TABLES

HTML tables were created for instances when you need to add tabular material (data arranged into rows and columns) to a web page. Tables may be used to organize schedules, product comparisons, statistics, or other types of information. Note that “data” doesn’t necessarily mean numbers. A table cell may contain any sort of information, including numbers, text elements, and even images and multimedia objects.

In visual browsers, the arrangement of data in rows and columns gives readers an instant understanding of the relationships between data cells and their respective header labels. In this, lecture we will focus on HTML table elements used to semantically mark up rows and columns of data as described in the HTML specification.

<div class="page-break" style="page-break-before: always;"></div>

## MINIMAL TABLE STRUCTURE

Here is a small table with three rows and three columns that lists nutritional information.

| Menu Item           | Calories | Fat (g) |
| ------------------- | -------- | ------- |
| Chicken noodle soup | 120      | 2       |
| Caesar salad        | 400      | 26      |

Figure 1 reveals the structure of this table according to the HTML table model. All of the table’s content goes into cells that are arranged into rows. Cells contain either header information (titles for the columns, such as “Calories”) or data, which may be any sort of content.

![[fig1.png]]
**Figure 1**

Now let’s look at how those parts translate into elements

![[fig2.png]]
**Figure 2**

`Figure 2` shows the elements that identify the table (table), rows (`tr`, for “table row”), and cells (th, for “table headers,” and td, for “table data”). Cells are the heart of the table, because that’s where the actual content goes. The other elements just hold things together.

<div class="page-break" style="page-break-before: always;"></div>

What we don’t see are column elements. The number of columns in a table is implied by the number of cells in each row. This is one of the things that make HTML tables potentially tricky. Rows are easy if you want the table to have three rows, just use three `tr` elements. Columns are different. For a table with four columns, you need to make sure that every row has four `td` or `th` elements.

Written out in a source document, the markup for the table in figure looks like the following sample. It is common to stack the th and td elements in order to make them easier to find in the source. This does not affect how the browser renders them.

```html
<table>
  <tr>
    <th>Menu item</th>
    <th>Calories</th>
    <th>Fat (g)</th>
  </tr>
  <tr>
    <td>Chicken noodle soup</td>
    <td>120</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Caesar salad</td>
    <td>400</td>
    <td>26</td>
  </tr>
</table>
```
Remember, all the content must go in cells—that is, within td or th elements. You can put any content in a cell: text, a graphic, or even another table.

Start and end table tags identify the beginning and end of the tabular material. The table element may directly contain only some number of `tr` (row) elements, a caption and, optionally, the row and column group elements. The only thing that can go in the `tr` element is some number of td or th elements. In other words, there may be no text content within the table and `tr` elements that isn’t contained within a td or th.

Finally, the figure3 shows how the table would look in a simple web page, as displayed by default in a browser. What is worth noting is that tables always start on new lines by default in browsers.

![[fig3.png]]
**Figure 3**

Here is the source for another table. Can you tell how many rows and columns it will have when it is displayed in a browser?

```html
<table>
<tr>
<th>Burgers</th>
<td>Organic Grass-fed Beef</td>
<td>Black Bean Veggie</td>
</tr>
<tr>
<th>Fries</th>
<td>Hand-cut Idaho potato</td>
<td>Seasoned sweet potato</td>
</tr>
</table>
```
If you guessed that it’s a table with two rows and three columns, you are correct! Two tr elements create two rows; one th and two td elements in each row create three columns.

### TABLE HEADERS
As you can see in the previous figure, the text marked up as headers (th elements) is displayed differently from the other cells in the table (td elements). The difference, however, is not purely cosmetic. Table headers are important because they provide information or context about the cells in the row or column they precede. The th element may be handled differently than tds by alternative browsing devices. For example, screen readers may read the header aloud before each data cell (“Menu item: Caesar salad, Calories: 400, Fat-g: 26”).

In this way, headers are a key tool for making table content accessible. Don’t try to fake them by formatting a row of td elements differently than the rest of the table. Conversely, don’t avoid using th elements because of their default rendering (bold and centered). Instead, mark up the headers semantically and change the presentation later with a style rule.

### SPANNING CELLS
One fundamental feature of table structure is cell spanning, which is the stretching of a cell to cover several rows or columns. Spanning cells allows you to create complex table structures, but it has the side effect of making the markup a little more difficult to keep track of. It can also make it potentially more difficult for users with screen readers to follow.

You make a header or data cell span by adding the colspan or rowspan attributes.

#### Column Spans
Column spans, created with the colspan attribute in the td or th element, stretch a cell to the right to span over the subsequent columns (
Figure 4). Here a column span is used to make a header apply to two columns.

```html
<table>
<tr>
<th colspan="2">Fat</th>
</tr>
<tr>
<td>Saturated Fat (g)</td>
<td>Unsaturated Fat (g)</td>
</tr>
</table>
```

![[fig4.png]]
**Figure 4**

Notice in the first row (tr) that there is only one th element, while the second row has two td elements. The th for the column that was spanned over is no longer in the source; the cell with the colspan stands in for it. Every row should have the same number of cells or equivalent colspan values. For example, there are two td elements and the colspan value is 2, so the implied number of columns in each row is equal.

#### Row Spans
Row spans, created with the rowspan attribute, work just like column spans, but they cause the cell to span downward over several rows. In this example, the first cell in the table spans down three rows (Figure 5).
```html
<table>
<tr>
<th rowspan="3">Serving Size</th>
<td>Small (8oz.)</td>
</tr>
<tr>
<td>Medium (16oz.)</td>
</tr>
<tr>
<td>Large (24oz.)</td>
</tr>
</table>
```
![[fig5.png]]
**Figure 5**

Again, notice that the td elements for the cells that were spanned over (the first cells in the remaining rows) do not appear in the source. The `rowspan="3"` implies cells for the subsequent two rows, so no td elements are needed.

### TABLE ACCESSIBILITY
As a web designer, it is important that you always keep in mind how your site’s content is going to be used by visitors with impaired sight. It is especially challenging to make sense of tabular material by using a screen reader, but the HTML specification provides measures to improve the experience and make your content more understandable.

#### Describing Table Content
The most effective way to give sight-impaired users an overview of your table is to give it a title or description with the caption element. Captions display next to the table (generally, above it) and can be used to describe the table’s contents or provide hints on how it is structured.

When used, the caption element must be the first thing within the table element, as shown in this example, which adds a caption to the nutritional chart from earlier:

```html
<table>
<caption>Nutritional Information</caption>
<tr>
<th>Menu item</th>
<th>Calories</th>
<th>Fat (g)</th>
</tr>
<!-- table continues -->
</table>
```
The caption is displayed above the table by default, as shown in Figure 6, although you can use a style sheet property to move it below the table (`caption-side: bottom`).

![[fig6.png]]
**Figure 6**

#### Connecting Cells and Headers
We discussed headers briefly as a straightforward method for improving the accessibility of table content, but sometimes it may be difficult to know which header applies to which cells. For example, headers may be at the left or right edge of a row rather than at the top of a column. And although it may be easy for sighted users to understand a table structure at a glance, for users hearing the data as text, the overall organization is not as clear. The scope and headers attributes allow authors to explicitly associate headers and their respective content.

The `scope` attribute associates a table header with the row, column, group of rows (such as `tbody`), or column group in which it appears by using the values `row`, `col`, `rowgroup`, or `colgroup`, respectively. This example uses the `scope` attribute to declare that a header cell applies to the current row:

```html
<tr>
<th scope="row">Mars</th>
<td>.95</td>
<td>.62</td>
<td>0</td>
</tr>
```
Accessibility experts recommend that every th element contain a `scope` attribute to make its associated data explicitly clear.

### ROW AND COLUMN GROUPS
The sample tables we’ve been looking at so far have been stripped down to their bare essentials to make the structure clear while you’re learning how tables work. But tables in the real world are not always so simple. Check out the Figure 7, you can identify three groups of columns (one with headers, two with two columns each), and three groupings of rows (headers, data, and a footnote).


![[fig7.png]]
**Figure 7**

Conceptual table groupings like these are marked up with row group and column group elements that provide additional semantic structure and more “hooks” for styling or scripting. For example, the row and column groups in Figure 7 were styled with thicker borders to make them stand out visually.

#### Row Group Elements
You can describe rows or groups of rows as belonging to a header, footer, or the body of a table by using the `thead`, `tfoot`, and `tbody` elements, respectively. Some user agents (another word for a browser) may repeat the header and footer rows on tables that span multiple pages. For example, the head and foot rows may print on every page of a multipage table. Authors may also use these elements to apply styles to various regions of a table.

Row group elements may only contain one or more tr elements. They contain no direct text content. The thead element should appear first, followed by any number of tbody elements, followed by an optional tfoot.

This is the row group markup for the table in Figure 7 (td and th elements are hidden to save space):

```html
<table>
…
<thead>
<!-- headers in these rows-->
<tr></tr>
<tr></tr>
<tr></tr>
<thead>
<tbody>
<!-- data -->
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
</tbody>
<tfoot>
<!-- footnote -->
<tr></tr>
</tfoot>
</table>
```
#### Column Group Elements
As you’ve learned, columns are implied by the number of cells (td or th) in each row. You can semantically group columns (and assign id and class values) using the `colgroup` element. Column groups are identified at the start of the table, just after the caption if there is one, and they give the browser a little heads-up as to the column arrangement in the table. The number of columns a colgroup represents is specified with the span attribute. Here is the column group section at the beginning of the table in Figure 7:

```html
<table>
<caption>…</caption>
<colgroup></colgroup>
<colgroup span="2"></colgroup>
<colgroup span="2"></colgroup>
<!-- rest of table... -->
```
That’s all there is to it. If you need to access individual columns within a `colgroup` for scripting or styling, identify them with `col` elements. The previous column group section could also have been written like this:

```html
<colgroup></colgroup>
<colgroup>
<col class="start">
<col class="end">
</colgroup>
<colgroup>
<col class="start">
<col class="end">
</colgroup>
```
Note that the `colgroup` elements contain no content—they only provide an indication of semantically relevant column structure. The empty col elements are used as handles for scripts or styles, but are not required.
