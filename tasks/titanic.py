# https://stackoverflow.com/questions/17071871/how-do-i-select-rows-from-a-dataframe-based-on-column-values
# https://pandas.pydata.org/docs/reference/io.html
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html
# https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html
# https://www.delftstack.com/howto/python-pandas/how-to-filter-dataframe-rows-based-on-column-values-in-pandas/
# https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html
# https://stackoverflow.com/questions/32400867/pandas-read-csv-from-url
# https://realpython.com/pandas-plot-python/
# https://stackoverflow.com/questions/17618981/how-to-sort-pandas-data-frame-using-values-from-several-columns
# https://cmdlinetips.com/2019/07/how-to-select-rows-of-pandas-dataframe-with-query-function/
# https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.plot.bar.html
# https://realpython.com/pandas-merge-join-and-concat/
# https://stackoverflow.com/questions/25689558/pandas-bar-plot-specify-bar-color-by-column

import pandas as pd
import matplotlib.pyplot as plt


class Solution(object):

    # https://raw.githubusercontent.com/mwaskom/seaborn-data/master/raw/titanic.csv
    def plot_data(self, data):
        df = pd.read_csv(data)

        df_male = df.query('sex == "male" & age >= 18')
        df_male = df_male.sort_values(['fare'], ascending=False)[:10]

        df_female = df.query('sex == "female" & age >= 18')
        df_female = df_female.sort_values(['fare'], ascending=False)[:10]

        concatenated = pd.concat([df_male, df_female])
        concatenated = concatenated.sort_values(['age'], ascending=True)
        # concatenated =

        # color_lst= ["blue" if d == "male" else "pink" for d in concatenated.sex.tolist()]

        # concatenated.groupby(by=["age"]).plot.bar(x='sex', y='fare')

        concatenated[["age", "sex", "fare"]].groupby("age").plot()
        plt.show()


Solution().plot_data('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/raw/titanic.csv')