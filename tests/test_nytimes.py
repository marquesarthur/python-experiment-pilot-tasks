

import unittest
from tasks.nytimes import Solution
from tasks.nytimes import Article

# class Solution(object):
#
#     def sum_arr(self, input):
#         return sum(input)

class TestNYTimes(unittest.TestCase):

    def test_articles_from_2021_11_01(self):
        url = "https://www.nytimes.com/issue/todayspaper/2021/11/01/todays-new-york-times"
        web_scrapper = Solution()
        articles = web_scrapper.get_articles_from_front_page(url)

        expected = Article("Angling for a Merry ‘Fishmas’ Despite Global Shipping Delays")
        self.assertTrue(expected in articles)

        expected = Article("Who Had Covid-19 Vaccine Breakthrough Cases?")
        self.assertTrue(expected in articles)

        expected = Article("What if Everything You Learned About Human History Is Wrong?")
        self.assertTrue(expected in articles)


    def test_articles_from_2021_10_01(self):
        url = "https://www.nytimes.com/issue/todayspaper/2021/10/01/todays-new-york-times"
        web_scrapper = Solution()
        articles = web_scrapper.get_articles_from_front_page(url)

        expected = Article("Leader of Prestigious Yale Program Resigns, Citing Donor Pressure")
        self.assertTrue(expected in articles)

        expected = Article("After Hurricane Ida, Oil Infrastructure Springs Dozens of Leaks")
        self.assertTrue(expected in articles)




