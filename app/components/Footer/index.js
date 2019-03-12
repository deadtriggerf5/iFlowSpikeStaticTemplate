/**
 *
 * Footer
 *
 */

import React from 'react';
import ToolBar from 'devextreme-react/toolbar';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const View = styled.div`
  z-index: 1000;
`;

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.toolbarItems = [
      {
        location: 'before',
        html: '<div style="color: white">iFlow Версия 0.1</div>',
      }];
  }

  render() {
    return (
      <View>
        <ToolBar className="footer" dataSource={this.toolbarItems} style={{backgroundColor: '#4a4a4a', padding: 10}} />
      </View>
    );
  }
}

Footer.propTypes = {};

export default Footer;
