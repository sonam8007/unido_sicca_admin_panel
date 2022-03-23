import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import axios from "axios";
import instance from "config.js";
import Moment from "moment";
import "moment-timezone";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chart1_2_options,
  bar1_2_options,
  bar2_2_options,
  pump_options,
} from "variables/charts.js";
// import { node } from "prop-types";

const AlertHistory = ({ data }) => (
  <Card>
    <CardHeader>
      <CardTitle tag="h4">Notifications</CardTitle>
    </CardHeader>
    <CardBody>
      <Table className="tablesorter" id="failednotification">
        <thead className="text-primary">
          <tr>
            <th>Reason</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, i) => {
            let createdAt = new Date(s.created_at)
              .toISOString()
              .replace(/T/, " ")
              .replace(/\..+/, "");
            let date = Moment(createdAt).format("L");
            let time = Moment(createdAt).format("HH:mm:ss");
            return (
              <tr key={i}>
                <td>{s.text}</td>
                <td>{date}</td>
                <td>{time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

class Individual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusUser: [],
      statusSicca: [],
      statusNode: [],
      wp: 720,
      fc: 440,
      waterGraphlabel: [],
      waterGraphConsumed: [],
      waterGraphSaved: [],
      energyGraphlabel: [],
      energyGraphConsumed: [],
      energyGraphSaved: [],
      pumpGraphlabel: [],
      pumpActivity: [],
      totalAcres: "--",
      bigChartData: "data1",
      bigChartData1: "data2",
      energyGraph: 1,
      pumpGraph: 1,
      allNotifications: [],
      notificationsCount: 1,
      pageIndex: 0,
      totalPages: 1,
      visible: 10,
      nodeId: 0,
      showAlertHistoryFlag: false,
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    instance.interceptors.request.use((req) => {
      req.headers.Authorization = localStorage.getItem("token");
      return req;
    });

    this.loadIndData();
    let tho = this;
    setInterval(function () {
      tho.loadIndData();
    }, 900000);
  }

  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };

  loadIndData() {
    if (this.props.match.params) {
      this.setState({ nodeId: this.props.match.params.nodeId });
      axios
        .all([
          instance.get("node/details/" + this.props.match.params.nodeId),
          // instance.get("node/water/graph/" + this.props.match.params.nodeId),
          // instance.get(
          //   "node/energy/graph/" + this.props.match.params.nodeId + "/1"
          // ),
          instance.get(
            "node/pump/activity/graph/" + this.props.match.params.nodeId + "/1"
          ),
        ])
        .then(
          axios.spread((...response) => {
            console.log(response)
            let statusUser = response[0].data.user[0];
            let statusSicca;
            if (response[0].data.sicca.length !== 0) {
              statusSicca = response[0].data.sicca[0];
            } else {
              statusSicca = null;
            }

            let statusNode = response[0].data.node;
            // let waterGraphlabels = [];
            // let waterGraphc = [];
            // let waterGraphs = [];
            // if (response[1].data.activity.length !== 0) {
            //   for (var i = 0; i < response[1].data.activity.length; i++) {
            //     waterGraphlabels.push(response[1].data.activity[i].created_at);
            //     waterGraphc.push(response[1].data.activity[i].avg_consumed);
            //     waterGraphs.push(response[1].data.activity[i].avg_saved);
            //   }
            // }
            // let energyGraphlabels = [];
            // let energyGraphc = [];
            // let energyGraphs = [];
            // if (response[2].data.activity.length !== 0) {
            //   for (i = 0; i < response[2].data.activity.length; i++) {
            //     energyGraphlabels.push(response[2].data.activity[i].created_at);
            //     energyGraphc.push(response[2].data.activity[i].totalConsumed);
            //     energyGraphs.push(response[2].data.activity[i].totalSaved);
            //   }
            // }
            let pumpGraphlabels = [];
            let pumpGraphh = [];
            if (response[1].data.activity.length !== 0) {
              for (var i = 0; i < response[1].data.activity.length; i++) {
                pumpGraphlabels.push(response[1].data.activity[i].created_at);
                pumpGraphh.push(response[1].data.activity[i].totalHours);
              }
            }
            this.setState({
              statusUser: statusUser,
              statusSicca: statusSicca,
              statusNode: statusNode,
              // waterGraphlabel: waterGraphlabels,
              // waterGraphConsumed: waterGraphc,
              // waterGraphSaved: waterGraphs,
              // energyGraphlabel: energyGraphlabels,
              // energyGraphConsumed: energyGraphc,
              // energyGraphSaved: energyGraphs,
              pumpGraphlabel: pumpGraphlabels,
              pumpActivity: pumpGraphh,
            });
          })
        )
        .catch((error) => console.log(error));
    }
  }

  updateGraph(selectval) {
    axios
      .all([
        instance.get(
          "node/energy/graph/" +
            this.props.match.params.nodeId +
            "/" +
            selectval
        ),
      ])
      .then(
        axios.spread((response) => {
          let energyGraphlabels = [];
          let energyGraphc = [];
          let energyGraphs = [];
          for (var i = 0; i < response.data.activity.length; i++) {
            energyGraphlabels.push(response.data.activity[i].created_at);
            energyGraphc.push(response.data.activity[i].totalConsumed);
            energyGraphs.push(response.data.activity[i].totalSaved);
          }
          this.setState({
            energyGraphlabel: energyGraphlabels,
            energyGraphConsumed: energyGraphc,
            energyGraphSaved: energyGraphs,
          });
          let energylabels = this.state.energyGraphlabel;
          let energysaved = this.state.energyGraphSaved;
          let energyconsumed = this.state.energyGraphConsumed;
          //console.log(energylabels)
          let energyGraphDashboard = {
            data1: (canvas) => {
              // let chartColor = "#035272";
              // var yLabels = {0 : 'newb'}
              let bar_ctx = canvas.getContext("2d");

              var purple_orange_gradient = bar_ctx.createLinearGradient(
                0,
                0,
                0,
                300
              );
              purple_orange_gradient.addColorStop(0, "#00727b");
              purple_orange_gradient.addColorStop(1, "#000a55");

              return {
                type: "bar",
                dataPointWidth: 20,
                labels: energyGraphlabels,
                datasets: [
                  {
                    label: "",
                    fill: true,
                    borderWidth: 0.5,
                    backgroundColor: purple_orange_gradient,
                    hoverBackgroundColor: purple_orange_gradient,
                    hoverBorderWidth: 1,
                    hoverBorderColor: "#000a55",
                    data: energyGraphs,
                  },
                ],
              };
            },
            data2: (canvas) => {
              // let chartColor = "#035272";
              // var yLabels = {0 : 'newb'}
              let bar_ctx = canvas.getContext("2d");

              var purple_orange_gradient = bar_ctx.createLinearGradient(
                0,
                0,
                0,
                300
              );
              purple_orange_gradient.addColorStop(0, "#00727b");
              purple_orange_gradient.addColorStop(1, "#000a55");

              return {
                labels: energyGraphlabels,
                datasets: [
                  {
                    label: "",
                    fill: true,
                    borderWidth: 0.5,
                    backgroundColor: purple_orange_gradient,
                    hoverBackgroundColor: purple_orange_gradient,
                    hoverBorderWidth: 1,
                    hoverBorderColor: "#000a55",
                    data: energyGraphc,
                  },
                ],
              };
            },
            options: bar2_2_options,
          };
        })
      )
      .catch((error) => console.log(error));
  }

  updatePumpGraph(selectval) {
    axios
      .all([
        instance.get(
          "/node/pump/activity/graph/" +
          this.props.match.params.nodeId +
            "/" +
            selectval
        ),
      ])
      .then(
        axios.spread((response) => {
          let pumpGraphlabels = [];
          let pumpGraphh = [];
          for (var i = 0; i < response.data.activity.length; i++) {
            pumpGraphlabels.push(response.data.activity[i].created_at);
            pumpGraphh.push(response.data.activity[i].totalHours);
          }
          this.setState({
            pumpGraphlabel: pumpGraphlabels,
            pumpActivity: pumpGraphh,
          });
          let pumpGraphDashboard = {
            data1: (canvas) => {
              // let chartColor = "#035272";
              // var yLabels = {0 : 'newb'}
              let bar_ctx = canvas.getContext("2d");

              var purple_orange_gradient = bar_ctx.createLinearGradient(
                0,
                0,
                0,
                300
              );
              purple_orange_gradient.addColorStop(0, "#00727b");
              purple_orange_gradient.addColorStop(1, "#000a55");

              return {
                type: "bar",
                dataPointWidth: 20,
                labels: pumpGraphlabels,
                datasets: [
                  {
                    label: "",
                    fill: true,
                    borderWidth: 0.5,
                    data: pumpGraphh,
                    backgroundColor: purple_orange_gradient,
                    hoverBackgroundColor: purple_orange_gradient,
                    hoverBorderWidth: 1,
                    hoverBorderColor: "#000a55",
                  },
                ],
              };
            },
            options: pump_options,
          };
        })
      )
      .catch((error) => console.log(error));
  }

  loadNotifications() {
    let index = this.state.pageIndex + 1;
    axios
      .all([
        instance.get(
          "/user/notifications/each/" +
            this.props.match.params.nodeId +
            "/" +
            index
        ),
      ])
      .then(
        axios.spread((response) => {
          this.setState({ showAlertHistoryFlag: true });

          if (this.state.totalPages > this.state.pageIndex) {
            this.setState({ pageIndex: this.state.pageIndex + 1 });
          } else {
            this.setState({ lastIndexReached: true });
          }
          if (this.state.lastIndexReached === false) {
            this.setState({ totalPages: Math.ceil(response.data.count / 10) });
          }

          this.setState({
            allNotifications: [
              ...this.state.allNotifications,
              ...response.data.resp,
            ],
            notificationsCount: response.data.count,
          });
        })
      )
      .catch((error) => console.log(error));
  }

  loadMore() {
    this.setState((prev) => {
      return { pageIndex: prev.pageIndex + 1, visible: prev.visible + 10 };
    });
    this.loadNotifications();
  }

  render() {
    let waterlabels = this.state.waterGraphlabel;
    let watersaved = this.state.waterGraphSaved;
    let waterconsumed = this.state.waterGraphConsumed;
    // console.log(waterconsumed)
    let waterGraphDashboard = {
      data1: (canvas) => {
        let chartColor = "#035272";
        let ctx = canvas.getContext("2d");

        var gradientStroke = ctx.createLinearGradient(1000, 0, 500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#035272");
        gradientStroke.addColorStop(1, chartColor);

        var gradientFill = ctx.createLinearGradient(
          0,
          1900,
          400,
          1300,
          800,
          1600,
          50
        );
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

        return {
          labels: waterlabels,
          datasets: [
            {
              label: "Data",
              borderColor: chartColor,
              pointBorderColor: chartColor,
              pointBackgroundColor: "#1e3d60",
              pointHoverBackgroundColor: "#1e3d60",
              pointHoverBorderColor: chartColor,
              pointBorderWidth: 1,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              fill: false,
              backgroundColor: gradientFill,
              borderWidth: 6,
              data: watersaved,
            },
          ],
        };
      },
      data2: (canvas) => {
        let chartColor = "#035272";
        let ctx = canvas.getContext("2d");

        var gradientStroke = ctx.createLinearGradient(1000, 0, 500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#035272");
        gradientStroke.addColorStop(1, chartColor);

        var gradientFill = ctx.createLinearGradient(
          0,
          1900,
          400,
          1300,
          800,
          1600,
          50
        );
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

        return {
          labels: waterlabels,
          datasets: [
            {
              label: "Data",
              borderColor: chartColor,
              pointBorderColor: chartColor,
              pointBackgroundColor: "#1e3d60",
              pointHoverBackgroundColor: "#1e3d60",
              pointHoverBorderColor: chartColor,
              pointBorderWidth: 1,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 2,
              pointRadius: 2,
              fill: false,
              backgroundColor: gradientFill,
              borderWidth: 6,
              data: waterconsumed,
            },
          ],
        };
      },
      options: chart1_2_options,
    };

    let energylabels = this.state.energyGraphlabel;
    let energysaved = this.state.energyGraphSaved;
    let energyconsumed = this.state.energyGraphConsumed;

    let energyGraphDashboard = {
      data1: (canvas) => {
        let chartColor = "#035272";
        var yLabels = { 0: "newb" };
        let bar_ctx = canvas.getContext("2d");

        var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);
        purple_orange_gradient.addColorStop(0, "#00727b");
        purple_orange_gradient.addColorStop(1, "#000a55");

        return {
          type: "bar",
          dataPointWidth: 20,
          labels: energylabels,
          datasets: [
            {
              label: "",
              fill: true,
              borderWidth: 0.5,
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              hoverBorderWidth: 1,
              hoverBorderColor: "#000a55",
              data: energysaved,
            },
          ],
        };
      },
      data2: (canvas) => {
        let bar_ctx = canvas.getContext("2d");

        var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);
        purple_orange_gradient.addColorStop(0, "#00727b");
        purple_orange_gradient.addColorStop(1, "#000a55");

        return {
          labels: energylabels,
          datasets: [
            {
              label: "",
              fill: true,
              borderWidth: 0.5,
              data: energyconsumed,
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              hoverBorderWidth: 1,
              hoverBorderColor: "#000a55",
            },
          ],
        };
      },
      options: bar1_2_options,
    };

    let pumplabels = this.state.pumpGraphlabel;
    let pumpactivity = this.state.pumpActivity;

    let pumpGraphDashboard = {
      data1: (canvas) => {
        // let chartColor = "#035272";
        // var yLabels = {0 : 'newb'}
        let bar_ctx = canvas.getContext("2d");

        var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);
        purple_orange_gradient.addColorStop(0, "#00727b");
        purple_orange_gradient.addColorStop(1, "#000a55");

        return {
          type: "bar",
          dataPointWidth: 20,
          labels: pumplabels,
          datasets: [
            {
              label: "",
              fill: true,
              borderWidth: 0.5,
              data: pumpactivity,
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              hoverBorderWidth: 1,
              hoverBorderColor: "#000a55",
            },
          ],
        };
      },
      options: pump_options,
    };
    const fc = this.state.fc;
    const wp = this.state.wp;
    let sm;

    if (this.state.statusNode.irigationOption) {
      if (this.state.statusNode.irigationOption.charAt(0) === "1") {
        sm = this.state.statusSicca.sm1;
      } else if (this.state.statusNode.irigationOption.charAt(0) === "4") {
        sm = this.state.statusSicca.sm2;
      } else if (this.state.statusNode.irigationOption.charAt(0) === "8") {
        sm = this.state.statusSicca.sm3;
      }
    }
    sm = this.state.statusSicca.sm1;
    let sm_status;
    if (this.state.statusNode.pumpStatus === "1") {
      if ((sm) => fc) {
        sm_status = "DRY";
      } else if (sm < fc) {
        sm_status = "WET";
      }
    } else {
      if (fc > sm) {
        sm_status = "WET";
      } else if ((sm) => fc && sm < wp) {
        sm_status = "WET";
      } else if (sm > wp) {
        sm_status = "DRY";
      }
    }

    let soil_moist_remark = "bg-blue";
    let atm_temp_remark = "bg-blue";
    let soil_temp_remark = "bg-blue";
    let hum_remark = "bg-blue";
    let light_remark = "bg-blue";
    let soil_temp = "--";
    let atm_temp = "--";
    let humid = "--";
    let sunlight = "--";

    if (this.state.statusSicca != null) {
      sm >= 100 || sm <= 1000
        ? (soil_moist_remark = "bg-blue")
        : (soil_moist_remark = "bg-red");

      if (this.state.statusSicca.temp) {
        atm_temp = this.state.statusSicca.temp + "°C";
        this.state.statusSicca.temp >= 0 || this.state.statusSicca.temp <= 100
          ? (atm_temp_remark = "bg-blue")
          : (atm_temp_remark = "bg-red");
      }

      if (this.state.statusSicca.soil_temp) {
        soil_temp = this.state.statusSicca.soil_temp + "°C";
        this.state.statusSicca.soil_temp >= 0 ||
        this.state.statusSicca.soil_temp <= 100
          ? (soil_temp_remark = "bg-blue")
          : (soil_temp_remark = "bg-red");
      }

      if (this.state.statusSicca.hum) {
        humid = this.state.statusSicca.hum + "%";
        this.state.statusSicca.hum >= 0 || this.state.statusSicca.hum <= 100
          ? (hum_remark = "bg-blue")
          : (hum_remark = "bg-red");
      }

      if (this.state.statusSicca.light) {
        sunlight = this.state.statusSicca.light;
        this.state.statusSicca.light >= 0 &&
        this.state.statusSicca.light <= 65000
          ? (light_remark = "bg-blue")
          : (light_remark = "bg-red");
      }
    }

    let lastUpdatedAt;
    if (this.state.statusNode.updatedAt) {

      let utcDate = Moment(this.state.statusNode.updatedAt);

      // Convert the UTC date into IST
      let istDate = Moment(utcDate).tz("Asia/Kolkata");

      lastUpdatedAt = istDate.format("YYYY-MM-DD HH:mm:ss");
    }

    return (
      <>
        <div className="content">
          <hr />

          <div className="ind-card">
            <Row className="top-cards-inline">
              <Col lg="2" md="4" sm="4" className="card-blk">
                <img
                  alt="..."
                  src={require("assets/img/farmer.jpeg")}
                  className="ind-profile"
                />
              </Col>
              <Col lg="2" ms="8" sm="4" className="card-blk-2">
                <div className="ind-name qwesd">
                  {/* <div className="dropdown">
                            <a className="dropdown-toggle btn-simple btn-icon srwer" data-toggle="dropdown" id="farmer_name">--</a>    
                        </div> */}
                  <p className="ind_name">{this.state.statusUser.name}</p>
                </div>
                <div className="ind-desc">
                  Node ID -{" "}
                  <span id="ind_node">
                    {this.state.statusNode.nodeId} :{" "}
                    {this.state.statusNode.cropName}
                  </span>
                </div>

                {this.state.statusNode.pumpStatus === "1" ? (
                  <div className="ind-desc border-blue" id="pump_status">
                    PUMP STATUS: <span className="color-blue">ON</span>
                  </div>
                ) : (
                  <div className="ind-desc border-red" id="pump_status">
                    PUMP STATUS: <span className="color-red">OFF</span>
                  </div>
                )}
              </Col>
              <Col lg="2" md="4" sm="4" className="card-blk">
                <div className="fgrtws">
                  <div className="ind-desc qwesd">
                    Device ID:{" "}
                    <span id="ind_id">{this.state.statusUser.id}</span>
                  </div>
                  <div className="ind-desc" style={{ opacity: "1" }}>
                    Sicca Id - {""}
                    <span id="ind_id">{this.state.statusUser.sicca_id}</span>
                  </div>
                  {this.state.statusNode.valveStatus === "1" ? (
                    <div className="ind-desc border-blue" id="valve_status">
                      VALVE STATUS: <span className="color-blue">ON</span>
                    </div>
                  ) : (
                    <div className="ind-desc border-red" id="valve_status">
                      VALVE STATUS: <span className="color-red">OFF</span>
                    </div>
                  )}
                </div>
              </Col>
              <Col lg="2" md="4" sm="4" className="card-blk-4">
                <div className="fgrtws">
                  <div className="ind-desc qwesd">
                    Farm Size -{" "}
                    <span id="farm_size">
                      {this.state.statusNode.areaSize
                        ? this.state.statusNode.areaSize
                        : "--"}
                    </span>{" "}
                    Acres
                  </div>
                  <div className="ind-desc" style={{ opacity: "1" }}>
                    Mobile Number - {""}
                    <span id="ind_id">{this.state.statusUser.mobile_number}</span>
                  </div>
                  <div className="ind-desc border-gray" id="dry_run">
                    Dry Run
                  </div>
                </div>
              </Col>
              <Col lg="2" md="4" sm="4" className="card-blk">
                <div className="fgrtws">
                  <img
                    alt="..."
                    src={require("assets/icons/edit.svg")}
                    className="btn-edit"
                  />
                </div>
                <div className="ind-desc ereuj">
                  <span id="ind_updated">{lastUpdatedAt}</span>
                </div>

                <div className="ind-desc ereuj">
                  <span id="ind_updated">
                    {lastUpdatedAt ? lastUpdatedAt : "--"}
                  </span>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="top-cards-inline">
            <Col lg="2" md="4" sm="6" xs="6">
              <a
                // target="_blank"
                href={"/admin/soilmoisture/" + this.state.nodeId}
              >
                <Card className={soil_moist_remark}>
                  <CardBody>
                    <h4 className="card-title" id="soil_moist">
                      {sm ? sm : "--"}
                    </h4>
                    <p className="card-text">Soil Moisture</p>
                  </CardBody>
                  <div className="card-footer">
                    <p className="card-text-bottom" id="soil_moist_type">
                      {sm_status ? sm_status : "--"}
                    </p>
                  </div>
                </Card>
              </a>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className={soil_temp_remark}>
                <CardBody>
                  <h4 className="card-title" id="soil_temp">
                    {soil_temp}
                  </h4>
                  <p className="card-text">Soil Temprature</p>
                </CardBody>
                <div className="card-footer">
                  <p
                    className="card-text-bottom"
                    id="soil_temp_status"
                    style={{ opacity: "0" }}
                  >
                    --
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className={atm_temp_remark}>
                <CardBody>
                  <h4 className="card-title" id="atm_temp">
                    {atm_temp}
                  </h4>
                  <p className="card-text">Atm. Temprature</p>
                </CardBody>
                <div className="card-footer">
                  <p
                    className="card-text-bottom"
                    id="soil_atm_temp_status"
                    style={{ opacity: "0" }}
                  >
                    --
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className={hum_remark}>
                <CardBody>
                  <h4 className="card-title" id="humidity">
                    {humid}
                  </h4>
                  <p className="card-text">Humidity</p>
                </CardBody>
                <div className="card-footer">
                  <p
                    className="card-text-bottom"
                    id="soil_hum_status"
                    style={{ opacity: "0" }}
                  >
                    --
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className={light_remark}>
                <CardBody>
                  <h4 className="card-title" id="sunlight">
                    {sunlight}
                  </h4>
                  <p className="card-text">Sunlight(lux)</p>
                </CardBody>
                <div className="card-footer">
                  <p
                    className="card-text-bottom"
                    id="soil_sunlight_status"
                    style={{ opacity: "0" }}
                  >
                    --
                  </p>
                </div>
              </Card>
            </Col>
          </Row>

          <div className="alets-block color-red" style={{ display: "none" }}>
            Critical Alert: Valve status is OFF | High Soil Temperature | High
            Atm. Temperature
          </div>

          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <Row>
                  <div className="tab-frame">
                    <input type="radio" defaultChecked name="tab" id="tab1" />
                    <label htmlFor="tab1" id="gdsrdd">
                      WATER SAVED
                    </label>
                    <label>|</label>
                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2">WATER CONSUMED</label>

                    <div className="tab">
                      <div className="card-body">
                        <div className="chart-area" style={{ height: "500px" }}>
                          <Line
                            data={waterGraphDashboard[this.state.bigChartData]}
                            options={waterGraphDashboard.options}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="tab">
                      <div className="card-body">
                        <div className="chart-area" style={{ height: "500px" }}>
                          <Line
                            data={waterGraphDashboard[this.state.bigChartData1]}
                            options={waterGraphDashboard.options}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <h5 className="card-category chart-header">
                  AVG. PUMP ACTIVITY
                </h5>
                <span>
                  <img alt="..." src={require("assets/icons/calendar.svg")} />
                </span>
                <select
                  id="energyselect"
                  className="select_box"
                  onChange={(event) => {
                    this.setState({ pumpGraph: event.target.value});
                    this.updatePumpGraph(event.target.value);
                  }}
                  value={this.state.pumpGraph}
                >
                  <option value="1">ONE WEEK</option>
                  <option value="2">ONE MONTH</option>
                  <option value="3">THREE MONTH</option>
                  <option value="4">SIX MONTH</option>
                  <option value="5">ONE YEAR</option>
                </select>
              </div>
              <Card className="card-chart">
                <CardBody>
                  <div className="chart-area" style={{ marginTop: "60px" }}>
                    <Bar
                      data={pumpGraphDashboard[this.state.bigChartData]}
                      options={pumpGraphDashboard.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <h5 className="card-category chart-header">AVG. ENERGY</h5>
                <span>
                  <img alt="..." src={require("assets/icons/calendar.svg")} />
                </span>
                <select
                  id="energyselect"
                  className="select_box"
                  onChange={(event) => {
                    this.setState({ energyGraph: event.target.value });
                    this.updateGraph(event.target.value);
                  }}
                  value={this.state.energyGraph}
                >
                  <option value="1">ONE WEEK</option>
                  <option value="2">ONE MONTH</option>
                  <option value="3">THREE MONTH</option>
                  <option value="4">SIX MONTH</option>
                  <option value="5">ONE YEAR</option>
                </select>
              </div>
              <Card className="card-chart">
                <CardBody>
                  <div className="tab-frame1">
                    <input type="radio" defaultChecked name="tab1" id="tab11" />
                    <label htmlFor="tab11" id="gdsrdd">
                      SAVED
                    </label>
                    <label>|</label>
                    <input type="radio" name="tab1" id="tab22" />
                    <label htmlFor="tab22">CONSUMED</label>

                    <div className="tab1">
                      <div className="card-body">
                        <div className="chart-area">
                          <Bar
                            data={energyGraphDashboard[this.state.bigChartData]}
                            options={energyGraphDashboard.options}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="tab1">
                      <div className="card-body">
                        <div className="chart-area">
                          <Bar
                            data={
                              energyGraphDashboard[this.state.bigChartData1]
                            }
                            options={energyGraphDashboard.options}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12" md="12">
              {this.state.showAlertHistoryFlag ? (
                <AlertHistory data={this.state.allNotifications} />
              ) : (
                <Button
                  onClick={() => {
                    this.loadNotifications();
                  }}
                  className="show-all-btn"
                >
                  Show Alert History
                </Button>
              )}

              {this.state.visible < this.state.notificationsCount && (
                <button
                  onClick={this.loadMore}
                  type="button"
                  className="load-more"
                >
                  Load more
                </button>
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Individual;
