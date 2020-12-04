import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015455Navigator from '../features/CopyOfBlankScreen015455/navigator';
import BlankScreen015454Navigator from '../features/BlankScreen015454/navigator';
import BlankScreen015453Navigator from '../features/BlankScreen015453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015455: { screen: CopyOfBlankScreen015455Navigator },
BlankScreen015454: { screen: BlankScreen015454Navigator },
BlankScreen015453: { screen: BlankScreen015453Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
