const { createWithRemoteLoader } = remoteLoader;
const { default: ProjectSelect, ProjectDetailSelect } = _ProjectSelect;
const { default: projectListData } = _projectListData;

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo', 'components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [FormInfo, PureGlobal] = remoteModules;
  const { Form } = FormInfo;
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
        <FormInfo
          list={[
            <ProjectSelect name="project" label="项目" rule="REQ" showContract />,
            <ProjectDetailSelect name="projectDetail" label="项目细分服务" rule="REQ" />
          ]}
        />
      </Form>
    </PureGlobal>
  );
});

render(<BaseExample />);
