import React from 'react'
import './style.less'
import { ImgLazy } from '../img-lazy'
import { IconFont } from '../../iconfont'

export type Links = Array<{
  name: string
  href: string
}>

export interface Profile {
  imgSrc: string
  name: string
  target: string
  birth: string
  location: string
  school: string
  mobile: string
  mail: string
  workLinks: Links
  socialLinks: Links
}

export const Profile = ({
  imgSrc,
  name,
  target,
  birth,
  location,
  school,
  mail,
  mobile,
  workLinks,
  socialLinks
}: Profile) => (
  <div className="Profile">
    <ul>
      <li>
        <ImgLazy
          defaultClassName="Profile_DefaultImg"
          className="Profile_Img"
          src={imgSrc}
          alt={name}
        />
      </li>
    </ul>

    <ul className="Profile_Head">
      <li>
        <h1>{name}</h1>
      </li>
      <li>
        <p>
          <strong>求职意向：{target}</strong>
        </p>
      </li>
    </ul>

    <ul className="Profile_Main">
      <li>
        <p>
          <IconFont.Birth />
          生日：{birth}
        </p>
      </li>
      <li>
        <p>
          <IconFont.Location />
          籍贯：{location}
        </p>
      </li>
      <li>
        <p>
          <IconFont.School />
          院校：{school}
        </p>
      </li>
      <li>
        <p>
          <IconFont.Phone />
          电话：{mobile}
        </p>
      </li>
      <li>
        <p>
          <IconFont.Mail />
          邮箱：{mail}
        </p>
      </li>
    </ul>

    <ul>
      <li>
        <dl>
          <dt>
            <h3>
              <span className="Profile_Border">
                <IconFont.Github />
                作品链接
              </span>
            </h3>
          </dt>

          {workLinks.map(({ name, href }) => (
            <dd key={name}>
              <a href={href}>
                <strong>{name}</strong>
              </a>
            </dd>
          ))}
        </dl>
      </li>

      <li>
        <dl>
          <dt>
            <h3>
              <span className="Profile_Border">
                <IconFont.Blog />
                社交网站
              </span>
            </h3>
          </dt>

          {socialLinks.map(({ name, href }) => (
            <dd key={name}>
              <a href={href}>
                <strong>{name}</strong>
              </a>
            </dd>
          ))}
        </dl>
      </li>
    </ul>
  </div>
)
