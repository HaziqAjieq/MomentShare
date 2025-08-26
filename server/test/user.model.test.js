import User from "../models/user.model.js";

User.createTable()
  .then(() => {
    console.log('created success');
    process.exit(0);
  })
  .catch((error) => {
     console.error("❌ Error:", error.message);
    process.exit(1);
  })
