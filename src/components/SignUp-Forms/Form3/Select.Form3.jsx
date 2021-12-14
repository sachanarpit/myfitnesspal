import "./style.css";

import styled from "styled-components";
import { Body1, Body2 } from "../../GlobalComp/Heading.Pages.Signup";

const ParentSelectForm3 = styled.div`
  width: 25.76866764275256vw;
  height: 13.447782546494993vh;
  border: 1px solid #0066ee;
  border-radius: 4px;
  &:active {
    color: rgba(0, 102, 238, 1);
  }
`;

const ChildSelectForm3 = styled.div`
  margin-left: 1.3177159590043923vw;
  margin-right: 0.6588579795021962vw;
`;

export const SelectForm3 = ({ heading, para, status }) => {
  return (
    <ParentSelectForm3>
      <ChildSelectForm3>
        {status === true ? (
          <Body1 id="heading">{heading}</Body1>
        ) : (
          <Body1>{heading}</Body1>
        )}

        <Body2 id="para">{para}</Body2>
      </ChildSelectForm3>
    </ParentSelectForm3>
  );
};
