import Popup from 'reactjs-popup';
import React from 'react';
import ReactDOM from 'react-dom';

const node = document.createElement("div");
const DataHistorical = (message, {type, timeout}) => {
  document.body.appendChild(node);
  const PopupContent = () => {
    return (
      <Popup type={type} open={true} timeout={timeout}>
        {message}
        <button
          onClick={clear}
        >Close</button>
      </Popup >
    );
  };

  const clear = () => {
    ReactDOM.unmountComponentAtNode(node);
    node.remove();
  }
  
  ReactDOM.render(<PopupContent/>, node);
};

export default DataHistorical;