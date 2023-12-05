import { View, Modal, StyleSheet, Text, TextInput, Alert, TouchableOpacity, FlatList} from "react-native";
import { React, useState} from 'react';
import RollPickerNative from 'roll-picker-native'
//https://github.com/ale-vncs/roll-picker-native
import StarRating from 'react-native-star-rating-widget';

const RadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      <View style={styles.radioCircle}>
        {selected && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};



export default function CustomModal({
  popularModalVisible,
  setPopularModalVisible,
  ratingOneModalVisible,
  setRatingOneModalVisible,
  ratingTwoModalVisible,
  setRatingTwoModalVisible,
  selectedOption,
  setSelectedOption,
  starOneRating,
  setStarOneRating,
  starTwoRating,
  setStarTwoRating,
  timeModalVisible,
  setTimeModalVisible,
  setIngredientsModalVisible,
  ingredientsModalVisible,
  setIngredients3ModalVisible,
  ingredients3ModalVisible,
  setIngredients1ModalVisible,
  ingredients1ModalVisible
}) {
    

    const [text, setText] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    

    const handleStarOneChange = (rating) => {
        if (rating >= starTwoRating) {
            setStarOneRating(starTwoRating);
        } else {
            setStarOneRating(rating);
        }
      };
  
    const handleStarTwoChange = (rating) => {
        if (rating <= starOneRating) {
            setStarTwoRating(starOneRating);
        } else {
            setStarTwoRating(rating);
        }
    };


    const onChangeText = (newText) => {
      setText(newText);
      const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(newText.toLowerCase())
      );
      setSearchSuggestions(filteredSuggestions);
    };

  
    const renderSearchSuggestion = ({ item }) => (
      <TouchableOpacity style={styles.suggestionItem} onPress={() => handleSuggestionPress(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  
    const handleSuggestionPress = (suggestion) => {

      setText(suggestion);
      setSearchSuggestions([]);
      
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={popularModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setPopularModalVisible(!popularModalVisible);
                }}>
                <View style={styles.popularContainer}>
                  <View style={styles.popularContentBackground}>
                      <View style={styles.popularContent}>
                        <Text style={styles.modalTitle}>Sort Popularity By:</Text>
                            <RadioButton
                              label="Today"
                              selected={selectedOption === 'Today'}
                              onPress={() => setSelectedOption('Today')}
                            />
                            <RadioButton
                              label="Past Week"
                              selected={selectedOption === 'Past Week'}
                              onPress={() => setSelectedOption('Past Week')}
                            />
                            <RadioButton
                              label="Past Month"
                              selected={selectedOption === 'Past Month'}
                              onPress={() => setSelectedOption('Past Month')}
                            />
                            <RadioButton
                              label="Past Year"
                              selected={selectedOption === 'Past Year'}
                              onPress={() => setSelectedOption('Past Year')}
                            />
                            <RadioButton
                              label="All Time"
                              selected={selectedOption === 'All Time'}
                              onPress={() => setSelectedOption('All Time')}
                            />
                            <TouchableOpacity style={styles.applyButton} onPress={() => setPopularModalVisible(!popularModalVisible)}>
                              <Text style={styles.applyButtonText} >
                                  Apply
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.applyButton} onPress={() => setPopularModalVisible(!popularModalVisible)}>
                              <Text style={styles.applyButtonText} >
                                  Cancel
                              </Text>
                            </TouchableOpacity>
                      </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ratingOneModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setRatingOneModalVisible(!ratingOneModalVisible);}}>

                <View style={styles.popularContainer}>
                  <View style={styles.ratingContentBackground}>
                    <View style={styles.ratingContent}>
                    <Text style={styles.modalTitle}>Sort Ratings By:</Text>
                    <RadioButton
                              label="Highest to Lowest Rated"
                              selected={selectedOption === 'Highest to Lowest Rated'}
                              onPress={() => setSelectedOption('Highest to Lowest Rated')}
                            /> 
                    <RadioButton
                      label="Lowest to Highest Rated"
                      selected={selectedOption === 'Lowest to Highest Rated'}
                      onPress={() => setSelectedOption('Lowest to Highest Rated')}
                    />
                    <RadioButton
                      label="Set Range"
                      selected={selectedOption === 'Set Range'}
                      onPress={() => setSelectedOption('Set Range')}
                    />
                    <TouchableOpacity style={styles.applyButton} onPress={() => 
                    {if (selectedOption === 'Set Range') {
                    setRatingTwoModalVisible(!ratingTwoModalVisible); setRatingOneModalVisible(!ratingOneModalVisible)}}}>
                              <Text style={styles.applyButtonText} >
                                  Apply
                              </Text>
                    </TouchableOpacity>     
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setRatingOneModalVisible(!ratingOneModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>  
                  
                    </View>
                  </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ratingTwoModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setRatingTwoModalVisible(!ratingTwoModalVisible);
                }}>

                <View style={styles.popularContainer}>
                    <View style={styles.ratingContentBackground}>
                    <View style={styles.ratingTwoContent}>
                    <Text style ={styles.modalTitle}> Sort Rating By Range From</Text>
                    <StarRating
                    starSize={45}
                    rating={starOneRating}
                    onChange={handleStarOneChange}
                    />
                <Text style ={styles.modalTitle}> To </Text>
                <StarRating
                    starSize={45}
                    rating={starTwoRating}
                    onChange={handleStarTwoChange}
                  
                    />

                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setRatingTwoModalVisible(!ratingTwoModalVisible)}>
                                    Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setRatingTwoModalVisible(!ratingTwoModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Modal>

          <Modal
          animationType="slide"
          transparent={true}
          visible={timeModalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setTimeModalVisible(!timeModalVisible);
          }}>

          <View style={styles.popularContainer}>
                  <View style={styles.ratingContentBackground}>
                    <View style={styles.ratingContent}>
                    <Text style={styles.modalTitle}>Display Recipes Under:</Text>
                    <View style={{width:'100%', flexDirection: 'row'}}>
                    <RollPickerNative
                    items={['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                    
                    />
                    <RollPickerNative
                    items={['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                  
                    />
                    <RollPickerNative
                    items={['', 'Seconds', 'Minutes', 'Hours', 'Days']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                    
                    
                    />
                    </View>
        
                    <TouchableOpacity style={styles.applyButton} onPress={() => 
                     setTimeModalVisible(!timeModalVisible)}>
                              <Text style={styles.applyButtonText} >
                                  Apply
                              </Text>
                    </TouchableOpacity>     
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setTimeModalVisible(!timeModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>  
                  
                    </View>
                  </View>
                </View>

            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={ingredientsModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setIngredientsModalVisible(!ingredientsModalVisible);}}>

                <View style={styles.popularContainer}>
                  <View style={styles.ratingContentBackground}>
                    <View style={styles.ratingContent}>
                    <Text style={styles.modalTitle}>Sort Ingredients By:</Text>
                    <RadioButton
                              label="Inclusion"
                              selected={selectedOption === 'Inclusion'}
                              onPress={() => setSelectedOption('Inclusion')}
                            /> 
                    <RadioButton
                      label="Exclusion"
                      selected={selectedOption === 'Exclusion'}
                      onPress={() => setSelectedOption('Exclusion')}
                    />
                    <RadioButton
                      label="Amount of Ingredients"
                      selected={selectedOption === 'Amount of Ingredients'}
                      onPress={() => setSelectedOption('Amount of Ingredients')}
                    />
                    <TouchableOpacity style={styles.applyButton} onPress={() => {
                    if (selectedOption === 'Amount of Ingredients') {
                      setIngredientsModalVisible(!ingredientsModalVisible);
                      setIngredients3ModalVisible(!ingredients3ModalVisible);
                    } else if (selectedOption === 'Inclusion') {
                      setIngredientsModalVisible(!ingredientsModalVisible);
                      setIngredients1ModalVisible(!ingredients1ModalVisible);
                    } else if (selectedOption === 'Exclusion') {
                      setIngredientsModalVisible(!ingredientsModalVisible);
                    }
                  }}
                >
                              <Text style={styles.applyButtonText} >
                                  Apply
                              </Text>
                    </TouchableOpacity>     
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setIngredientsModalVisible(!ingredientsModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>  
                  
                    </View>
                  </View>
                </View>
            </Modal>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={ingredients3ModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setIngredients3ModalVisible(!ingredients3ModalVisible);}}>

                  <View style={styles.popularContainer}>
                  <View style={styles.ratingContentBackground}>
                    <View style={styles.ratingContent}>
                    <Text style={styles.modalTitle}>Display Recipes With Less Or More Than:</Text>
                    <View style={{width:'100%', flexDirection: 'row'}}>
                    <RollPickerNative
                    items={['', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                    
                    />
                    <RollPickerNative
                    items={['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                  
                    />
                    <RollPickerNative
                    items={['Ingredients']}
                    containerHeight={130}
                    itemStyle={{padding: 2}}
                   
                    />
                    </View>
        
                    <TouchableOpacity style={styles.applyButton} onPress={() => 
                     setIngredients3ModalVisible(!ingredients3ModalVisible)}>
                              <Text style={styles.applyButtonText} >
                                  Apply
                              </Text>
                    </TouchableOpacity>     
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setIngredients3ModalVisible(!ingredients3ModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>  
                  
                    </View>
                  </View>
                </View>

            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={ingredients1ModalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setIngredients1ModalVisible(!ingredients1ModalVisible);}}>
                  <View style={styles.popularContainer}>
                    <View style={styles.ingredients1ContentBackground}>
                      <View style={styles.ingredients1Content}>
                        <View style={styles.row}>
                          <TextInput
                            style={styles.inputContainer}
                            placeholder="Search"
                            onChangeText={onChangeText}
                            value={text}
                          />
                          <TouchableOpacity
                            style={styles.customButtonContainer}
                            underlayColor={'#3b50f3'}
            
                          >
                            <Text style={styles.customButtonText}>Add</Text>
                          </TouchableOpacity>
                        </View>
                        {searchSuggestions.length > 0 && (
                          <FlatList
                            style={styles.suggestionsList}
                            data={searchSuggestions}
                            renderItem={renderSearchSuggestion}
                            keyExtractor={(item) => item}
                            maxHeight={190}
                          />
                        )}

                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setIngredients1ModalVisible(!ingredients1ModalVisible)}>
                                    Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton}>
                                <Text style={styles.applyButtonText} onPress={() => setIngredients1ModalVisible(!ingredients1ModalVisible)}>
                                    Cancel</Text>
                    </TouchableOpacity>
                    </View>
                      </View>
                    </View>
                  </View>
  
    </Modal>



        </View>
    );
}


const styles = StyleSheet.create({
  popularContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      
  },

  popularContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#3c434d'
  },

  popularContentBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '5%',
    width: '100%',
    height: '50%',
    backgroundColor: '#22242e'
  },

  ratingContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#3c434d',
    
  },

  ratingContentBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '5%',
    width: '100%',
    height: '42%',
    backgroundColor: '#22242e'
  },

  ratingTwoContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#3c434d',
    alignItems: 'center',
    
  },

  ratingButton: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25,
    width: '100%',
  },


  ingredients1Content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#3c434d',
    
  },

  ingredients1ContentBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: '5%',
    width: '100%',
    height: '95%',
    backgroundColor: '#22242e'
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },

  applyButton: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },

  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 10,
    left: 10,
    width: '105%'
  },
  
  applyButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  // Add the RadioButton styles here
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedRb: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#3498db',
  },

  radioText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'white',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    
  },

  customButtonContainer: {
    width: '20%',
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
},

customButtonText: {
  fontWeight: 'bold',
  color: 'white',
},

inputContainer: {
  flex: 1,
  padding: 8,
  marginRight: 8,
  backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%'
},

suggestionsList: {
  marginTop: -15,
  width: '77.79%',
  backgroundColor: 'white',
  borderRadius: 20,
  height: 50,
  padding: 10,
},
suggestionItem: {
  padding: 6,
  marginBottom: 3,
  borderBottomWidth: 0,
  backgroundColor: '#f3f3f3',
  borderRadius: 10,
  
},


});