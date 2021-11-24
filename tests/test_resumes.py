import unittest
import os
import sys
from tasks.resumes import Solution


class TestDistance(unittest.TestCase):

    def test_resume_from_canada(self):
        input = os.path.join(os.path.dirname(__file__), "resumes", "resume_canada.txt")

        contact_lst = Solution().find_contact_information(input)

        self.assertTrue("nice_professor_email@university.edu" in contact_lst)
        self.assertTrue("supervisor@university.edu" in contact_lst)

    def test_resume_from_brazil(self):
        input = os.path.join(os.path.dirname(__file__), "resumes", "resume_brasil.txt")

        contact_lst = Solution().find_contact_information(input)

        self.assertTrue("nice_professor_email@university.edu" in contact_lst)
        self.assertTrue("supervisor@university.edu" in contact_lst)

    def test_resume_without_emails(self):
        input = os.path.join(os.path.dirname(__file__), "resumes", "resume_no_email.txt")

        contact_lst = Solution().find_contact_information(input)

        self.assertFalse("nice_professor_email@university.edu" in contact_lst)
        self.assertFalse("supervisor@university.edu" in contact_lst)

    def test_resume_without_incomplete_email(self):
        input = os.path.join(os.path.dirname(__file__), "resumes", "resume_incomplete_email.txt")

        contact_lst = Solution().find_contact_information(input)

        self.assertFalse("nice_professor_email@univers" in contact_lst)
        self.assertTrue("supervisor@university.edu" in contact_lst)