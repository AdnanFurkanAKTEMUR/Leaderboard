import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { US, AL, AZ, TR, JP, BE, BR, DE, FR } from 'country-flag-icons/react/3x2'

interface country {
  key: string,
  value: string
}

interface DataType {
  rank: number;
  user_name: string;
  country: country;
  money: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Name',
    dataIndex: 'user_name',
    key: 'user_name',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (c:any) => {
      let key = JSON.parse(c).key
      let value = JSON.parse(c).value
      key = key.toLowerCase()
      return <>
        <span className={`fi fi-${key}`}></span> 
        <span> {value}</span>
      </>
    }
      
    
  },
  {
    title: 'Money',
    key: 'money',
    dataIndex: 'money',
    render: (money:number) => <Tag color={"green"}>{Math.round(money)}</Tag> 
  },
];

export default function UsersTable(props: any) {

  const data: DataType[] = props?.users

  return (
    <>
    <Table columns={columns} dataSource={data} />
    </>
  )
}