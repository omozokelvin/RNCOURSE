import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
  onDeleteItem: () => void;
};

export default function GoalItem(props: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => {
          return pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#ffffff',
    padding: 8,
  },
});
