import unittest
from tasks.distance import Solution


class TestDistance(unittest.TestCase):

    def test_one_suggestion(self):
        rendezvous_address = "1958 Main Mall, Vancouver, BC V6T 1Z2"
        suggestions_lst = ["Spanish Banks West Concession"]

        best_place = Solution().best_sightseeing_place(rendezvous_address, suggestions_lst)

        expected = "Spanish Banks West Concession"
        self.assertEqual(expected, best_place)


    def test_two_suggestions(self):
        rendezvous_address = "1958 Main Mall, Vancouver, BC V6T 1Z2"
        suggestions_lst = ["Spanish Banks West Concession", "Museum of Anthropology University of British Columbia"]

        best_place = Solution().best_sightseeing_place(rendezvous_address, suggestions_lst)

        expected = "Museum of Anthropology University of British Columbia"
        self.assertEqual(expected, best_place)

