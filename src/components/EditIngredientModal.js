import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default EditIngredientModal = ({ visible, closeModal, ingredient, saveIngredient }) => {
    const [editedIngredient, setEditedIngredient] = useState({ ...ingredient });

    const handleSave = () => {
        saveIngredient(editedIngredient);
        closeModal();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Edit Ingredient</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Quantity"
                        value={editedIngredient?.quantity?.toString() || ''}
                        onChangeText={(text) => setEditedIngredient({ ...editedIngredient, quantity: parseFloat(text) })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Unit"
                        value={editedIngredient?.unit || ''}
                        onChangeText={(text) => setEditedIngredient({ ...editedIngredient, unit: text })}
                    />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        minWidth: 100,
        alignItems: 'center',
        backgroundColor: '#3B71F3',
    },
    cancelButton: {
        backgroundColor: '#ff0000',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});