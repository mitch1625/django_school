from django.test import TestCase, Client
from django.urls import reverse
from tests.answers import all_students, all_subjects
import json


class Test_endpoints(TestCase):
    fixtures = [
        "tests/fixtures/subjects.json",
        "tests/fixtures/students.json",
        "tests/fixtures/grades.json",
    ]

    def setUp(self):
        client = Client()

    # PART VI

    def test_01_all_classes(self):
        response = self.client.get(reverse("all_subjects"))
        with self.subTest():
            self.assert_(response.status_code == 200)
        content = json.loads(response.content)
        self.assertEquals(content, all_subjects)

    def test_02_all_students(self):
        response = self.client.get(reverse("all_students"))
        with self.subTest():
            self.assert_(response.status_code == 200)
        content = json.loads(response.content)
        self.assertEquals(content, all_students)
