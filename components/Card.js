import { View, Image, StyleSheet } from "react-native";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default function Card({ imageSource, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Header title={title} />
      <Image source={imageSource} style={styles.image} />
      <SubHeader title={subtitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
});
