import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Title from "./components/Title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;

  const resultBanner =
    score > 40
      ? "https://img.freepik.com/free-photo/front-view-woman-holding-prize_23-2149943743.jpg?t=st=1714639564~exp=1714643164~hmac=9c2296742184f43454a95a1e70400df0372440ca2769777c139b46b85fa923dc&w=1060"
      : "https://img.freepik.com/free-photo/buzzer-table-with-red-background_23-2149943719.jpg?t=st=1714639783~exp=1714643383~hmac=3e173000c49bdcfea77f94a3adb6372957e3418001f5facb643480cb98e4c088&w=1060";

  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: resultBanner }} style={styles.banner} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
});
