import { createWithRemoteLoader } from '@kne/remote-loader';
import { Tabs } from 'antd';

const RightOptions = createWithRemoteLoader({
  modules: []
})(({ remoteModules }) => {
  const [] = remoteModules;
  return (
    <Tabs
      items={[
        {
          key: '1',
          label: '发起审核',
          children: ''
        },
        {
          key: '2',
          label: '流转记录',
          children: ''
        }
      ]}
    ></Tabs>
  );
});

export default RightOptions;
