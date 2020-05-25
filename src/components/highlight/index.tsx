/*
 * @Author: saber2pr
 * @Date: 2019-06-12 12:35:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-08-02 17:49:03
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
  const find = (word: string) => keywords.find(k => k.word === word);
  const __html = children.replace(
    new RegExp(keywords.map(k => k.word).join("|"), "g"),
    k => {
      const key = find(k);
      return key ? `<span style="${find(k).style};">${k}</span>` : k;
    }
  );

  return (
    <p {...props} className="Highlight" dangerouslySetInnerHTML={{ __html }} />
  );
};
