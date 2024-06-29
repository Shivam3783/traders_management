// const { MongoClient } = require('mongodb');

// async function main() {
//   const uri = "mongodb+srv://shivamspatel21:Shivam123@cluster0.d7lvksl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas!");

//     const database = client.db("myNewDatabase"); // Replace with your database name
//     const collection = database.collection("myNewCollection"); // Replace with your collection name

//     console.log("Database and collection created!");

//     // Optional: Insert a document to verify the connection and creation
//     const doc = { name: "test document" };
//     const result = await collection.insertOne(doc);
//     console.log(`Inserted document with _id: ${result.insertedId}`);

//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);
