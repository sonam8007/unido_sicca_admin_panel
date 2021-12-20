import React,{setState} from "react";

import axios from "axios";
import instance from 'config.js';
import Moment from 'moment';

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

const SpinnerLoad = () =>(
  <img src={require("assets/icons/pulse-loader.svg")} className="load-more-icon" />
)

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usersArr : [],
      usersArrCount:0,
      pageIndex: 0,
      totalPages:1,
      visible : 10,
      isloading:false
    };
    this.loadMore = this.loadMore.bind(this);
  }
  
  componentDidMount() {
    console.log("sub",localStorage.getItem('admin_sub'))
    if(localStorage.getItem('admin_sub') == 1){
      
      this.loadUsers(this.state.pageIndex);
    }
    else{
      this.loadSingleUser()
    }
  }
  
  loadSingleUser(){
    this.setState({isloading:true});
    let index = this.state.pageIndex+1;
    axios.all([
      instance.get('/singleuser/'+index)
    ])
    .then(axios.spread((response) => {
      this.setState({isloading:false});
      if(this.state.totalPages > this.state.pageIndex){
        this.setState({pageIndex:this.state.pageIndex+1})
      }
      else{
        this.setState({lastIndexReached:true})
      }
      if(this.state.lastIndexReached == false){
        this.setState({totalPages:Math.ceil(response.data.count/10)});
      }
      
      this.setState({ usersArr:[...this.state.usersArr,...response.data.output],usersArrCount:response.data.count });
      console.log(this.state.usersArr)
    }))
    .catch(error => console.log(error));
  }
  
  loadUsers(){
    console.log('called')
    this.setState({isloading:true});
    let index = this.state.pageIndex+1;
    axios.all([
      instance.get('/users/'+index)
    ])
    .then(axios.spread((response) => {
      this.setState({isloading:false});
      if(this.state.totalPages > this.state.pageIndex){
        this.setState({pageIndex:this.state.pageIndex+1})
      }
      else{
        this.setState({lastIndexReached:true})
      }
      if(this.state.lastIndexReached == false){
        this.setState({totalPages:Math.ceil(response.data.count/10)});
      }
      
      this.setState({ usersArr:[...this.state.usersArr,...response.data.output],usersArrCount:response.data.count });
      console.log(this.state.usersArr)
    }))
    .catch(error => console.log(error));
  }

  loadMore() {
    this.setState((prev) => {
      return {pageIndex: prev.pageIndex + 1,visible:prev.visible+10};
    });
    this.loadUsers();
  }

  
  render() {

    return (
      <>
        <div className="content">
          <hr/>
          
          <Row>
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">SICCA Device Users</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="device_user" id="users" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Device Id</th>
                        <th>Nodes</th>
                        <th>Node Created At</th>
                        <th>Land Size</th>
                        <th>User Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.usersArr.map((s, i) => {
                       
                        let updated_at = new Date(s.user.updated_at).toISOString().replace(/T/, ' ').replace(/\..+/, '');
                        let date = Moment(updated_at).format('L HH:mm:ss');
                        let total_land_size = s.user.total_land_size==null?'-':s.user.total_land_size+' Acres'
                        
                        
                        let nodelist = s.nodes.map((n,j) => {  
                          let nodeInfo = n.node_id+' : '+n.crop_name;
                          return(<a key={j} style={{color:'#007D7F',textDecoration:'underline'}} href={"/admin/individual/"+n.node_id}>{nodeInfo}</a>);
                        });
                        let nodeCreatedAt = s.nodes.map((n,j) => {
                          let created_at = new Date(n.created_at).toISOString().replace(/T/, ' ').replace(/\..+/, '');
                          let nodeDate = Moment(created_at).format('L HH:mm:ss');
                          return(<p className="nodeCreatedDate">{nodeDate}</p>);
                        });
                        
                        return (<tr key={i}>
                                <td><img src={s.profile_pic ? s.profile_pic : require('assets/icons/farmer.png')} className="mini-profile" /></td>
                                <td><p>{s.user.name}</p></td>
                                <td><p>{s.user.id}</p></td>
                                <td>{nodelist}</td>
                                <td>{nodeCreatedAt}</td>
                                <td><p>{total_land_size}</p></td>
                                <td><p>{date}</p></td>
                              </tr>);
                            })}
                    </tbody>
                  </Table>
                  
                </CardBody>
                <div style={{position:'relative'}}>
                  {this.state.visible < this.state.usersArrCount &&
                    <Button onClick={this.loadMore} type="button" className="load-more">Load more</Button>
                  }
                  {this.state.isloading && this.state.visible < this.state.usersArrCount?<SpinnerLoad/>:''}
                </div>
                <h5>{this.state.isloading}</h5>
              </Card>
            </Col>
          </Row>
        
        </div>
      </>
    );
  }
}

export default Users;
