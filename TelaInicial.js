import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    TouchableHighlight,
    Image,
    ScrollView,
  } from 'react-native';
  
  function TelaInicial({ navigation }) {
    return (
      <View style={{ backgroundColor: '#000000', flex: 1, padding: 20 }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Image
            style={{ width: 28, heigth: 10 }}
            source={require('./img/pesquisa.svg')}
          />
        </View>
  
        <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
          <Image
            style={{ width: 28, heigth: 10 }}
            source={require('./img/filtro.svg')}
          />
          <Text style={{ color: 'white' }}>FILTRAR POR DATA </Text>
        </View>
        <ScrollView style={{padding:10}}>
        
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:10}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
        CONTAS DO MÊS
        </Text>
        </View>
        
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       MATÉRIAS DE ESTUDO
        </Text>
        </View>
  
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       AGENDA
        </Text>
        </View>
  
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       DIAS DA SEMANA
        </Text>
        </View>
  
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       EM BUSCA DO SHAPE
        </Text>
        </View>
  
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       ARGUMENTOS INFALÍVEIS CONTRA ...
        </Text>
        </View>
  
  
        <View style={{backgroundColor:'#1B6FEE',padding:15,  borderRadius:10,marginBottom:5}}>
        <Text style={{fontSize:20, fontWeight:'bold',color:'white'}}>
       ESTUDO DOS CÉUS
        </Text>
        </View>
  
        </ScrollView>
      </View>
    );
  }
  export default TelaInicial;
  