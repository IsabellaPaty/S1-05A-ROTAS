import * as React from 'react'; import {StyleSheet,TextInput,TouchableOpacity, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BOMBOIDI</Text>
      </View>
      <Text style={styles.paragraph}>
        Bem-vindo à churrascaria Bomboide
      </Text>
      <View style={styles.content}>
        {/* Aqui você pode adicionar mais conteúdo, como itens do menu, por exemplo */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
      </View>
      <Button
title="Go to Reservas"
onPress={() => navigation.navigate('Reservas')} />
      <Button
title="Go to Menu"
onPress={() => navigation.navigate('Menu')} />
<Button
title="Go to Contato"
onPress={() => navigation.navigate('Contato')} />
<Button
title="Go to Localização"
onPress={() => navigation.navigate('Localizacao')} />
    </View>
 );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    header: {
      backgroundColor: '#A18E5C',
      paddingVertical: 20,
      alignItems: 'center',
    },
    headerText: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    paragraph: {
      fontSize: 18,
      color: '#000000',
      textAlign: 'center',
      marginVertical: 20,
    },
    content: {
      // Adicione estilos para o conteúdo, se necessário
    },
    footer: {
      backgroundColor: '#A18E5C',
      paddingVertical: 10,
      alignItems: 'center',
    },
    footerText: {
      color: '#ffffff',
      fontSize: 14,
    },

    
        container1: {
          flex: 1,
          backgroundColor: '#ffffff',
        },
        header1: {
          backgroundColor: '#A18E5C',
          padding: 20,
          alignItems: 'center',
        },
        headerText1: {
          color: '#ffffff',
          fontSize: 24,
          fontWeight: 'bold',
        },
        content1: {
          flex: 1, // Estende o conteúdo até o final da página
          justifyContent: 'center', // Centraliza verticalmente
          paddingHorizontal: 40, // Adiciona espaço nas laterais
        },
        form1: {
          backgroundColor: 'rgba(39, 34, 34, 0.749)',
          padding: 20,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        },
        label1: {
          color: 'white',
          marginBottom: 5,
          fontSize: 16,
        },
        input1: {
          marginBottom: 15,
          padding: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 6,
          width: '100%',
          backgroundColor: '#ffffff',
        },
        button1: {
          backgroundColor: '#4CAF50',
          paddingVertical: 12,
          borderRadius: 6,
          alignItems: 'center',
        },
        buttonText1: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
        footer1: {
          backgroundColor: '#000000',
          padding: 10,
          alignItems: 'center',
        },
        footerText1: {
          color: '#ffffff',
          fontSize: 14,
        },
          container2: {
            flex: 1,
          },
          header2: {
            backgroundColor: '#a29439',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          },
          headerText2: {
            color: '#fff',
            fontSize: 20,
          },
          main2: {
            flex: 1,
            padding: 10,
          },
          product2: {
            flexBasis: '32%',
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            overflow: 'hidden',
          },
          image2: {
            width: '100%',
            height: 200,
          },
          title2: {
            padding: 10,
            textAlign: 'center',
            backgroundColor: '#333',
            color: '#fff',
          },
          footer2: {
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          },

          container3: {
            
            flex: 1, // Estende o conteúdo até o final da página
          justifyContent: 'center', // Centraliza verticalmente
          paddingHorizontal: 40, // Adiciona espaço nas laterais
          },
          header3: {
          backgroundColor: '#A18E5C',
          padding: 20,
          alignItems: 'center',
        },
        headerText3: {
          color: '#ffffff',
          fontSize: 24,
          fontWeight: 'bold',
        },
          image3: {
            width: 200,
            height: 200,
          },
          contact3: {
            alignItems: 'center',
          },
          form3: {
            borderWidth: 5,
            borderColor: 'black',
            padding: 15,
            backgroundColor: 'white',
          },
          contato3: {
            fontSize: 30,
            color: 'white',
          },
          input3: {
            borderWidth: 1,
            borderColor: 'gray',
            marginBottom: 10,
            padding: 5,
            width: 250,
          },
          textArea3: {
            height: 100,
          },
          button3: {
            backgroundColor: 'blue',
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          },
          buttonText3: {
            color: 'white',
            textAlign: 'center',
          },
          container4: {
            flex: 1,
          },
          header4: {
            backgroundColor: '#a29439',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 2,
            paddingBottom: 2,
          },
          headerText4: {
            color: '#fff',
            fontSize: 24,
          },
          mapContainer4: {
            width: '82%',
            height: 400,
            position: 'relative',
            marginHorizontal: 'auto',
          },
          map4: {
            flex: 1,
          },
          footer4: {
            backgroundColor: '#333',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 8,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          },
          footerText4: {
            color: '#fff',
          },
});

function Reservas ({ navigation }) {
return (
<View style={styles.container1}>
      <View style={styles.header1}>
        <Text style={styles.headerText1}>BOMBOIDI</Text>
        
      </View>
      <View style={styles.content1}>
        <View style={styles.form1}>
          <Text style={styles.label1}>NOME:</Text>
          <TextInput style={styles.input1} placeholder="Nome" />

          <Text style={styles.label1}>DATA:</Text>
          <TextInput style={styles.input} placeholder="Data" />

          <Text style={styles.label1}>RESERVAS:</Text>
          <TextInput style={styles.input1} placeholder="Reservas" />

          <Text style={styles.label1}>HORÁRIO:</Text>
          <TextInput style={styles.input1} placeholder="Horário" />

          <TouchableOpacity style={styles.button1} onPress={() => {}}>
            <Text style={styles.buttonText1}>Faça sua reserva já</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer1}>
        <Text style={styles.footerText1}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
      </View>
    </View>
);


}

function Menu ({ navigation }) {
    return (
        <View style={styles.container2}>
        <View style={styles.header2}>
          <Text style={styles.headerText2}>BOMBOIDI®</Text>
        </View>
        <View style={styles.main2}>
          <View style={styles.container2}>
            
          </View>
        </View>
        <View style={styles.footer2}>
          <Text>BOMBOIDI®</Text>
        </View>
      </View>
    );


    }

    function Contato ({ navigation }) {
        return (
            
            <View style={styles.container3}>
            <View style={styles.header3}>
        <Text style={styles.headerText1}>BOMBOIDI</Text>
        
      </View>
            <View style={styles.contact3}>
              <Text style={styles.contato3}>Contato</Text>
              <View style={styles.form3}>
                <Text>Email:</Text>
                <TextInput style={styles.input3} keyboardType="email-address" />
                <Text>Nome:</Text>
                <TextInput style={styles.input3} />
                <Text>Telefone:</Text>
                <TextInput style={styles.input3} keyboardType="phone-pad" />
                <Text>Mensagem:</Text>
                <TextInput style={[styles.input3, styles.textArea3]} multiline={true} />
                <TouchableOpacity style={styles.button3} onPress={() => alert('Enviar mensagem')}>
                  <Text style={styles.buttonText3}>Enviar mensagem</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }

    function Localizacao ({ navigation }) {
        return ( <View style={styles.container4}>
            <View style={styles.header4}>
              <Text style={styles.headerText4}>BOMBOIDI</Text>
            </View>
            <View style={styles.mapContainer4}>
              
            </View>
            <View style={styles.footer4}>
              <Text style={styles.footerText4}>© 2024 Localização. Todos os direitos reservados.</Text>
            </View>
          </View>);
    }
const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Reservas" component={Reservas} />
<Stack.Screen name="Menu" component={Menu} />
<Stack.Screen name="Contato" component={Contato} />
<Stack.Screen name="Localizacao" component={Localizacao} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;

