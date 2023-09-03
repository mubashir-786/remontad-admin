// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZvCHpPiHAfmCFkP2K3eWc68kbXRybOTA",
    authDomain: "remontadapp-32767.firebaseapp.com",
    databaseURL: "https://remontadapp-32767-default-rtdb.firebaseio.com",
    projectId: "remontadapp-32767",
    storageBucket: "remontadapp-32767.appspot.com",
    messagingSenderId: "600294478627",
    appId: "1:600294478627:web:051edcd652b07ab11b7296",
    measurementId: "G-E3229VPNSE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// getAnalytics(app);
// const app = initializeApp(firebaseConfig)
// const auth = getAuth()
const db = getFirestore()
// const storage = getStorage();


// ----------------- USERS --------------------

async function addUser(body: any) {
    try {
        await addDoc(collection(db, "users"), body)
        alert('Successfully Added')
    } catch (e: any) {
        alert(e.message)

    }
}
async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"))
    const users: any[] = []
    querySnapshot.forEach((doc: any) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    return users
}
async function getUserDetails(idd: any) {


    const docRef = doc(db, "users", idd);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    return data
}
async function updateUser(data: any, id: any) {
    // const userr = auth.currentUser;
    // console.log("user ===>", userr.uid);
    // return userr.uid

    try {
        await setDoc(doc(db, "users", id), data)
        alert('Successfully Updated')
    } catch (e: any) {
        alert(e.message)

    }

}

// ----------------- Vendors --------------------
async function addVendor(body: any) {
    try {
        await addDoc(collection(db, "vendors"), body)
        alert('Successfully Added')
    } catch (e: any) {
        alert(e.message)

    }
}
async function getVendors() {
    const querySnapshot = await getDocs(collection(db, "vendors"))
    const users: any[] = []
    querySnapshot.forEach((doc: any) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    return users
}
async function getVendorDetails(idd: any) {
    const docRef = doc(db, "vendors", idd);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    return data
}

async function updateVendor(data: any, id: any) {
    // const userr = auth.currentUser;
    // console.log("user ===>", userr.uid);
    // return userr.uid

    try {
        await setDoc(doc(db, "vendors", id), data)
        alert('Successfully Updated')
    } catch (e: any) {
        alert(e.message)

    }

}

export {
    addUser, addVendor, getUserDetails, getUsers, getVendorDetails, getVendors, updateUser, updateVendor
};

