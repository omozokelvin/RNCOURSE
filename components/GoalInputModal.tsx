import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

type Props = {
  onAddGoal: (enteredGoalText: string) => void;
  visible: boolean;
  onCancel: () => void;
};

export default function GoalInputModal(props: Props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  console.log('Goal input component rendered');

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          // source="/some/path/to/image.png"
          style={styles.image}
        />

        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>

          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 8,
    backgroundColor: '#e4d0ff',
    padding: 16,
    width: '100%',
    marginBottom: 16,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
  button: {
    flex: 1,
  },
});
