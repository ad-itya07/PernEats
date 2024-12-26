import { MenuItem } from "../types/restaurantType.ts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemDetail = ({ menuItem, addToCart }: Props) => {
  return (
    <Card
      className="cursor-pointer border border-gray-300 shadow-md"
      onClick={addToCart}
    >
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItemDetail;
