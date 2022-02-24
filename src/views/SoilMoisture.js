import React from "react";

import Plot from "react-plotly.js";
import instance from "config.js";
import axios from "axios";
// import Moment from "moment";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
// import { data } from "jquery";

const SpinnerLoad = () => (
  <img
    src={require("assets/icons/pulse-loader.svg")}
    className="load-more-icon"
    alt="loader"
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
      mode:[],

      plotData : [],
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
     .all([
      //  instance.post('http://localhost:4000/graphData',{'node_id':this.props.match.params.nodeId})
        instance.get('/soilmoisture/chart/'+ this.props.match.params.nodeId)
      ])
     .then(
       axios.spread((...response) => {
        console.log(response[0])
         if(response[0].data.data.length !== 0){
           this.setState({plotData:response[0].data})
         }
       })
     );
  }
  render() {
    
    return (
      <div className="content">
        <hr />

        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  {this.state.plotData['title']}
                </CardTitle>
              </CardHeader>
              <CardBody>
                {this.state.plotData.length !== 0 ? (
                  <Plot
                    data = {this.state.plotData['data']}
                    layout={this.state.plotData['layout']}
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
