import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    TouchableWithoutFeedback, 
    Keyboard,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';

import logo from '../assets/logo.png';
import api from '../services/api';
import colors from '../styles/colors';

import fonts from '../styles/fonts';

interface Item {
    id: string
    name: string
    value: number
    quantity: number
}

interface IOperation{
    operation: string;
}

export function DeleteMovimentation(){
    const [items, setItems] = useState<Item[]>([]);
    const navigation = useNavigation();
    const route = useRoute();
    const { operation } = route.params as IOperation;

    function handleDelete(item: Item){
        Alert.alert("Remover", `Deseja mesmo remover ${item.name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try{
                        await api.delete(`/${operation}`,{
                            headers: {
                                id: item.id
                            }
                        });

                        navigation.navigate('Dashboard');
                    }catch(err){
                        Alert.alert('Não foi possivel remover! 🤧');
                    }
                }
            }
        ])
    }

    useEffect(() => {
        async function loadStocks(): Promise<void>{
            const response = await api.get(`${operation}`)

            switch(operation){
                case 'stocks':
                    setItems(response.data.getStocks);
                    break;
                case 'income':
                    setItems(response.data.getFixedIncome);
                    break;
                case 'realStateFund':
                    setItems(response.data.getRealStateFund);
                    break;
                default:
                    console.log(`Sorry, we are out of ${operation}.`);
            }
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
                    <Text style={styles.title2}>     </Text>
                </View >
                <ScrollView>
                    {items.map(item => 
                        <View style={styles.lineStockView} key={item.id}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.nameText}>{item.quantity}</Text>
                            <Text style={styles.nameText}>{item.value}</Text>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item)}>
                                <Feather style={{color: colors.red}} name="trash-2" size={25} />
                            </TouchableOpacity>
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
    },
    deleteButton: {
        padding: 0
    }
})