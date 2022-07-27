import React from "react";
import { Text, View } from "react-native";
import {  Button, TextInput } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./register.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


type RegisterPageProps = Navigation.AppTabsPageProps<"Register">;

export default function RegisterPage({ navigation }: RegisterPageProps) { 
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register for ScatterSeed</Text>
      <TextInput
        style={styles.textInput}
        dense={true}
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
        style={styles.textInput}
        dense={true}
        mode="outlined" 
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.textInput}
        dense={true}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TextInput
        style={styles.textInput}
        dense={true}
        mode="outlined"
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
      />
      <Button icon="check" mode="contained" onPress={() => console.log("Pressed")} style={styles.button}>
      Register
      </Button>
    </View>
  );
}