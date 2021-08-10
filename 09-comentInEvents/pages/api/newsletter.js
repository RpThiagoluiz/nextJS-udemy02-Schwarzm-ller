import { connectDatabase, insertDocument } from "../../helpers/db-util";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      return res.status(422).json({ message: "Invalid email address" });
    }

    //transformar em Async/Await
    // MongoClient.connect(
    //   ``
    // ).then((client) => {
    //   const db = client.db();
    //   //Insert JS obj
    //   return db.collection("emails").insertOne({ email: userEmail });
    // });

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed !" });
      return;
      //previnir a execucao da funcao.
      //nao precisa da o close, porq o client nunca vai ter conectado. somente no bloco de baixo.
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
      return;
    }

    res.status(201).json({
      message: "Signed Up!",
    });
  }
};

export default handler;
