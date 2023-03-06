import React, { useEffect, useState, useRef } from "react";
import { Image, Button, TextInput, View, TouchableOpacity } from "react-native";
import * as EmailValidator from "email-validator";
import { Camera, CameraType } from "expo-camera";

function Registration({ navigation, route }) {
  const incommingData = route.params;
  alert(incommingData.data);

  const [isValid, setIsValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  //  CameraPermissions
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  requestPermission();
  //Camera Ref list
  const cameraref = useRef();
  const [profilePicUri, setProfilePicUri] = useState("");
  useEffect(() => {
    checkValidForm();
  }, [email, firstName, lasttName, password, confirmPassword]);
  useEffect(() => {
    checkValidForm();
  }, [email, firstName, lastName, password, confirmPassword]);

  const checkValidForm = () => {
    if (email === "") {
      setIsValid(false);
      return;
    }

    if (firstName === "") {
      setIsValid(false);
      return;
    }

    if (lastName === "") {
      setIsValid(false);
      return;
    }

    if (password === "") {
      setIsValid(false);
      return;
    }

    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }

    // uses email validator package and tell that email is valid or not
    if (EmailValidator.validate(email) === false) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  };
  //CAmera Pic Cature live
  const onTakePicture = () => {
    // if camera not working
    //Camera.current means at that time camera status
    if (Camera.curent === undefined) {
      return;
    }

    cameraref.current
      .takePictureAsync()
      .then((response) => {
        console.log(response);
        alert("take pic camera working good! pic taken");
        //check if the path of picture exists
        if (response.uri !== undefined) {
          setProfilePicUri(response.uri);
        }
      })
      .catch((error) => {
        alert("sory i cant take pic");
        alert(error.message);
      });
  };

  return (
    <View style={style.container}>
      <View style={style.form}>
        <Image style={style.profilePicImg} source={{ uri: profilePicUri }} />

        <TextInput
          style={style.inputBox}
          placeholder={"first name"}
          onChangeText={setFirstName}
        />
        <TextInput
          style={style.inputBox}
          placeholder={"last name"}
          onChangeText={setLasttName}
        />
        <TextInput
          style={style.inputBox}
          placeholder={"email"}
          onChangeText={setemail}
        />
        <TextInput
          style={style.inputBox}
          placeholder={"password"}
          onChangeText={setPassword}
        />
        <TextInput
          style={style.inputBox}
          placeholder={"confirm password"}
          onChangeText={setconfirmPassword}
        />
        <Button title="Click Me" onPress={onSubmitPress} disabled />
        <Camera ref={cameraref} style={style.camera} type={type}>
          <TouchableOpacity>
            <View style={style.cameraButton} />{" "}
          </TouchableOpacity>
        </Camera>
      </View>
      <View style={style.BottomBox}></View>
    </View>
  );
}
export { Registration };
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  form: {
    flex: 0.8,
    padding: 10,
  },
  inputBox: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  BottomBox: {
    flex: 0.2,
  },
  camera: { width: "100%", height: 200 },
  cameraButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  profilePicImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 5,
  },
});
