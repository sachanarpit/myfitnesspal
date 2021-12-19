import React from "react";
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

export function TableDairy() {
  return (
    <TableSec className="table-responsive">
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

          <SectionDairy type={"breakfast"} />
          <SectionDairy />
          <SectionDairy />
          <SectionDairy />

          <br />
          <br />
          <tfoot className="table-bordered">
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>

              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
          </tfoot>
        </table>
      </center>
    </TableSec>
  );
}
