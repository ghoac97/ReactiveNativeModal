	import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


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

const Pessoa = ({nome, title ,body}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={body}/>
      
      <Pressable onPress={mudaModal}>
       

        <Text style={styles.paragraph}>{nome}
          <Text style={styles.postin}>{"\nPost in " + getCurrentDate() + "\n" + "\n"}
          </Text>
            <Text style={styles.title}>
            {title}
            </Text>
        </Text>
      </Pressable>
    </View>
    )
}

const getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      
      return date + '-' + month + '-' + year;
}

const DATA = [
    {
    "userId": 1,
    "id": 1,
    "first_name": "Luis",
    "last_name": "Carlos",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "first_name": "Maria",
    "last_name": "Almeida",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "first_name": "Roberto",
    "last_name": "Santos",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "first_name": "Cida",
    "last_name": "Jose",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "first_name": "Antonio",
    "last_name": "Aberlino",
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "first_name": "Carol",
    "last_name": "Lusia",
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "first_name": "Aline",
    "last_name": "Barbosa",
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "first_name": "Vitoria",
    "last_name": "Reis",
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "first_name": "Catarina",
    "last_name": "Brasil",
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "first_name": "Rodrigo",
    "last_name": "Doarte",
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
    ];


export default function App() {

  
  //função que renderiza cada item do FlatList
  function meuItem({item}){
    let nomeCompleto = item.first_name + " " + item.last_name
    return(
      <Pessoa nome={nomeCompleto} 
              title={item.title}
              body={item.body}
      />
    )
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white'
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
    title: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white'
  },
    postin: {
    margin: 12,
    padding: 12,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white'
  },
});