import { useMemo } from 'react';
import { createWithRemoteLoader } from '@kne/remote-loader';

const ContractSelectField = createWithRemoteLoader({
  modules: ['components-core:Common@createListField', 'components-core:Global@usePreset']
})(({ remoteModules, ...others }) => {
  const [createListField, usePreset] = remoteModules;
  const { apis, ajax } = usePreset();
  const props = Object.assign(
    {},
    {
      api: apis.project.getList,
      dataFormat: data => {
        return {};
      }
    },
    others
  );
  const Components = useMemo(() => {
    return createListField({
      defaultProps: {
        showSelectedTag: false
      },
      renderList: ({ list, value, onSelect }) => {}
    });
  }, [createListField]);

  return <Components {...props} isPopup={false} single />;
});

const ContractSelect = createWithRemoteLoader({
  modules: ['FormInfo@hooks']
})(({ remoteModules, ...props }) => {
  const [hooks] = remoteModules;
  const { useOnChange } = hooks;
  const render = useOnChange(Object.assign({}, { placeholder: '请选择' + props.label }, props));
  return render(ContractSelectField);
});

ContractSelect.Field = ContractSelect;

export default ContractSelect;
