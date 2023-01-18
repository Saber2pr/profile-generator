/*
 * @Author: saber2pr
 * @Date: 2019-06-12 12:35:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2023-01-16 22:21:48
 */
import React from "react";

export interface Highlight
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  keywords: Array<{ word: string; style: string }>;
  children: string;
}

export const Highlight = ({ keywords, children, ...props }: Highlight) => {

  let __html = children


  for(const kw of keywords) {
    const k = kw.word
    __html = __html.replace(k, `<span style="${kw.style};">${k}</span>`)
  }

  return (
    <p {...props} className="Highlight" dangerouslySetInnerHTML={{ __html }} />
  );
};
