import React, { Fragment } from 'react';
import ReactJson from 'react-json-view'
import StoreContext from '../store/context';
import 'react-quill/dist/quill.snow.css';


class JsonViewer extends React.Component {
    static contextType = StoreContext;

    render () {         
      return (
        <div>          
           <ReactJson src={this.context.data} theme="monokai" />
         </div>
       )
    }
  }

  export default JsonViewer;