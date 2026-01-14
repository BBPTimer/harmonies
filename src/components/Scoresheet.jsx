import Icon from "@mui/material/Icon";
import { useState } from "react";
import NumberField from "./NumberField";

const Scoresheet = ({ name }) => {
  const [forestPoints, setForestPoints] = useState("");
  const [mountainPoints, setMountainPoints] = useState("");
  const [fieldsPoints, setFieldsPoints] = useState("");
  const [buildingsPoints, setBuildingsPoints] = useState("");
  const [waterPoints, setWaterPoints] = useState("");

  let tokensTotal =
    (parseInt(forestPoints) || 0) +
    (parseInt(mountainPoints) || 0) +
    (parseInt(fieldsPoints) || 0) +
    (parseInt(buildingsPoints) || 0) +
    (parseInt(waterPoints) || 0);

  const populateEmptyArray = () => {
    let array = [];
    for (let i = 0; i < 8; i++) {
      array.push("");
    }
    return array;
  };

  const [cubePoints, setCubePoints] = useState(populateEmptyArray);

  const cubesTotal = cubePoints.reduce(
    (accumulator, currentValue) => accumulator + (parseInt(currentValue) || 0),
    0
  );

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
          <td>
            <NumberField
              value={cubePoints[0]}
              callback={setCubePoints}
              array={cubePoints}
              index={0}
            />
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "gray" }}>landscape</Icon>
            <br />
            <NumberField value={mountainPoints} callback={setMountainPoints} />
          </td>
          <td>
            <NumberField
              value={cubePoints[1]}
              callback={setCubePoints}
              array={cubePoints}
              index={1}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberField
              value={cubePoints[2]}
              callback={setCubePoints}
              array={cubePoints}
              index={2}
            />
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "gold" }}>local_florist</Icon>
            <br />
            <NumberField value={fieldsPoints} callback={setFieldsPoints} />
          </td>
          <td>
            <NumberField
              value={cubePoints[3]}
              callback={setCubePoints}
              array={cubePoints}
              index={3}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberField
              value={cubePoints[4]}
              callback={setCubePoints}
              array={cubePoints}
              index={4}
            />
          </td>
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
          <td>
            <NumberField
              value={cubePoints[5]}
              callback={setCubePoints}
              array={cubePoints}
              index={5}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberField
              value={cubePoints[6]}
              callback={setCubePoints}
              array={cubePoints}
              index={6}
            />
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <Icon sx={{ color: "blue" }}>water</Icon>
            <br />
            <NumberField value={waterPoints} callback={setWaterPoints} />
          </td>
          <td>
            <NumberField
              value={cubePoints[7]}
              callback={setCubePoints}
              array={cubePoints}
              index={7}
            />
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td style={{ textAlign: "right" }}>{tokensTotal + " +"}</td>
          <td style={{ textAlign: "left" }}>{cubesTotal}</td>
        </tr>
        <tr>
          <td colSpan="2">{"= " + (tokensTotal + cubesTotal)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Scoresheet;
