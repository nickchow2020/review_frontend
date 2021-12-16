import { Result, Button } from 'antd';

const NoResult = ()=>{
  return(
    <Result
    status="404"
    title="404"
    subTitle="Sorry, No Result Found"
    extra={<Button type="primary">Ooos Sorry no can do</Button>}
  />
  )
}

export default NoResult

