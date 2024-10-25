import { Drawer } from "antd"
import { FC } from "react"
interface Props {
  title?:string | React.ReactNode
  children?:React.ReactNode
  width?:number
  open: boolean
  onClose: () => void
}
export const SharedDrawer:FC<Props> = ({title, children, width, open, onClose}) => {
  return (
    <Drawer
      title={title}
      width={width}
      open={open}
      onClose={onClose}
    >
        {children}
    </Drawer>
  )
}
