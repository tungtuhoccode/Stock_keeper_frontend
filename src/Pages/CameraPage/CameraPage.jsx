import { useState, useEffect } from "react"

 const CameraPage = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState([])


  console.log(preview)
  const allImages = preview?.map(url => {
    return (
      <img className="w-24 h-24" src={url} alt="image"/>
    )
  })

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview([])
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)

      setPreview([ ...preview , objectUrl])

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }

  return (
      <div>
          <input type='file' onChange={onSelectFile} />
          {selectedFile && 
          <div className="flex flex-row">
            {allImages }
          </div>
         }
      </div>
  )
}

export default CameraPage