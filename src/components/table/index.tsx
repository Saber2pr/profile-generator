import React from 'react'
import { Highlight } from '../highlight'
import { IconFont } from '../../iconfont'
import './style.less'

export interface Table {
  title: string
  items: Array<{
    type: string
    describes: Array<{
      keywords?: Array<{ word: string; style: string }>
      content: string
    }>
  }>
}

export const Table = ({ title, items }: Table) => (
  <div className="Table">
    <h2>
      <IconFont.Ability />
      {title}
    </h2>
    <table>
      <tbody>
        {items.map(({ type, describes }) => (
          <tr key={type}>
            <th>{type}</th>
            <td>
              <ul>
                {describes.map(({ content, keywords }) => (
                  <li key={content}>
                    {keywords ? (
                      <Highlight keywords={keywords}>{content}</Highlight>
                    ) : (
                      <p>{content}</p>
                    )}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
