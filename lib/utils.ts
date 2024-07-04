import { Colors, type ColorsType } from '@/constants/Colors';

export const getDifferenceAmount = (): {
  amount: string;
  color: ColorsType;
} => {
  return {
    amount: '-5%',
    color: Colors.red as ColorsType,
  };
};

export const displayMoney = (amount: number) => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
