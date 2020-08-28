import React from "react";
import "./styles.css";

function CardComponent(props) {
  const { active, imageURL, name, designation, btnTxt } = props.data;

  return (
    <div className={active ? "card active" : "card"}>
      <img src={imageURL} alt="" />
      <h4>{name}</h4>
      <small>{designation}</small>
      <button>{btnTxt}</button>
    </div>
  );
}

export default function App() {
  const detailsArr = [
    {
      imageURL: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Myrtie May",
      designation: "Head of Global Product",
      active: false,
      btnTxt: "Connect"
    },
    {
      imageURL: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Michael Pearson",
      designation: "Sales Manager",
      active: true,
      btnTxt: "Connect"
    },
    {
      imageURL: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Laura French",
      designation: "External Consultant",
      active: false,
      btnTxt: "Connect"
    }
  ];

  return (
    <div className="cards">
      {detailsArr.map((data) => (
        <CardComponent data={data} key={data.name} />
      ))}
    </div>
  );
}
