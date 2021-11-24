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
# https://realpython.com/beautiful-soup-web-scraper-python/
# https://www.scrapingbee.com/blog/python-web-scraping-beautiful-soup/


# You don't need to modify this class. Use it to instantiate the object that is returned
class Article(object):

    def __init__(self, headline):
        self.headline = headline

    def __str__(self):
        return self.headline

    def __eq__(self, other):
        return self.headline == other.headline


class Solution(object):

    def get_articles_from_front_page(self, url: str) -> list:
        """
        Retrieves all the headlines of a NYTimes web page
        :param url: url of the NYT daily articles (e.g., https://www.nytimes.com/issue/todayspaper/2021/10/01/todays-new-york-times)
        :return: list: a list of Article containing at least the headline of the NYTimes article
        """
        result = []

        # TODO: your solution

        return result
