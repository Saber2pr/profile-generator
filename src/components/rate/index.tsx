import React from 'react'
import { IconFont } from '../../iconfont'
import { Highlight } from '../highlight'
import './style.less'

export interface Comment {
  title: string
  describes: Array<{
    keywords?: Array<{ word: string; style: string }>
    content: string
  }>
}

export const Rate = ({ title, describes }: Comment) => (
  <div className="Rate">
    <div>
      <h2>
        <IconFont.Comment />
        {title}
      </h2>
    </div>
    <ol>
      {describes.map(({ content, keywords }) => (
        <li key={content}>
          {keywords ? (
            <Highlight keywords={keywords}>{content}</Highlight>
          ) : (
            <p>{content}</p>
          )}
        </li>
      ))}
    </ol>
  </div>
)
