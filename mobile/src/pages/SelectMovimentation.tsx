import React, { useState } from 'react';
import {
    StyleSheet, 
    View,
    Image,
    Text,
    Platform,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import logo from '../assets/logo.png';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function SelectMovimentation(){
    const [type, setType] = useState('');
    const navigation = useNavigation();

    function handleClickButton(operation: string){
        navigation.navigate("AddMovimentation", {operation});
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Image source={logo} />
                <Text style={styles.head}>eWallet</Text>
            </View>

            <Text style={styles.subTitle}>Selecione o que você quer adicionar:</Text>
            <View style={styles.buttonsContainer}>
                <Button title="Ações" onPress={() => {handleClickButton('stocks')}} icon="activity" />
                <Button title="Renda Fixa" onPress={() => {handleClickButton('fixedIncome')}} icon="bar-chart" />
                <Button title="Fundos Imobiliarios" onPress={() => {handleClickButton('RealStateFund')}} icon="package" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal: 25,
        marginTop: 10,
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
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        marginTop: 50,
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 16,
        color: colors.title
    },
});