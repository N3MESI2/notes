import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


dotenv.config();
const app = express();

app.use(express.json())

app.use("/api/notas" , notesRoutes)

const PORT = process.env.PORT || 3001

connectDB()
.then(() => {
  
  console.log(process.env.PORT);
  app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);

  });
})


