import get from 'lodash/get';

const getColumns = () => {
  return [
    {
      name: 'serialNumber',
      title: '账单编号',
      type: 'serialNumber',
      primary: true,
      hover: true,
      onClick: ({ colItem }) => {
        window.open(`/bill/${get(colItem, 'id')}`, '_blank');
      }
    },
    {
      name: 'state',
      title: '账单状态',
      type: 'tag',
      valueOf: ({ state }) => ({
        isEnum: true,
        name: state,
        moduleName: 'BILL_STATE_ENUM'
      })
    },
    {
      name: 'amount',
      title: '账单总金额',
      type: 'other'
    },
    {
      name: 'clientName',
      title: '客户',
      type: 'mainInfo',
      onClick: ({ colItem }) => {
        window.open(`/client/${get(colItem, 'clientId')}`, '_blank');
      }
    },
    {
      name: 'type',
      title: '账单类目',
      type: 'otherSmall'
    },
    // TODO 暂时不做候选人状态
    // {
    //   name: 'candidates',
    //   title: '候选人',
    //   type: 'otherSmall'
    // },
    {
      name: 'preInvoiceAmount',
      title: '已预提金额',
      type: 'serialNumberShort'
    },
    {
      name: 'invoicedAmount',
      title: '已开票金额',
      type: 'serialNumberShort'
    },
    {
      name: 'paidAmount',
      title: '已到款金额',
      type: 'serialNumberShort'
    },
    {
      name: 'uid',
      title: '添加人',
      type: 'user',
      render: ({ data }) => ({
        valueOf: ({ uid }) => {
          return `${get(data?.userMap?.get(uid), 'englishName', '')} ${get(data?.userMap?.get(uid), 'name', '')}`;
        }
      })
    },
    {
      title: '添加时间',
      groupName: '其他',
      name: 'createdAt',
      type: 'datetime'
    }
  ];
};

export default getColumns;
