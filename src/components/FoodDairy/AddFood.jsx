import styled from "styled-components";
import { Body1 } from "../GlobalComp/Heading.Pages.Signup";
import Logobar from "../Home-Page/Dailysummary/Logobar";
import { NavbarWithhome } from "../Home-Page/Dailysummary/Navbar_withhome";
import { NavbarWithhome1 } from "../Home-Page/Dailysummary/Navbar_withhome1";
import { TableDairy } from "./TableDairy";

const CalederDairyImg = styled.img`
  width: 276px;
  height: 86px;
  margin-left: -650px;
  cursor: pointer;
`;

const WaterConsumption = styled.img`
  height: 250px;
  width: 448px;
  margin-right: -280px;
`;

const NoteDairy = styled.img`
  height: 220px;
  width: 370px;
  margin-left: -250px;
  cursor: pointer;
`;

const ComE = styled.img`
  width: 214px;
  height: 54px;
  margin-right: -400px;
  cursor: pointer;
`;

const VieR = styled.img`
  width: 214px;
  height: 54px;
  margin-left: -400px;
  cursor: pointer;
`;

export function AddFoodDairy() {
  return (
    <div>
      <Logobar name={"arpit"} />
      <NavbarWithhome />
      <NavbarWithhome1 />
      <center>
        <div>
          <div>
            <CalederDairyImg src="/fooddate.png" alt="" />
          </div>
          <TableDairy />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <br />
              <WaterConsumption src="/wate.png" alt="" />
            </div>
            <div className="col-2"></div>
            <div className="col-5">
              <br />
              <NoteDairy src="/note.png" alt="" />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <Body1>
              When you’re finished logging all foods, water and excercise for
              this day, click here :
            </Body1>
          </div>
          <div className="row">
            <div className="col">
              <ComE src="/btn1.png" alt="" />
            </div>
            <div className="col">
              <VieR src="/btn2.png" alt="" />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}
