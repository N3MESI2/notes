import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
