import { useState } from "react";
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";

export function useFetchDashBoard() {
  const [products, setProducts] = useState([
    {
      name: "food1",
      price:350,
      img: food1,
    },
    {
      name: "food2",
      price:650,
      img: food2,
    },
    {
      name: "food3",
      price:150,
      img: food3,
    },
    {
      name: "food4",
      price:550,
      img: food4,
    },
    {
      name: "food5",
      price:350,
      img: food5,
    },

    {
      name: "food6",
      price:350,
      img: food6,
    },
    {
        name: "food7",
        price:350,
        img: food7,
      },
    {
      name: "food8",
      price:350,
      img: food5,
    },
    {
      name: "food9",
      price:350,
      img: food3,
    },
  ]);

  return [products, setProducts];
}