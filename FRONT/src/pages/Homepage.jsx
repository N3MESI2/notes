import { useEffect, useState } from "react"
import CardNote from "../components/CardNote"
import axios from "axios"
const apiURL = import.meta.env.VITE_API_URL
import formatData from "../utils/formatDate"

const Homepage = () => {
  const [ notes, setNotes ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchData = async () => {  
      try {
        const response = await axios.get(`${apiURL}/api/notes`)
        console.log(response)
        setNotes(response.data)
        setLoading(false)
        console.log(response)

      } catch (error) {
        console.error(error)
      }
    } 

    fetchData() 
  }, [])

  const handleEdit = (id) => {
    // de momento, solo log:
      console.log("Editar nota", id);

    // si tenés ruta de edición:
    // navigate(`/edit/${id}`);
  };

  // 👇 handler para eliminar
    const handleDelete = async (id) => {
      try {
        await axios.delete(`${apiURL}/api/notes/${id}`);
      // actualizamos el estado quitando la nota eliminada
        setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error eliminando nota", error);
    }
  };

  if(loading) return <span>Cargando...</span>


  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4  xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">

      {notes.map((note) => (
        <CardNote 
        key={note._id}
        title={note.title}
        description={note.description}
        id={note._id}
        date={formatData(note.createdAt)}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default Homepage;
