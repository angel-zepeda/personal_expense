import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { Card } from '@/components/Card';
import { Colors } from '@/constants/Colors';
import { Styledtext } from '@/components/StyledText';
import { displayMoney, getDifferenceAmount } from '@/lib/utils';
import { Divider } from '@/components/Divider';
import { HistoryList } from '@/components/HistoyList';
import Collapsible from 'react-native-collapsible';

export default function Home() {
  const { color, amount } = getDifferenceAmount();
  const [showHistory, setShowHistory] = useState(false);
  const [showPendingP, setShowPendingP] = useState(false);
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
        <Styledtext
          style={{ alignSelf: 'center', marginTop: 5 }}
          text='Mensual'
        />
        <Styledtext style={{ alignSelf: 'center' }} text={displayMoney(1500)} />
        <PieChart
          style={{ alignSelf: 'center', marginVertical: 25 }}
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      </Card>

      <Card>
        <View>
          <View style={styles.container}>
            <Pressable onPress={() => setShowHistory(!showHistory)}>
              <View style={styles.textSpacedBetween}>
                <Styledtext text='Historial' size='lg' />
                <Styledtext text={displayMoney(700)} />
              </View>
            </Pressable>
          </View>
          <Divider />
          <Collapsible collapsed={showHistory} style={styles.container}>
            <HistoryList />
          </Collapsible>
        </View>
      </Card>

      <Card>
        <View style={styles.container}>
          <Pressable onPress={() => setShowPendingP(!showPendingP)}>
            <View style={styles.textSpacedBetween}>
              <Styledtext text='Pagos Pendientes' size='lg' />
              <Styledtext text='2' color='red' />
            </View>
          </Pressable>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    color: Colors.light.text,
  },
  pendingPayments: {
    borderLeftColor: Colors.red,
    borderLeftWidth: 5,
  },
  textSpacedBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
