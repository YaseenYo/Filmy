import React,{useState, useEffect} from "react";
import {VictoryBar,VictoryChart,VictoryAxis,VictoryTheme} from "victory";
import api from "../../api/moviesapi";


const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/genres").then((response) => {
          setData(response.data);
        });
      }, []);


    return (
        <div>
            <VictoryChart domainPadding= {20} theme = {VictoryTheme.material}>
                <VictoryAxis 
                    tickValues = {["Comedy","Drama","Romance","Action","Horror"]}
                    tickFormat = {["Comedy","Drama","Romance","Action","Horror"]}
                />
                <VictoryAxis 
                    dependentAxis
                    tickFormat = {[1,2,3,4]}
                />
                <VictoryBar data = {data} x = "genre" y = "moviesCount"/>
            </VictoryChart>   
        </div>
    );
};

export default Chart;