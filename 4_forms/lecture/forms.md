# Forms

It didn’t take long for the web to shift from a network of pages to read to a place where you go to get things done—making purchases, booking plane tickets, signing petitions, searching a site, posting a tweet…the list goes on! Web forms handle all of these interactions.

In fact, in response to this shift from page to application, `HTML5` introduced a bonanza of new form controls and attributes that make it easier for users to fill out forms and for developers to create them. Tasks that have traditionally relied on `JavaScript` may be handled by markup and native browser behavior alone. HTML5 introduces a number of new form-related elements, new input types, and many new attributes. Some of these features are waiting for browser implementation to catch up, so it will be noted which controls may not be universally supported.

this lecture introduces web forms, how they work, and the markup used to create them. The importance of web form design will be briefly discussed.

## HOW FORMS WORK
There are two parts to a working form. The first part is the form that you see on the page itself that is created using HTML markup. Forms are made up of buttons, input fields, and drop-down menus (collectively known as form controls) used to collect information from the user. Forms may also contain text and other elements.

The other component of a web form is an application or script on the server that processes the information collected by the form and returns an appropriate response. It’s what makes the form work. In other words, posting an HTML document with form elements isn’t enough. Web applications and scripts require programming know-how that is beyond the scope of this course.

### From Data Entry to Response
If you are going to be creating web forms, it is beneficial to understand what is happening behind the scenes. This example traces the steps of a transaction using a simple form that gathers names and email addresses for a mailing list; however, it is typical of the process for many forms.

1. Your visitor—let’s call her Sally—opens the page with a web form in the browser window. The browser sees the form control elements in the markup and renders them with the appropriate form controls on the page, including two text-entry fields and a Submit button (shown in FIGURE 9-1)

2. Sally would like to sign up for this mailing list, so she enters her name and email address into the fields and submits the form by hitting the Submit button.

3. The browser collects the information she entered, encodes it, and sends it to the web application on the server.

4. The web application accepts the information and processes it (that is, does whatever it is programmed to do with it). In this example, the name and email address are added to a mailing list database.

5. The web application also returns a response. The kind of response sent back depends on the content and purpose of the form. Here, the response is a simple web page saying thank you for signing up for the mailing list. Other applications might respond by reloading the form page with updated information, by moving the user on to another related form page, or by issuing an error message if the form is not filled out correctly, to name only a few examples.

6. The server sends the web application’s response back to the browser, where it is displayed. Sally can see that the form worked and that she has been added to the mailing list.

![[fig1.png]]

Forms are added to web pages with the form element. The form element is a container for all the content of the form, including some number of form controls, such as text-entry fields and buttons. It may also contain block elements (h1, p, and lists, for example). However, it may not contain another form element.

This sample source document contains a form similar to the one shown in FIGURE 9-1:

```html
<!DOCTYPE html>
<html>
<head>
<title>Mailing List Signup</title>
<meta charset="utf-8">
</head>
<body>
<h1>Mailing List Signup</h1>
<form action="/mailinglist.php" method="POST">
<fieldset>
<legend>Join our email list</legend>
<p>Get news about the band such as tour dates and special MP3
releases sent to your own in-box.</p>
<ol>
<li><label for="firstlast">Name:</label>
<input type="text" name="fullname" id="firstlast"></li>
<li><label for="email">Email:</label>
<input type="text" name="email" id="email"></li>
</ol>
<input type="submit" value="Submit">
</fieldset>
</form>
</body>
</html>
```
In addition to being a container for form control elements, the form element has some attributes that are necessary for interacting with the form processing program on the server. Let’s take a look at each.

### The action attribute
The action attribute provides the location (URL) of the application or script that will be used to process the form. The action attribute in this example sends the data to a script called mailinglist.php:

```html
<form action="/mailinglist.php" method="POST">...</form>
```
The .php suffix indicates that this form is processed by a script written in the PHP scripting language, but web forms may be processed by any of the following technologies:

- PHP (.php) is an open source scripting language most commonly used with the Apache web server. It is the most popular and widely supported forms processing option.

- Microsoft ASP (Active Server Pages; .asp) is a programming environment for the Microsoft Internet Information Server (IIS).

- Microsoft’s ASP.NET (Active Server Page; .aspx) is a newer Microsoft language that was designed to compete with PHP.
- Ruby on Rails. Ruby is the programming language that is used with the Rails platform. Many popular web applications are built with it.
- JavaServer Pages (.jsp) is a Java-based technology similar to ASP.
- Python is a popular scripting language for web and server applications.

There are other form-processing options that may have their own suffixes or none at all (as is the case for the Ruby on Rails platform).

### The method Attribute
The method attribute specifies how the information should be sent to the server. Let’s use this data gathered from the sample form in FIGURE 9-1 as an example.

```bash
fullname = Sally Strongarm
email = strongarm@example.com
```
When the browser encodes that information for its trip to the server, it looks like this:

```bash
fullname=Sally+Strongarm&email=strongarm%40example.com
```
There are only two methods for sending this encoded data to the server: POST or GET, indicated by the method attribute in the form element. The method is optional and will default to GET if omitted. We’ll look at the difference between the two methods in the following sections of this lecture. Our example uses the POST method, as shown here:

```html
<form action="/mailinglist.php" method="POST">...</form>
```

### The GET method
With the GET method, the encoded form data gets tacked right onto the URL sent to the server. A question mark character separates the URL from the following data, as shown here:
```bash
get http://www.bandname.com/mailinglist.php?name=Sally+Strongarm&email= → strongarm%40example.com
```
GET is inappropriate if the form submission performs an action, such as deleting something or adding data to a database, because if the user goes back, it gets submitted again.

### The POST method
When the form’s method is set to POST, the browser sends a separate server request containing some special headers followed by the data. In theory, only the server sees the content of this request, and thus it is the best method for sending secure information such as a home address or other personal information. In practice, make sure HTTPS is enabled on your server so the user’s data is encrypted and inaccessible in transit. 

The POST method is also preferable for sending a lot of data, such as a lengthy text entry, because there is no character limit as there is for GET.

The GET method is appropriate if you want users to be able to bookmark the results of a form submission (such as a list of search results). Because the content of the form is in plain sight, GET is not appropriate for forms with private personal or financial information. In addition, GET may not be used when the form is used to upload a file.

In this course, we’ll stick with the more prevalent POST method. Now that we’ve gotten through the technical aspects of the form element, let’s turn our attention to form controls.

## VARIABLES AND CONTENT
Web forms use a variety of controls that allow users to enter information or choose between options. Control types include various text-entry fields, buttons, menus, and a few controls with special functions. They are added to the document with a collection of form control elements that we’ll be examining one by one.

As a web designer, you need to be familiar with control options to make your forms easy and intuitive to use. It is also useful to have an idea of what form controls are doing behind the scenes.

### The name attribute
The job of each form control is to collect one bit of information from a user. In the previous form example, text-entry fields collect the visitor’s name and email address. To use the technical term, “fullname” and “email” are two variables collected by the form. The data entered by the user (“Sally Strongarm” and “strongarm@example.com”) is the value or content of the variables.

The name attribute provides the variable name for the control. In this example, the text gathered by a textarea element is defined as the “comment” variable:

```html
<textarea name="comment" rows="4" cols="45" placeholder="Leave us a comment."></textarea>
```
When a user enters a comment in the field (“This is the best band ever!”), it would be passed to the server as a name/value (variable/content) pair like this: 

```bash
comment=This+is+the+best+band+ever%21 
```

All form control elements must include a name attribute so the form processing application can sort the information. You may include a name attribute for submit and reset button elements, but they are not required, because they have special functions (submitting or resetting the form) not related to data collection.

### Naming Your Variables
You can’t just name controls willy-nilly. The web application that processes the data is programmed to look for specific variable names. If you are designing a form to work with a preexisting application or script, you need to find out the specific variable names to use in the form so they are speaking the same language. You can get the variable names from the instructions provided with a ready-to-use script on your server, your system administrator, or the programmer you are working with.

If the script or application will be created later, be sure to name your variables simply and descriptively and to document them well. In addition, to avoid confusion, you are advised to name each variable uniquely—that is, don’t use the same name for two variables (however, there may be exceptions for which it is desirable). You should also avoid putting character spaces in variable names. Use an underscore or hyphen instead.

We’ve covered the basics of the form element and how variables are named. Now we can get to the real meat of form markup: the controls.

## THE GREAT FORM CONTROL ROUNDUP
We will deal with the markup that adds form controls to the page. This section introduces the elements used to create the following:

- Text-entry controls
- Specialized text-entry controls
- Submit and reset buttons
- Radio and checkbox buttons
- Pull-down and scrolling menus
- File selection and upload control
- Hidden controls
- Dates and times
- Numerical controls
- Color picker control

As you will see, the majority of controls are added to a form via the input element. The functionality and appearance of the input element changes based on the value of the type attribute in the tag. In HTML5.2, there are twenty-two types of input controls. We’ll take a look at them all.

### Text-Entry Controls
One of the most common web form tasks is entering text information. Which element you use to collect text input depends on whether users are asked to enter a single line of text (input) or multiple lines (textarea).

Be aware that if your form has text-entry fields, it needs to use the secure HTTPS protocol to protect the user-entered content while their data is in transit to the server.

#### Single-line text field
One of the most straightforward form input types is the text-entry field for entering a single word or line of text. In fact, it is the default input type, which means it is what you’ll get if you forget to include the type attribute or include an unrecognized value. Add a text input field to a form by inserting an input element with its type attribute set to text, as shown here and in FIGURE 9-3:

```html
<li><label>Favorite color: <input type="text" name="favcolor" value="Red" maxlength="50"></label></li>
```
![[fig3.png]]

There are a few attributes in there that need to be to point out:

**name** 
The name attribute is required for indicating the variable name.

**value** 
The value attribute specifies default text that appears in the field when the form is loaded. When you reset a form, it returns to this value. The value of the value attribute gets submitted to the server, so in this example, the value “Red” will be sent with the form unless the user changes it.
As an alternative, you could use the placeholder attribute to provide a hint of what to type in the field, such as “My favorite color”. The value of placeholder is not submitted with the form, and is purely a user interface enhancement.

**maxlength, minlength**
By default, users can type an unlimited number of characters in a text field regardless of its size (the display scrolls to the right if the text exceeds the character width of the box). You can set a maximum character limit using the maxlength attribute if the form-processing program you are using requires it. The minlength attribute specifies the minimum number of characters.

**size** 
The size attribute specifies the length of the input field in number of visible characters. It is more common, however, to use style sheets to set the size of the input area. By default, a text input widget displays at a size that accommodates 20 characters.

#### Multiline text-entry field
At times, you’ll want your users to be able to enter more than just one line of text. For these instances, use the textarea element, which is replaced by a multiline, scrollable text entry box when displayed by the browser (FIGURE 9-3).

Unlike the empty input element, you can put content between the opening and closing tags in the textarea element. The content of the textarea element shows up in the text box when the form is displayed in the browser. It also gets sent to the server when the form is submitted, so carefully consider what goes there.

```html
<p><label>Official contest entry: <br>
<em>Tell us why you love the band. Five winners will get backstage
passes!</em><br>
<textarea name="contest_entry" rows="5" cols="50">The band is totally
awesome!</textarea></label></p>
```
The rows and cols attributes provide a way to specify the size of the textarea with markup. rows specifies the number of lines the text area should display, and cols specifies the width in number of characters (although it is more common to use CSS to specify the width of the field). Scrollbars will be provided if the user types more text than fits in the allotted space.

There are also a few attributes not shown in the example. The wrap attribute specifies whether the soft line breaks (where the text naturally wraps at the edge of the box) are preserved when the form is submitted. A value of soft (the default) does not preserve line breaks. The hard value preserves line breaks when the cols attribute is used to set the character width of the box. The maxlength and minlength attributes set the maximum and minimum number of characters that can be typed into the field.

It is not uncommon for developers to put nothing between the opening and closing tags, and provide a hint of what should go there with a placeholder attribute instead. Placeholder text, unlike textarea content, is not sent to the server when the form is submitted. Examples of textarea content and placeholder text are shown in FIGURE 9-3.

```html
<p>Official contest entry:<br>
<em>Tell us why you love the band. Five winners will get backstage
passes!</em><br>
<textarea name="contest_entry" placeholder="50 words or less" rows="5"
cols="50"></textarea>
</p>
```
#### disabled and readonly 

The disabled and readonly attributes both prevent users from interacting with a form control, but they work slightly differently.
When a form element is disabled, it cannot be selected. Visual browsers may render the control as grayed-out by default (which you can change with CSS, of course). The disabled state can only be changed with a script. This is a useful attribute for restricting access to some form fields based on data entered earlier in the form and can be applied to any form control or fieldset.

The readonly attribute prevents the user from changing the value of the form control (although it can be selected). This enables developers to use scripts to set values for controls contingent on other data entered earlier in the form. Inputs that are readonly should have strong visual cues that they are somehow different from other inputs, or they could be confusing to users who are trying to change their values. The readonly attribute can be used with textarea and text-based input controls (see TABLE 9-1 at the very end of this chapter).

The most important difference is that readonly fields are submitted when the form is submitted, but disabled ones are not.

### Specialized Text-Entry Fields
In addition to the generic single-line text entry, there are a number of input types for entering specific types of information such as passwords, search terms, email addresses, telephone numbers, and URLs.

#### Password entry field
A password field works just like a text-entry field, except the characters are obscured from view by asterisk (*) or bullet (•) characters, or another character determined by the browser.

It’s important to note that although the characters entered in the password field are not visible to casual onlookers, the form does not encrypt the information, so it should not be considered a real security measure. Here is an example of the markup for a password field. FIGURE 9-4 shows how it might look after the user enters a password in the field.

```html
<li><label for="form-pswd">Password:</label><br>
<input type="password" name="pswd" maxlength="12" id="form-pswd"></li>
```
![[fig4.png]]

#### Search, email, telephone numbers, and URLs
Until HTML5, the only way to collect email addresses, telephone numbers, URLs, or search terms was to insert a generic text input field. In HTML5, the email, tel, url, and search input types give the browser a heads-up as to what type of information to expect in the field. These input types use the same attributes as the generic text input type described earlier (name, maxlength, minlength, size, and value), as well as a number of other attributes.


All of these input types are typically displayed as single-line text inputs. But browsers that support them can do some interesting things with the extra semantic information. For example, Safari on iOS uses the input type to provide a keyboard well suited to the entry task, such as the keyboard featuring a Search button for the search input type or a “.com” button when the input type is set to url (FIGURE 9-5). Browsers usually add a one-click “clear field” icon (usually a little X) in search fields. A supporting browser could check the user’s input to see that it is valid—for example, by making sure text entered in an email input follows the standard email address structure (in the past, you needed JavaScript for validation). For example, the Opera (FIGURE 9-6) and Chrome browsers display a warning if the input does not match the expected format.

![[fig5.png]]

Although email, search, telephone, and URL inputs are well supported by upto-date browsers, there may be inconsistencies in the way they are handled.

Older browsers, such as Opera Mini and any version of Internet Explorer prior to 11, do not recognize them at all, but will display the default generic text input instead, which works perfectly fine.

#### Drop-Down Suggestions
`{html} <datalist>…</datalist>`
*Drop-down menu input*

The datalist element allows the author to provide a drop-down menu of suggested values for any type of text input. It gives the user some shortcuts to select from, but if none are selected, the user can still type in their own text. Within the datalist element, suggested values are marked up as option elements. Use the list attribute in the input element to associate it with the id of its respective datalist.

In the following example (FIGURE 9-7), a datalist suggests several education level options for a text input:

```html
<p>Education completed: <input type="text" list="edulevel"
name="education">
<datalist id="edulevel">
<option value="High School">
<option value="Bachelors Degree">
<option value="Masters Degree">
<option value="PhD">
</datalist>
```
As of this writing, browser support for datalists remains spotty. Chrome and Opera support it, but there is a bug that makes datalists unscrollable (i.e., unusable) if the list is too long, so it is best used for short lists of options. IE11 and Edge have buggy implementations, and Safari and iOS don’t support it at all. The good news is if it is unsupported, browsers present a simple text input, which is a perfectly acceptable fallback. You could also use a JavaScript polyfill to create datalist functionality.

#### Submit and Reset Buttons
`{html icon}<input type="submit">`
*Submits the form data to the server*
`{html icon}<input type="reset">`
*Resets the form controls to their default settings*

There are several kinds of buttons that can be added to web forms. The most fundamental is the submit button. When clicked or tapped, the submit button immediately sends the collected form data to the server for processing.

A reset button returns the form controls to the state they were in when the form initially loaded. In other words, resetting the form doesn’t simply clear all the fields.

Both submit and reset buttons are added via the input element. As mentioned earlier, because these buttons have specific functions that do not include the entry of data, they are the only form control elements that do not require the name attribute, although it is OK to add one if you need it.

Submit and reset buttons are straightforward to use. Just place them in the appropriate place in the form, which in most cases is at the very end. By default, the submit button displays with the label “Submit” or “Submit Query,” and the reset button is labeled “Reset.” You can change the text on the button by using the value attribute, as shown in the reset button in this example (FIGURE 9-8).

```html
<p><input type="submit"> <input type="reset" value="Start over"></p>
```

The reset button is not used in forms as commonly as it used to be. That is because in contemporary form development, we use JavaScript to check the validity of form inputs along the way, so users get feedback as they go along.

With thoughtful design and assistance, fewer users should get to the end of the form and need to reset the whole thing. Still, it is a good function to be aware of.

```bash
GET
POST
action
HTML
HTML5
9-
form element
```
