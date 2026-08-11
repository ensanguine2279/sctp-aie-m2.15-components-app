import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Button from "./components/Button";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  // Track focus state for each input
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNotesFocused, setIsNotesFocused] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require("./assets/images/ntu-building.webp")}
              style={styles.bannerImg}
            />

            <Header title="AI Engineering Course" color="darkblue" />
            <Image
              source={{ uri: "https://i.imgur.com/9wvRTDo.png" }}
              style={styles.image}
            />
            <SubHeader title="Sign Up Form" />

            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            {/* Name Input with focus styling */}
            <TextInput
              style={[styles.textInput, isNameFocused && styles.focusedInput]}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
              autoCorrect={false}
              autoComplete="off"
            />

            <TextInput
              style={[styles.textInput, isEmailFocused && styles.focusedInput]}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              autoCorrect={false}
              autoComplete="off"
            />

            <TextInput
              style={[styles.notesInput, isNotesFocused && styles.focusedInput]}
              value={notes}
              onChangeText={setNotes}
              onFocus={() => setIsNotesFocused(true)}
              onBlur={() => setIsNotesFocused(false)}
              placeholder="Enter notes here..."
              multiline
              textAlignVertical="top"
              autoCorrect={false}
            />
            <Button
              title="Submit"
              onPress={() => console.log({ name, email, notes })}
            />
            <StatusBar style="dark" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bannerImg: {
    width: "90%",
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 40,
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333",
    padding: 10,
    margin: 12,
  },
  notesInput: {
    height: 80,
    width: "70%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333",
    padding: 10,
    margin: 12,
  },
  focusedInput: {
    borderColor: "darkblue", // Changes border color when focused
    borderWidth: 2, // Makes the border slightly thicker on focus
  },
});
