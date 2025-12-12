import requests
import bs4

req = requests.get("http://127.0.0.1:5500/recipes/www.cookingclassy.com/recipes/index.html")
req.raise_for_status()

mainSoup = bs4.BeautifulSoup(req.text, 'html.parser')
foodTypes = mainSoup.select('.li-a')
for foodType in foodTypes:
    links = foodType.select('a')
    for link in links:
        link_full = "http://127.0.0.1:5500/recipes/www.cookingclassy.com/recipes/" + link['href']
        req = requests.get(link_full)
        req.raise_for_status()

        foodSoup = bs4.BeautifulSoup(req.text, 'html.parser')
        foods = foodSoup.select('.gridtitle')
        for food in foods:
            print(food.getText())


