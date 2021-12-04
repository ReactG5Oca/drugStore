import React, { Component } from "react";

export class InitializeItem extends Component {
  render() {
    const myStore = [
      {
        id: "0",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "1",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "2",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "3",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "4",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "5",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        Name: "haneen1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "6",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "7",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "haneen1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "8",
        src: "../assets/images/omega3.jpg",
        onSale: false,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },

      {
        id: "9",
        src: "../assets/images/omega3.jpg",
        onSale: true,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "10",
        src: "../assets/images/omega3.jpg",
        onSale: true,
        name: "Panadol",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "20",
      },
      {
        id: "11",
        src: "../assets/images/omega3.jpg",
        onSale: true,
        name: "Jogger SweatPants",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "38 JD",
      },
    ];
    localStorage.setItem("itemVariables", JSON.stringify(myStore));
    return <div></div>;
  }
}

export default InitializeItem;
