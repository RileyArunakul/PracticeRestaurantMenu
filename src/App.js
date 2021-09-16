import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MenuItems from "./components/Menu";
// import DryAssPasta from "./Images/DryAssPasta.jpg";
function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Dry Ass Pasta",
      category: "Pasta",
      description: "Pasta that is really dry and comes with no sauce",
      price: "7.99",
    },
    {
      id: 2,
      name: "Vegan Pasta",
      category: "Pasta",
      description: "Pasta but vegan",
      price: "14.99",
    },
    {
      id: 3,
      name: "Raw Lobster",
      category: "Seafood",
      description:
        "A large marine crustacean with a cylindrical body, stalked eyes, and the first of its five pairs of limbs modified as pincers",
      price: "27.99",
    },
    {
      id: 4,
      name: "Three Day Old Salmon",
      category: "Seafood",
      description:
        "Cheap because it's 3 days old and might give you food poisoning. Like russian roulette but salmon",
      price: "3.99",
    },
    {
      id: 5,
      name: "Fresh Salmon",
      category: "Seafood",
      description:
        "Salmon pan seared and definitely not microwaved. Served with rice",
      price: "18.99",
    },
    {
      id: 6,
      name: "Green Beans",
      category: "Sides",
      description: "They're just green beans",
      price: "3.99",
    },
    {
      id: 7,
      name: "French Fries",
      category: "Sides",
      description: "Not actually made by french people",
      price: "3.99",
    },
    {
      id: 8,
      name: "French Onion Soup",
      category: "Sides",
      description:
        "Like the french fries, also not actually made by french people",
      price: "5.99",
    },
  ]);

  return (
    <div className="container">
      <Header title="Dirty Dan's Dumpster Diner" />

      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default App;
