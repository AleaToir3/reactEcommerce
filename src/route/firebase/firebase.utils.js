import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9TrpZj2-xXtDUgb7LX6gHIGGQW7op6Xo", // Clé API pour authentifier les requêtes
  authDomain: "ecommercereact-69874.firebaseapp.com", // Domaine d'authentification de l'application
  projectId: "ecommercereact-69874", // Identifiant du projet Firebase
  storageBucket: "ecommercereact-69874.appspot.com", // Emplacement du stockage Firebase
  messagingSenderId: "581478806180", // Identifiant pour les messages Firebase Cloud Messaging
  appId: "1:581478806180:web:39d9e292e172649a7a6c31", // Identifiant de l'application Firebase
};

// Initialiser Firebase avec la configuration spécifiée
const firebaseApp = initializeApp(firebaseConfig);

// Créer un fournisseur d'authentification Google
const provider = new GoogleAuthProvider();

// Paramètre pour forcer l'utilisateur à sélectionner un compte Google
provider.setCustomParameters({ prompt: "select_account" });

// Obtenir une instance de l'objet d'authentification Firebase
export const auth = getAuth();

// Fonction pour se connecter avec une fenêtre popup Google
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Obtenir une instance de la base de données Firestore
export const db = getFirestore();

// Fonction pour créer un document utilisateur dans Firestore à partir des informations d'authentification
export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {

  // Référence au document utilisateur dans Firestore
  const userDocRef = doc(db, "users", userAuth.uid);

  // Obtenir le document utilisateur depuis Firestore
  const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
    const {displayName,email} = userAuth;
    const createAt = new Date(); 

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    } catch (error) {
       console.log("ERROR DETECTED WHEN CREATING A USER",error);
    }
};
}

export const createAuthUserForFirebaseWithEmailAndPassword = async (displayName,email,password)=>{
  try {
    const {user} = await createUserWithEmailAndPassword(auth,email,password);
    await createUserDocumentFromAuth(user,{displayName})
    
  } catch (error) {
      if(error.code= "auth/email-already-in-use"){
        alert("EMAIL ALREADY USED !!!")
    }else console.log("user creation encountered an error",error);
    
  }
}