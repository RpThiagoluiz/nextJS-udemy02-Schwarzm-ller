import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_LINK_EVENTS
  );
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
};

export async function newgetAllDocuments(
  client,
  collection,
  sort = { _id: -1 },
  filter = {}
) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter) // this changed - we use the "filter" parameter!
    .sort(sort)
    .toArray();

  return documents;
}

export async function getAllDocuments(client, collection, filter = {}, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
