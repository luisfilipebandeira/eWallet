import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    TouchableWithoutFeedback, 
    Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import logo from '../assets/logo.png';
import { Button } from '../components/Button';
import api from '../services/api';
import colors from '../styles/colors';

import fonts from '../styles/fonts';

export function AddMovimentation(){
    const [quantity, setQuantity] = useState('');
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const navigation = useNavigation();

    async function handleSubmit(){
        try{
            await api.post('/stocks', {
                name: name,
                value: Number(value),
                quantity: Number(quantity)
            });

                navigation.navigate('Dashboard');
        }catch(err){
            console.log(err)
        }
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.content}>
                    <View style={styles.title}>
                        <Image source={logo} />
                        <Text style={styles.head}>eWallet</Text>
                    </View>
                    
                    <View style={styles.background}>
                        <Text style={styles.subTitle}>Adicionar Ativo</Text>
                        <TextInput 
                            placeholder="Quantidade"
                            keyboardType="number-pad"
                            style={styles.input1}
                            value={quantity}
                            onChangeText={(value) => setQuantity(value)}
                            />
                        <TextInput 
                            placeholder="Nome do Ativo"
                            style={styles.input}
                            value={name}
                            onChangeText={(value) => setName(value)}
                            />
                        <TextInput 
                            placeholder="Valor do Ativo"
                            keyboardType="number-pad"
                            style={styles.input}
                            value={value}
                            onChangeText={(value) => setValue(value)}
                            />
                    </View>
                <Button title="Adicionar" icon="file-plus" onPress={handleSubmit} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal: 25,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboard: {
        flex: 1
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    head: {
        fontFamily: fonts.heading,
        fontWeight: '500',
        fontSize: 24,
        marginLeft: 10
    },
    subTitle: {
        marginBottom: 25,
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 20,
        color: colors.title
    },
    background: {
        marginTop: 25,
        width: '100%',
        height: 400,
        backgroundColor: colors.box,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.title,
        width: '90%',
        fontSize: 18,
        padding: 10,
        marginTop: 40,
        textAlign: 'center'
    },
    input1: {
        borderBottomWidth: 1,
        borderColor: colors.title,
        width: '90%',
        fontSize: 18,
        padding: 10,
        textAlign: 'center'
    }
});
