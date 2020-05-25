import React, { useEffect } from "react"
import { readFile, addUploadListener } from "./readFile"

export interface FileUploadProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onUploaded?(value: string): any
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploaded,
  ...props
}) => {
  const read = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    readFile(event.target.files[0]).then(res => {
      onUploaded && onUploaded(res.toString())
    })
  }

  useEffect(() =>
    addUploadListener(({ content }) => onUploaded(String(content)))
  )

  return <input {...props} type="file" onChange={read} />
}
