import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Home'>;

type Props = {
    title: string;
    screen: any;
    color: string;
    icon?: any;
    vertical?: boolean;
    requiresPro?: boolean;
}

const ActionRow: React.FC<Props> = ({ title, screen, color, requiresPro, icon, vertical }) => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screen)}
            className={`flex flex-1 m-2 justify-center items-center py-6 shadow-sm
            rounded-lg space-x-2 ${vertical ? 'flex-col' : 'flex-row'}`}
            style={{
                backgroundColor: color,
            }}
        >
            <Ionicons name={icon} size={30} color="white" />
            <Text className='text-white font-bold text-lg'>{title}</Text>
        </TouchableOpacity>
    )
}

export default ActionRow