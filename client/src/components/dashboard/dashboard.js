import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { protectedTest } from '../../actions/auth';
import { API_URL } from '../../actions/index';
import axios from 'axios';


class Dashboard extends Component {

  //Construtor
  constructor(props) {
    super(props);
    this.state = {
      tableData: '',
      columnList: ['no', "ip_address", "country","date"],
    };
    this.renderTableHeaders = this.renderTableHeaders.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.props.protectedTest();
  }


  componentDidMount() {
    //Request Visitors Data to Server
      axios.post(API_URL+"/visitors", {})
      .then(res => {
          console.log("Got Visitors Data from Server");
          const tableData = res.data.visitors;
          this.setState({ tableData });
      })
      .catch(error => {
        console.log("Failed getting visitors data from server!");
          if (error.response) {
          alert('Code: ' + error.response.data.error.code + 
                  '\r\nMessage: ' + error.response.data.error.message);
          } else {
          console.log('Error', error.message);
          }
      });
  }

  renderTable() {
    return (
      <table>
        <thead>
          { this.renderTableHeaders() }
        </thead>
          { this.renderTableBody() }
      </table>
    );
  }

  renderTableHeaders() {
      let headers = [];
      for (let i = 0; i < this.state.columnList.length; i++) {
        let col = this.state.columnList[i];
        headers.push(<th key={col} style={{backgroundColor: '#177CB8', 
                    color: 'white', 
                    border: '1px solid grey', 
                    borderCollapse: 'collapse', 
                    padding: '5px'}}>{col.toUpperCase()}</th>)
      }
      return (<tr>{headers}</tr>);
  }

  renderTableBody() {
      let rows = [];
      var i = 0;
      this.state.tableData.forEach(function(row) {
        i++;
        let tds = [];
        let tdelement = [];
        for(let j=0; j<this.state.columnList.length; j++){
          let col = this.state.columnList[j];
          if(col=="no")
            tdelement = i;
          else if(col=="country"){
            tdelement = row[col];
          }else{
            tdelement = row[col];
          }
          tds.push(<td key={col} style={{border: '1px solid grey', borderCollapse: 'collapse', padding: '5px'}}>{tdelement}</td>);
        }
        
        rows.push(
            <tr key={btoa('row'+rows.length)}>{tds}</tr>
        );
      }.bind(this));
      return (<tbody>{rows}</tbody>);
  }

  isRole(roleToCheck, toRender) {
    const userRole = cookie.load('user').role;

    if (userRole == roleToCheck) {
      return toRender;
    }

    return false;
  }

  adminMenu() {
    return (
      <div className="admin-menu">
        <Link to="/admin">Admin</Link>
      </div>
    );
  }

  ownerMenu() {
    return (
      <div className="trainer-menu">
        Owner menu coming soon.
      </div>
    );
  }

  clientMenu() {
    return (
      <div className="client-menu">
        Client menu coming soon.
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {/* <Link to="/dashboard/inbox">Inbox</Link> | <Link to="/profile/edit">Edit Profile</Link> | <Link to="/billing/settings">Billing</Link>
        {this.isRole('Admin', this.adminMenu())}
        {this.isRole('Owner', this.ownerMenu())}
        {this.isRole('Client', this.clientMenu())}
        <p>{this.props.content}</p> */}
        { this.state.tableData.length > 0 ? this.renderTable() : null }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, { protectedTest })(Dashboard);
