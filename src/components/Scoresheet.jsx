import Icon from "@mui/material/Icon";
import { useState } from "react";
import NumberField from "./NumberField";

const Scoresheet = ({ name }) => {
  const [forestPoints, setForestPoints] = useState(0);
  const [mountainPoints, setMountainPoints] = useState(0);
  const [fieldsPoints, setFieldsPoints] = useState(0);
  const [buildingsPoints, setBuildingsPoints] = useState(0);
  const [waterPoints, setWaterPoints] = useState(0);

  let tokensTotal =
    parseInt(forestPoints) +
    parseInt(mountainPoints) +
    parseInt(fieldsPoints) +
    parseInt(buildingsPoints) +
    parseInt(waterPoints);

  let cubesTotal = 0;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "green" }}>forest</Icon>
            <br />
            <NumberField value={forestPoints} callback={setForestPoints} />
          </td>
          <td>
            <Icon sx={{ color: "lightgray" }}>square</Icon>
            <Icon sx={{ color: "orange" }}>square</Icon>
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "gray" }}>landscape</Icon>
            <br />
            <NumberField value={mountainPoints} callback={setMountainPoints} />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "gold" }}>local_florist</Icon>
            <br />
            <NumberField value={fieldsPoints} callback={setFieldsPoints} />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "red" }}>apartment</Icon>
            <br />
            <NumberField
              value={buildingsPoints}
              callback={setBuildingsPoints}
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "blue" }}>water</Icon>
            <br />
            <NumberField value={waterPoints} callback={setWaterPoints} />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td>{tokensTotal}</td>
          <td>{cubesTotal}</td>
        </tr>
        <tr>
          <td colSpan="2">{tokensTotal + cubesTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Scoresheet;
