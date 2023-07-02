import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInputModal from './components/GoalInputModal';
import GoalItem from './components/GoalItem';
import { CourseGoal } from './types/CourseGoal';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />

        <GoalInputModal
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler.bind(null, itemData.item.id)}
              />
            )}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
    marginTop: 16,
  },
});
