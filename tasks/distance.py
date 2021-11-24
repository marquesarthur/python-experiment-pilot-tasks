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

    def best_sightseeing_place(self, rendezvous_address, suggestions_lst, max_allowed=10):

        geolocator = Nominatim(user_agent="SPL-task")

        location_a = geolocator.geocode(rendezvous_address)

        closest = None
        current_distance = sys.maxsize
        for suggestion in sorted(suggestions_lst, key=str.lower):
            location_b = geolocator.geocode(suggestion)

            __dist = distance.distance(location_a.point, location_b.point).km

            if __dist < current_distance and __dist < max_allowed:
                current_distance = __dist
                closest = suggestion



        return closest



rendezvous_address = "1958 Main Mall, Vancouver, BC V6T 1Z2"
suggestions_lst = ["Spanish Banks West Concession"]

print(Solution().best_sightseeing_place(rendezvous_address, suggestions_lst))
