const firebaseConfig = {
  apiKey: "AIzaSyBBBCtF0W4JHs3x0VhScB-OKv1k9EGngfE",
  authDomain: "rn-expo-project.firebaseapp.com",
  projectId: "rn-expo-project",
  storageBucket: "rn-expo-project.appspot.com",
  messagingSenderId: "851329721821",
  appId: "1:851329721821:web:45bdc4430526b596d00234",
  measurementId: "G-29KKDV04EQ"
};

export default firebaseConfig;


/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

*/