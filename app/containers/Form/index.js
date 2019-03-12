/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import { Form as DevExpressForm } from 'devextreme-react/form';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {setVisibleForm} from './actions';

const View = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 200px;
  min-height: 500px;
  background-color: white;
  padding: 20px;
  overflow: scroll;
`

const employee = {
  'ID': 1,
  'FirstName': 'John',
  'LastName': 'Heart',
  'Position': 'CEO',
  'BirthDate': '1964/03/16',
  'HireDate': '1995/01/15',
  'Notes': 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  'Address': '351 S Hill St.',
  'City': 'Los Angeles',
  'State': 'CA',
  'ZipCode': '90013',
  'Home': '555-684-1334',
  'Mobile': '555-684-1335',
  'Email': 'jheart@dx-email.com',
  'Skype': 'jheart_DX_skype',
};

const positions = [
  'HR Manager',
  'IT Manager',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager',
];

const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

const formItems = [{
  itemType: 'group',
  cssClass: 'first-group',
  colCount: 4,
  items: [{
    template: '<div class="form-avatar"></div>',
  }, {
    itemType: 'group',
    colSpan: 3,
    items: [{
      dataField: 'FirstName',
    }, {
      dataField: 'LastName',
    }, {
      dataField: 'BirthDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
      },
    }],
  }],
}, {
  itemType: 'group',
  cssClass: 'second-group',
  colCount: 2,
  items: [{
    itemType: 'group',
    items: [{
      dataField: 'Address',
    }, {
      dataField: 'City',
    }, {
      dataField: 'Position',
      editorType: 'dxSelectBox',
      editorOptions: {
        items: positions,
        value: '',
      },
    }],
  }, {
    itemType: 'group',
    items: [{
      dataField: 'State',
      editorType: 'dxSelectBox',
      editorOptions: {
        items: states,
      },
    }, {
      dataField: 'ZipCode',
    }, {
      dataField: 'Mobile',
      label: {
        text: 'Phone',
      },
      editorOptions: {
        mask: '+1 (000) 000-0000',
      },
    }],
  }, {
    colSpan: 2,
    dataField: 'Notes',
    editorType: 'dxTextArea',
    editorOptions: {
      height: 140,
    },
  }],
}];

/* eslint-disable react/prefer-stateless-function */
export class Form extends React.Component {
  onClick = () => {
    this.props.setVisibleForm(false);
  }

  render() {
    return (
      <Drawer anchor="right" open={this.props.visible}>
        <View>
          <button type="button" onClick={this.onClick}>Close</button>
          <DevExpressForm formData={employee} items={formItems} />
        </View>
      </Drawer>
    );
  }
}

Form.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisibleForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  visible: state.get('form').visible,
})

const mapDispatchToProps = (dispatch) => ({
  setVisibleForm: (visible) => dispatch(setVisibleForm(visible)), 
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Form);
