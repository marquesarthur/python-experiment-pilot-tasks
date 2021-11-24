# https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html
# https://pandas.pydata.org/docs/reference/api/pandas.core.groupby.DataFrameGroupBy.aggregate.html
# https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html
# https://seaborn.pydata.org/generated/seaborn.barplot.html
# https://cmdlinetips.com/2019/07/how-to-select-rows-of-pandas-dataframe-with-query-function/
# https://www.sharpsightlabs.com/blog/seaborn-barplot/
# https://www.delftstack.com/howto/python-pandas/how-to-filter-dataframe-rows-based-on-column-values-in-pandas/
# https://stackoverflow.com/questions/17071871/how-do-i-select-rows-from-a-dataframe-based-on-column-values
# https://stackoverflow.com/questions/32908315/could-not-interpret-input-error-with-seaborn-when-plotting-groupbys
# https://stackoverflow.com/questions/51866908/difference-between-as-index-false-and-reset-index-in-pandas-groupby/51933722
# https://stackoverflow.com/questions/32400867/pandas-read-csv-from-url

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
