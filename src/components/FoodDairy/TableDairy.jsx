import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Body2 } from "../GlobalComp/Heading.Pages.Signup";
import { SectionDairy } from "./Section.Dairy";

export const TableSec = styled.div`
  width: 942px;
`;

export const TableHead = styled.thead`
  background-color: rgba(0, 58, 135, 1);
  color: white;
  font-family: "NeueL";
  font-weight: 600;
  align-items: center;
  text-align: center;
`;

export const MainHeaderHead = styled.th`
  background-color: rgba(48, 129, 238, 1);
  color: white;
  width: 334px;
  align-items: left;
  text-align: left;
`;

export const ItemTime = styled.th`
  color: black;
  font-family: "NeueB";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const ItemName = styled.th`
  font-family: "NeueT";
  color: #222628;
  font-size: 12px;
  align-items: left;
  text-align: left;
`;
export const ItemRow = styled.tr`
  padding-bottom: -40px;
  align-items: center;
  text-align: center;
  font-family: "NeueSB";
`;

export const ItemLink = styled.th`
  text-decoration: none;
  color: #0066ee;
  font-family: "NeueL";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const ItemDelete = styled.div`
  background-color: white;
  cursor: pointer;
`;

export function TableDairy({ componentRef }) {
  const [total, setTotal] = useState({
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    cholestrol: 0,
    sodium: 0,
    sugar: 0,
    fiber: 0,
  });

  console.log(total);
  return (
    <TableSec className="table-responsive" ref={(el) => (componentRef = el)}>
      <center>
        <table className="table  table-hover table-borderless">
          <TableHead>
            <tr>
              <MainHeaderHead scope="col">FOODS</MainHeaderHead>
              <th scope="col">Calories</th>
              <th scope="col">Carbs (g)</th>
              <th scope="col">Fat (g)</th>
              <th scope="col">Protein (g)</th>
              <th scope="col">Cholesterol (mg)</th>
              <th scope="col">Sodium (mg)</th>
              <th scope="col">Sugar (g)</th>
              <th scope="col">Fiber (g)</th>
            </tr>
          </TableHead>

          <SectionDairy total={total} setTotal={setTotal} type={"breakfast"} />
          <SectionDairy total={total} setTotal={setTotal} type={"lunch"} />
          <SectionDairy total={total} setTotal={setTotal} type={"dinner"} />
          <SectionDairy total={total} setTotal={setTotal} type={"snacks"} />

          <br />
          <br />
          <tfoot className="table-bordered table-secondary">
            <ItemRow>
              <th>Total</th>
              <td>5211</td>
              <td>451</td>

              <td>44</td>
              <td>21</td>
              <td>1</td>
              <td>152</td>

              <td>12</td>
              <td>52</td>
            </ItemRow>
            <ItemRow>
              <th>Total Dairy Goal</th>
              <td>521</td>
              <td>41</td>

              <td>15</td>
              <td>232</td>
              <td>32</td>
              <td>12</td>

              <td>21</td>
              <td>10</td>
            </ItemRow>
            <ItemRow>
              <th>Remaining</th>
              <td>20.</td>
              <td>20</td>

              <td>54</td>
              <td>51</td>
              <td>51</td>
              <td>13</td>

              <td>21</td>
              <td>10</td>
            </ItemRow>
          </tfoot>
        </table>
      </center>
    </TableSec>
  );
}
