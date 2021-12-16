import styled from "styled-components";

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
