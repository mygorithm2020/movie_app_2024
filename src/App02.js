// import logo from './logo.svg';
// import './App.css';
import React from "react";
import PropTypes from 'prop-types';


function Food({name, picture, rating}) {
  console.log(name);
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}/>
    </div>
  );
}

Food.prototype = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

const foodILike = [
  {
    rating: 5,
    id : 1,
    name : "kimchi",
    image : "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg"
  },
  {
    rating: 4.9,
    id : 2,
    name : "Samgyeopsal",
    image : "https://dimg.donga.com/wps/NEWS/IMAGE/2023/05/12/119255016.1.jpg"
  },
  {
    rating: 3.9,
    id : 3,
    name : "Bibimbap",
    image : "https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp"
  },
  {
    rating: 2.5,
    id : 4,
    name : "Doncasu",
    image : "https://img.freepik.com/free-photo/eagle-flying-in-the-sky_23-2150536600.jpg"
  },
  {
    rating: 4.1,
    id : 5,
    name : "Kimbap",
    image : "https://kid.chosun.com/site/data/img_dir/2023/02/19/2023021901052_0.jpg"
  },
];

function renderFood(dish){
  return <Food name = {dish.name} picture={dish.image} />;
}

function App() {

  // return <div className="App" />;
  return (
  <div>
    <h1>Helllo</h1>
    {foodILike.map(dish => (<Food key={dish.id} name = {dish.name} image={dish.image} rating={dish.rating} />))}
    
    
  </div>
  );
}

export default App;
