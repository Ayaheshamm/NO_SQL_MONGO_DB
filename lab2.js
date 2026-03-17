use lab2
db.orders.insertMany( [
   { _id: 0, name: "Pepperoni", size: "small", price: 19,
     quantity: 10, date: ISODate( "2021-03-13T08:14:30Z" ) },
   { _id: 1, name: "Pepperoni", size: "medium", price: 20,
     quantity: 20, date : ISODate( "2021-03-13T09:13:24Z" ) },
   { _id: 2, name: "Pepperoni", size: "large", price: 21,
     quantity: 30, date : ISODate( "2021-03-17T09:22:12Z" ) },
   { _id: 3, name: "Cheese", size: "small", price: 12,
     quantity: 15, date : ISODate( "2021-03-13T11:21:39.736Z" ) },
   { _id: 4, name: "Cheese", size: "medium", price: 13,
     quantity:50, date : ISODate( "2022-01-12T21:23:13.331Z" ) },
   { _id: 5, name: "Cheese", size: "large", price: 14,
     quantity: 10, date : ISODate( "2022-01-12T05:08:13Z" ) },
   { _id: 6, name: "Vegan", size: "small", price: 17,
     quantity: 10, date : ISODate( "2021-01-13T05:08:13Z" ) },
   { _id: 7, name: "Vegan", size: "medium", price: 18,
     quantity: 10, date : ISODate( "2021-01-13T05:10:13Z" ) },
{
    _id: 8,
    name: "Vegan",
    size: "medium",
    price: 18,
    quantity: 20
  }
] )
db.sales.insertMany( 
[
  {
    "product": "Widget",
    "quantity": 10,
    "price": 25.0,
    "date": ISODate("2018-12-15T08:00:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 5,
    "price": 50.0,
    "date": ISODate("2019-03-20T14:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 8,
    "price": 25.0,
    "date": ISODate("2020-05-01T10:15:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 3,
    "price": 50.0,
    "date": ISODate("2020-09-10T16:45:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 15,
    "price": 10.0,
    "date": ISODate("2021-02-20T09:30:00Z")
  },
  {
    "product": "Widget",
    "quantity": 12,
    "price": 30.0,
    "date": ISODate("2022-04-05T11:45:00Z")
  },
  {
    "product": "Gadget",
    "quantity": 7,
    "price": 55.0,
    "date": ISODate("2023-01-10T14:30:00Z")
  },
  {
    "product": "Accessory",
    "quantity": 20,
    "price": 12.0,
    "date": ISODate("2023-04-15T09:30:00Z")
  }
])
db.employees.insertMany( 
[
  {
    "name": "John Doe",
    "department": "Sales",
    "salary": 60000,
    "hireDate": ISODate("2022-03-15T08:00:00Z")
  },
  {
    "name": "Alice Smith",
    "department": "Sales",
    "salary": 55000,
    "hireDate": ISODate("2022-05-20T09:30:00Z")
  },
  {
    "name": "Bob Johnson",
    "department": "Engineering",
    "salary": 70000,
    "hireDate": ISODate("2021-10-10T14:15:00Z")
  },
  {
    "name": "Sarah Brown",
    "department": "Sales",
    "salary": 58000,
    "hireDate": ISODate("2022-08-05T11:45:00Z")
  },
  {
    "name": "David Lee",
    "department": "Engineering",
    "salary": 72000,
    "hireDate": ISODate("2022-01-25T16:30:00Z")
  },
  {
    "name": "Emily Taylor",
    "department": "Engineering",
    "salary": 68000,
    "hireDate": ISODate("2021-12-10T08:30:00Z")
  },
  {
    "name": "Olivia Wilson",
    "department": "Sales",
    "salary": 59000,
    "hireDate": ISODate("2022-09-15T10:00:00Z")
  }
]
)
db.likes.insertMany([
{
   _id: 10,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id:15,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 150
},
{
   _id: 20,
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 250
},

{
   _id: 25,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 15
},
{
   _id: 30,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 25
},
{
   _id: 35,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},

{
   _id: 40,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
},

{
   _id: 45,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 250
},

{
   _id: 50,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 300
}
])
db.inventory.insertMany([
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    "_id": 111,
    "item": "TBD",
    "stock": 0,
    "info": {
      "publisher": "1111",
      "pages": 430
    },
    "tags": [
      "technology",
      "computer"
    ],
    "ratings": [
      {
        "by": "ijk",
        "rating": 4
      },
      {
        "by": "lmn",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 3,
    "item": "XYZ123",
    "stock": 15,
    "info": {
      "publisher": "5555",
      "pages": 150
    },
    "tags": [
      
    ],
    "ratings": [
      {
        "by": "xyz",
        "rating": 5
      }
    ],
    "reorder": false
  },
  {
    "_id": 4,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 5,
    "address": "156 Lunar Place",
    "zipCode": 43339374
  },
  {
    "_id": 6,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 7,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 8,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "security",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "ssl",
      "security"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 9,
    item: {
      name: "ab",
      code: "123"
    },
    qty: 15,
    tags: [
      "A",
      "B",
      "C"
    ]
  },
  {
    _id: 10,
    item: {
      name: "cd",
      code: "123"
    },
    qty: 20,
    tags: [
      "B"
    ]
  },
  {
    _id: 11,
    item: {
      name: "ij",
      code: "456"
    },
    qty: 25,
    tags: [
      "A",
      "B"
    ]
  },
  {
    _id: 12,
    item: {
      name: "xy",
      code: "456"
    },
    qty: 30,
    tags: [
      "B",
      "A"
    ]
  },
  {
    _id: 13,
    item: {
      name: "mn",
      code: "000"
    },
    qty: 20,
    tags: [
      [
        "A",
        "B"
      ],
      "C"
    ]
  },
  {
    "item": "nuts",
    "quantity": 30,
    "carrier": {
      "name": "Shipit",
      "fee": 3
    }
  },
  {
    "item": "bolts",
    "quantity": 50,
    "carrier": {
      "name": "Shipit",
      "fee": 4
    }
  },
  {
    "item": "washers",
    "quantity": 10,
    "carrier": {
      "name": "Shipit",
      "fee": 1
    }
  },
  {
    item: "canvas",
    qty: 100,
    size: {
      h: 28,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mat",
    qty: 85,
    size: {
      h: 27.9,
      w: 35.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "mousepad",
    qty: 25,
    size: {
      h: 19,
      w: 22.85,
      uom: "cm"
    },
    status: "P"
  },
  {
    item: "notebook",
    qty: 50,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "P"
  },
  {
    item: "paper",
    qty: 100,
    size: {
      h: 8.5,
      w: 11,
      uom: "in"
    },
    status: "D"
  },
  {
    item: "planner",
    qty: 75,
    size: {
      h: 22.85,
      w: 30,
      uom: "cm"
    },
    status: "D"
  },
  {
    item: "postcard",
    qty: 45,
    size: {
      h: 10,
      w: 15.25,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketchbook",
    qty: 80,
    size: {
      h: 14,
      w: 21,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "sketch pad",
    qty: 95,
    size: {
      h: 22.85,
      w: 30.5,
      uom: "cm"
    },
    status: "A"
  },
  {
    item: "journal",
    qty: 25,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "notebook",
    qty: 50,
    tags: [
      "red",
      "blank"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "paper",
    qty: 100,
    tags: [
      "red",
      "blank",
      "plain"
    ],
    dim_cm: [
      14,
      21
    ]
  },
  {
    item: "planner",
    qty: 75,
    tags: [
      "blank",
      "red"
    ],
    dim_cm: [
      22.85,
      30
    ]
  },
  {
    item: "postcard",
    qty: 45,
    tags: [
      "blue"
    ],
    dim_cm: [
      10,
      15.25
    ]
  },
  {
    code: "xyz",
    tags: [
      "school",
      "book",
      "bag",
      "headphone",
      "appliance"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 45,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "abc",
    tags: [
      "appliance",
      "school",
      "book"
    ],
    qty: [
      {
        size: "6",
        num: 100,
        color: "green"
      },
      {
        size: "6",
        num: 50,
        color: "blue"
      },
      {
        size: "8",
        num: 100,
        color: "brown"
      }
    ]
  },
  {
    code: "efg",
    tags: [
      "school",
      "book"
    ],
    qty: [
      {
        size: "S",
        num: 10,
        color: "blue"
      },
      {
        size: "M",
        num: 100,
        color: "blue"
      },
      {
        size: "L",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    code: "ijk",
    tags: [
      "electronics",
      "school"
    ],
    qty: [
      {
        size: "M",
        num: 100,
        color: "green"
      }
    ]
  },
  {
    _id: 14,
    status: "a"
  },
  {
    _id: 15,
    sku: "abc123",
    quantity: 10,
    metrics: {
      orders: 2,
      ratings: 3.5
    }
  },
  {
    _id: 16,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 17,
    highScore: 800,
    lowScore: 200
  },
  {
    _id: 18,
    item: "Scarf",
    price: 10
  },
  {
    "_id": 19,
    "alias": [
      "The American Cincinnatus",
      "The American Fabius"
    ],
    "mobile": "555-555-5555",
    "nmae": {
      "first": "george",
      "last": "washington"
    }
  },
  {
    "_id": 20,
    "alias": [
      "My dearest friend"
    ],
    "mobile": "222-222-2222",
    "nmae": {
      "first": "abigail",
      "last": "adams"
    }
  },
  {
    "_id": 21,
    "alias": [
      "Amazing grace"
    ],
    "mobile": "111-111-1111",
    "nmae": {
      "first": "grace",
      "last": "hopper"
    }
  },
  {
    _id: 22,
    quantity: 250,
    instock: true,
    reorder: false,
    details: {
      model: "14QQ",
      make: "Clothes Corp"
    },
    tags: [
      "apparel",
      "clothing"
    ],
    ratings: [
      {
        by: "Customer007",
        rating: 4
      }
    ]
  },
  {
    "item": "chisel",
    "sku": "C001",
    "quantity": 4,
    "instock": true
  },
  {
    "item": "hammer",
    "sku": "unknown",
    "quantity": 3,
    "instock": true
  },
  {
    "item": "nails",
    "sku": "unknown",
    "quantity": 100,
    "instock": true
  },
  {
    "_id": 23,
    name: "Alice King",
    classAverage: 87.333333333333333
  },
  {
    "_id": 24,
    name: "Bob Jenkins",
    classAverage: "83.52"
  },
  {
    "_id": 25,
    name: "Cathy Hart",
    classAverage: "94.06"
  },
  {
    "_id": 26,
    name: "Drew Williams",
    classAverage: 93
  },
  {
    "_id": 27,
    "address": "2030 Martian Way",
    "zipCode": "90698345"
  },
  {
    "_id": 28,
    "address": "156 Lunar Place",
    "zipCode": "43339374"
  },
  {
    "_id": 29,
    "address": "2324 Pluto Place",
    "zipCode": "3921412"
  },
  {
    "_id": 30,
    "address": "55 Saturn Ring",
    "zipCode": "88602117"
  },
  {
    "_id": 31,
    "address": "104 Venus Drive",
    "zipCode": [
      "834847278",
      "1893289032"
    ]
  }
])
db.employee.insertMany([
{_id:1,fName:"mohamed",lName:"ahmed",age:15},
{_id:2,fName:"noha",lName:"mahmoud",age:25},
{_id:3,fName:"malak",lName:"mohamed",age:35},
{_id:4,fName:"mazen",lName:"mohamed",age:45},
{_id:5,fName:"eman",lName:"ali",age:55}])

//Task 1 — Find documents where "tags" field EXISTS
db.inventory.find({ tags: { $exists: true } })

//Task 2 — Find documents where "tags" 
//does NOT contain "ssl" or "security"
db.inventory.find({ tags: { $nin: ["ssl", "security"] } })

//Task 3 — Find documents where "qty" = 85
db.inventory.find({ qty: 85 })

//Task 4 — Find documents where "tags" contains ALL of
// ["ssl", "security"]
//we also can use and but all better fo array 
db.inventory.find({ tags: { $all: ["ssl", "security"] } })
db.inventory.find({
  $and: [
    { tags: "ssl" },
    { tags: "security" }
  ]
})

//Task 5 — Find documents where "tags" array has 
//exactly 3 elements
db.inventory.find({ tags: { $size: 3 } })

//Task 6a — Update "paper": set size.uom to "meter" 
//+ $currentDate + upsert
db.inventory.updateOne(
  { item: "paper" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { lastModified: true }
  },
  { upsert: true }
)
//upsert default is false

//Task 6a — Change filter to "laptopDevice" with upsert
db.inventory.updateOne(
  { item: "laptopDevice" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { lastModified: true }
  },
  { upsert: true }
)

//Task 6b — Add $setOnInsert with dataSource: "todayRegister"
db.inventory.updateOne(
  { item: "laptopDevice" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { lastModified: true },
    $setOnInsert: { dataSource: "todayRegister" }
  },
  { upsert: true }
)

//Task 6c — updateMany
db.inventory.updateMany(
  { item: "paper" },
  {
    $set: { "size.uom": "meter" },
    $currentDate: { lastModified: true }
  }
)

//Task 6d — replaceOne
db.inventory.replaceOne(
  { item: "paper" },
  {
    item: "paper",
    size: { uom: "meter", h: 8.5, w: 11 },
    qty: 100,
    status: "D"
  }
)
//Unlike $set, replaceOne replaces the entire document 

//Task 7 — Insert with wrong field names, then rename

db.inventory.insertOne({ neme: "Alice", ege: 25 })

db.inventory.updateOne(
  { neme: "Alice" },
  { $rename: { "neme": "name", "ege": "age" } }
)

//Task 8 — Remove a field using $unset

db.inventory.updateOne(
  { item: "paper" },
  { $unset: { qty: "" } }
)

//Task 9 — Use $inc, $min, $max, $mul
db.inventory.insertOne({
  _id: 200,
  item: "testProduct",
  salary: 3000,
  overtime: 500,
  age: 25,
  quantity: 10,
  price: 50
})
//$max on salary
db.inventory.updateOne(
  { _id: 200 },
  { $max: { salary: 5000 } }
)
//$min on overtime
db.inventory.updateOne(
  { _id: 200 },
  { $min: { overtime: 200 } }
)
//$inc on age
db.inventory.updateOne(
  { _id: 200 },
  { $inc: { age: 5 } }
)
//$mul on quantity and price
db.inventory.updateOne(
  { _id: 200 },
  { $mul: { quantity: 2, price: 1.5 } }
)

//Task 10 — Total revenue from sales between 2020-2023,
// sorted descending

db.sales.aggregate([
  {
    $match: {
      date: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2023-01-01")
      }
    }
  },
  {
    $group: {
      _id: "$product",
      totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
    }
  },
  {
    $sort: { totalRevenue: -1 }
  }
])

//Task 11 — Average salary per department from employees
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      averageSalary: { $avg: "$salary" }
    }
  }
])

//Task 12 — Max and Min likes per title from likes
db.likes.aggregate([
  {
    $group: {
      _id: "$title",
      maxLikes: { $max: "$likes" },
      minLikes: { $min: "$likes" }
    }
  }
])

