import { createWithRemoteLoader } from '@kne/remote-loader';
import ProjectSelect from '@components/ProjectSelect';
import ContractSelect from '@components/ContractSelect';
import CandidateSelect from '@components/CandidateSelect';

const BillInfoFormInner = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules }) => {
  const [FormInfo] = remoteModules;
  const { TableList } = FormInfo;
  const { Input, RadioGroup, TextArea, Upload } = FormInfo.fields;
  return (
    <>
      <FormInfo
        list={[
          <Input name="client" label="客户" rule="REQ" />,
          <ContractSelect name="contract" label="合同" rule="REQ" />,
          <ProjectSelect name="project" label="项目" rule="REQ" />,
          <RadioGroup
            name="feeType"
            label="费用类别"
            rule="REQ"
            options={[
              {
                value: '1',
                label: '招聘费'
              },
              { value: '2', label: '服务费' }
            ]}
          />
        ]}
      />
      <FormInfo
        title="账单候选人"
        list={[
          <CandidateSelect
            labelRender={({ label, value }) => {
              return `${label}:${(value && value.length) || 0}人`;
            }}
            label="本次账单候选人"
            name="candidate"
            rule="REQ"
            minLength={1}
            block
          />
        ]}
      />
      <FormInfo
        title="账单费用信息"
        list={[
          <RadioGroup
            name="billType"
            label="账单类目"
            rule="REQ"
            options={[
              { value: '1', label: '面试到岗' },
              {
                value: '2',
                label: '入职到岗'
              }
            ]}
            block
          />,
          <Input name="normalTotalFee" label="标准账单总金额" rule="REQ" />,
          <Input name="totalFee" label="账单总金额" rule="REQ" />,
          <TextArea name="reason" label="标准账单总金额与自填账单总金额不一致的原因" rule="REQ" block />,
          <TextArea name="description" label="备注" rule="REQ" block />,
          <Upload name="files" label="附件" block />
        ]}
      />
      <FormInfo title="付款信息" list={[<Input name="feeInfo" label="付款信息" rule="REQ" />]} />
      <TableList
        title="业绩分配"
        name="fenpei"
        list={[
          <Input name="user" label="分配用户" rule="REQ" />,
          <Input name="fee" label="分配金额" rule="REQ" />,
          <Input name="bili" label="分配比例" rule="REQ" />
        ]}
      />
    </>
  );
});

export default BillInfoFormInner;
