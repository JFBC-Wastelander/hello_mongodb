const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://jfbimcopinski:9mt25as6hndFd83K@cluster0.qfxkx.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("Conexão realizada com sucesso."))
  .catch((err) => console.log(err));

module.exports = mongoose;
