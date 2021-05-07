import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    Text, 
    View, 
    StyleSheet,
    Image,
    Platform,
    StatusBar
} from 'react-native';

import side from '../assets/side.png';
import logo from '../assets/logo.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';

import {Button} from '../components/Button';

import { useNavigation } from '@react-navigation/core';

export function Welcome(){
    const [time, setTime] = useState(new Date());
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('Dashboard');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={side}  />
            </View>

            <View style={styles.content}>
                <View style={styles.date}>
                    <Text style={styles.head}>{format(time, 'EEEE')}</Text>
                    <Text style={styles.subhead}>{format(time, "LLL'.'LL'.'u'")}</Text>
                </View>

                <View style={styles.appInfo}>
                    <Image source={logo} />
                    <Text style={styles.logoName}>eWallet</Text>
                    <Text style={styles.subhead}>Open An Account For Digital
                     E-Wallet Solutions.Instant Payouts. Join For Free.</Text>
                </View>

                <View style={styles.bottom}>
                    <Button title="Entrar" onPress={handleStart} icon="arrow-right" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position: 'relative'
    },
    content: {
        position: 'absolute',
        width: 220,
        height: '90%',
        left: 159,
        top: 60,
        flexDirection: 'column',
    },
    date: {
        position: 'absolute',
        top: 0
    },
    head: {
        fontFamily: fonts.heading,
        fontWeight: '500',
        fontSize: 24
    },
    subhead: {
        fontFamily: fonts.text,
        fontWeight: '500',
        fontSize: 13,
        color: colors.subhead
    },
    appInfo: {
        position: 'absolute',
        top: '35%'
    },
    logoName: {
        fontFamily: fonts.heading,
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 45
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
})