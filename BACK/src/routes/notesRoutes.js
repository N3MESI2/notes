import express from "express";  
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
router.post("/", (req, res) => {
    const {title , description} = req.body
    console.log(req.body);
    console.log(title, description);

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