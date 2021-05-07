import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    ScrollView
} from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';
import fonts from '../styles/fonts';

import NumberFormat from 'react-number-format';

import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';

interface Stocks {
    id: string
    name: string
    value: number
    quantity: number
}

export function Stocks(){
    const [stocks, setStocks] = useState<Stocks[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function loadStocks(): Promise<void>{
            const response = await api.get('stocks')

            setStocks(response.data.getStocks)
        }

        loadStocks()
    }, [])

    return(
        <SafeAreaView style={styles.content}>
            <View style={styles.title}>
                 <Image source={logo} />
                 <Text style={styles.head}>eWallet</Text>
            </View>

            <Text style={styles.subTitle}>Ordens de Ações</Text>
            <View style={styles.stockContainer}>
                <View style={styles.headerView}>
                    <Text style={styles.title2}>Ativos</Text>
                    <Text style={styles.title2}>Qtde</Text>
                    <Text style={styles.title2}>Valor</Text>
                    <Text style={styles.title2}>Total</Text>
                </View >
                <ScrollView>
                    {stocks.map(stock => 
                        <View style={styles.lineStockView} key={stock.id}>
                            <Text style={styles.nameText}>{stock.name}</Text>
                            <Text style={styles.nameText}>{stock.quantity}</Text>
                            <Text style={styles.nameText}>{stock.value}</Text>
                            <NumberFormat 
                                renderText={text => <Text style={styles.nameText}>{text}</Text>} 
                                value={Math.ceil(stock.value * stock.quantity)} 
                                displayType={'text'}    
                                thousandSeparator={true} />
                        </View>    
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
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
    stockContainer: {
        backgroundColor: colors.box,
        height: 550,
        borderRadius: 10,
        margin: 10
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8
    },
    title2: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 16,
        fontWeight: '600'
    },
    lineStockView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: '#9BA297'
    },
    nameText: {
        fontFamily: fonts.heading,  
        fontSize: 12,
        color: colors.subhead,
        fontWeight: 'bold'
    },
    subTitle: {
        marginTop: 25,
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 16,
        color: colors.title
    }
})