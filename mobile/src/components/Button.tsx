import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ButtonProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Feather} from '@expo/vector-icons';

interface IButtonProps extends ButtonProps{
    title: string;
    icon: string;
}

export function Button({title, icon, ...rest}: IButtonProps){
    return(
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textButton}>{title}</Text>
            <Feather name={icon} style={styles.buttonIcon} size={16} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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