import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { Card } from '@/components/Card';
import { Colors } from '@/constants/Colors';
import { Styledtext } from '@/components/StyledText';
import { getDifferenceAmount } from '@/lib/utils';
import { Divider } from '@/components/Divider';
import { HistoryList } from '@/components/HistoyList';

export default function Home() {
  const { color, amount } = getDifferenceAmount();
  const [pendingPayment, setPendingPayments] = useState(2);
  const widthAndHeight = 250;
  const series = [123, 321, 123, 89];
  const sliceColor = [Colors.green, Colors.red, Colors.blue, Colors.yellow];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pendingPayments}>
        <Styledtext
          text={`Tienes ${pendingPayment} pagos pendientes`}
          size='lg'
          style={{ marginLeft: 2 }}
        />
      </View>
      <Card>
        <View style={styles.container}>
          <Styledtext text='Gastos' size='lg' />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Styledtext text='Mes actual' size='sm' />
            <Styledtext text={` ${amount}`} color={color} size='sm' />
            <Styledtext text=' con mes anterior' size='sm' />
          </View>
        </View>
        <Divider />
        <PieChart
          style={{ alignSelf: 'center', marginVertical: 30 }}
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      </Card>
      <Card>
        <View style={styles.container}>
          <Styledtext text='Historial' size='lg' />
          <HistoryList />
        </View>
      </Card>
      <Card>
        <View style={styles.container}>
          <Styledtext text='Pagos pendientes' size='lg' />
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    color: Colors.light.text,
  },
  pendingPayments: {
    borderLeftColor: Colors.red,
    borderLeftWidth: 5,
  },
});
