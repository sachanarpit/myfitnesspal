import styled from "styled-components";
import { Body1, Body2 } from "../../GlobalComp/Heading.Pages.Signup";

const ParentSelectForm3 = styled.div`
  width: 25.76866764275256vw;
  height: 13.447782546494993vh;
  border: 1px solid #0066ee;
`;

const ChildSelectForm3 = styled.div`
  margin-left: 1.3177159590043923vw;
`;

export const SelectForm3 = () => {
  return (
    <ParentSelectForm3>
      <ChildSelectForm3>
        <Body1>Not Very Active</Body1>
        <Body2>Spend most of the day sitting(e.g hello , skjfds , kdsf)</Body2>
      </ChildSelectForm3>
    </ParentSelectForm3>
  );
};
