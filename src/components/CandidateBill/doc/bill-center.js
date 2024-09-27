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
