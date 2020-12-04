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
      <View style={styles.View_5}>
        <View />
        <View />
        <View />
        <View />
        <View />
      </View>
      <View style={styles.View_8}>
        <View />
        <View />
      </View>
      <View style={styles.View_11}>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_2: {},
  Text_3: {},
  TextInput_4: {},
  View_5: { flexDirection: "row" },
  View_6: {},
  View_7: {},
  View_14: {},
  View_15: {},
  View_16: {},
  View_8: { flexDirection: "row" },
  View_9: {},
  View_10: {},
  View_11: { flexDirection: "row" },
  View_12: {},
  View_13: {}
})
