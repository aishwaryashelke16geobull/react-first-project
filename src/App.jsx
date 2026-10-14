import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const initialPeople = [
  { id: 1, name: "Rahul", city: "Pune", hobby: "Cricket" },
  { id: 2, name: "Priya", city: "Mumbai", hobby: "Painting" },
  { id: 3, name: "Amit", city: "Delhi", hobby: "Music" },
];

function App() {
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("people");
    return saved ? JSON.parse(saved) : initialPeople;
  });

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  function addPerson(newPerson) {
    setPeople([...people, { id: Date.now(), ...newPerson }]);
  }

  function removePerson(id) {
    setPeople(people.filter((person) => person.id !== id));
  }

  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/team"
            element={
              <Team
                people={people}
                onAdd={addPerson}
                onRemove={removePerson}
              />
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;