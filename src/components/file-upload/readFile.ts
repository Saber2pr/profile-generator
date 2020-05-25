/*
 * @Author: saber2pr
 * @Date: 2019-06-09 11:21:05
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-09 11:28:53
 */
export const readFile = (file: File) =>
  new Promise<string | ArrayBuffer>(resolve => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => resolve(reader.result)
  })

type FileInfo = {
  name: string
  type: string
  content: string | ArrayBuffer
}

export const addUploadListener = (callback: (fileInfo: FileInfo) => void) => {
  const ondragover = e => e.preventDefault()
  const ondrop = event => {
    event.preventDefault()
    const dt = event.dataTransfer
    const file = dt.files[0]
    readFile(file).then(content =>
      callback({ name: file.name, type: file.type, content })
    )
  }
  document.addEventListener("dragover", ondragover)
  document.addEventListener("drop", ondrop)

  return () => {
    document.removeEventListener("dragover", ondragover)
    document.removeEventListener("drop", ondrop)
  }
}
