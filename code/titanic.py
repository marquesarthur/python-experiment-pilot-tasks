
import io
import requests
import pandas as pd
import seaborn as sns
import matplotlib as plt


class Solution(object):

    def plot_data(self, data: str) -> sns.barplot:
        """
        Creates a dataframe representing rows from the titanic dataset.
        Filters all entries so that rows have passengers of age greater or equal to 18 and less or equal to 30
        Filters all entries so that hows have passengers who paid less than 100 in their ticket
        Creates a dataframe with only the columns of interest, i.e., age, sex, and fare
        Groups passengers by age and sex and uses the data as an input to a seaborn barplot
        :param data: str with url of the data
        :return: sns.barplot chart
        """
        # TODO: your solution

        # return sns.barplot( TODO: parameters for barplot )
        return None
