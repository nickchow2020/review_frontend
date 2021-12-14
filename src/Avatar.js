import { Avatar } from 'antd';
import "./Avatar.css"

const userAvatar = ({url})=>{
  return (
    <>
    <Avatar src={url} className="avatar"/>
    </>
  )
}

export default userAvatar;