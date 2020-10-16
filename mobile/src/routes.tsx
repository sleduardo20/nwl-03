import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/Header'

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

const {Navigator,Screen} = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#fff'}}}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails} 
          options={{headerShown:true, 
                    header:()=><Header showCancel={false} title="Orfanato"/>}} 
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}           
          options={{headerShown:true, 
                    header:()=><Header title="Selecione no Map"/>}}  
        />
        
        <Screen 
          name="OrphanageData" 
          component={OrphanageData} 
          options={{headerShown:true, 
            header:()=><Header title="Informe os Dados"/>}}        
        />

      </Navigator>
    </NavigationContainer>
  )
}