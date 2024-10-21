import { createWithRemoteLoader } from '@kne/remote-loader';
import getColumns from './getColumns';
import { useRef, useState } from 'react';
import { Space } from 'antd';

const BillCenter = createWithRemoteLoader({
  modules: [
    'components-core:Layout@TablePage',
    'components-core:Filter',
    'components-core:Global@usePreset',
    'components-core:StateBar',
    'components-core:Enum'
  ]
})(({ remoteModules }) => {
  const [TablePage, Filter, usePreset, StateBar, Enum] = remoteModules;
  const { apis } = usePreset();
  const { SearchInput, getFilterValue, fields: filterFields } = Filter;
  const { AdvancedSelectFilterItem } = filterFields;
  const ref = useRef(null);
  const [filter, setFilter] = useState([]);
  const filterValue = getFilterValue(filter);

  return (
    <Enum moduleName={['BILL_STATE_ENUM', 'invoiceProjectType']}>
      {([billStateEnum, invoiceProjectType]) => {
        return (
          <TablePage
            ref={ref}
            {...apis.candidateBill.getBillList}
            data={filterValue}
            name="candidateBillCenter"
            topArea={
              <StateBar
                type="radio"
                size="small"
                stateOption={[{ tab: '全部', key: 'all' }, ...billStateEnum.map(({ value, description }) => ({ tab: description, key: value }))]}
              />
            }
            page={{
              filter: {
                value: filter,
                onChange: setFilter,
                list: [
                  [
                    <AdvancedSelectFilterItem
                      name="typeIds"
                      label="账单类目"
                      api={{
                        loader: () => {
                          const pageData = invoiceProjectType.map(({ value, description }) => ({ value, label: description }));
                          return {
                            pageData: pageData,
                            totalCount: pageData.length
                          };
                        }
                      }}
                      isPopup
                    />
                    // TODO 筛选添加人
                  ]
                ]
              },
              titleExtra: (
                <Space align="center">
                  <SearchInput name="cvName" label="候选人姓名" />
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
                      children: '前往结算中心'
                    },
                    {
                      children: '下载账单',
                      disabled: true
                    }
                  ];
                }
              }
            ]}
            transformData={data => {
              return Object.assign({}, data, {
                userMap: new Map((data?.userInfos || []).map(item => [item.uid, item]))
              });
            }}
          />
        );
      }}
    </Enum>
  );
});

export default BillCenter;
