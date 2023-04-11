import React from 'react';

function Servicetypes(props) {
  return (
    <div className="col-sm-3">
        <div className="thumbnail">
            <img src={props.source} alt="Chalet"/>
            <div className="caption text-center">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Servicetypes;