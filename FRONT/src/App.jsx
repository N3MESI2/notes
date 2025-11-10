import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";

function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-3.5">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/createNote"
          element={<CreateNotePage></CreateNotePage>}
        ></Route>
        <Route
          path="/editNote/:id"
          element={<EditNotePage></EditNotePage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
