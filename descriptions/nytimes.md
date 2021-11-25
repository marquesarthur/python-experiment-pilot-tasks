# New York Times web scrapper

New York Times has an archive all its articles published at a given date: `https://www.nytimes.com/section/todayspaper?redirect_uri=https%3A%2F%2Fwww.nytimes.com%2F`

An example of the articles is shown below

![image info](./rsz_nytimes.png)

___


## Task

Given a `string` representing the url for NY Times Today's,

you must write a python script using the `BeautifulSoup` and `requests` modules to scrap all the headlines of that page.

**Details:**

Web scrapping relies on the HTML elements of the page. You can find more information by:

1. Right-clicking a page in your web browser
1. Selecting `view page source`

or by:

1. Right-clicking a page in your web browser
1. Selecting `Inspect`
1. Using the mouse icon to hover over elements of interest

![image info](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Select_an_element/inspector-highlighted.png)

___

## Example 1

**Input:**

```python
url = "https://www.nytimes.com/issue/todayspaper/2021/11/01/todays-new-york-times"
```

**Output:**

```python
result = [
    ...
    "Angling for a Merry ‘Fishmas’ Despite Global Shipping Delays",
    "Who Had Covid-19 Vaccine Breakthrough Cases?",
    ...
]
```

**Explanation:**

These are some of the articles in this web page. Since the list is quite extensive, we provide an excerpt of the articles found in the page. 

___


## Example 2


**Input:**

```python
url = "https://www.nytimes.com/issue/todayspaper/2021/10/01/todays-new-york-times"
```

**Output:**

```python
result = [
    ...
    "Leader of Prestigious Yale Program Resigns, Citing Donor Pressure",
    "After Hurricane Ida, Oil Infrastructure Springs Dozens of Leaks",
    ...
]
```

___


## Resources

Please **use only** the following resources to find information that might assist you complete this task:

* [Requests: HTTP for Humans™](https://docs.python-requests.org/en/latest/)
* [Requests API](https://docs.python-requests.org/en/latest/api/)
* [Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
* [Tutorial: Web Scraping with Python Using Beautiful Soup](https://www.dataquest.io/blog/web-scraping-python-using-beautiful-soup/)
* [Extracting an attribute value with beautifulsoup](https://stackoverflow.com/questions/2612548/extracting-an-attribute-value-with-beautifulsoup)
* [How to find children of nodes using BeautifulSoup](https://stackoverflow.com/questions/6287529/how-to-find-children-of-nodes-using-beautifulsoup)
* [How to find elements by class](https://stackoverflow.com/questions/5041008/how-to-find-elements-by-class)
* [How to extract HTTP response body from a Python requests call?](https://stackoverflow.com/questions/9029287/how-to-extract-http-response-body-from-a-python-requests-call)
* [Beautiful Soup: Build a Web Scraper With Python](https://realpython.com/beautiful-soup-web-scraper-python/)
* [Web Scraping with BeautifulSoup](https://www.scrapingbee.com/blog/python-web-scraping-beautiful-soup/)