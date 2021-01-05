import { MongoClient } from 'mongodb';
const url = `mongodb+srv://dbuser:pa55w0rd2019@cluster0.2n8ue.mongodb.net/kicasdb?retryWrites=true&w=majority` || `mongodb://localhost:27017/kicasorganizer`;
let db = null;

export async function connectDB() {
    if (db) return db;

    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.info("Got DB", db);
    return db;
}

// connectDB();