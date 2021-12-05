import React, { Component } from "react";

export class InitializeItem extends Component {
  render() {
    const myStore = [
      {
        id: "0",
        src: "../assets/images/aspirin.jpg",
        onSale: false,
        name: "Aspirn",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "1",
        src: "../assets/images/advil.jpg",
        onSale: false,
        name: "Advil",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "2",
        src: "../assets/images/rennie.jpg",
        onSale: false,
        name: "Rennie",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "3",
        src: "../assets/images/mucosolvan.jpg",
        onSale: false,
        name: "Mucosolvan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "4",
        src: "../assets/images/mobic.jpg",
        onSale: false,
        name: "Mobic",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "5",
        src: "../assets/images/voltaren.jpg",
        onSale: false,
        name: "Voltaren Gel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "6",
        src: "../assets/images/brufen.jpg",
        onSale: false,
        name: "Brufen",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "7",
        src: "../assets/images/migraine.jpg",
        onSale: false,
        name: "Migraine Relief",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "8",
        src: "../assets/images/PanadolAllInOne.png",
        onSale: false,
        name: "Panadol Advance",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },

      {
        id: "9",
        src: "../assets/images/nutra-c.jpg",
        onSale: true,
        name: "Nutra-c",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "10",
        src: "../assets/images/omega3.jpg",
        onSale: true,
        name: "Omega-3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        quantity: 1,
        price: "20",
      },
      {
        id: "11",
        src: "../assets/images/iron.jpg",
        onSale: true,
        name: "Iron",
        quantity: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicingl",
        price: "38 JD",
      },
    ];
    if (!localStorage.getItem("itemVariables")) {
      localStorage.setItem("itemVariables", JSON.stringify(myStore));
    }
    else{
      localStorage.setItem("itemVariables1", JSON.stringify(myStore));

    }
    return <div></div>;
  }
}

export default InitializeItem;
