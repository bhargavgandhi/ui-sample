import React, { Component } from "react";
import "../styles/App.css";
import Modal from "./Modal";
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    // Init state
    this.state = {
      modalOpen: false,
      modalID: "edit-name"
    };
    
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal(id){
    let modalState = this.state.modalOpen;

    this.setState({
      modalOpen: !modalState,
      modalID: id
    })
  }

  render() {
    const { name, address1, address2, team } = this.props;
    const { modalOpen, modalID } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sports Magazine </h1>
        </header>
        <div className="container">
          <h2>Sports Magazine Settings</h2>
          <div className="member-details">
            <div className="member-name member-details-inner">
              <div className="member-text">
                <h3> Name </h3>
                <h4> {name} </h4>
              </div>
              <div className="member-btn">
                <button id="edit-name" className="btn btn-edit" onClick={ (e) => this.handleModal(e.target.id) }>
                  Edit Name
                </button>
              </div>
            </div>
            <div className="member-address member-details-inner">
              <div className="member-text">
                <h3> Address </h3>
                <h4 className="address-line-1"> {address1} </h4>
                <h4 className="address-line-2"> {address2} </h4>
              </div>
              <div className="member-btn">
                <button id="edit-address" className="btn btn-edit" onClick={ (e) => this.handleModal(e.target.id) }>
                  Edit Address
                </button>
              </div>
            </div>
            <div className="member-fav-teams member-details-inner">
              <div className="member-text">
                <h3> Favourite Teams </h3>
                 {
                   team === [] ? ( <h4 className="empty">None Added</h4>) : (
                     <ul>
                        <li> {team } </li>
                     </ul>
                   )
                 }
              </div>
              <div className="member-btn">
                <button id="add-teams" className="btn btn-edit" onClick={ (e) => this.handleModal(e.target.id) }>
                  Add Teams
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal show={ modalOpen } modalID={ modalID } onClose={ this.handleModal } />
      </div>
    );
  }
}

const mapStateToProps = function (state){
  return{
    team : state.team,
    name : state.name,
    address1: state.address1,
    address2: state.address2
  };
}

const connect1 = connect(mapStateToProps);

export default connect1(App);

