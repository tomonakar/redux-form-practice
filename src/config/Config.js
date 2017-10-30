const Config = {
  test: {
    get apiUri() { return 'http://127.0.0.1:3000'; },
  },
  local: {
    get apiUri() { return 'http://127.0.0.1:1337'; },
  },
};

export default Config[process.env.NODE_ENV || 'development'];
