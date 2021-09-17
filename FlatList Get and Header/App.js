import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal, Header, Stack } from 'react-native';
import Constants from 'expo-constants';

async function executeGet(url,jsonState){
    //get síncrono com o uso do fetch
    await fetch(url)
    .then(response => {
          if (response.status === 200) {
            console.log('sucesso');
            response.json().then(function(result){ 

              //console.log(result);
              jsonState(result)

              });
          } else {
            throw new Error('Erro ao consumir a API!');
          }
      })
      .then(response => {
        //console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }



const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Colors = ({name,color}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={color}/>
      
      <Pressable onPress={mudaModal}>
        <Text style={{ width: 100, height: 100,backgroundColor: color,borderRadius: 50, alignSelf: 'center',}}></Text>
        <Text style={styles.paragraph}>{name}</Text>  
      </Pressable>
    </View>
    )
}



export default function App() {
  <View>
  <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
  />
  </View>
  //StackScreen

  const [jsonData,setJsonData] = React.useState({})

  executeGet("https://reqres.in/api/unknown",setJsonData)

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    
  return(
      <Colors name={item.name} 
              color={item.color}
      />
    )
  }
  

  return (
    <View style={styles.container}>

      <FlatList
             ListHeaderComponent={
            <Text style={styles.header}>
            Colorita
            </Text>
       }
        data={jsonData.data}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
   header: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#8a2be2',
  },
});
