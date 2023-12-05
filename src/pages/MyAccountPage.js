import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function MyAccountPage ({navigation}) {
    return (
        <ScrollView>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Profile Information</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Privacy & Security</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity underlayColor={'#3b50f3'}  onPress={() => {navigation.navigate('Login')}} style={styles.customButtonContainer} >
                <Text style={styles.customButtonText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    customButtonContainer: {
        width: '90%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3'
    },

    rowButtonContainer: {
        width: '24%',
        padding: 9,
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3'
    },

    customButtonText: {
        fontWeight: 'bold',
        color: 'white'
    },

    inputContainer: {
        backgroundColor: 'white',
        width: '79%',
        borderRadius: 2,
        paddingHorizontal: 10,
        marginVertical: 5,
        alignSelf: 'center',
        height: 40
      },

      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
      },

      buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
      },
  });