import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import firebase from "firebase";
export default class Open extends React.Component {
  constructor() {
    super();
    this.state = {
      mail: "",
      pass: "",
    };
  }

  signIn = () => {
    const { mail } = this.state;
    const { pass } = this.state;

    if (mail && pass) {
      firebase
        .auth()
        .signInWithEmailAndPassword(mail, pass)
        .then((response) => {
          Alert.alert("Logging you in");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
  };

  signup = () => {
    const { mail } = this.state;
    const { pass } = this.state;

    if (mail && pass) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then((response) => {
          Alert.alert("Signing you up");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    }
  };

  render() {
    return (
      <View style={style.Container}>
        <TextInput
          placeholder="Email ID"
          onChangeText={(txt) => {
            this.setState({ mail: txt });
          }}
          value={this.state.mail}
          style={style.input}
          secureTextEntry={false}
        ></TextInput>

        <TextInput
          placeholder="Password"
          onChangeText={(txt) => {
            this.setState({ pass: txt });
          }}
          value={this.state.pass}
          style={style.input}
          secureTextEntry={true}
        ></TextInput>
        <View style={style.buttons}>
          <TouchableOpacity
            style={style.sign}
            onPress={() => {
              this.signIn();
            }}
          >
            <Text>Signin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.sign}
            onPress={() => {
              this.signup();
            }}
          >
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  input: {
    borderStyle: "dotted",
    borderWidth: 2,
    width: 200,
    marginTop: 100,
    marginLeft: 50,
  },

  Container: {
    marginTop: 200,
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  sign: {
    marginHorizontal: 20,
    backgroundColor: "#4285F4",
    height: 30,
    width: 75,
    alignItems: "center",
  },
});
