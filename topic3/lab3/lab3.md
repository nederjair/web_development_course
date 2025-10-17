# Laboratory work 3

Your task is to write the source document (html file) for the table shown in the `figure 1`.

![[table3.png]]
**Figure 1**

1. First, make a copy of your root folder used in the previous laboratory work, name it `lab3`.

2. Open the just created `lab3` folder with `vscode`.

3. Create a new document `table.html` in the root folder using `vscode` and set up its overall structure (`DOCTYPE`, `html`, `head`, `title`, and `body` elements).

4. Next, in order to make the boundaries of the cells and table clear when you check your work, I’m going to have you add some simple style sheet rules to the document. Don’t worry about understanding exactly what’s happening here (although it’s fairly intuitive); just insert this style element in the head of the document exactly as you see it here:

```html
<head>
<title> Lab3 Tables</title>
<style>
td, th { border: 1px solid #CCC; }
table { border: 1px solid black; }
</style>
</head>
```

5. Start building the table. Start by setting up the table and adding as many empty row elements as I’ll need for the final table as placeholders, as shown here. You can tell from the `figure 1` that there are five rows in this table, put the markup text inside the `body` element:

```html
<table>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
</table>
```
6. Start with the top row, and fill in the `th` and `td` elements from left to right, including any row or column spans as necessary. I’ve added the first row.

```html
      <tr>
        <th rowspan="2"></th>
      </tr>
```

7. The cell in the second column of the first row spans over the width of two columns, so it gets a `colspan` attribute:

```html
      <tr>
        <th rowspan="2"></th>
        <th colspan="2">A common header for two spans</th>
      </tr>
```

8. The cell in the fourth column also spans down two rows:

```html
      <tr>
        <th rowspan="2"></th>
        <th colspan="2">A common header for two spans</th>
        <th rowspan="2">Header 3</th>
      </tr>
```

9. Now it’s your turn. Continue filling in the th and td elements for the remaining four rows of the table. Here’s a hint: the first and last cells in the second row have been spanned over. Also, if it’s bold in the example, make it a header.

10. To complete the content, add the title over the table by using the `caption` element.

11. Use the scope attribute to make sure that the Thing A, Thing B, and Thing C headers are associated with their respective rows.

12. Finally, give the table row and column groups for greater sematic clarity. There is no `tfoot` in this table. There are two column groups: one column for headers, the rest for data. Use the `span` attribute (no need for individual column identification).

13. Save your work and open the file in a browser. The table should look just like the one on this page (`figure 1`). If not, go back and adjust your markup. If you’re stumped, the final markup for this exercise is provided in the materials folder.

14. Add the just created table to the site navigation (`nav` element) as a link, name it `statistics`
