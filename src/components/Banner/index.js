
import React from 'react';

import './Banner.css';

export default class Banner extends React.Component {
  render() {
    const { title } = this.props;
    return (
    <div className="banner">
      <div className="banner__inner">
          <h1>{title}</h1>
      </div>
    </div>
    )
  }
}

