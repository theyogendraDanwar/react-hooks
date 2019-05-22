import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

const StateProvider = ({reducer, initialState, children}) => {
  return(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)};
StateProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   *
   * @param {object} state
   * @param {object} action
   */
  // reducer: PropTypes.object.isRequired
};

export const useStateContext = () => useContext(StateContext);
export default StateProvider;
