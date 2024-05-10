import { StyleSheet, Text, View , TextInput} from 'react-native'

const InputItem = ({title, formKey, formValue, setValue}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={`Entrez votre ${formKey}`}
                value={formValue}
                onChangeText={(value)=>{setValue(formKey,value)}}
            />
        </View>
    )
}


export  default InputItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        borderRadius:20,
        borderColor:'green',
        width:'100%',
        marginTop:5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        width:'65%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'green',
        paddingHorizontal: 10,
    },
})