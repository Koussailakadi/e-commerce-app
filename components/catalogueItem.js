import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const CatalogueItem = ({course, handleAddCourse}) => {
  return (
    <View style={styles.container}>        
        <View style={styles.header}>
            <ImageBackground
                source={{uri:course.image}}
                style={styles.header}
            />
        </View>
        <View style={styles.body}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.price}>{course.price} €</Text>
        </View>
        <View style={styles.footer}>
            <MaterialIcons name="remove-red-eye" size={24} color="black" style={{marginRight:30}}/>
            <MaterialIcons 
                name="add-shopping-cart" 
                size={24} color="black" 
                style={{marginLeft:30}}
                onPress={handleAddCourse}    
            />
        </View>
    </View>
  )
}

export default CatalogueItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10,
        borderRadius:20,
    },
    header:{   
        overflow: 'hidden',
        height:250,
        width:'100%',
    },
    body:{
        backgroundColor: `rgba(44,187,27,0.9)`,
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        //backgroundColor:'blue',
    },
    title:{
        fontSize:20, fontWeight:'bold', textAlign:'center', color:'white',
    },
    price:{
        fontSize:18, fontWeight:'bold', textAlign:'center', color:'white',
    }
})