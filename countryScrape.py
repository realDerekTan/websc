from bs4 import BeautifulSoup
import requests

url = requests.get("https://en.wikipedia.org/wiki/List_of_Asian_countries_by_area").text

soup = BeautifulSoup(url, 'html')

table = soup.find('table', {'class':'wikitable sortable'})
links = table.findAll('a')

countries = []
for link in links:
  countries.append(link.get('title'))

print(countries)