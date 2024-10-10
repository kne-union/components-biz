const { ProjectBillInfoFormInner } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const { default: projectListData } = _projectListData;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form', 'components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [Form, PureGlobal] = remoteModules;
  return (
    <PureGlobal
      preset={{
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
          }
        }
      }}
    >
      <Form>
        <ProjectBillInfoFormInner />
      </Form>
    </PureGlobal>
  );
});

render(<BaseExample />);
