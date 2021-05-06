import React from 'react';
import { 
    Platform, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {Feather} from '@expo/vector-icons';

import logo from '../assets/logo.png';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

import {CardPrimary} from '../components/CardPrimary';
import {CardSecondary} from '../components/CardSecondary';

export function Dashboard(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Image source={logo} />
                <Text style={styles.head}>eWallet</Text>
            </View>

            <Text style={styles.subTitle}>Account Overview</Text>
            <View style={styles.accountBalance}>
                <View style={styles.balanceBox}>
                    <Text style={styles.currentValue}>20,600</Text>
                    <Text style={styles.legend}>Current Balance</Text>
                </View>
            </View>

            <Text style={styles.subTitle}>Operations</Text>
            <View style={styles.buttonsOperations}>
                <CardPrimary icon="plus"/>
                <CardPrimary icon="minus" />
            </View>

            <Text style={styles.subTitle}>Services</Text>
            <View style={styles.operations}>
                <CardSecondary icon="dollar-sign" subTitle="Ações" />
                <CardSecondary icon="home" subTitle="Fundo Imobiliarios" />
                <CardSecondary icon="bar-chart" subTitle="Renda Fixa" />
                <CardSecondary icon="hash" subTitle="Rendimento" />
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
