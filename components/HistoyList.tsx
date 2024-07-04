import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import HistoryMock from '../data/history-mock.json';
import { displayMoney } from '@/lib/utils';
import { Styledtext } from './StyledText';
import { Divider } from './Divider';

interface HistoryItemType {
  item: {
    id: number;
    title: string;
    amount: number;
    date: string;
  };
}

const HistoryItem = ({ item }: HistoryItemType) => {
  const { title, amount, date } = item;

  return (
    <View>
      <View style={styles.historyItem}>
        <View>
          <Styledtext text={title} />
          <Styledtext text={`Pagado: ${date}`} size='sm' />
        </View>
        <View>
          <Styledtext color='green' text={displayMoney(amount)} size='sm' />
        </View>
      </View>
      <Divider />
    </View>
  );
};

export const HistoryList = () => {
  return (
    <ScrollView style={styles.container}>
      {HistoryMock.history.map((item) => (
        <HistoryItem item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  historyItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
