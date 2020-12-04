import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_4: "" }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.Image_6}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  Text_3: {},
  TextInput_4: {},
  Button_5: {},
  Image_6: {
    width: 100,
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4
  }
})
