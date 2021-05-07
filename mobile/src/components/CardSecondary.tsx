import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    View,
    Text,
    ButtonProps
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface IButtons extends ButtonProps {
    icon: string;
    title: string;
}

export function CardSecondary({icon, title, ...rest}: IButtons){
    return(
        <TouchableOpacity style={styles.content} {...rest}>
            <View style={styles.backgroundIcon}>
                <Feather name={icon} size={20} style={styles.icon} />
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    backgroundIcon: {
        width: 75,
        height: 75,
        backgroundColor: colors.box,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: colors.title
    },
    text: {
        fontFamily: fonts.heading,
        fontWeight: '600',
        fontSize: 10,
        color: colors.subhead
    }
})