import styled from "styled-components";

const RadioLabel = styled.label`
  font-family: "NeueSB";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const InputWeight = styled.input`
  width: 9.077598828696924vw;
  height: 3.1473533619456364vh;
  font-size: 1.171303074670571vw;
  padding-top: 2.2889842632331905vh;
  padding-bottom: 2.2889842632331905vh;
  padding-right: 1.9033674963396778vw;
  padding-left: 1.3177159590043923vw;
  color: rgba(34, 38, 40, 0.6);
  border: 1px solid rgba(34, 38, 40, 0.4);
  border-radius: 4px;
  ::placeholder {
    padding-left: 5vw;
  }
`;

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

export const WeightInput = () => {
  return (
    <>
      <InputWeight type="text" name="" id="" placeholder="ft" />
    </>
  );
};
