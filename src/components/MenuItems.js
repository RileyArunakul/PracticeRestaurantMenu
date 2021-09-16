import PropTypes from "prop-types";
import Button from "./Button";
import Image from "./Image";

const MenuItem = ({ menuItem }) => {
  return (
    <body className="menuItem">
      <h4 style={{ color: "darkgreen", fontStyle: "italic" }}>
        {menuItem.name}{" "}
        {/* <Button
          color="lightgreen"
          text="Show Image"
          align="right"
          onClick={Image}
        /> */}
      </h4>
      <p>{menuItem.description}</p>
      <p2 style={{ color: "green", fontStyle: "italic" }}>
        {"$" + menuItem.price}
      </p2>
    </body>
  );
};

export default MenuItem;
