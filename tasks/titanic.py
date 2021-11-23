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


import pandas as pd
import seaborn as sns


class Solution(object):

    def plot_data(self, data):
        df = pd.read_csv(data)

        df = df.query('age >= 18 & age <= 30 & fare < 100')
        df = df[["age", "sex", "fare"]]

        df = df.groupby(["age", "sex"], as_index=False).agg({'fare': 'mean'})
        df = df.sort_values(['age'], ascending=True)

        return sns.barplot(x="age", y="fare", hue="sex", data=df)




