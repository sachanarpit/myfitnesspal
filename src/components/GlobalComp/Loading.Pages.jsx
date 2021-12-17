import styled from "styled-components";
import { Heading1 } from "./Heading.Pages.Signup";

const CenterDiv = styled.div`
  margin-top: 40vh;
`;

export const LoaderComp = () => {
  return (
    <div>
      <center>
        <CenterDiv>
          <img src="/loading.gif" alt="" />
        </CenterDiv>
      </center>
    </div>
  );
};

export const CrackerComp = () => {
  return (
    <div>
      <center>
        <CenterDiv style={{ marginTop: 40 }}>
          <img src="/cracker.gif" alt="" />
          <Heading1>
            Congratulation your account is succesfully created
          </Heading1>
        </CenterDiv>
      </center>
    </div>
  );
};
