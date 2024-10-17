import { createWithRemoteLoader } from '@kne/remote-loader';
import ProjectSelect from '@components/ProjectSelect';
import ContractSelect from '@components/ContractSelect';
import get from 'lodash/get';

const ProjectBillInfoFormInner = createWithRemoteLoader({
  modules: ['components-core:FormInfo', 'components-field:BatchSelect']
})(({ remoteModules }) => {
  const [FormInfo, BatchSelect] = remoteModules;
  const { TableList, List } = FormInfo;
  const { Input, RadioGroup, TextArea, Upload, MoneyInput, DatePicker, InputNumber } = FormInfo.fields;

  const candidateField = (
    <BatchSelect
      labelRender={({ label, value }) => {
        return `${label}:${(value && value.length) || 0}人`;
      }}
      label="本次账单候选人"
      name="candidate"
      rule="REQ"
      minLength={1}
      columns={[
        {
          title: '候选人姓名',
          name: 'name',
          type: 'user'
        },
        {
          title: '职位',
          name: 'position',
          type: 'mainInfo',
          hover: false,
          primary: false
        }
      ]}
      onAdd={(value, callback) => {}}
      block
    />
  );

  const onsiteFields = [
      <MoneyInput name="field1" label="账单金额" rule="REQ" />,
      <DatePicker picker="month" name="field2" label="费用所属月份" rule="REQ" />,
      <InputNumber name="field3" label="开票人数" rule="REQ" addonAfter="人" precision={1} />,
      <Upload block name="field4" label="onsite人员" rule="REQ" />
    ],
    mappingFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />, <Upload block name="field6" label="mapping报告" />],
    projectManageFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />],
    projectStartFeeFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />],
    referralFields = [
      <MoneyInput name="field5" label="账单金额" rule="REQ" />,
      <InputNumber name="field3" label="内推人数" rule="REQ" addonAfter="人" precision={1} />,
      <Upload block name="field4" label="内推名单" rule="REQ" />
    ],
    interviewFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />, candidateField],
    inductionFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />, candidateField],
    otherFields = [<MoneyInput name="field5" label="账单金额" rule="REQ" />, <Input name="type" label="项目类型" rule="REQ" />];

  const fieldsMapping = {
    1: onsiteFields,
    2: mappingFields,
    3: projectManageFields,
    4: projectStartFeeFields,
    5: referralFields,
    6: interviewFields,
    7: inductionFields,
    8: otherFields
  };

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
      <List
        title="账单费用信息"
        name="account"
        list={(key, list, context) => {
          const { formData } = context;
          const billType = get(formData, `account[${list.index}].billType`);
          const moreFields = (billType && fieldsMapping[billType]) || [];
          return [
            <RadioGroup
              name="billType"
              label="账单类目"
              rule="REQ"
              value="1"
              options={[
                { value: '1', label: 'onsite' },
                {
                  value: '2',
                  label: 'mapping'
                },
                {
                  value: '3',
                  label: '项目管理'
                },
                {
                  value: '4',
                  label: '项目启动金'
                },
                {
                  value: '5',
                  label: '内推'
                },
                {
                  value: '6',
                  label: '面试到岗'
                },
                {
                  value: '7',
                  label: '入职到岗'
                },
                {
                  value: '8',
                  label: '其他'
                }
              ]}
              block
            />,
            ...moreFields
          ];
        }}
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

export default ProjectBillInfoFormInner;
