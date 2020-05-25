/*
 * @Author: saber2pr
 * @Date: 2019-06-12 10:35:34
 * @Last Modified by: saber2pr
 * @Last Modified time: 2020-05-25 20:46:58
 */
import React, { useState, useRef } from "react"

const useDefault = (defaultImg: JSX.Element): [JSX.Element, VoidFunction] => {
  const [body, alter] = useState(defaultImg)

  const destory = () => alter(null)

  return [body, destory]
}

export interface ImgLazy
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  defaultClassName?: string
}

export const ImgLazy = ({
  defaultClassName,
  onLoad,
  alt,
  ...props
}: ImgLazy) => {
  const [defaultImg, destory] = useDefault(
    <i className="iconfont icon-huabanfuben" />
  )
  const ref = useRef<HTMLImageElement>()

  return (
    <>
      {defaultImg}
      <img
        ref={ref}
        {...props}
        onError={() => ref.current.remove()}
        onLoad={event => {
          destory()
          onLoad && onLoad(event)
        }}
      />
    </>
  )
}
