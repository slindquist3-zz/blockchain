import React from 'react';
import { css } from '@emotion/core';
// First way to import
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 20% 20%;
    border-color: red;
    position: absolute;


`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='Loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default Loading;
