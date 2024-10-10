const getColumns = () => {
  return [
    {
      title: '服务类型',
      name: 'rsfwlx',
      type: 'serialNumberShort',
      fixed: 'left'
    },
    {
      title: '细分服务',
      name: 'rsxffw',
      type: 'serialNumberShort'
    },
    {
      title: '条件',
      name: 'rstj',
      type: 'serialNumberShort'
    },
    {
      title: '单位',
      name: 'rsdw',
      type: 'serialNumberShort'
    },
    {
      title: '基准价格（费率）',
      name: 'rsjzjg',
      type: 'serialNumberShort'
    },
    {
      title: '岗位/职能',
      name: 'rsgwzn',
      type: 'serialNumberShort'
    },
    {
      title: '薪资模式',
      name: 'rsxzms',
      type: 'serialNumberShort'
    },
    {
      title: '月薪',
      name: 'rsyx',
      type: 'serialNumberShort'
    },
    {
      title: '年薪',
      name: 'rsnx',
      type: 'serialNumberShort'
    },
    {
      title: '金额',
      name: 'rsjg',
      type: 'serialNumberShort'
    },
    {
      title: '费率',
      name: 'rsfl',
      type: 'serialNumberShort'
    },
    {
      title: 'Marketup rate',
      name: 'rsmarkuprate',
      type: 'serialNumberShort'
    },
    {
      title: '预估收费',
      name: 'rsygsf',
      type: 'serialNumberShort'
    },
    {
      title: '保证期',
      name: 'bzq',
      type: 'serialNumberShort'
    }
  ];
};

export default getColumns;
