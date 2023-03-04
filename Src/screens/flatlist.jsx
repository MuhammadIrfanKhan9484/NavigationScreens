import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
const listflat = [
  {
    Name: "Ali",
    Picture:
      "https://freerangestock.com/thumbnail/48180/child-holding-the-world-in-her-hands.jpg",
    Likes: 30,
    Shares: 233,
  },
  {
    Name: "Irfan",
    Picture:
      "https://freerangestock.com/thumbnail/1479/little-girl-with-mischievous-look.jpg",
    Likes: 30,
    Shares: 233,
  },
  {
    Name: "Rizan Atta",
    Picture:
      "https://freerangestock.com/thumbnail/39968/wall-street-businessman--retro-styled-looks-.jpg",
    Likes: 30,
    Shares: 233,
  },
];

export default function Posts(navigation) {
  const gotoRegister = () => {
    Alert.alert("Reminder", "Do You want to share", [
      {
        text: "Yes",
        onPress: () => {
          alert("Nice");
        },
      },
      {
        text: "No",
        onPress: () => {
          alert("Request Declined");
        },
      },
    ]);
  };
  const __RenderPoat = ({ item }) => (
    <View
      style={{
        height: 450,
        width: "100%",
        backgroundColor: "rgba(205,180,219,1)",
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text>{item.Name}</Text>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: item.Picture }}
      />
      <View
        style={{
          felx: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity>
          <Text onPress={gotoRegister}>Likes:{item.Likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Shares:{item.Shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={listflat} renderItem={__RenderPoat} />
    </View>
  );
}
export { Posts };
