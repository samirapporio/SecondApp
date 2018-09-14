import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionTypes";

export const addplace = placeName => {
  return {
    type: ADD_PLACE,
    placename: placeName
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placekey: key
  };
};

export const deselectPlace = () => {
  return {
    type: DELETE_PLACE
  };
};
