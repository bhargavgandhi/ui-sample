import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editName from '../actions/editName';
import editAddress1 from '../actions/editAddress1';
import editAddress2 from '../actions/editAddress2';
import addTeamName from '../actions/addteam';

class Modal extends Component {
  render() {
    const { show, modalID } = this.props;

    const styles = {
      modalShow: {
        display: show ? null : "none"
      }
    };
    return (
      <div id="myModal" className="modal" style={styles.modalShow}>
        <div className="modal-content">
          <span className="close" onClick={ this.props.onClose }>
            Close <span className="closeIcon">&times;</span>
          </span>


          {modalID === 'edit-name' && (
            <div>
            <h2> Edit Name </h2>
            <form onSubmit={(e) => {
              this.props.editNameNew(e.target.id, e.target.value)
            }}>
              <div className="form-field">
                <label htmlFor="name"> Name </label>
                <input ref="name" type="text" id="name" name="name" onChange={(e) => {
                  this.props.editNameNew(e.target.id, e.target.value)
                }} />
              </div>
              <div className="form-field btn-fields">
                <input type="reset" id="cancel" name="cancel" value="Cancel" class="btn cancelBtn" />
                <input type="submit" id="save" name="save" value="Save" onClick={ this.props.onClose } class="btn saveBtn" />
              </div>
            </form> 
            </div>
           )}


           {modalID === 'edit-address' && (
            <div>
            <h2> Edit Address </h2>
            <form>
              <div className="form-field">
                <label htmlFor="name"> Address Line 1 </label>
                <input ref="address1" type="text" id="address1" name="address1" onChange={(e) => {
                  this.props.editAddress1(e.target.id, e.target.value)
                }} />
              </div>
              <div className="form-field">
                <label htmlFor="name"> Address Line 2 </label>
                <input ref="address2" type="text" id="address2" name="address2" onChange={(e) => {
                  this.props.editAddress2(e.target.id, e.target.value)
                }} />
              </div>
              <div className="form-field btn-fields">
                <input type="reset" id="cancel" name="cancel" value="Cancel" class="btn cancelBtn" />
                <input type="submit" id="save" name="save" value="Save" onClick={ this.props.onClose } class="btn saveBtn" />
              </div>
            </form> 
            </div>
           )}



          {modalID === 'add-teams' && (
            <div>
            <h2> Add Teams </h2>
            <form>
              <div className="form-field">
                <label htmlFor="team1"> Team 1</label>
                <input type="text" id="team1" name="team1" onChange={(e) => {
                  this.props.changeNew(e.target.id, e.target.value)
                }} />
              </div>
              <div className="form-field">
                <label htmlFor="team2"> Team 2</label>
                <input type="text" id="team2" name="team2" onChange={(e) => {
                  this.props.changeNew(e.target.id, e.target.value)
                }} />
              </div>
              <div className="form-field">
                <label htmlFor="team3"> Team 3</label>
                <input type="text" id="team3" name="team3" />
              </div>
              <div className="add-field">
                <h5> + Add Another </h5>
              </div>
              <div className="form-field btn-fields">
                <input type="reset" id="cancel" name="cancel" value="Cancel" class="btn cancelBtn" />
                <input type="submit" id="save" name="save" value="Save" class="btn saveBtn" onClick={ this.props.onClose } />
              </div>
            </form> 
            </div>
           )}
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    change: bindActionCreators(addTeamName, dispatch),
    changeNew: (id, value) => {
      dispatch(addTeamName(id, value))
    },
    editNameNew: (id, value) => {
      dispatch(editName(id, value))
    },
    editAddress1: (id, value) => {
      dispatch(editAddress1(id, value))
    },
    editAddress2: (id, value) => {
      dispatch(editAddress2(id, value))
    }
  }
}

const connect1 = connect(null, mapDispatchToProps);

export default connect1(Modal);

