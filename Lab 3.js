//Task 1 — JSON Schema Validation for employees collection
db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age", "department"],
            properties: {
                name: { bsonType: "string" },
                age: {
                    bsonType: ["int", "double"],  // ← accept both number types
                    minimum: 18,
                    description: "must be >= 18"
                },
                department: {
                    bsonType: "string",
                    enum: ["HR", "Engineering", "Finance"]
                }
            }
        }
    },
    validationAction: "error"
})

//test
// This MUST fail now
db.employees.insertOne({ name: "Ali", age: 16, department: "HR" })

// This MUST succeed
db.employees.insertOne({ name: "Ali", age: 25, department: "HR" })

//✅ Task 2 — Create Database Demo + Collections 
//+ Insert Documents

use Demo
var data = [
  {
    _id: 1,
    name: { firstName: "Ahmed", lastName: "Ali" },
    age: 25,
    address: "Cairo",
    status: ["active", "verified"]
  },
  {
    _id: 2,
    name: { firstName: "Sara", lastName: "Mohamed" },
    age: 30,
    address: "Alex",
    status: ["active"]
  },
  {
    _id: 3,
    name: { firstName: "Omar", lastName: "Hassan" },
    age: 22,
    address: "Giza",
    status: ["inactive"]
  }
]

 //Create Collections + insertOne into trainingCenter1
 db.trainingCenter1.insertOne(data)
 //wrapped entire array as one document and gave it a new _id
 
 //insertMany into trainingCenter2
 db.trainingCenter2.insertMany(data)
 
 
 //Task 3 — find().explain() BEFORE Index
 db.trainingCenter1.find({ age: 25 }).explain("executionStats")
 
 //Task 4 immediately after — create the index:
 db.trainingCenter1.createIndex({ age: 1 }, { name: "IX_age" })
 
 //Then Task 5 — same find but AFTER index:
 db.trainingCenter1.find({ age: 25 }).explain("executionStats")
 
 //Task 6 — Compound Index
 db.trainingCenter1.find({ 
  "name.firstName": "Ahmed", 
  "name.lastName": "Ali" 
}).explain("executionStats")

// Create the compound index:
db.trainingCenter1.createIndex(
  { "name.firstName": 1, "name.lastName": 1 },
  { name: "compound" }
)

//explain() AFTER compound index:
db.trainingCenter1.find({ 
  "name.firstName": "Ahmed", 
  "name.lastName": "Ali" 
}).explain("executionStats")



