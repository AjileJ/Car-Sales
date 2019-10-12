import React from 'react';
import {connect} from 'react-redux';
import {addFeatures, removeFeatures} from './actions/index';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
 
  const removeFeatures = item => {
    // dispatch an action here to remove an item
    props.removeFeatures(item)
  };

  const addFeatures = item => {
    // dipsatch an action here to add an item
    props.addFeatures(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures removeFeatures={removeFeatures}/>
      </div>
      <div className="box">
        <AdditionalFeatures  addFeatures={addFeatures}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    car: state.car,
    store:state.store,
    additionalPrice:state.additionalPrice
  }
}

export default connect(mapStateToProps,{addFeatures, removeFeatures})(App);
