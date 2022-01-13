import unittest
import math
import matplotlib.pyplot as plt
from code.titanic import Solution


class TestTitanic(unittest.TestCase):

    def test_fares(self):
        data = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/raw/titanic.csv"
        plotter = Solution()

        fig, ax = plt.subplots()
        plotter.plot_data(data)
        plt.show()

        expected_y_values = [18.83, 30.73, 9.24, 0.0, 24.68, 26.6, 9.76, 0.0, 33.94, 0.0, 17.92, 27.35, 12.82, 15.85, 0.0, 18.21, 35.96, 15.31, 12.86, 8.53, 7.25, 20.42, 7.78, 16.44, 7.23, 20.88, 8.05, 18.8, 15.91, 23.46, 23.03, 11.66, 17.02, 12.33]
        expected_x_values = [18.0, 19.0, 20.0, 20.5, 21.0, 22.0, 23.0, 23.5, 24.0, 24.5, 25.0, 26.0, 27.0, 28.0, 28.5, 29.0, 30.0]

        y_values = [p.get_height() if not math.isnan(p.get_height()) else 0.0 for p in ax.patches]
        x_values = ax.xaxis.major.formatter.func.args[0].values()

        self.__compare_axis(x_values, expected_x_values, "x")
        self.__compare_axis(y_values, expected_y_values, "y")

    def __compare_axis(self, plot_values, expected_values, axis):
        self.assertEqual(len(plot_values), len(expected_values), "The length of both arrays should be the same")

        for value, expected_value in zip(plot_values, expected_values):
            self.assertAlmostEqual(value, expected_value, None, f"for values in the {axis}-axis", 0.1)
