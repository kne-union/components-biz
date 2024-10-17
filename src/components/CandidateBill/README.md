
# CandidateBill


### 概述

候选人账单


### 示例(全屏)

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CandidateBill(@components/CandidateBill)

```jsx
const { default: CandidateBill } = _CandidateBill;
const BaseExample = () => {
  return <CandidateBill />;
};

render(<BaseExample />);

```

- 生成账单
- 生成账单
- remoteLoader(@kne/remote-loader),antd(antd),_CandidateBill(@components/CandidateBill),_projectListData(@components/ProjectSelect/doc/projectList.json),_ContractSelect(@components/ContractSelect),_data(@components/ContractSelect/doc/contractListData.json)

```jsx
const { createWithRemoteLoader } = remoteLoader;
const { GenerateBill, GenerateProjectBill } = _CandidateBill;
const { Button, Space } = antd;
const { default: projectListData } = _projectListData;
const { data: contractData } = _data;
const { CONTRACT_STATE_ENUM } = _ContractSelect;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [PureGlobal] = remoteModules;
  return (
    <PureGlobal
      preset={{
        enums: {
          CONTRACT_STATE_ENUM
        }, apis: {
          client: {},
          project: {
            getList: {
              loader: () => {
                return projectListData.data;
              }
            },
            getDetail: {
              loader: () => {
                return projectListData.data.projectList[0];
              }
            }
          }, contract: {
            getList: {
              loader: () => {
                return contractData;
              }
            }
          }
        }
      }}
    >
      <Space>
        <GenerateBill>
          {({ modal }) => {
            return (
              <Button
                onClick={() => {
                  modal();
                }}
              >
                生成候选人账单
              </Button>
            );
          }}
        </GenerateBill>
        <GenerateProjectBill>
          {({ modal }) => {
            return (
              <Button
                onClick={() => {
                  modal();
                }}
              >
                生成项目账单
              </Button>
            );
          }}
        </GenerateProjectBill>
      </Space>
    </PureGlobal>
  );
});

render(<BaseExample />);

```

- 生成候选人账单表单
- 生成候选人账单表单
- remoteLoader(@kne/remote-loader),_CandidateBill(@components/CandidateBill),_projectListData(@components/ProjectSelect/doc/projectList.json),_ContractSelect(@components/ContractSelect),_data(@components/ContractSelect/doc/contractListData.json)

```jsx
const { BillInfoFormInner } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const { default: projectListData } = _projectListData;
const { data: contractData } = _data;
const { CONTRACT_STATE_ENUM } = _ContractSelect;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form', 'components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [Form, PureGlobal] = remoteModules;
  return (
    <PureGlobal
      preset={{
        enums: {
          CONTRACT_STATE_ENUM
        },
        apis: {
          client: {},
          project: {
            getList: {
              loader: () => {
                return projectListData.data;
              }
            },
            getDetail: {
              loader: () => {
                return projectListData.data.projectList[0];
              }
            }
          }, contract: {
            getList: {
              loader: () => {
                return contractData;
              }
            }
          }
        }
      }}
    >
      <Form>
        <BillInfoFormInner />
      </Form>
    </PureGlobal>
  );
});

render(<BaseExample />);

```

- 生成项目账单表单
- 生成项目账单表单
- remoteLoader(@kne/remote-loader),_CandidateBill(@components/CandidateBill),_projectListData(@components/ProjectSelect/doc/projectList.json),_ContractSelect(@components/ContractSelect),_data(@components/ContractSelect/doc/contractListData.json)

```jsx
const { ProjectBillInfoFormInner } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const { default: projectListData } = _projectListData;
const { data: contractData } = _data;
const { CONTRACT_STATE_ENUM } = _ContractSelect;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form', 'components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [Form, PureGlobal] = remoteModules;
  return (<PureGlobal
    preset={{
      enums: {
        CONTRACT_STATE_ENUM
      }, apis: {
        client: {}, project: {
          getList: {
            loader: () => {
              return projectListData.data;
            }
          }, getDetail: {
            loader: () => {
              return projectListData.data.projectList[0];
            }
          }
        }, contract: {
          getList: {
            loader: () => {
              return contractData;
            }
          }
        }
      }
    }}
  >
    <Form>
      <ProjectBillInfoFormInner />
    </Form>
  </PureGlobal>);
});

render(<BaseExample />);

```

- 账单中心
- 账单中心
- remoteLoader(@kne/remote-loader),_CandidateBill(@components/CandidateBill)

```jsx
const { BillCenter } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal', 'components-core:Layout']
})(({ remoteModules }) => {
  const [PureGlobal, Layout] = remoteModules;
  return (
    <PureGlobal
      preset={{
        apis: {
          candidateBill: {
            getBillList: {
              loader: () => {
                return {
                  pageData: [],
                  totalCount: 0
                };
              }
            }
          }
        }
      }}
    >
      <Layout navigation={{ isFixed: false }}>
        <BillCenter />
      </Layout>
    </PureGlobal>
  );
});

render(<BaseExample />);

```

- 账单详情
- 账单详情
- remoteLoader(@kne/remote-loader),_CandidateBill(@components/CandidateBill)

```jsx
const { BillCenterDetail } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal', 'components-core:Layout']
})(({ remoteModules }) => {
  const [PureGlobal, Layout] = remoteModules;
  return (
    <PureGlobal
      preset={{
        apis: {
          candidateBill: {
            getBillDetail: {
              loader: () => {
                return {};
              }
            }
          }
        }
      }}
    >
      <Layout navigation={{ isFixed: false }}>
        <BillCenterDetail optionFixed={false} />
      </Layout>
    </PureGlobal>
  );
});

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

