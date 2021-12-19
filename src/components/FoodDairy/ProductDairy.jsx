import axios from "axios";
import { useEffect, useState } from "react";
import { ItemDelete, ItemName, ItemRow } from "./TableDairy";

export function ProductDairy({ recipe, total, setTotal }) {
  const [dish, setDish] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2345/food/find?id=${recipe}`)
      .then((res) => setDish(res.data.food))
      .then((x) =>
        setTotal({
          calories: total.calories + parseInt(dish.Calories),
          carbs: 0,
          fat: 0,
          protein: 0,
          cholestrol: 0,
          sodium: 0,
          sugar: 0,
          fiber: 0,
        })
      );
  }, []);

  return (
    <>
      <ItemRow>
        <ItemName className="table-secondary">{dish.comment}</ItemName>
        <td className="table-secondary">{dish.Calories}</td>
        <td className="table-secondary">{dish.Carbohydrates}g</td>
        <td className="table-secondary">{dish.Fat}g</td>
        <td className="table-secondary">{dish.Protein}g</td>
        <td className="table-secondary">{dish.amount1}mg</td>
        <td className="table-secondary">{dish.Sodium}mg</td>
        <td className="table-secondary">{dish.Sugars}g</td>
        <td className="table-secondary">{dish.DietaryFiber}g</td>
        <td>
          <ItemDelete>❌</ItemDelete>
        </td>
      </ItemRow>
    </>
  );
}
