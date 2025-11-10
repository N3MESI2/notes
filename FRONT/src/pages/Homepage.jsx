import { use } from "react"
import CardNote from "../components/CardNote"
import axios from "axios"
const apiURL = import.meta.env.VITE_API_URL

const Homepage = () => {
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/api/notes`)

      } catch (error) {
        console.error(error)
      }
    }

  }, [])
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4  xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
    
      <CardNote></CardNote>
      <CardNote></CardNote>
      <CardNote></CardNote>
      <CardNote></CardNote>
    </div>
  )
}

export default Homepage;
