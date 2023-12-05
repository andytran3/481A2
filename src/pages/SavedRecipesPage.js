import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

import { React, useState } from "react";

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SavedRecipesPage ({ navigation }) {
    const [rating] = useState([4.6, 3.9, 5.0]);
    const [heartPressed, setHeartPressed] = useState(new Array(8).fill(true));

    const updateHeartPressed = (index) => {
        const updatedHearts = [...heartPressed];
        updatedHearts[index] = !updatedHearts[index];
        setHeartPressed(updatedHearts);
    };

    const renderRecipeItem = (index, imageSource, title, rating, time, difficulty) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(`TestRecipe${index + 1}`)}
          style={cardStyles.fullCardContainer}
        >
          <Image
            source={imageSource}
            style={{
              resizeMode: 'cover',
              width: 105,
              height: 'auto',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          />
          <View style={cardStyles.cardInfo}>
            <View style={cardStyles.nameAndHeart}>
              <Text style={cardStyles.itemText}>{title}</Text>
              <TouchableOpacity
                underlayColor={'#ff85fb'}
                style={{}}
                onPress={() => {
                  updateHeartPressed(index);
                }}
              >
                <View>
                  {heartPressed[index] ? (
                    <Icon name="heart" size={25} color="#ff85fb" />
                  ) : (
                    <Icon name="heart-outline" size={25} color="#ff85fb" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View style={cardStyles.iconButtonRow}>
            <View style={[cardStyles.iconContainer, { width: '25%' }]} >
              <Icon name="star" size={25} color="#FFEA00" />
              <Text style={cardStyles.customButtonText}>{rating}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '35%' }]} >
              <Icon name="timer-outline" size={25} color="black" style={{ top: 1.5 }} />
              <Text style={cardStyles.customButtonText}>{time}</Text>
            </View>
            <View style={[cardStyles.iconContainer, { width: '30%' }]} >
              <MaterialIcon name="gauge-low" size={25} color="green" />
              <Text style={cardStyles.customButtonText}>{difficulty}</Text>
            </View>
          </View>
          </View>
        </TouchableOpacity>
      );
    

      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{ width: '100%' }}>
              <ScrollView>
                {renderRecipeItem(0, require('../res/bread2.png'), 'English White Bread', rating[0], 30, 'Easy')}
                {renderRecipeItem(1, require('../res/bread1.jpg'), 'Canadian White Bread', rating[1], 30, 'Easy')}
                {renderRecipeItem(2, require('../res/bread3.jpeg'), 'Italian Garlic Bread', rating[2], 30, 'Easy')}
                {/* {renderRecipeItem(3, require('../res/bread2.png'), 'English White Bread', 4.6, 30, 'Easy')}
                {renderRecipeItem(4, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(5, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(6, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(7, require('../res/bread2.png'), 'English White Bread')}
                {renderRecipeItem(8, require('../res/bread2.png'), 'English White Bread')} */}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      );
    }

const cardStyles = StyleSheet.create({
    cardInfo: {
        flex: 1,
        backgroundColor: 'white',
        flexBasis: 180,
        flexGrow: 1,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },

    nameAndHeart: {
        width: '95%',
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 0,
        justifyContent: 'space-between'
    },

    fullCardContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 90,
        width: '90%',
        margin: 10,
        alignSelf: 'center',
    },

    itemText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 10,
        padding: 7,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 15,
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        marginLeft: 10,
        fontFamily: 'serif',
    },

    iconButtonRow: {
        marginTop: -5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center'
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});