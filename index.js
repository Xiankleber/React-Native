/**
 * @format
 */
import {AppRegistry,YellowBox} from 'react-native'

//import App from './src/App';
import {name as appName} from './app.json';
import Menu from './src/Menu'


AppRegistry.registerComponent(appName, () => Menu);

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps is deprecated',
])
