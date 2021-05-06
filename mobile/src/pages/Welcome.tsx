import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';

import side from '../assets/side.png';
import logo from '../assets/logo.png';

import {Feather} from '@expo/vector-icons'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';

export function Welcome(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        if(isBefore(time, new Date()))
            setTime(new Date());
        
    }, []);

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
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                        <Feather name="arrow-right" style={styles.buttonIcon} size={16} />
                    </TouchableOpacity>
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: colors.button
    },
    textButton: {
        fontFamily: fonts.text,
        fontSize: 16,
        fontWeight: '500'
    },
    buttonIcon: {
        marginLeft: 5,
    }
})