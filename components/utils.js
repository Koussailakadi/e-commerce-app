import { MaterialIcons } from '@expo/vector-icons';
// Drawer.Screen options: 
export default options = (myProp) => ({
    //drawerLabel: 'Accueil',
    drawerIcon: function(){ 
        // le bind permet de passer des paramètres supplémentaires à la fonction
        // ici, on passe le paramètre myProp à la fonction
        // myProp est le nom de l'icône que l'on veut afficher dans le drawer
        // sachant que l'icône change en fonction du paramètre myProp
        // est que la fonction drawerIcon est fléchée à 3 atributs (size, color, focusable)
        // donc il faut rajouter le bind pour passer les paramètres supplémentaires à la fonction drawerIcon
      return <MaterialIcons name={myProp} size={24} color="green"/>
    }.bind(null, myProp), 
    headerShown: true,
    //headerTitle: 'Titre de la page',
    headerTitleAlign: 'center', // centrer le titre
    headerTintColor: 'green', // couleur du titre + icons du drawer
    headerStyle: { // styles du header en entier
      backgroundColor: 'white',
    },
    headerTitleStyle: { // styles du titre du header
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
    //initialParams={{ param1: 'value1', param2: 'value2' }}
    // listeners={{
    //   focus: () => { console.log('Catalogue Screen focused'); },
    //   blur: () => { console.log('Catalogue Screen blurred'); },
    //   state: ({ data }) => { console.log('Catalogue Screen state changed', data); },
    // }}
});