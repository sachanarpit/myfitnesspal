import React from "react";
import styled from "styled-components";
import { Body2 } from "../GlobalComp/Heading.Pages.Signup";

const TableSec = styled.div`
  width: 942px;
  height: 636px;
`;

const TableHead = styled.thead`
  background-color: rgba(0, 58, 135, 1);
  color: white;
  font-family: "NeueL";
  font-weight: 600;
  align-items: center;
  text-align: center;
`;

const MainHeaderHead = styled.th`
  background-color: rgba(48, 129, 238, 1);
  color: white;
  width: 334px;
  align-items: left;
  text-align: left;
`;

export function TableDairy() {
  return (
    <TableSec className="table-responsive">
      <center>
        <table className="table table-striped table-hover table-borderless">
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
          <tbody>
            <tr>
              <th>BreakFast</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="table-active">
              <td>hellofds</td>
              <td>fdsfjksjaf</td>
              <td>dfsafsa</td>
              <td>fsdafas</td>
              <td>fsdved</td>
              <td>veaw</td>
              <td>ewva</td>
              <td>ewfv</td>
              <td>efw</td>
            </tr>
            <tr>Add Food | Quick Tool</tr>
          </tbody>
          <tbody>
            <tr>
              <th>BreakFast</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="table-active">
              <td>hellofds</td>
              <td>fdsfjksjaf</td>
              <td>dfsafsa</td>
              <td>fsdafas</td>
              <td>fsdved</td>
              <td>veaw</td>
              <td>ewva</td>
              <td>ewfv</td>
              <td>efw</td>
            </tr>
            <tr>Add Food | Quick Tool</tr>
          </tbody>
          <tbody>
            <tr>
              <th>BreakFast</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="table-active">
              <td>hellofds</td>
              <td>fdsfjksjaf</td>
              <td>dfsafsa</td>
              <td>fsdafas</td>
              <td>fsdved</td>
              <td>veaw</td>
              <td>ewva</td>
              <td>ewfv</td>
              <td>efw</td>
            </tr>
            <tr>Add Food | Quick Tool</tr>
          </tbody>
          <tbody>
            <tr>
              <th>BreakFast</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="table-active">
              <td>hellofds</td>
              <td>fdsfjksjaf</td>
              <td>dfsafsa</td>
              <td>fsdafas</td>
              <td>fsdved</td>
              <td>veaw</td>
              <td>ewva</td>
              <td>ewfv</td>
              <td>efw</td>
            </tr>
            <tr>Add Food | Quick Tool</tr>
          </tbody>
          <tbody>
            <tr>
              <th>BreakFast</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr className="table-active">
              <td>hellofds</td>
              <td>fdsfjksjaf</td>
              <td>dfsafsa</td>
              <td>fsdafas</td>
              <td>fsdved</td>
              <td>veaw</td>
              <td>ewva</td>
              <td>ewfv</td>
              <td>efw</td>
            </tr>
            <tr>Add Food | Quick Tool</tr>
          </tbody>

          <tfoot className="table-bordered">
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
            <tr>
              <th>hello</th>
              <td>fdhsakfjas</td>
              <td>fdsajkfa</td>
            </tr>
          </tfoot>
        </table>
      </center>
    </TableSec>
  );
}
