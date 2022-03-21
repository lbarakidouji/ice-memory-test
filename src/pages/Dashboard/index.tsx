import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DailyItem {
  date: string;
  fcAccuracy: number;
  finalReportAccuracy: number;
}
interface Props {
  data: DailyItem[] | undefined;
}
const DailyAccuracy: React.FC<Props> = ({ data }) => {
  const columns: ColumnsType<DailyItem> = [
    {
      title: '日期',
      dataIndex: 'date',
      align: 'center',
    },
    {
      title: '算法预测准确率',
      dataIndex: 'fcAccuracy',
      align: 'center',
    },
    {
      title: '最终上报准确率',
      dataIndex: 'finalReportAccuracy',
      align: 'center',
    },
  ];
  return (
    <Table size="small" bordered columns={columns} dataSource={data || []} pagination={false} scroll={{ y: '80%' }} />
  );
};

export default DailyAccuracy;
