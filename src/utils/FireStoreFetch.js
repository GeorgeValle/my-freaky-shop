
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './FirebaseConfig';

//busca por gurpo de productos o toda ls db de productos
export const FirestoreFetch = async (id) => {
    let q;
    if (id) {
        q = query(collection(db, "products"), where('category', '==', id));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

//busca de manera individual producto
export const FirestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
      // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}