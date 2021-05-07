import { Feather } from '@expo/vector-icons';
import React from 'react';
import { 
    ButtonProps,
    StyleSheet, 
    TouchableOpacity,
    View
} from 'react-native';
import colors from '../styles/colors';

interface IButtonProps extends ButtonProps{
    icon: string;
}

export function CardPrimary({icon, ...rest}: IButtonProps){
    return(
        <TouchableOpacity style={styles.background} {...rest}>
            <View style={styles.circle}>
                <Feather name={icon} size={22} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '48%',
        height: 120,
        backgroundColor: colors.box,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: 62,
        height: 62,
        backgroundColor: colors.button,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})