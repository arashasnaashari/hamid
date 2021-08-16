import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const data = await db.collection("Book").find().toArray();
  res.status(200).json(JSON.stringify(data));
  //   const term = req.query.term;
}
