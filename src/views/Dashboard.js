import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import axios from "axios";
import instance from 'config.js';
import Moment from 'moment';

// reactstrap components
import {
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


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboardStatus : [],
      waterGraphlabel : [],
      waterGraphConsumed : [],
      waterGraphSaved : [],
      energyGraphlabel : [],
      energyGraphConsumed : [],
      energyGraphSaved : [],
      pumpGraphlabel : [],
      pumpActivity : [],
      totalAcres:"--",
      bigChartData: "data1",
      bigChartData1:"data2",
      energyGraph:1,
      pumpGraph:1,
      failedNotifications : [],
      failedNotificationsCount:1,
      pageIndex: 0,
      totalPages:1,
      visible : 10,
      refsh:false
    };
    this.loadMore = this.loadMore.bind(this);
    
  }
  
  componentDidMount() {
    instance.interceptors.request.use(req => {
      req.headers.Authorization = localStorage.getItem('token');
      return req;
    });
    
    axios.all([
      instance.get('/dashboard/status'),
      instance.get('/pump/activity/all/1'),
      // instance.get('/water/graph/all'),
      // instance.get('/energy/graph/all/1'),
    ])
    .then(axios.spread((...response) => {
      console.log(response)
      let status = response[0].data;
      // let waterGraphlabels=[];
      // let waterGraphc =[]
      // let waterGraphs=[];
      // for (var i = 0; i < response[2].data.activity.length; i++) {
        
      //   waterGraphlabels.push(response[2].data.activity[i].created_at);
      //   waterGraphc.push(response[2].data.activity[i].avg_consumed);
      //   waterGraphs.push(response[2].data.activity[i].avg_saved);
      // }
      // let energyGraphlabels=[];
      // let energyGraphc =[]
      // let energyGraphs=[];
      // for (i = 0; i < response[3].data.activity.length; i++) {
        
      //   energyGraphlabels.push(response[3].data.activity[i].created_at);
      //   energyGraphc.push(response[3].data.activity[i].avg_consumed);
      //   energyGraphs.push(response[3].data.activity[i].avg_saved);
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
        dashboardStatus: status,
        totalAcres:status.totalAcres.totalAcres,
        // waterGraphlabel:waterGraphlabels,
        // waterGraphConsumed:waterGraphc,
        // waterGraphSaved:waterGraphs,
        // energyGraphlabel:energyGraphlabels,
        // energyGraphConsumed:energyGraphc,
        // energyGraphSaved:energyGraphs,
        pumpGraphlabel:pumpGraphlabels,
        pumpActivity:pumpGraphh 
      });
      
    }))
    .catch(error => console.log(error));
    this.loadFailedNotifications(this.state.pageIndex);
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };

  updateGraph(selectval){
    axios.all([
      instance.get('/energy/graph/all/'+selectval)
    ])
    .then(axios.spread((response) => {
      let energyGraphlabels=[];
      let energyGraphc =[]
      let energyGraphs=[];
      for (var i = 0; i < response.data.activity.length; i++) {
        energyGraphlabels.push(response.data.activity[i].created_at);
        energyGraphc.push(response.data.activity[i].avg_consumed);
        energyGraphs.push(response.data.activity[i].avg_saved);
      }
      this.setState({ energyGraphlabel:energyGraphlabels,energyGraphConsumed:energyGraphc,energyGraphSaved:energyGraphs });
      let energylabels = this.state.energyGraphlabel;
      let energysaved = this.state.energyGraphSaved;
      let energyconsumed = this.state.energyGraphConsumed;
      console.log(energylabels)
      let energyGraphDashboard = {
      data1: canvas => {
        //var yLabels = {0 : 'newb'}
        let bar_ctx = canvas.getContext("2d");

        var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
        purple_orange_gradient.addColorStop(0, '#00727b');
        purple_orange_gradient.addColorStop(1, '#000a55');

    
        return {
          type: 'bar',
          dataPointWidth: 20,
          labels: energyGraphlabels,
          datasets: [{
            label: '',
            fill:true,
            borderWidth: 0.5,
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 1,
            hoverBorderColor: '#000a55',
            data: energyGraphs
          }]
        };
      },
      data2: canvas => {
        
        // var yLabels = {0 : 'newb'}
        let bar_ctx = canvas.getContext("2d");

        var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
        purple_orange_gradient.addColorStop(0, '#00727b');
        purple_orange_gradient.addColorStop(1, '#000a55');
    
        return {
          labels: energyGraphlabels,
          datasets: [{
            label: '',
            fill:true,
            borderWidth: 0.5,
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 1,
            hoverBorderColor: '#000a55',
            data: energyGraphc
          }]
        };
      },
      options: bar2_2_options
      };
    
    }))
    .catch(error => console.log(error));

  }

  updatePumpGraph(selectval){
    axios.all([
      instance.get('/pump/activity/all/'+selectval)
    ])
    .then(axios.spread((response) => {
      let pumpGraphlabels=[];
      let pumpGraphh =[]
      for (var i = 0; i < response.data.activity.length; i++) {
        pumpGraphlabels.push(response.data.activity[i].created_at);
        pumpGraphh.push(response.data.activity[i].totalHours);
      }
      this.setState({ pumpGraphlabel:pumpGraphlabels,pumpActivity:pumpGraphh});
      let pumpGraphDashboard = {
        data1: canvas => {
          // let chartColor = "#035272";
          // var yLabels = {0 : 'newb'}
          let bar_ctx = canvas.getContext("2d");
    
          var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
          purple_orange_gradient.addColorStop(0, '#00727b');
          purple_orange_gradient.addColorStop(1, '#000a55');
    
      
          return {
            type: 'bar',
            dataPointWidth: 20,
            labels: pumpGraphlabels,
            datasets: [{
              label: '',
              fill:true,
              borderWidth: 0.5,
              data: pumpGraphh,
              backgroundColor: purple_orange_gradient,
              hoverBackgroundColor: purple_orange_gradient,
              hoverBorderWidth: 1,
              hoverBorderColor: '#000a55'
          }]
          };
        },
        options: pump_options
      };
    
    }))
    .catch(error => console.log(error));

  }
  
  loadFailedNotifications(){
    console.log('called')
    let index = this.state.pageIndex+1;
    axios.all([
      instance.get('/failed/notifications/'+index)
    ])
    .then(axios.spread((response) => {
      if(this.state.totalPages > this.state.pageIndex){
        this.setState({pageIndex:this.state.pageIndex+1})
      }
      else{
        this.setState({lastIndexReached:true})
      }
      if(this.state.lastIndexReached === false){
        this.setState({totalPages:Math.ceil(response.data.count/10)});
      }
      
      this.setState({ failedNotifications:[...this.state.failedNotifications,...response.data.resp],failedNotificationsCount:response.data.count });
      console.log(this.state.failedNotifications)
    }))
    .catch(error => console.log(error));
  }
  loadMore() {
    this.setState((prev) => {
      return {pageIndex: prev.pageIndex + 1,visible:prev.visible+10};
    });
    this.loadFailedNotifications();

  }
  
  render() {
    let waterlabels = this.state.waterGraphlabel;
    let watersaved = this.state.waterGraphSaved;
    let waterconsumed = this.state.waterGraphConsumed;
    // console.log(waterconsumed)
    let waterGraphDashboard = {
      data1: canvas => {
        let chartColor = "#035272";
        let ctx = canvas.getContext("2d");

        var gradientStroke = ctx.createLinearGradient(1000,0,500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#035272');
        gradientStroke.addColorStop(1, chartColor);

        var gradientFill = ctx.createLinearGradient(0, 1900,400,1300, 800,1600, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    
        return {
          labels: waterlabels,
          datasets: [{
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
            data: watersaved
          }]
        };
      },
      data2: canvas => {
        let chartColor = "#035272";
        let ctx = canvas.getContext("2d");

        var gradientStroke = ctx.createLinearGradient(1000,0,500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#035272');
        gradientStroke.addColorStop(1, chartColor);

        var gradientFill = ctx.createLinearGradient(0, 1900,400,1300, 800,1600, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    
        return {
          labels: waterlabels,
          datasets: [{
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
            data: waterconsumed
          }]
        };
      },
      options: chart1_2_options
    };

    let energylabels = this.state.energyGraphlabel;
    let energysaved = this.state.energyGraphSaved;
    let energyconsumed = this.state.energyGraphConsumed;

    let energyGraphDashboard = {
      data1: canvas => {
        // let chartColor = "#035272";
        // var yLabels = {0 : 'newb'}
        let bar_ctx = canvas.getContext("2d");
  
        var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
        purple_orange_gradient.addColorStop(0, '#00727b');
        purple_orange_gradient.addColorStop(1, '#000a55');
  
    
        return {
          type: 'bar',
          dataPointWidth: 20,
          labels: energylabels,
          datasets: [{
            label: '',
            fill:true,
            borderWidth: 0.5,
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 1,
            hoverBorderColor: '#000a55',
            data: energysaved
          }]
        };
      },
      data2: canvas => {
        let bar_ctx = canvas.getContext("2d");
  
        var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
        purple_orange_gradient.addColorStop(0, '#00727b');
        purple_orange_gradient.addColorStop(1, '#000a55');
    
        return {
          labels: energylabels,
          datasets: [{
            label: '',
            fill:true,
            borderWidth: 0.5,
            data: energyconsumed,
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 1,
            hoverBorderColor: '#000a55'
        }]
            
        };
      },
      options: bar1_2_options
    };

    let pumplabels = this.state.pumpGraphlabel;
    let pumpactivity = this.state.pumpActivity;
    
    let pumpGraphDashboard = {
      data1: canvas => {
        // let chartColor = "#035272";
        // var yLabels = {0 : 'newb'}
        let bar_ctx = canvas.getContext("2d");
  
        var purple_orange_gradient = bar_ctx.createLinearGradient(0,0, 0, 300);
        purple_orange_gradient.addColorStop(0, '#00727b');
        purple_orange_gradient.addColorStop(1, '#000a55');

    
        return {
          type: 'bar',
          dataPointWidth: 20,
          labels: pumplabels,
          datasets: [{
            label: '',
            fill:true,
            borderWidth: 0.5,
            data: pumpactivity,
            backgroundColor: purple_orange_gradient,
            hoverBackgroundColor: purple_orange_gradient,
            hoverBorderWidth: 1,
            hoverBorderColor: '#000a55'
        }]
        };
      },
      options: pump_options
    };

    return (
      <>
        <div className="content">
          <hr/>
          <Row className="top-cards-inline">
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className="card-chart">
                <CardHeader>
                {/* <div className="dropdown">
                  <a className="dropdown-toggle btn-icon no-caret" data-toggle="dropdown">
                    <img alt="..." src={require("assets/icons/more.svg")} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
                </CardHeader>
                <CardBody>
                <h4 className="card-title" id="totalUsers">{this.state.dashboardStatus.totalUsers}</h4>
                <p className="card-text">Devices Deployed</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className="card-chart">
                <CardHeader>
                {/* <div className="dropdown">
                  <a className="dropdown-toggle btn-icon no-caret" data-toggle="dropdown">
                    <img alt="..." src={require("assets/icons/more.svg")} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
                </CardHeader>
                <CardBody>
                <h4 className="card-title" id="totalDevices">{this.state.dashboardStatus.totalConnected}</h4>
                <p className="card-text">Online/Connected Devices</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className="card-chart">
                <CardHeader>
                {/* <div className="dropdown">
                  <a className="dropdown-toggle btn-icon no-caret" data-toggle="dropdown">
                    <img alt="..." src={require("assets/icons/more.svg")} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
                </CardHeader>
                <CardBody>
                <h4 className="card-title" id="totalSensors">--</h4>
                <p className="card-text">Online/Connceted Sensors</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className="card-chart">
                <CardHeader>
                {/* <div className="dropdown">
                  <a className="dropdown-toggle btn-icon no-caret" data-toggle="dropdown">
                    <img alt="..." src={require("assets/icons/more.svg")} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
                </CardHeader>
                <CardBody>
                <h4 className="card-title" id="impYield">--</h4>
                <p className="card-text">Improvement in Yield</p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="2" md="4" sm="6" xs="6">
              <Card className="card-chart">
                <CardHeader>
                {/* <div className="dropdown">
                  <a className="dropdown-toggle btn-icon no-caret" data-toggle="dropdown">
                    <img alt="..." src={require("assets/icons/more.svg")} />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
                </CardHeader>
                <CardBody>
                <h4 className="card-title" id="totalAcres">{this.state.totalAcres}</h4>
                <p className="card-text">Area covered in acres</p>
                </CardBody>
              </Card>
            </Col>
            </Row>
         
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                  <Row>
                    <div className="tab-frame">
                      <input type="radio" defaultChecked name="tab" id="tab1" />
                      <label htmlFor="tab1" id="gdsrdd">WATER SAVED</label>
                      <label>|</label>  
                      <input type="radio" name="tab" id="tab2" />
                      <label htmlFor="tab2">WATER CONSUMED</label>
             
                      <div className="tab">
                        <div className="card-body">
                          <div className="chart-area" style={{height:'500px'}}>
                            <Line
                              data={waterGraphDashboard[this.state.bigChartData]}
                              options={waterGraphDashboard.options}
                            />
                            
                          </div>
                        </div>
                      </div>

                      <div className="tab">
                        <div className="card-body">
                          <div className="chart-area" style={{height:'500px'}}>
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
              <div style={{display: 'flex',marginBottom: '5px'}}>
                <h5 className="card-category chart-header">AVG. PUMP ACTIVITY</h5>
                <span><img alt="..." src={require("assets/icons/calendar.svg")} /></span>
                <select id="energyselect" className="select_box" onChange={(event)=>{this.setState({pumpGraph:event.target.value});this.updatePumpGraph(event.target.value)}} value={this.state.pumpGraph}>
                  <option value="1">ONE WEEK</option>
                  <option value="2">ONE MONTH</option>
                  <option value="3">THREE MONTH</option>
                  <option value="4">SIX MONTH</option>
                </select>
              </div>
              <Card className="card-chart">
                <CardBody>
                  <div className="chart-area" style={{marginTop:'60px'}}>
                    <Bar
                      data={pumpGraphDashboard[this.state.bigChartData]}
                      options={pumpGraphDashboard.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <div style={{display: 'flex',marginBottom: '5px'}}>
                <h5 className="card-category chart-header">AVG. ENERGY</h5>
                <span><img alt="..." src={require("assets/icons/calendar.svg")} /></span>
                <select id="energyselect" className="select_box" onChange={(event)=>{this.setState({energyGraph:event.target.value});this.updateGraph(event.target.value)}} value={this.state.energyGraph}>
                  <option value="1">ONE WEEK</option>
                  <option value="2">ONE MONTH</option>
                  <option value="3">THREE MONTH</option>
                  <option value="4">SIX MONTH</option>
                </select>
              </div>
              <Card className="card-chart">
                <CardBody>
                <div className="tab-frame1">
                      <input type="radio" defaultChecked name="tab1" id="tab11" />
                      <label htmlFor="tab11" id="gdsrdd">SAVED</label>
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
                              data={energyGraphDashboard[this.state.bigChartData1]}
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
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Failed Notifications</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" id="failednotification" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Reason</th>
                        <th>Device ID</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <Rows data={this.state.failedNotifications}/> */}
                      {this.state.failedNotifications.map((s, i) => {
                      let createdAt = new Date(s.created_at).toISOString().replace(/T/, ' ').replace(/\..+/, '');
                      let date = Moment(createdAt).format('YYYY/MM/DD');
                      let time = Moment(createdAt).format('HH:mm:ss');
                      
                      return (
                        <tr key={i}>
                          <td><img alt="..." src={s.profile_pic ? s.profile_pic : require('assets/icons/farmer.png')} className="mini-profile" /></td>
                          <td>{s.name}</td><td>{s.text}</td>
                          <td>{s.id}</td><td>{date}</td>
                          <td>{time}</td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </Table>
                  
                </CardBody>
                {this.state.visible < this.state.failedNotificationsCount &&
                    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                  }
              </Card>
            </Col>
          </Row>
        
        </div>
      </>
    );
  }
}

export default Dashboard;
