import axios from 'axios';

const BASE_URL = 'http://localhost:80801';

export function submitMessage(message) {
  return {
    type: 'SUBMIT_MESSAGE',
    payload: message,
  };
}

export function addCompany(values) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/addcompany`, { values })
      .then((response) => {
        if (response.ok) {
          dispatch(submitMessage('メールを送信しました。'));
        }
        dispatch(submitMessage('メールに失敗しました。'));
      })
      .catch(() => {
        dispatch(submitMessage('通信エラーが発生しました。'));
      });
  };
}

export function messageReset() {
  return (dispatch) => {
    dispatch(submitMessage(''));
  };
}
