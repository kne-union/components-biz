const { BillInfoFormInner } = _CandidateBill;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form']
})(({ remoteModules }) => {
  const [Form] = remoteModules;
  return (
    <Form>
      <BillInfoFormInner />
    </Form>
  );
});

render(<BaseExample />);
