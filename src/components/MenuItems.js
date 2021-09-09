const MenuItem = ({ menuItem }) => {
  return (
    <div className="menuItem">
      <h4>{menuItem.name}</h4>
      <p>{menuItem.description}</p>
      <p2 style={{ color: "darkgreen", fontStyle: "italic" }}>
        {"$" + menuItem.price}
      </p2>
    </div>
  );
};

export default MenuItem;
