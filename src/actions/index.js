export const ADD_FEATURES = 'ADD_FEATURES';
export const addFeatures = (feature) => ({type: ADD_FEATURES, payload: feature});

export const REMOVE_FEATURES = 'REMOVE_FEATURES';
export const removeFeatures = (feature) => ({type: REMOVE_FEATURES, payload: feature});