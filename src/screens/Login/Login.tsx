import React from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./login.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


type LoginPageProps = Navigation.AppTabsPageProps<"Login">;

export default function LoginPage({ navigation }: LoginPageProps) { 
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome back to ScatterSeed</Text>
      <TextInput
        style={styles.textInput}
        dense={true}
        mode="outlined" 
        label="Username/Email"
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
      <Button icon="check" mode="contained" onPress={() => console.log("Pressed")} style={styles.button}>
      Login
      </Button>
    </View>

  );
}