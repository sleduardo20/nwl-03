import React, { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {Feather} from '@expo/vector-icons';

import mapMarker from '../images/marker.png'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';



const OrphanagesMap: React.FC = () => {

  const navigation = useNavigation();
  
  const handleNavigateToOrphanageDetails = useCallback(()=>{
    navigation.navigate('OrphanageDetails');
  },[]);

  const handleNavigateToCreateOrphanage = useCallback(()=>{
    navigation.navigate('SelectMapPosition')
  },[])

  return   (  
      <View style={styles.container}>
          
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -26.8750594,
          longitude: -49.0716105,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -26.8750594,
            longitude: -49.0716105,
          }}
          calloutAnchor={{
            x:2.7,
            y:0.8,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Cor de Ovo Orfanato</Text>

            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
        <RectButton 
          style={styles.createOrphanageButton} 
          onPress={handleNavigateToCreateOrphanage}>
            <Feather name="plus" size={20} color="#ffff" />
          </RectButton>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
container: {
flex: 1,
},

map:{
width: Dimensions.get('window').width,
height: Dimensions.get('window').height,
},

calloutContainer:{
width: 160,
height: 46,
paddingHorizontal: 16,
backgroundColor: 'rgba(255,255,255,0.8)',
borderRadius: 16,
justifyContent: 'center',
elevation: 3,
},

calloutText:{
color: '#0089a5',
fontSize: 14,
fontFamily:'Nunito_700Bold',
},

footer:{
position:'absolute',
left: 24,
right: 24,
bottom: 32,

backgroundColor: '#fff',
borderRadius: 20,
height: 56,
paddingLeft: 24,

flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',

elevation: 3,

},

footerText:{
color: '#8fa7b3',
fontFamily: 'Nunito_700Bold',
},

createOrphanageButton:{
width: 56,
height: 56,
backgroundColor: '#15c3d6',
borderRadius: 20,
justifyContent: 'center',
alignItems:'center'
}

});

export default OrphanagesMap;