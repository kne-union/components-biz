const getColumns = () => {
  return [
    {
      name: 'id',
      title: '账单编号',
      type: 'serialNumber',
      primary: true,
      hover: true,
      onClick: () => {}
    },
    {
      name: 'status',
      title: '账单状态',
      type: 'tag',
      valueOf: () => {
        return { type: 'success', text: '审核同通过' };
      }
    },
    {
      name: 'totalFee',
      title: '账单总金额',
      type: 'other'
    },
    {
      name: 'clientName',
      title: '客户',
      type: 'mainInfo'
    },
    {
      name: 'billType',
      title: '账单类目',
      type: 'otherSmall'
    },
    {
      name: 'candidateName',
      title: '候选人',
      type: 'otherSmall'
    },
    {
      name: 'withholdStatus',
      title: '预提状态',
      type: 'tag',
      valueOf: () => {
        return { type: 'success', text: '账单审核中' };
      }
    },
    {
      name: 'isFenqi',
      title: '分期开票',
      type: 'otherSmall'
    }
  ];
};

export default getColumns;
