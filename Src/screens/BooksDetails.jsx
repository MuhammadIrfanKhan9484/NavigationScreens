import React from "react";
import {View, Text} from "react-native" ; 
function bookDetails({navigation, route}){
    const incommingData= route.params;
return (
    <View>
        <Text>{incommingData.data.Title}</Text>
    <Text>{incommingData.data.Subtitle}</Text>
    </View>
); 
}
export {bookDetails} ; 
