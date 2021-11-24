# https://geopy.readthedocs.io/en/stable/
# https://github.com/geopy/geopy
# https://holypython.com/locations-in-python-geocoding-w-geopy/
# https://stackoverflow.com/questions/37608811/obtaining-latitude-and-longitude-of-multiple-locations-using-geopy
# https://stackoverflow.com/questions/7371935/sort-a-string-in-lexicographic-order-python
# https://stackoverflow.com/questions/13686001/python-module-for-getting-latitude-and-longitude-from-the-name-of-a-us-city
# https://stackoverflow.com/questions/24427828/calculate-point-based-on-distance-and-direction
# https://pythonsimplified.com/geocoding-in-python-using-geopy/
# https://www.askpython.com/python/python-geopy-to-find-geocode-of-an-address


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
