import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, TextInput, Button, Image } from "react-native";

function Login() {
  const [ImageUri, setImageUri] = useState();
  const openGallery = () => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((respnse) => {
      console.log("Permission granted");
    });
    ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    })
      .then((response) => {
        if (response.uri !== undefined) {
          setImageUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={style.container}>
      <View style={style.imageBox}>
        <Image source={{ uri: ImageUri }} style={{ width: 200, height: 200 }} />
        <Button title={"open gallery"} onPress={openGallery} />
      </View>
    </View>
  );
}

export { Login };
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    flex: 1,
  },
});
