import React from "react";
import Product from "../components/Product";

const products = [
  {
    id: "1",
    title: "Pizza",
    price: 1000,
    imageUrl: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  },

  {
    id: "2",
    title: "Salat",
    price: 1200,
    imageUrl: "https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060__340.jpg",
    desc:
      "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
  }
];

export default function Store() {
  return (
    <main>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
