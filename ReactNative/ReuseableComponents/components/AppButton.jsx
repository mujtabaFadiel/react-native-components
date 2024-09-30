import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity 
            style={tw`bg-blue-500 w-full items-center justify-center p-2 rounded-full my-3`} 
            onPress={onPress}
        >
            <Text style={tw`text-white text-lg font-bold uppercase`}>
                {title}
            </Text>
        </TouchableOpacity> 
    );
}

export default AppButton;
