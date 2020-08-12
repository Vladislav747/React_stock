
import React from 'react';

import '../css/Banner.css';

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
  }
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

