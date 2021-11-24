# Titanic data analysis


## Tip - 2

You must use the `groupby` function on the filtered data (see tip 1). Review the following resources:

* [API reference pandas.core.groupby mean](https://pandas.pydata.org/docs/reference/api/pandas.core.groupby.GroupBy.mean.html)
* [API reference pandas.core.groupby agg](https://pandas.pydata.org/docs/reference/api/pandas.core.groupby.DataFrameGroupBy.aggregate.html)


Note that groupby changes the columns of the output dataframes. To avoid that, review:

* ['Could not interpret input' error with Seaborn when plotting groupbys](https://stackoverflow.com/questions/32908315/could-not-interpret-input-error-with-seaborn-when-plotting-groupbys)
* [Difference between "as_index = False", and "reset_index()" in pandas groupby](https://stackoverflow.com/questions/51866908/difference-between-as-index-false-and-reset-index-in-pandas-groupby/51933722)
