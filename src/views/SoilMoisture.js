import React from "react";

import Plot from "react-plotly.js";
import instance from "config.js";
import axios from "axios";
import Moment from "moment";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

const SpinnerLoad = () => (
  <img
    src={require("assets/icons/pulse-loader.svg")}
    className="load-more-icon"
  />
);

class SoilMoisture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SMdata: [],
      date: [],
      sm1: [],
      sm2: [],
      sm3: [],
      sm4: [],
      pumpStatus: [],
      humidity: [],
      soilTemp: [],
    };
  }

  componentDidMount() {
    instance.interceptors.request.use((req) => {
      req.headers.Authorization = localStorage.getItem("token");
      return req;
    });

    this.loadGraph();
    let tho = this;
    setInterval(function () {
      tho.loadGraph();
    }, 900000);
  }

  loadGraph(){
     axios
     .all([instance.get("/sm/data/" + this.props.match.params.nodeId)])
     .then(
       axios.spread((response) => {
         console.log("sm:", response);
         //    this.setState({SMdata:response.data});
         console.log(typeof response.data.output);

         if (response.data.date.length != 0) {
           this.setState({ date: response.data.date });
           this.setState({ sm1: response.data.sm1 });
           this.setState({ sm2: response.data.sm2 });
           this.setState({ sm3: response.data.sm3 });
           this.setState({ sm4: response.data.sm4 });
           this.setState({ pumpStatus: response.data.pumpStatus });
           this.setState({ humidity: response.data.humidity });
           this.setState({ soilTemp: response.data.soilTemp });
         }
       })
     );
  }
  render() {
    var selectorOptions = {
      buttons: [
        {
          step: "hour",
          stepmode: "backward",
          count: 24,
          label: "1-Day",
        },
        {
          step: "day",
          stepmode: "backward",
          count: 7,
          label: "1-Week",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 1,
          label: "1-Month",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 6,
          label: "6-Month",
        },
        {
          step: "year",
          stepmode: "todate",
          count: 1,
          label: "YTD",
        },
        {
          step: "year",
          stepmode: "backward",
          count: 1,
          label: "1-Year",
        },
        {
          step: "all",
        },
      ],
    };
    return (
      <div className="content">
        <hr />

        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  NODE-{this.props.match.params.nodeId} Soil moisture,
                  Temperature, Humidity, soil temperature, pump status & pump
                  mode
                </CardTitle>
              </CardHeader>
              <CardBody>
                {this.state.sm1.length != 0 ? (
                  <Plot
                    data={[
                      {
                        x: this.state.date,
                        y: this.state.sm1,
                        type: "scatter",
                        mode: "lines",
                        name: "sm-1",
                      },
                      {
                        x: this.state.date,
                        y: this.state.sm2,
                        type: "scatter",
                        mode: "lines",
                        name: "sm-2",
                        marker:{color:"#d20bea"}
                      },
                      {
                        x: this.state.date,
                        y: this.state.sm3,
                        type: "scatter",
                        mode: "lines",
                        name: "sm-3",
                        marker:{color:"#ec250d"}
                      },
                      {
                        x: this.state.date,
                        y: this.state.sm4,
                        type: "scatter",
                        mode: "lines",
                        name: "sm-4",
                        marker:{color: "rgb(16,49,107)"}
                      },
                      {
                        x: this.state.date,
                        y: this.state.pumpStatus,
                        type: "scatter",
                        mode: "lines+marker",
                        name: "pump status",
                        line_shape: "hv",
                        fill: "tozeroy",
                        marker: { color: "rgba(178,235,242, 0.6)" },
                      },
                      {
                        x: this.state.date,
                        y: this.state.soilTemp,
                        yaxis: "y3",
                        name: "soil temp",
                        marker: { color: "rgba(255,189,105, 1)" },
                      },
                      {
                        x: this.state.date,
                        y: this.state.humidity,
                        yaxis: "y4",
                        name: "Hum",
                        line_shape: "spline",
                        marker: { color: "rgba(45,106,79, 0.8)" },
                      },
                    ]}
                    layout={{
                      
                      title: "",
                      showlegend: true,
                      legend: { xanchor: "center", x: 0.5, orientation: "h" },
                      xaxis: {
                        rangeselector: selectorOptions,
                        // rangeslider:true,
                      },
                      yaxis: {
                        fixedrange: true,
                        title: {
                          text: "Soil Moisture",
                        },
                        zeroline: false,
                        showline: true,
                        // dtick: 2,
                        // nticks: 50,
                        // tickmode:"auto",
                        tickvals:[0,1, 5, 10, 15, 20,25,30,35,40,45,50],
                      },
                      yaxis2: {
                        zeroline: false,
                        showline: true,
                        overlaying: "y",
                        side: "right",
                        showticklabels: false,
                      },
                      yaxis3: {
                        title: "Temperature",
                        zeroline: true,
                        showline: true,
                        overlaying: "y",
                        side: "right",
                      },
                      yaxis4: {
                        title: "Humidity",
                        zeroline: true,
                        showline: true,
                        overlaying: "y",
                        side: "right",
                        position: 0.95,
                      },
                    }}
                    useResizeHandler={true}
                    style={{width: "100%" ,height:"800px"}}
                    
                  />
                ) : (
                  <SpinnerLoad />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SoilMoisture;
