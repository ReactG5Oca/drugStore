import React, { Component } from "react";

export class InitializeItem extends Component {
  render() {
    const myStore = [
      {
        id: "0",
        src: "../assets/images/aspirin.jpg",
        onSale: false,
        name: "Aspirn",
        description: " Prevent heart attacks",
        quantity: 1,
        price: "2.03",
      },
      {
        id: "1",
        src: "../assets/images/advil.jpg",
        onSale: false,
        name: "Advil",
        description: "Pain relief and reduce fever",
        quantity: 1,
        price: "2.00",
      },
      {
        id: "2",
        src: "../assets/images/rennie.jpg",
        onSale: false,
        name: "Rennie",
        description: " Relief indigestion & heartburn ",
        quantity: 1,
        price: "2.46",
      },
      {
        id: "3",
        src: "../assets/images/mucosolvan.jpg",
        onSale: false,
        name: "Mucosolvan",
        description: "Wet cough & clears the airways",
        quantity: 1,
        price: "2.79",
      },
      {
        id: "4",
        src: "../assets/images/mobic.jpg",
        onSale: false,
        name: "Mobic",
        description: " Relief rheumatoid arthritis",
        quantity: 1,
        price: "2.18",
      },
      {
        id: "5",
        src: "../assets/images/voltaren.jpg",
        onSale: false,
        name: "Voltaren Gel",
        description: "Relief osteoarthritis's pain",
        quantity: 1,
        price: "3.00",
      },
      {
        id: "6",
        src: "../assets/images/brufen.jpg",
        onSale: false,
        name: "Brufen",
        description: "Treat rheumatoid arthritis ",
        quantity: 1,
        price: "2.34",
      },
      {
        id: "7",
        src: "../assets/images/migraine.jpg",
        onSale: false,
        name: "Migraine Relief",
        description: "Relief migraine attacks",
        quantity: 1,
        price: "16.00",
      },
      {
        id: "8",
        src: "../assets/images/PanadolAllInOne.png",
        onSale: false,
        name: "Panadol Advance",
        description: "Tension headaches & Fever",
        quantity: 1,
        price: "1.18",
      },

      {
        id: "9",
        src: "../assets/images/nutra-c.jpg",
        onSale: true,
        name: "Nutra-c",
        description: "Boost immune system",
        quantity: 1,
        price: "12.75",
      },
      {
        id: "10",
        src: "../assets/images/omega3.jpg",
        onSale: true,
        name: "Omega-3",
        description: "Reduce heart's disease risk",
        quantity: 1,
        price: "16.50",
      },
      {
        id: "11",
        src: "../assets/images/iron.jpg",
        onSale: true,
        name: "Iron",
        quantity: 1,
        description: "Treat or prevent anemia ",
        price: "12.25",
      },
      {
        id: "12",
        src: "../assets/images/panadolvapor.jpg",
        onSale: false,
        name: "Panadol Vapor Release",
        description: "Headache, Colds & Influenza",
        quantity: 1,
        price: "3.45",
      },
      {
        id: "13",
        src: "../assets/images/panadoljoint.jpg",
        onSale: false,
        name: "Panadol Joint",
        description: "Headache  & Joint Pain",
        quantity: 1,
        price: "2.18",
      },
      {
        id: "14",
        src: "../assets/images/PanadolColdandflu.png",
        onSale: false,
        name: "Panadol Cold&Flu",
        description: "Headache, Colds & Influenza",
        quantity: 1,
        price: "2.75",
      },
    ];
    if (!localStorage.getItem("itemVariables")) {
      localStorage.setItem("itemVariables", JSON.stringify(myStore));
    } else {
      localStorage.setItem("itemVariables1", JSON.stringify(myStore));
    }
    return <div></div>;
  }
}

export default InitializeItem;
