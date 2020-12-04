import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015467Navigator from '../features/CopyOfBlankScreen015467/navigator';
import BlankScreen015466Navigator from '../features/BlankScreen015466/navigator';
import CopyOfCopyOfBlankScreen115465Navigator from '../features/CopyOfCopyOfBlankScreen115465/navigator';
import CopyOfBlankScreen115464Navigator from '../features/CopyOfBlankScreen115464/navigator';
import CopyOfCopyOfBlankScreen115462Navigator from '../features/CopyOfCopyOfBlankScreen115462/navigator';
import CopyOfCopyOfBlankScreen115458Navigator from '../features/CopyOfCopyOfBlankScreen115458/navigator';
import BlankScreen115456Navigator from '../features/BlankScreen115456/navigator';
import CopyOfBlankScreen015455Navigator from '../features/CopyOfBlankScreen015455/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015467: { screen: CopyOfBlankScreen015467Navigator },
BlankScreen015466: { screen: BlankScreen015466Navigator },
CopyOfCopyOfBlankScreen115465: { screen: CopyOfCopyOfBlankScreen115465Navigator },
CopyOfBlankScreen115464: { screen: CopyOfBlankScreen115464Navigator },
CopyOfCopyOfBlankScreen115462: { screen: CopyOfCopyOfBlankScreen115462Navigator },
CopyOfCopyOfBlankScreen115458: { screen: CopyOfCopyOfBlankScreen115458Navigator },
BlankScreen115456: { screen: BlankScreen115456Navigator },
CopyOfBlankScreen015455: { screen: CopyOfBlankScreen015455Navigator },

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
