const course =  {
    courseName: "Java Script",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// console.log(course.courseInstructor)

const{courseName, price, courseInstructor} = course // It is the concept of de-structuring
console.log(`Your course name is ${courseName}, the price of the course is ${price}, and your course instructor is ${courseInstructor}`);
 

// JSON - API => JSON stands for Java Script Object Notation and API = Application Programming Interface

// {
//     "name2":"Puneet",
//     "course2": "JavaScript",
//     "price2": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

const information = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Xavier",
        "last": "Anderson"
      },
      "location": {
        "street": {
          "number": 421,
          "name": "36th Ave"
        },
        "city": "Cartwright",
        "state": "New Brunswick",
        "country": "Canada",
        "postcode": "X3I 5G1",
        "coordinates": {
          "latitude": "-71.2787",
          "longitude": "-30.2426"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "xavier.anderson@example.com",
      "login": {
        "uuid": "f1e01245-12fb-4a2c-bbea-f67150c79de4",
        "username": "tinyostrich944",
        "password": "queens",
        "salt": "hk0UPjWS",
        "md5": "356a052484e0701639dffb36ef55d730",
        "sha1": "f3722fca77c6c520d26ba5aed74452bcfc82b794",
        "sha256": "17c263e3dd9c2166aae01e275ae842d184f9b47b73cd30865e7078d6f69b2f96"
      },
      "dob": {
        "date": "1969-02-01T06:40:38.111Z",
        "age": 56
      },
      "registered": {
        "date": "2011-05-09T03:38:49.811Z",
        "age": 14
      },
      "phone": "J08 M58-9271",
      "cell": "N09 C58-2077",
      "id": {
        "name": "SIN",
        "value": "510172877"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
      },
      "nat": "CA"
    }
  ],
  "info": {
    "seed": "1bf8fbc5f334b431",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}




