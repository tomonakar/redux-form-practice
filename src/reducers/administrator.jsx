const initialState = {
  company: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT_MESSAGE':
      return Object.assign({}, state, { message: action.payload });
    default:
      return state;
  }
}
