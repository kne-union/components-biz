const { FormInner } = _WithholdingManager;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo@Form']
})(({ remoteModules }) => {
  const [Form] = remoteModules;
  return (
    <Form>
      <FormInner />
    </Form>
  );
});

render(<BaseExample />);
