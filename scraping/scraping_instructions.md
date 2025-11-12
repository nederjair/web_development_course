# Scraping

## Laboratory work

# Main goal

The game you designed (guess the word) has a very poor list of items (dishes), your goal is get the information from somewhere elseand add it to your site. This time we are getting the information from a local recipes page with a lot of different dishes. Doing this manually can take you months, because of that we are going to use a technique called web scraping.

# Important information before starting

```
- Web scraping has some ethical implications, public use of the information of other sites without permition can led you to inconveniences or legal problems, so I encourage you to use public available information that is meant to be used freely.

- Sites have special software that block web scraping, because of that before starting be sure the site you are going to scrap allows this practice.

- Almost all sites have ddos protection, which means they have a limit of request you can make in an specific amount of time (before they block your IP), so using libraries like request should be thoughtful and limited to a few attemps (don't use them in cycles) also adding pause times between requests if possible is a good practice.

- Use web scraping mostly to automatizate boring tasks or with limited amount of information, don't make exact copies of a site or use all its available information.

- This laboratory makes use of public available and limited amount information for educational purposes and in a local environment, meaning we are not making request to actual websites on the internet but to a local website that runs on your local computer.
```

After reading all this information we can start

# SET THE WORKING FOLDER 

