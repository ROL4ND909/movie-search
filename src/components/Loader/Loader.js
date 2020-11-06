import React from 'react';

import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <div className="loader__item">
        <div className="loader__fill">
          <span className="visually-hidden">Loading</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
