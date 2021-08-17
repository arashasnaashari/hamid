import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  //   const data = await db
  //     .collection("Book")
  //     .aggregate([
  //       {
  //         $search: {
  //           search: {
  //             query: req.body.name,
  //             path: ["name"],
  //           },
  //         },
  //       },
  //       {
  //         $limit: 20,
  //       },
  //     ])
  //     .toArray();

  const data = await db
    .collection("users")
    .find(
      {
        name: {
          $regex: new RegExp(".*" + req.body.name + ".*", "i"),
        },
      },
      { name: 1 }
    )
    .toArray();

  //   console.log(req.body.name);
  res.status(200).json({ data: data });
}
