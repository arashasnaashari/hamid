import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  try {
    const data = await db
      .collection("users")
      .insertOne({ name: req.body.name });

    res.status(200).json({ data: data.insertedId });
  } catch (e) {
    res.status(200).json({ data: "error" });
  }
}
