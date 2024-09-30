import React from 'react';
import { TextInput, View } from 'react-native';
import tw from 'twrnc';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import colors from '../config/colors'; 

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[tw`bg-gray-200 rounded-full flex-row p-4 my-2`, { width }]}>
            {icon && (
                // <MaterialCommunityIcons name={icon} size={20} color="gray" style={tw`mr-2`} />
                <></>
            )}
            <TextInput
                placeholderTextColor="gray"
                style={tw`flex-1`}
                {...otherProps}
            />
        </View>
    );
}

export default AppTextInput;
