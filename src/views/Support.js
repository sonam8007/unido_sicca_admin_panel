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


class Support extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      visible : 10,
      refsh:false
    };
    
  }
  
  
  render() {
    

    return (
      <>
        <div className="content">
         
        </div>
      </>
    );
  }
}

export default Support;
