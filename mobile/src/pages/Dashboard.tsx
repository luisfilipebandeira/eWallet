import React, { useEffect, useState } from 'react';
import { 
    Platform, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import NumberFormat from 'react-number-format';

import api from '../services/api';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

import {CardPrimary} from '../components/CardPrimary';
import {CardSecondary} from '../components/CardSecondary';
import { useNavigation } from '@react-navigation/core';

export function Dashboard(){
    const [balanceStocks, setBalanceStocks] = useState(0);
    const [fixedIncome, setFixedIncome] = useState(0);
    const [balanceRealStateFund, setBalanceRealStateFund] = useState(0);
    const navigation = useNavigation();

    async function loadStocks(): Promise<void>{
        const response = await api.get('stocks');
        const response1 = await api.get('realStateFund');
        const response2 = await api.get('income');
        setBalanceStocks(response.data.getBalance);
        setBalanceRealStateFund(response1.data.getBalance);
        setFixedIncome(response2.data.getBalance);
    }

    useEffect(()=>{
        loadStocks();
    },[]); 

    function handleSelectMovimentation(){
        navigation.navigate('SelectMovimentation');
    }

    function handleDeleteMovimentation(){
        navigation.navigate('SelectMovimentationToDelete');
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={loadStocks} style={styles.title}>
                <Image source={logo} />
                <Text style={styles.head}>eWallet</Text>
            </TouchableOpacity>

            <Text style={styles.subTitle}>Account Overview</Text>
            <View style={styles.accountBalance}>
                <View style={styles.balanceBox}>
                    <NumberFormat 
                        renderText={text => <Text style={styles.currentValue}>{text}</Text>} 
                        value={balanceStocks + balanceRealStateFund + fixedIncome} 
                        decimalScale={2}
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'R$ '} />
                    <Text style={styles.legend}>Current Balance</Text>
                </View>
            </View>

            <Text style={styles.subTitle}>Operations</Text>
            <View style={styles.buttonsOperations}>
                <CardPrimary icon="plus" title="" onPress={handleSelectMovimentation}/>
                <CardPrimary icon="minus" title=""  onPress={handleDeleteMovimentation} />
            </View>

            <Text style={styles.subTitle}>Services</Text>
            <View style={styles.operations}>
                <CardSecondary icon="dollar-sign" title="A????es" onPress={() => navigation.navigate('Stocks')} />
                <CardSecondary icon="home" title="Fundo Imobiliarios" onPress={() => navigation.navigate('RealStateFund')} />
                <CardSecondary icon="bar-chart" title="Renda Fixa" onPress={() => navigation.navigate('Income')} />
                <CardSecondary icon="hash" title="Rendimento" onPress={() => {Alert.alert("Ainda estamos trabalhando aqui, por favor aguarde! ??????")}} />
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
