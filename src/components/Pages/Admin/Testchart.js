import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const data = [
  { name: "Product A", value: 40 },
  { name: "Product B", value: 26 },
  { name: "Product C", value: 34 },
];
const COLORS = ["#EEB902", "#5664D2", "#1CBB8C"];

export default class Testchart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    return (
      <PieChart width={360} height={260} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={178}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
