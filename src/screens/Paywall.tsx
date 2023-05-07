import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';


export type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Paywall'
>;

const Paywall = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <ScrollView className='bg-[#1A2F44] flex-1'>
            <View className='m-10 space-y-2'>
                <Text className='text-2xl text-center uppercase text-white font-bold'>
                    upgrade
                </Text>
                <Text className='text-center text-white'>
                    Upgrade to Pro Access all the Features
                </Text>
            </View>

            <TouchableOpacity
                onPress={navigation.goBack}
                className='absolute top-0 right-0 p-5'
            >
                <Ionicons name="md-close-circle-sharp" size={32} color="#E5962D" />
            </TouchableOpacity>

            <View className='items-center'>
                <MaterialCommunityIcons
                    name="trophy-award"
                    size={150}
                    color="#E5962D"

                />
            </View>

            <View className='space-y-5 px-10 py-5'>
                <View className='flex-row space-x-10 items-center'>
                    <Ionicons name="md-key" size={32} color="#E5962D" />
                    <View className='flex-1'>
                        <Text className='text-white font-bold text-lg'>
                            Access to all pro features
                        </Text>
                        <Text className='text-white text-sm font-extralight'>
                            Upgrade to the premium version of the app and enjoy all the
                            exclusive features available only to pro users
                        </Text>
                    </View>
                </View>

                <View className='flex-row space-x-10 items-center'>
                    <Ionicons name="md-person-add-outline" size={32} color="#E5962D" />
                    <View className='flex-1'>
                        <Text className='text-white font-bold text-lg'>
                            Helpline 24/7 to Personal Trainers
                        </Text>
                        <Text className='text-white text-sm font-extralight'>
                            Get unlimited access to our fitness support team and get useImperativeHandle(
                            anytime you need it - day or night,
                        </Text>
                    </View>
                </View>

                <View className='flex-row space-x-10 items-center'>
                    <Ionicons name="md-star" size={32} color="#E5962D" />
                    <View className='flex-1'>
                        <Text className='text-white font-bold text-lg'>
                            Unlock Limited Edition Content
                        </Text>
                        <Text className='text-white text-sm font-extralight'>
                            Unlock exclusive content that you can't get anywhere else like
                            special exclusive workouts and routines.
                        </Text>
                    </View>
                </View>
            </View>

            {/* Subscribe Monthly */}


            {/* Subscribe Annually */}



        </ScrollView>
    )
}

export default Paywall