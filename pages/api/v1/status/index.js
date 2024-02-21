import database from "../../../../infra/database.js";
async function status(request, response) {
  const result = await database.query("SELECT 66 + 56.5;");
  console.log(result);
  response.status(200).json({ chave: result });
}

export default status;