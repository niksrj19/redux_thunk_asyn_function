export const asycincrement = value => {
  return {
    type: "INCREMENT",
    value: value
  };
};

export const increment = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(asycincrement(value));
    }, 5000);
  };
};

export const decrement = value => {
  return {
    type: "DECREMENT",
    value: value
  };
};
