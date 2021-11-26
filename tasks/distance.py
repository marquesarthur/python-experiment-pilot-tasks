

from geopy.geocoders import Nominatim
import sys
from geopy import distance


class Solution(object):

    def best_sightseeing_place(self, rendezvous_address: str, suggestions_lst: list, max_allowed=10) -> str:
        """
        Given a starting place
        :param rendezvous_address: str address with the starting location
        :param suggestions_lst: list of addresses (str) with potential places to visit
        :param max_allowed: max allowed walking distance (in kilometers) to a place
        :return: str: value within suggestions_lst which is the closest place to visit
        """
        closest = None

        # TODO: your solution

        return closest
