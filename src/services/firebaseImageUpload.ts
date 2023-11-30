import {
    ref,
    uploadBytes,
    getDownloadURL
  } from "firebase/storage";
import { storage } from "../config/firebaseConfig";
import { v4 } from 'uuid'; //this library is for image name

const uploadFile = async(imageFile: File) => {
    console.log(imageFile)
    if (imageFile == null) return;
    const imageRef = ref(storage, `images/${imageFile.name + v4()}`);
    try{
        const snapshot = await uploadBytes(imageRef, imageFile)
        const url = await getDownloadURL(snapshot.ref)
        return url
    }
    catch(err: any){
        const error = err as Error
        console.log(error.message)
        throw new Error('Error uploading image to firebase');
    }
    // return uploadBytes(imageRef, imageFile).then((snapshot) => {
    //     console.log(snapshot)
    //     return snapshot
    // })
    // .then(snapshot => {
    //     return getDownloadURL(snapshot.ref)
    // })
    // .then(url => {
    //     return url
    // })
    // .catch(err => {
    //     console.log(err)
    // })


};

export default uploadFile