import React from "react";
import './App.css';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Header from "./components/Header";
import DetailProps from "./components/DetailProps";
import NotFound from "./routes/NofFound";

// interface RoutesProps {
//   children?: React.ReactNode;
//   location?: Partial<Location> | string;
// }

function App() {
  return (
    
    <HashRouter>
      <Header />
      <Navigation state = "sdsd" />
      <Routes>
        <Route exact path="/"  Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/movie-detail" Component={DetailProps} />
        <Route path="*" element={<Navigate replace to="/"/>}/>      
      </Routes>      
      

    </HashRouter>
  )
}

export default App;