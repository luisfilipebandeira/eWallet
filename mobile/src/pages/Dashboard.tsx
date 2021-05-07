import React, { useEffect, useState } from 'react';
import { 
    Platform, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import NumberFormat from 'react-number-format';

import api from '../services/api';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

import {CardPrimary} from '../components/CardPrimary';
import {CardSecondary} from '../components/CardSecondary';
import { useNavigation } from '@react-navigation/core';

interface Balance{
    getBalance: number;
}

export function Dashboard(){
    const [balance, setBalance] = useState<Balance>({} as Balance);
    const navigation = useNavigation();

    useEffect(()=>{
        async function loadStocks(): Promise<void>{
            const response = await api.get('stocks');

            setBalance(response.data);
        }

        loadStocks();
    },[balance]);

    function handleAddMovimentation(){
        navigation.navigate('AddMovimentation');
    }

    function handleDeleteMovimentation(){
        navigation.navigate('DeleteMovimentation');
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Image source={logo} />
                <Text style={styles.head}>eWallet</Text>
            </View>

            <Text style={styles.subTitle}>Account Overview</Text>
            <View style={styles.accountBalance}>
                <View style={styles.balanceBox}>
                    <NumberFormat 
                        renderText={text => <Text style={styles.currentValue}>{text}</Text>} 
                        value={(balance.getBalance).toFixed(2)} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'R$ '} />
                    <Text style={styles.legend}>Current Balance</Text>
                </View>
            </View>

            <Text style={styles.subTitle}>Operations</Text>
            <View style={styles.buttonsOperations}>
                <CardPrimary icon="plus" title="" onPress={handleAddMovimentation}/>
                <CardPrimary icon="minus" title=""  onPress={handleDeleteMovimentation} />
            </View>

            <Text style={styles.subTitle}>Services</Text>
            <View style={styles.operations}>
                <CardSecondary icon="dollar-sign" title="Ações" onPress={() => navigation.navigate('Stocks')} />
                <CardSecondary icon="home" title="Fundo Imobiliarios" onPress={() => {}} />
                <CardSecondary icon="bar-chart" title="Renda Fixa" onPress={() => {}} />
                <CardSecondary icon="hash" title="Rendimento" onPress={() => {}} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginHorizontal: 25,
        marginTop: 10
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
    accountBalance: {
        alignItems: 'center',
    },
    subTitle: {
        marginTop: 25,
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 16,
        color: colors.title
    },
    balanceBox: {
        marginTop: 25,
        width: '100%',
        height: 156,
        backgroundColor: colors.box,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    currentValue:{
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 24
    },
    legend: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.subhead
    },
    buttonsOperations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },
    operations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    }
})
