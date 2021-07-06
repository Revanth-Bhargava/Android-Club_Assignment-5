import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/bg.jpg')} 
        style={styles.bgimage}>
          <Image
            style={styles.image}
            source={require('./assets/logo.png')}
          />
          <Text style={styles.title}>Food Order</Text>
          <TextInput
            value={food}
            placeholder='Enter Food Item'
            style={styles.foodInput}
            onChangeText={(food) => setFood(food)}
          />
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() => {
              submitFood(food)
              setFood('')
            }}>
            <Text style={{ fontSize: 22, color: '#f00'}}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() =>
              navigation.navigate('FoodList')}>
            <Text style={{ fontSize: 22, color: '#00f' }}>Go to Order</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgimage: {
    flex: 1,    
    alignItems: 'center',
    resizeMode: "center",
    justifyContent: "center",
    width:380,
    height:690,
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'black'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 200,
  }
});

export default FoodForm;
