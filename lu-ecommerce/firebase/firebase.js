// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpx9g04yYT4LeaeZkDAqU_5mZ8i0Rj6wc",
  authDomain: "ecommerce-react-2e949.firebaseapp.com",
  projectId: "ecommerce-react-2e949",
  storageBucket: "ecommerce-react-2e949.firebasestorage.app",
  messagingSenderId: "790031233535",
  appId: "1:790031233535:web:06d45ab77505c087fb37ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export async function getSingleProduct(id) {
  const documentRef = doc(db, 'productos', id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento:', error);
  }
}



export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener la coleccion: ', error);
  }
}

//filtrar por categoria 
export async function filterProductsByCategory(category) {
  try {
    const filteredQuery = query(
      collection(db, 'productos'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}





