import { View, Text, Button, Image } from "react-native";
function Splash({ navigation }) {
  const LoginDetails = () => {
    navigation.navigate("DataPassing");
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: 132, height: 86 }}
        source={require("../Pictures/logo.png")}
        />
        <Text 
      style={{ fontWeight: "bold", color: "#000000", fontSize: 25 }}>
        CS BEEN
      </Text>
      <Text style={{ color: "#878585", fontSize: 15 }}>We make future</Text>
      <Button title="Get Started" onPress={LoginDetails} />
    </View>
  );
}
export { Splash };
