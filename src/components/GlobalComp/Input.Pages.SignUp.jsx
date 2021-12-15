import styled from "styled-components";

const RadioLabel = styled.label`
  font-family: "NeueSB";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const InputWeight = styled.input`
  width: 10.273792093704246vw;
  height: 6.725321888412017vh;
  font-size: 1.171303074670571vw;
  font-family: "NeueSB";
  padding-top: 2.2889842632331905vh;
  padding-bottom: 2.2889842632331905vh;
  padding-right: 1.4033674963396778vw;
  padding-left: 1.3177159590043923vw;
  color: rgba(34, 38, 40, 0.6);
  border: 1px solid rgba(34, 38, 40, 0.4);
  border-radius: 4px;
  transition: 0.2s ease-out;

  ::placeholder {
    padding-left: 5.8vw;
  }
  &:focus {
    outline: 2px solid #005bd4;
    border: 1px solid transparent;
  }
`;

const InputWide = styled.input``;

export const RadioBtn = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
    </div>
  );
};

export const WeightInput = ({ placeholder }) => {
  return (
    <>
      <InputWeight type="text" name="" id="" placeholder={placeholder} />
    </>
  );
};

export const WideInput = ({ placeholder, typeInput }) => {
  return (
    <>
      <InputWide />
    </>
  );
};
