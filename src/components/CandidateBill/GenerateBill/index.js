import { createWithRemoteLoader } from '@kne/remote-loader';
import BillInfoFormInner from '../BillInfoFormInner';

const GenerateBill = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules, children }) => {
  const [FormInfo] = remoteModules;
  const { useFormStepModal } = FormInfo;
  const formStepModal = useFormStepModal();
  return children({
    modal: () => {
      return formStepModal({
        title: '生成账单',
        items: [
          {
            title: '填写账单信息',
            formProps: {
              onSubmit: async () => {}
            },
            children: <BillInfoFormInner />
          },
          {
            title: '生成账单',
            children: <div>生成账单</div>
          }
        ]
      });
    }
  });
});

export default GenerateBill;
