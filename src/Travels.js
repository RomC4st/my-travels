import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination:"Mexico",
    country: "Mexique",
    distance:"9195km",
    photo:"https://www.telegraph.co.uk/content/dam/Travel/2016/September/mexico-hub-AP-TRAVEL.jpg?imwidth=400",
  },
  {
    destination: "Venise",
    country: "Italie",
    distance:"1111.7km",
    photo:"https://www.cap-voyage.com/wp-content/uploads/2015/08/Hotel-Kette-Venise-Italie.jpg?imwidth=400",
  },
  {
    destination: "Berlin",
    country: "Allemagne",
    distance:"1054.7km",
    photo:"http://www.electronicbeats.net/app/uploads/2018/04/berghain-1240x710.jpg?imwidth=400",
  },
  {
    destination:"Lausanne",
    country:"Suisse",
    distance:"518.0km",
    photo:"http://s1.lprs1.fr/images/2017/04/28/6897213_1-0-1338136994_1000x625.jpg?imwidth=400",
  },
  {
    destination:"Madrid",
    country:"Espagne",
    distance:"1275.3km",
    photo:"https://cdn.getyourguide.com/img/tour_img-440052-148.jpg?imwidth=400",
  }

];

const Travels = () => (
  <div>
    {travels.map((travel, index) => 
  <Travel key={index} {...travel}/>                                    
  )}
  </div>
);

export default Travels;

