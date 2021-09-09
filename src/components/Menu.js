import MenuItem from "./MenuItems";
const MenuItems = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default MenuItems;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const typeFruit = [];
for (i = 0; i < fruits.length; i++) {
  if (!typeFruit.includes(fruits[i])) {
    typeFruit.push(fruits[i]);
  }
}
