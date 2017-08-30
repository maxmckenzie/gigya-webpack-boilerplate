// import logger from './logger'
import Gigya from 'gigya';

const app = document.getElementById('app');
const authentication = document.createElement('div');

authentication.setAttribute('id', 'gigya-container');

app.appendChild(authentication);

const params = {
  screenSet: 'Default-RegistrationLogin',
  container: '#gigya-container'
};

Gigya.accounts.showScreenSet(params);
