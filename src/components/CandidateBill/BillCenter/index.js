import { createWithRemoteLoader } from '@kne/remote-loader';
import getColumns from './getColumns';
import { useRef, useState } from 'react';
import { Space } from 'antd';

const BillCenter = createWithRemoteLoader({
  modules: ['components-core:Layout@TablePage', 'components-core:Filter', 'components-core:Global@usePreset', 'components-core:StateBar']
})(({ remoteModules }) => {
  const [TablePage, Filter, usePreset, StateBar] = remoteModules;
  const { apis } = usePreset();
  const { SearchInput, getFilterValue, fields: filterFields } = Filter;
  const { InputFilterItem, AdvancedSelectFilterItem } = filterFields;
  const ref = useRef(null);
  const [filter, setFilter] = useState([]);
  const filterValue = getFilterValue(filter);
  return (
    <TablePage
      {...Object.assign({}, apis.candidateBill.getBillList, {
        data: Object.assign({}, filterValue)
      })}
      name="candidateBillCenter"
      topArea={
        <StateBar
          type="radio"
          size="small"
          stateOption={[
            { tab: '全部', key: '1' },
            {
              tab: '待提交账单',
              key: '2'
            },
            { tab: '审核中', key: '3' },
            {
              tab: '审核通过',
              key: '4'
            },
            {
              tab: '审核拒绝',
              key: '5'
            },
            {
              tab: '撤销审核',
              key: '6'
            }
          ]}
        />
      }
      page={{
        filter: {
          value: filter,
          onChange: setFilter,
          list: [[<InputFilterItem label="邮箱" name="email" />, <InputFilterItem label="电话" name="phone" />]]
        },
        titleExtra: (
          <Space align="center">
            <SearchInput name="name" label="名称" />
          </Space>
        )
      }}
      columns={[
        ...getColumns(),
        {
          name: 'options',
          title: '操作',
          type: 'options',
          fixed: 'right',
          valueOf: () => {
            return [
              {
                children: '编辑账单'
              },
              {
                children: '开票'
              },
              {
                children: '预提'
              },
              {
                children: '下载账单'
              }
            ];
          }
        }
      ]}
    />
  );
});

export default BillCenter;
