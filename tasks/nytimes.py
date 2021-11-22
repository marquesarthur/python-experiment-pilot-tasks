from bs4 import BeautifulSoup
import requests


# URLs https://www.crummy.com/software/BeautifulSoup/bs4/doc/
# https://stackoverflow.com/questions/2612548/extracting-an-attribute-value-with-beautifulsoup
# https://stackoverflow.com/questions/6287529/how-to-find-children-of-nodes-using-beautifulsoup
# https://stackoverflow.com/questions/5041008/how-to-find-elements-by-class
# https://stackoverflow.com/questions/9029287/how-to-extract-http-response-body-from-a-python-requests-call
# https://www.dataquest.io/blog/web-scraping-python-using-beautiful-soup/
# https://docs.python-requests.org/en/latest/
# https://docs.python-requests.org/en/latest/api/


# You don't need to modify this class. Use it to instantiate the object that is returned
class Article(object):

    def __init__(self, headline, author=None):
        self.headline = headline
        self.author = author

    def __str__(self):
        return f"{self.headline}\n\t{self.author}"

    def __eq__(self, other):
        return self.headline == other.headline


class Solution(object):

    def get_articles_from_front_page(self, url):
        """
        Retrieves all the headlines of a NYTimes web page
        :param url:
        :return: list: a list of Article containing at least the headline of the NYTimes article
        """

        req = requests.get(url)
        html = req.content
        bs = BeautifulSoup(html, "lxml")

        result = []
        headlines = bs.find_all('h2', {"class": "css-ds6ff4"})
        # authors = bs.find_all('div', {"class": "css-9t0aj2"})
        # for h2, div in zip(headlines, authors):
        #     result.append(Article(h2.getText(), author=div.getText()))

        for h2 in headlines:
         result.append(Article(h2.getText()))

        return result
