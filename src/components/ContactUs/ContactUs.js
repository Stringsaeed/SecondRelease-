import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";

export default class ContactUs extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      // firstname: null,
      // lastname: null,
      // bio: null,
      // age: null,
      // school: null,
      // gender: null,
      // email: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.body}>
          <View style={styles.labelView}>
            <Text style={styles.label}>CONTACT</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.addressView}>
              <Text style={styles.text}>Our address</Text>
              <Text style={styles.textcaption}>
                1412 Steiner Street, San Francisco, CA, 94115
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.text}>E-mail us</Text>
              {this.state.school ? (
                <Text style={styles.text}>{this.state.school}</Text>
              ) : (
                <Text style={styles.placeholderText}>
                  {"office@shopertino.com >"}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.captionView}>
            <Text style={styles.caption}>
              {"Our business hours are Mon - Fri, 10am - 5pm, PST.\n"}
            </Text>
          </View>
          <View style={styles.contentView}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${11234567890}`)}
              style={styles.itemButton}>
              <Text style={[styles.text, { color: "#384c8d" }]}>Call Us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.labelView} />
        </ScrollView>
      </View>
    );
  }
}
