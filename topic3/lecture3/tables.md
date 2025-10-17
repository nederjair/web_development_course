# TABLES

After covering how to establish the basic structure of an HTML document, how to mark up text to give it meaning and structure, how to make links, and how to embed simple images on the page we will study how to markup tables. We’ll start out by reviewing how tables should be used, then learn the elements used to create them. Remember, this is all about semantic markup, so we’re going to focus on the markup that structures the content into tables, and we won’t be concerned with how the tables look.

<div class="page-break" style="page-break-before: always;"></div>

### HOW TO USE TABLES

HTML tables were created for instances when you need to add tabular material (data arranged into rows and columns) to a web page. Tables may be used to organize schedules, product comparisons, statistics, or other types of information. Note that “data” doesn’t necessarily mean numbers. A table cell may contain any sort of information, including numbers, text elements, and even images and multimedia objects.

In visual browsers, the arrangement of data in rows and columns gives readers an instant understanding of the relationships between data cells and their respective header labels. In this, lecture we will focus on HTML table elements used to semantically mark up rows and columns of data as described in the HTML specification.

<div class="page-break" style="page-break-before: always;"></div>

## MINIMAL TABLE STRUCTURE

Here is a small table with three rows and three columns that lists nutritional information.

Menu Item            | Calories | Fat (g) 
 --                  | --       | --
Chicken noodle soup  | 120      | 2    
Caesar salad         | 400      | 26    


Figure 1 reveals the structure of this table according to the HTML table model. All of the table’s content goes into cells that are arranged into rows. Cells contain either header information (titles for the columns, such as “Calories”) or data, which may be any sort of content.

![[table1.png]]
**Figure 1**

Now let’s look at how those parts translate into elements

![[table2.png]]
**Figure 2**

`Figure 2` shows the elements that identify the table (table), rows (tr, for “table row”), and cells (th, for “table headers,” and td, for “table data”). Cells are the heart of the table, because that’s where the actual content goes. The other elements just hold things together.

<div class="page-break" style="page-break-before: always;"></div>


What we don’t see are column elements. The number of columns in a table is implied by the number of cells in each row. This is one of the things that make HTML tables potentially tricky. Rows are easy—if you want the table to have three rows, just use three tr elements. Columns are different. For a table with four columns, you need to make sure that every row has four td or th elements. (There’s more to the column story, which I cover in the section “Row and Column Groups” later in this chapter.)


