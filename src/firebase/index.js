// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjlpK-NfHcSMaNrroeYYzoAzEtzUKE5NY",
  authDomain: "homenurse-3cadb.firebaseapp.com",
  projectId: "homenurse-3cadb",
  storageBucket: "homenurse-3cadb.appspot.com",
  messagingSenderId: "819062375531",
  appId: "1:819062375531:web:a6953e17ac7d70065d9d2e"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//firestore 
const fireStoreDb = getFirestore(firebaseApp);

//sorage 
const storage = getStorage(firebaseApp);
export const imagesRef = ref(storage, 'images');





export function getImageUrl(imgName){
  //sorage 
const storage = getStorage();
const imagesRef = ref(storage, 'news_images');
const combineString = "news_images\/" +  imgName;
   getDownloadURL(ref(storage, combineString))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();
    
    return url
  })
  .catch((error) => {
    console.log(error)
  });
}

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);



function createUserAccountWithEmailAndPassword(email, password){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      return user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ":"+errorMessage)
      // ..
    });
    
}

function signInUserWithEmailAndPassword(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}
 



export {createUserAccountWithEmailAndPassword, signInUserWithEmailAndPassword, firebaseApp}
export default fireStoreDb;
