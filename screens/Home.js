import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import Title from "./components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText="QUIZZLER" />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?w=740&t=st=1714639396~exp=1714639996~hmac=933393fb7ccb17726880a982d550ff3871dc929958a764e3d1416ecc9efc40d6",
          }}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
});
