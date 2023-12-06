import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';

import TempRecipeImage from '../../res/bread3.jpeg';

export default function CreateRecipePage({ navigation }) {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImage, setRecipeImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientQuantity, setIngredientQuantity] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [instructionStep, setInstructionStep] = useState('');
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [removedInstructions, setRemovedInstructions] = useState([]);

  useEffect(() => {
    // Ask for permission to access the gallery
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need gallery permissions to make this work!');
      }
    })();
  }, []);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setRecipeImage({ uri: result.uri });
    }
  };

  const addIngredient = () => {
    if (ingredientName && ingredientQuantity && ingredientUnit) {
      const newIngredient = {
        name: ingredientName,
        quantity: ingredientQuantity,
        unit: ingredientUnit,
      };
      setIngredients([...ingredients, newIngredient]);
      setIngredientName('');
      setIngredientQuantity('');
      setIngredientUnit('');
    }
  };

  const removeIngredient = (index) => {
    const removedIngredient = ingredients.splice(index, 1)[0];
    setRemovedIngredients([...removedIngredients, removedIngredient]);
    setIngredients([...ingredients]);
  };

  const addInstructionStep = () => {
    if (instructionStep) {
      setInstructions([...instructions, instructionStep]);
      setInstructionStep('');
    }
  };

  const removeInstruction = (index) => {
    const removedInstruction = instructions.splice(index, 1)[0];
    setRemovedInstructions([...removedInstructions, removedInstruction]);
    setInstructions([...instructions]);
  };

  const saveRecipe = () => {
    // Implement logic to save the recipe details
    // Access 'recipeName', 'recipeImage', 'ingredients', and 'instructions' to save the complete recipe
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Recipe Name"
        value={recipeName}
        onChangeText={setRecipeName}
        style={styles.input}
      />

      <Image source={TempRecipeImage} style={styles.recipeImage} />

      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      {recipeImage && (
        <Image source={{ uri: recipeImage.uri }} style={styles.recipeImage} />
      )}

      <View style={styles.ingredientInput}>
        <TextInput
          placeholder="Ingredient Name"
          style={styles.ingredientTextInput}
          value={ingredientName}
          onChangeText={setIngredientName}
        />
        <TextInput
          placeholder="Quantity"
          style={styles.ingredientTextInput}
          value={ingredientQuantity}
          onChangeText={setIngredientQuantity}
        />
        <TextInput
          placeholder="Unit"
          style={styles.ingredientTextInput}
          value={ingredientUnit}
          onChangeText={setIngredientUnit}
        />
        <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.ingredientItem}>
          <Text>{`${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}`}</Text>
          <TouchableOpacity onPress={() => removeIngredient(index)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.ingredientInput}>
        <TextInput
          placeholder="Instruction Step"
          style={styles.ingredientTextInput}
          value={instructionStep}
          onChangeText={setInstructionStep}
        />
        <TouchableOpacity style={styles.addButton} onPress={addInstructionStep}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {instructions.map((instruction, index) => (
        <View key={index} style={styles.ingredientItem}>
          <Text>{instruction}</Text>
          <TouchableOpacity onPress={() => removeInstruction(index)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={saveRecipe}>
        <Text style={styles.buttonText}>Save Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B71F3',
    borderRadius: 5,
    padding: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 5,
  },
  ingredientInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ingredientTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
  },
  addButton: {
    backgroundColor: '#3B71F3',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  removeText: {
    color: 'red',
  },
});