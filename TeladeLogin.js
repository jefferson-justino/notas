import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    TouchableHighlight,
  } from 'react-native';
  
  
  
  function TeladeLogin  ({navigation})  {
    return (
      <View style={styles.conteiner}>
        <TextInput placeholder="Digite seu usuário" style={styles.input} />
  
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
          style={styles.input} 
        />
  
        <TouchableHighlight onPress={() => ''}>
          <Text style={styles.texto}>Esqueceu a senha?</Text>
        </TouchableHighlight>
  
        <View style={{ alignItems: 'center' }}>
          <TouchableHighlight  onPress={() => navigation.navigate('Inicial')}>
            <View
              style={{
                backgroundColor: '#1B6FEE',
                padding: 10,
                alignItems: 'center',
                width: 150,
                marginBottom: 10,
                borderRadius:10
              }}>
              <Text style={styles.texto2}>ENTRAR</Text>
            </View>
          </TouchableHighlight>
  
          <TouchableHighlight onPress={()=>('')}>
          <View
         
            style={{
              backgroundColor: '#01B1FD',
              padding: 10,
              alignItems: 'center',
              width: 200,
              borderRadius:10
            }}>
            <Text style={styles.texto2}>CADASTRO</Text>
          </View>
          </TouchableHighlight >
        </View>
      </View>
    );
  }; //fim
  //css
  const styles = StyleSheet.create({
    conteiner: {
      backgroundColor: '#000000',
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    input: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    texto: {
      color: 'white',
      fontSize: 19,
    },
    texto2: { color: 'white', fontSize: 20 },
  });
  
  export default TeladeLogin;
  