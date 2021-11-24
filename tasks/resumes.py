# https://pymotw.com/3/re/index.html
# https://docs.python.org/3/tutorial/inputoutput.html
# https://docs.python.org/3/library/re.html
# https://www.pythontutorial.net/python-basics/python-read-text-file/
# https://www.c-sharpcorner.com/article/how-to-validate-an-email-address-in-python/
# https://stackoverflow.com/questions/42407785/regex-extract-email-from-strings
# https://stackoverflow.com/questions/28840903/python-regex-match-middle-of-string
# https://stackoverflow.com/questions/180986/what-is-the-difference-between-re-search-and-re-match?noredirect=1&lq=1
# https://stackoverflow.com/questions/8022530/how-to-check-for-valid-email-address
# https://stackoverflow.com/questions/4666973/how-to-extract-the-substring-between-two-markers

import re


class Solution(object):

    def find_contact_information(self, resume_file_path):
        pattern = re.compile("([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)")

        with open(resume_file_path, 'r', encoding='utf-8') as input_file:
            lines = input_file.readlines()

        result = []
        for line in lines:
            has_email = re.search(pattern, line)
            if has_email:
                result.append(has_email.group())

        return result


