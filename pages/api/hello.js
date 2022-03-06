// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ConnectToDataBase } from "../../server/db/connect";

export default async function handler(req, res) {
  await ConnectToDataBase();
  switch (req.method) {
    case "GET": {
      return res.status(200).json({ name: "John Doe" });
    }

    case "POST": {
      return res.status(200).json({ name: "John Doe" });
    }

    case "PUT": {
      return res.status(200).json({ name: "John Doe" });
    }

    case "DELETE": {
      return res.status(200).json({ name: "John Doe" });
    }
  }
}
