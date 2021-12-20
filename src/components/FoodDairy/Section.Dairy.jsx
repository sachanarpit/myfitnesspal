import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDairy } from "./ProductDairy";
import {
  ItemDelete,
  ItemLink,
  ItemName,
  ItemRow,
  ItemTime,
} from "./TableDairy";

export function SectionDairy({ type, total, setTotal }) {
  const [data, setData] = useState([]);
  let key = "Fred";
  useEffect(() => {
    axios
      .get(
        `https://salty-hamlet-78204.herokuapp.com/list/user?key=${key}&cat=${type}`
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <tbody>
        <tr className="table-secondary">
          <ItemTime>{type}</ItemTime>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        {data.map((sa) => (
          <ProductDairy
            total={total}
            setTotal={setTotal}
            key={sa._id}
            recipe={sa.foodId}
          />
        ))}

        <tr>
          <div>
            <ItemLink>
              <Link
                to={{
                  pathname: "/search",
                  state: type, // your data array of objects
                }}
                style={{ textDecoration: "none" }}
              >
                Add Food
              </Link>{" "}
              | <Link style={{ textDecoration: "none" }}>QuickTool</Link>
            </ItemLink>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </div>
        </tr>
      </tbody>
    </>
  );
}
