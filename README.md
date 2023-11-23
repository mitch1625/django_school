# School API VI

By the end of this assignment you will have a fully serviceable CRUD API with user authentication capabilities that will allow School staff to easily manage students and scholastic equipment.

## All Students

Build an API endpoint of `http://127.0.0.1:8000/api/v1/students/` that will return all students inside the the database in the following format:

```json
[
  {
    "model": "student_app.student",
    "pk": 1,
    "fields": {
      "name": "Johnny H. Miller",
      "student_email": "johnny@school.com",
      "personal_email": "johnny@gmail.com",
      "locker_number": 1,
      "locker_combination": "12-12-12",
      "good_student": true,
      "subjects": [
        {
          "model": "subject_app.subject",
          "pk": 1,
          "fields": {
            "subject_name": "Python",
            "professor": "Mr. Cahan",
            "grade": 98.77
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 2,
          "fields": {
            "subject_name": "JavaScript",
            "professor": "Mrs. Zaynab",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 3,
          "fields": {
            "subject_name": "Ruby",
            "professor": "Mr. Ben",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 4,
          "fields": {
            "subject_name": "Management",
            "professor": "Mr. Nick",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 5,
          "fields": {
            "subject_name": "React",
            "professor": "Mrs. Naranjo",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 6,
          "fields": {
            "subject_name": "Django",
            "professor": "Mrs. Corozco",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 7,
          "fields": {
            "subject_name": "Csharp",
            "professor": "Mr. Zack",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 8,
          "fields": {
            "subject_name": "Physical Education",
            "professor": "Mr. Dennis",
            "grade": 0.0
          }
        }
      ]
    }
  },
  {
    "model": "student_app.student",
    "pk": 2,
    "fields": {
      "name": "Michelle B. Maraca",
      "student_email": "michelle@school.com",
      "personal_email": "michelle@gmail.com",
      "locker_number": 110,
      "locker_combination": "12-12-12",
      "good_student": true,
      "subjects": [
        {
          "model": "subject_app.subject",
          "pk": 2,
          "fields": {
            "subject_name": "JavaScript",
            "professor": "Mrs. Zaynab",
            "grade": 33.55
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 6,
          "fields": {
            "subject_name": "Django",
            "professor": "Mrs. Corozco",
            "grade": 0.0
          }
        },
        {
          "model": "subject_app.subject",
          "pk": 7,
          "fields": {
            "subject_name": "Csharp",
            "professor": "Mr. Zack",
            "grade": 0.0
          }
        }
      ]
    }
  }
]
```

## All Subjects

Build an API enpoint of `http://127.0.0.1:8000/api/v1/subjects/` that will return all subjects inside the the database in the following format:

```json
[
  {
    "model": "subject_app.subject",
    "pk": 1,
    "fields": {
      "subject_name": "Python",
      "professor": "Mr. Cahan",
      "grade_average": 98.77,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 2,
    "fields": {
      "subject_name": "JavaScript",
      "professor": "Mrs. Zaynab",
      "grade_average": 33.55,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        {
          "model": "student_app.student",
          "pk": 2,
          "fields": {
            "name": "Michelle B. Maraca",
            "student_email": "michelle@school.com",
            "personal_email": "michelle@gmail.com",
            "locker_number": 110,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [2, 6, 7]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 3,
    "fields": {
      "subject_name": "Ruby",
      "professor": "Mr. Ben",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 4,
    "fields": {
      "subject_name": "Management",
      "professor": "Mr. Nick",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 5,
    "fields": {
      "subject_name": "React",
      "professor": "Mrs. Naranjo",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 6,
    "fields": {
      "subject_name": "Django",
      "professor": "Mrs. Corozco",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        {
          "model": "student_app.student",
          "pk": 2,
          "fields": {
            "name": "Michelle B. Maraca",
            "student_email": "michelle@school.com",
            "personal_email": "michelle@gmail.com",
            "locker_number": 110,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [2, 6, 7]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 7,
    "fields": {
      "subject_name": "Csharp",
      "professor": "Mr. Zack",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        {
          "model": "student_app.student",
          "pk": 2,
          "fields": {
            "name": "Michelle B. Maraca",
            "student_email": "michelle@school.com",
            "personal_email": "michelle@gmail.com",
            "locker_number": 110,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [2, 6, 7]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 8,
    "fields": {
      "subject_name": "Physical Education",
      "professor": "Mr. Dennis",
      "grade_average": 0,
      "students": [
        {
          "model": "student_app.student",
          "pk": 1,
          "fields": {
            "name": "Johnny H. Miller",
            "student_email": "johnny@school.com",
            "personal_email": "johnny@gmail.com",
            "locker_number": 1,
            "locker_combination": "12-12-12",
            "good_student": true,
            "subjects": [1, 2, 3, 4, 5, 6, 7, 8]
          }
        }
      ]
    }
  },
  {
    "model": "subject_app.subject",
    "pk": 9,
    "fields": {
      "subject_name": "Science",
      "professor": "Mrs. Alex",
      "grade_average": 0,
      "students": []
    }
  }
]
```

## Running Tests

Delete all the test files inside of each individual application. Add the `tests` folder inside of this repository to your projects ROOT directory.

```bash
  python manage.py test tests
```

- `.` means a test passed
- `E` means an unhandled error populated on a test
- `F` means a test completely failed to run

## Considerations

You just made some changes to your student model, meaning you may have to adjust your tests regarding `serializers` to match the new output. Ensure to write serializers and validators to the best of your ability
