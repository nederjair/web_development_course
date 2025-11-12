# Scraping

## Laboratory work

# Main goal

The game you designed (guess the word) has a very poor list of items (dishes), your goal is get the information from somewhere else and add it to your site. This time we are getting the information from a local recipes page with a lot of different dishes. Doing this manually can take you months, because of that we are going to use a technique called web scraping.

# Important information before starting

- **Web scraping has some ethical implications, public use of the information of other sites without permition can led you to inconveniences or legal problems, so I encourage you to use public available information that is meant to be used freely.**

- **Sites have special software that block web scraping, because of that before starting be sure the site you are going to scrap allows this practice.**

- **Almost all sites have ddos protection, which means they have a limit of request you can make in an specific amount of time (before they block your IP), so using libraries like request should be thoughtful and limited to a few attemps (don't use them in cycles) also adding pause times between requests if possible is a good practice.**

- **Use web scraping mostly to automatizate boring tasks or with limited amount of information, don't make exact copies of a site or use all its available information.**

- **This laboratory makes use of public available and limited amount information for educational purposes and in a local environment, meaning we are not making request to actual websites on the internet but to a local website that runs on your local computer.**

After reading all this information we can start

# SET THE WORKING FOLDER 

1. Create a new folder called `lab_scraping`.

2. Copy the `recipes.zip` in the `lab_scraping` folder.

3. Unzip the `recipes.zip` file in the `lab_scraping` folder this will create a new folder called `recipes`.

4. Open `vscode` then press `file` ---> `open folder` and select the `lab_scraping` folder this will open the folder in vscode. If `vscode` ask you to "trust the authors" then press `yes`.

![[fig1.png]]
![[fig2.png]]
![[fig3.png]]
![[fig4.png]]

5. Press the extensions button then in the search bar write "live server". Then press the live server extension (as seen in the figure).

![[fig5.png]]

6. Press `install` and wait till the extension is installed.

![[fig6.png]]

5. In `vscode` press in the `recipes` folder to show its content.  then find in the `recipes` folder the `index.html` file and press right-click on it, then press "Open with Live Server". You need to do all of this after the `live server` extension is installed otherwise it will not work. 

![[fig7.png]]

After this a browser should open with the webpage where we are going to get the recipes. This webpage is deployed online, meaning all the information comes from the `recipes` folder that is in your local computer.


# INSTALL PYTHON

6. Check that your system has python installed:

    - press the windows key then the `r` key (`win + r`)
    - open a terminal by typing `cmd` then press `enter`
    - type in the terminal `python --version`

if the terminal gives you a version then you have python installed, if not then go to the step `7`

7. Use the installer provided in TUIS, if it does not work download it from the site `https://www.python.org/downloads/`, selecting your operating system.

![[fig8.png]]
![[fig9.png]]

When installing check the box "add python to the PATH environment variable"



