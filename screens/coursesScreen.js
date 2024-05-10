import { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import {addCourseData, deleteCourseData} from '../redux/slices/courseSlice';

import { StyleSheet, Text, View, FlatList, Alert, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import InputItem from '../components/courseItem';


const CoursesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const courseStore = useSelector(state => state.courses.courses);
  const [isVisible, setIsVisible] = useState(false);

  // form add course
  const initialFormData={
    id:'',
    title:'',
    description:'',
    price:'',
    image:'',
    selected: false,
    instructorId: '1'
  }
  const [formData, setFormData] = useState(initialFormData);


  const handleAddCourse = (key, value) => {
    const id = courseStore.length + 1;
    if(key==='price'){
      value = parseFloat(value);
    }
    setFormData((prevFormData)=>({...prevFormData, ['id']:id,[key]:value}));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Mes Cours',
      headerRight:()=>{ // icons à droite 
        return <MaterialIcons 
          name="add-circle-outline"
          size={24} color="green" 
          style={{marginRight:10}} 
          onPress={()=>setIsVisible(true)}
        />
      },
    });
  });

  const handleRemoveCourse = (course) =>{
     //dispatch(removeCourseCart(item.id))
    Alert.alert(
      'Cours supprimé du panier',
      `Vous avez supprimé le cours ${course.title} du panier.`,
      [
          { text: 'Annuler', onPress: () => console.log('suppression du cours du panier annulée'), style: 'cancel' },
          { text: 'Valider', onPress: () => dispatch(deleteCourseData(course.id))}
      ],
      { cancelable: false }
    );
  }

  const renderCourses = ({item}) =>{
    return (
      <View style={styles.container}>        
        <View style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} €</Text>
        </View>
        <View style={styles.footer}>
            <MaterialIcons 
              name="edit-document" 
              size={24} color="green" 
              style={{marginRight:30}}
              onPress={()=>(console.log("edit",item.id))}  
              />
            <MaterialIcons 
                name="highlight-remove" 
                size={24} color="red" 
                style={{marginLeft:30}}
                onPress={()=>handleRemoveCourse(item)}    
            />
        </View>
      </View>
    )
  }

  if (courseStore.length === 0){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Aucun cours!</Text>
      </View>
    )
  } 

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      {/* ajout d'un nouveau cours */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
        
      >
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
              <MaterialIcons 
                name="close" 
                size={24} color="green" 
                style={{marginLeft:30}}
                onPress={()=>setIsVisible(!isVisible)}    
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold', marginBottom:30, marginTop:50}}>Ajouter un cours</Text>
              <InputItem 
                title="Titre" 
                formKey="title" 
                formValue={formData.title} 
                setValue={handleAddCourse}
              />
              <InputItem 
                title="Image" 
                formKey="image" 
                formValue={formData.image} 
                setValue={handleAddCourse}
              />
              <InputItem 
                title="Price" 
                formKey="price" 
                formValue={formData.price} 
                setValue={handleAddCourse}
              />
              <InputItem 
                title="Description" 
                formKey="description" 
                formValue={formData.description} 
                setValue={handleAddCourse}
              />
              
              <View style={styles.validate}>
                <Text style={styles.text}>
                  Ajouter la formation {formData.title} {!formData.price ? "" : `au prix ${formData.price} €` }
                </Text>
                <MaterialIcons 
                  name="bookmark-add" 
                  size={32} 
                  color="green"
                  disabled={!formData.title || !formData.image || !formData.price}
                  onPress={()=>{dispatch(addCourseData(formData));setFormData(initialFormData)}}
                  />
              </View>
              
            </View>
          </View>
        </View>
      </Modal>

      {/* les des cours */}
      <FlatList
        data={courseStore}
        renderItem={renderCourses}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{backgroundColor:'white'}}
      />
    </View>
  )
}

export default CoursesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:10,
    borderRadius:20,
    borderColor:'green',
    borderWidth:2,
    backgroundColor:'white',
    marginVertical:10,
    width:'90%',
    alignSelf: 'center',
    backgroundColor:'`rgba(218, 192, 233,0.2)`',
  },
  header:{   
      overflow: 'hidden',
      height:250,
      width:'100%',
  },
  footer:{
      flexDirection:'row',
      justifyContent:'space-between',
  },
  title:{
    fontSize:20, fontWeight:'bold', textAlign:'center', color:'green',
  },
  price:{
      fontSize:18, fontWeight:'bold', textAlign:'center', color:'black', marginTop:10
  },
  footer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20
  },
  //
  modalView:{
    backgroundColor:'white', 
    height:600, 
    width:'95%', 
    borderRadius:20, 
    borderWidth:2, 
    borderColor:'black',
    padding:10,
  },
  validate:{
    alignItems:'center',
    justifyContent:'space-between',
    verticalAlign:'center',
    marginTop:50,
    marginLeft:30,
    marginRight:30,
    height:80
},
  
})