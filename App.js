import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native';
import TeladeLogin from './TeladeLogin';
import TelaInicial from './TelaInicial';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native';

function TopBar() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('./img/menu.svg')}
    />
  );
}

function Titulo() {
  return (
    <Text
      style={{
        fontFamily: 'helvetica',
        fontWeight: '900',
        fontSize: 30,
        color: 'white',
      }}>
      NOTAS
    </Text>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={TeladeLogin}
          // options={{headerShown:false}}
          options={{
            title: 'NOTAS',
            headerStyle: { backgroundColor: '#0E0E0E' },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'helvetica',
              fontWeight: '900',
              fontSize: 50,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Inicial"
          component={TelaInicial}
          //  <Stack.Screen name ='Inicial'  component={Inicial}
          // options={{title:'NOTAS',
          //     headerStyle:{backgroundColor:'#0E0E0E'}, headerTintColor:'white', headerTitleStyle: {
          //     fontFamily: "helvetica",
          //     fontWeight: "900",
          //     fontSize: 30
          //     }

          //     }}

          options={{
            headerTitle: (props) => <Titulo {...props} />,
            headerRight: (props) => <TopBar {...props} />,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#0E0E0E' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
