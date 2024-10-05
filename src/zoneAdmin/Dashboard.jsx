import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MoveUpRight, MoveDownRight } from "lucide-react";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [series2, setSeries2] = useState([30, 40, 45, 50, 49, 60, 70, 91]);
  //const [label, setlabel] = useState([A, B, C, D, E]);

  return (
    <div>
      <div id="resultat " className="my-5 mb-7 gap-20 flex">
        <div id="vente" className="bg-white inline-block p-2 shadow-lg rounded">
          <h2 className="uppercase text-xl mb-2 flex gap-2">
            Vente mensuelle
            <MoveUpRight color="red" />{" "}
          </h2>
          <h3>138</h3>
        </div>
        <div id="stock" className="bg-white inline-block p-2 shadow-lg rounded">
          <h2 className="uppercase text-xl mb-2 flex gap-2">
            stock lensuelle
            <MoveDownRight color="green" />{" "}
          </h2>
          <h3>150</h3>
        </div>

        <div id="achat" className="bg-white inline-block p-2 shadow-lg rounded">
          <h2 className="uppercase text-xl mb-2 flex gap-2">
            achat Mensuelle
            <MoveUpRight color="red" />{" "}
          </h2>
          <h3>200</h3>
        </div>

        <div id="vente" className="bg-white inline-block p-2 shadow-lg rounded">
          <h2 className="uppercase text-xl mb-2 flex gap-2">
            Vente lensuelle
            <MoveUpRight color="green" />{" "}
          </h2>
          <h3>130</h3>
        </div>
      </div>
      <div id="charts">
        <div>
          <Chart options={options} series={series} type="line" width="500" />
        </div>
        <div>
          <Chart options={{}} series={series2} type="line" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
