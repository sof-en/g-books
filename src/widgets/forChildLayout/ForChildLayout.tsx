import  { FC } from 'react'
import { LayoutBooksContent } from '../../shared/ui'
import { ForChild } from '../../features'

export const ForChildLayout:FC = () => {
  return (
    <LayoutBooksContent text="For Child">
        <ForChild />
    </LayoutBooksContent>
  )
}
