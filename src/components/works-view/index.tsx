import React from 'react'
import './style.less'
import { Highlight } from '../highlight'

export interface WorksView {
  title: string
  icon: JSX.Element
  works: Array<{
    name: string
    href?: string
    describes: Array<{
      keywords?: Array<{ word: string; style: string }>
      content: string
    }>
  }>
}

export const WorksView = ({ title, works, icon }: WorksView) => (
  <div className="WorksView">
    <dl>
      <dt>
        <h2>
          {icon}
          {title}
        </h2>
      </dt>
      {works.map(({ name, href, describes }) => (
        <dd key={name}>
          <a href={href}>
            <strong>{name}</strong>
          </a>
          <ol>
            {describes.map(({ content, keywords }) => (
              <li key={content}>
                {keywords ? (
                  <Highlight keywords={keywords} style={{lineHeight: 1.5}}>{content}</Highlight>
                ) : (
                  <p style={{lineHeight: 1.5}}>{content}</p>
                )}
              </li>
            ))}
          </ol>
        </dd>
      ))}
    </dl>
  </div>
)
