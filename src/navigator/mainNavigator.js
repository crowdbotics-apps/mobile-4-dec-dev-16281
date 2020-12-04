import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen115462Navigator from '../features/CopyOfCopyOfBlankScreen115462/navigator';
import CopyOfBlankScreen115461Navigator from '../features/CopyOfBlankScreen115461/navigator';
import CopyOfCopyOfBlankScreen115458Navigator from '../features/CopyOfCopyOfBlankScreen115458/navigator';
import BlankScreen115456Navigator from '../features/BlankScreen115456/navigator';
import CopyOfBlankScreen015455Navigator from '../features/CopyOfBlankScreen015455/navigator';
import BlankScreen015453Navigator from '../features/BlankScreen015453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen115462: { screen: CopyOfCopyOfBlankScreen115462Navigator },
CopyOfBlankScreen115461: { screen: CopyOfBlankScreen115461Navigator },
CopyOfCopyOfBlankScreen115458: { screen: CopyOfCopyOfBlankScreen115458Navigator },
BlankScreen115456: { screen: BlankScreen115456Navigator },
CopyOfBlankScreen015455: { screen: CopyOfBlankScreen015455Navigator },
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
