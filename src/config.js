const testingEnvironment = {
  emulatorUrl: '10.0.2.2',
  deviceURL: '192.168.0.106', // local IP used when device is connected
};

const API = {
  url: '',
  port: '1001',
};

const openAPI = {
  url: 'https://jsonplaceholder.typicode.com/users/',
};

export const config = {
  // API_BaseURL: `http://${testingEnvironment.deviceURL}:${API.port}/`,
  API_BaseURL: openAPI.url,
};
