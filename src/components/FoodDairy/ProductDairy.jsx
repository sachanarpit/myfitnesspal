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
        <td className="table-secondary">{Number(dish.Calories).toFixed(1)}</td>
        <td className="table-secondary">
          {Number(dish.Carbohydrates).toFixed(1)}g
        </td>
        <td className="table-secondary">{Number(dish.Fat).toFixed(1)}g</td>
        <td className="table-secondary">{Number(dish.Protein).toFixed(1)}g</td>
        <td className="table-secondary">{Number(dish.amount1).toFixed(1)}mg</td>
        <td className="table-secondary">{Number(dish.Sodium).toFixed(1)}mg</td>
        <td className="table-secondary">{Number(dish.Sugars).toFixed(1)}g</td>
        <td className="table-secondary">
          {Number(dish.DietaryFiber).toFixed(1)}g
        </td>
        <td>
          <ItemDelete>❌</ItemDelete>
        </td>
      </ItemRow>
    </>
  );
}
