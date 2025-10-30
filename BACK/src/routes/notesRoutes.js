import express from "express";  
import Note from "../models/notesModel.js";
const router = express.Router();

// Obtener todas las notas
router.get("/",() => {
  console.log("Enviando las notas");
})

// Obtener una nota por id
router.get("/:id", (req, res) => {
  const id = req.params.id
  console.log(id);
  console.log("Enviando una nota por id");
})

// Crear una nueva nota
router.post("/", async (req, res) => {
    try {
       const { title, description } = req.body
       const note = new Note({ title, description})
       
       const savedNote = await note.save()

       if (savedNote) {
            res.status(201).json({ message: "Nota creada correctamente", note: savedNote})
       }

    } catch (error) {
      console.error("Error al crear una nueva nota:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
})


// Eliminar una nota por id 
router.delete("/:id", (req, res) => {
  const id = req.params.id
  console.log("Eliminar una nota " + id);

})

// Editar una nota por id
router.put("/:id", (req, res) => {
  const id = req.params.id
  const updatedData = req.body
  console.log("Se edito la nota " + id);
  console.log(updatedData);
})


export default router