# Profile Generator

参考数据格式:

```ts
interface Data {
  margin: string

  profile: {
    imgSrc: string
    name: string
    target: string
    birth: string
    location: string
    school: string
    mobile: string
    mail: string
    workLinks: Array<{ name: string; href: string }>
    socialLinks: Array<{ name: string; href: string }>
  }

  opensource: {
    title: string
    works: Array<{
      name: string
      href: string
      describes: Array<{
        content: string
        keywords: Array<{ word: string; style: string }>
      }>
    }>
  }

  worksexp: {
    title: string
    works: Array<{
      name: string
      describes: Array<{
        content: string
        keywords: Array<{ word: string; style: string }>
      }>
    }>
  }

  ability: {
    title: string
    items: Array<{
      type: string
      describes: Array<{
        content: string
        keywords: Array<{ word: string; style: string }>
      }>
    }>
  }

  rate: {
    title: string
    describes: Array<{
      content: string
      keywords: Array<{ word: string; style: string }>
    }>
  }
}
```
