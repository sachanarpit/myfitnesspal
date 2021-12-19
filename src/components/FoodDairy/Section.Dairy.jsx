import { Link } from "react-router-dom";
import {
  ItemDelete,
  ItemLink,
  ItemName,
  ItemRow,
  ItemTime,
} from "./TableDairy";

export function SectionDairy() {
  return (
    <>
      <tbody>
        <tr className="table-secondary">
          <ItemTime>BreakFast</ItemTime>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <ItemRow>
          <ItemName className="table-secondary">Poha, 1 cup</ItemName>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td className="table-secondary">158</td>
          <td>
            <ItemDelete>❌</ItemDelete>
          </td>
        </ItemRow>
        <tr>
          <div>
            <ItemLink>
              <Link style={{ textDecoration: "none" }}>Add Food</Link> |{" "}
              <Link style={{ textDecoration: "none" }}>QuickTool</Link>
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
