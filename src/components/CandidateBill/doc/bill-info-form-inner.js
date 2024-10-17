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
          },
          contract: {
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
