import { createWithRemoteLoader } from '@kne/remote-loader';
import Fetch from '@kne/react-fetch';
import { useSearchParams } from 'react-router-dom';
import RightOptions from './RightOptions';

const BillCenterDetail = createWithRemoteLoader({
  modules: ['components-core:Layout@Page', 'components-core:Global@usePreset', 'components-core:InfoPage', 'components-core:Descriptions']
})(({ remoteModules, ...props }) => {
  const [Page, usePreset, InfoPage, Descriptions] = remoteModules;
  const { apis } = usePreset();
  const [searchParams] = useSearchParams();
  return (
    <Fetch
      {...Object.assign({}, apis.candidateBill.getBillDetail, { params: { id: searchParams.get('id') } })}
      render={({ data, reload }) => {
        return (
          <Page {...props} option={<RightOptions />}>
            <InfoPage>
              <InfoPage.Part title="开票信息">
                <InfoPage.Part>
                  <Descriptions
                    dataSource={[
                      [{ label: '开票ID', content: '' }],
                      [
                        {
                          label: '客户名称',
                          content: ''
                        }
                      ],
                      [{ label: '合同', content: '' }]
                    ]}
                  />
                </InfoPage.Part>
                <InfoPage.Part title="发票费用信息"></InfoPage.Part>
              </InfoPage.Part>
            </InfoPage>
          </Page>
        );
      }}
    />
  );
});

export default BillCenterDetail;
