import CardNote from "../components/CardNote";

const Homepage = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-4 mt-16 xl:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
    
      <CardNote></CardNote>
      <CardNote></CardNote>
      <CardNote></CardNote>
      <CardNote></CardNote>
    </div>
  )
}

export default Homepage;
