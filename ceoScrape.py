from bs4 import BeautifulSoup
import requests

url = requests.get("https://en.wikipedia.org/wiki/List_of_chief_executive_officers")

soup = BeautifulSoup(url.text, 'html.parser')
# print(soup.prettify())

table = soup.find('table', {'class':'wikitable sortable'})
links = table.findAll('a')

names_list = []
for link in links:
  names_list.append(link.get('title'))

print names_list