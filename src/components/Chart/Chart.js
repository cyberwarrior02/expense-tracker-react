import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

const dataPointsValue=props.dataPoints.map(dataPoint=>dataPoint.value);

let totalMaxValue=Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
