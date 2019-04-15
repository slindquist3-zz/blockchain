import React from 'react';
import { css } from '@emotion/core';

import ClipLoader from 'react-spinners/ClipLoader';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {

    const override = css`
        display: block;
        margin-left: 30%;
        margin-top:120px;
        transform: translate(-20%, 0)
    `;

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
