import memoize from 'lodash/memoize';
import get from 'lodash/get';
import { formatMoney, getPercentage } from './numberFormat';

const allocationFormat = memoize((item, { userInfos, billAmount }) => {
  const userMap = new Map((userInfos || []).map(item => [item.uid, item]));
  return {
    name: `${get(userMap.get(item.uid), 'englishName', '')} ${get(userMap.get(item.uid), 'name', '')}`,
    amount: formatMoney(item.amount),
    amountPercent: item.amount && billAmount ? getPercentage(item.amount, billAmount) : null
  };
});

export default allocationFormat;
