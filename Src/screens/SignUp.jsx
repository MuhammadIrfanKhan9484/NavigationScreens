import { TextInput, Image, View, Text, TouchableOpacity } from "react-native";
function SignUp() {
  return (
    <View style={{ backgroundColor: "white", flex: 2 }}>
      <Image
        style={{
          marginTop: 12,
          marginHorizontal: 30,
          width: "30%",
          height: "10%",
        }}
        source={require("../Pictures/logo.png")}
      />
      <Text style={{ marginHorizontal: 24, color: "#878585", fontSize: 15 }}>
        Lets Create Account
      </Text>
      <View
        style={{
          marginVertical: 100,
          alignItems: "center",
          flex: 1.8,
        }}
      >
        <Image
          style={{ width: 31, height: 22 }}
          source={require("../Pictures/pakflag.png")}
        />
        <TextInput
          placeholder={"+92 - 3012345678"}
          placeholderTextColor={"#D9D9D9"}
          style={{
            marginHorizontal: 24,
            height: 56,
            width: 320,
            borderWidth: 1,
            padding: 10,
            borderRadius: 12,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 24,
            width: 320,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#665AEC",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Next</Text>
        </TouchableOpacity>
        <Text
          style={{ fontSize: 20, color: "black", justifyContent: "flex-end" }}
        >
          Already Have an Account?{" "}
          <Text style={{ color: "#1241E5" }}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
}
export { SignUp };
