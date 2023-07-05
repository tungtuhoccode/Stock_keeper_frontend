import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll, //for listing every image 
  list,
} from "firebase/storage";
import { storage } from "../config/firebaseConfig";
import { v4 } from "uuid"; //this library is for image name
import uploadFile from "../services/firebaseImageUpload";


function TestFireBase() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  useEffect(()=>{
    uploadFile(imageUpload)
    .then( (url) => {
      console.log(url)
    }
    )
    .catch( err => {
      console.log(err)
    })
  },[imageUpload])

  // .then((url)=> {
  //   console.log(url)
  // })
  // .catch((err) => {
  //   console.log(err.message)
  // })
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);


  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}

export default TestFireBase;
