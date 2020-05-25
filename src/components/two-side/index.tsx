import React from 'react'
import './style.less'

export interface TwoSide {
  children: [JSX.Element, JSX.Element]
}

export const TwoSide = ({ children }: TwoSide) => (
  <div className="TwoSide">{children}</div>
)
