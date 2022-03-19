import {getFirestore} from '@firebase/firestore'

import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB46aNF2XDiUCWVInr3Bv4Fxip8ebo32nI',

  authDomain: 'school-11982.firebaseapp.com',

  projectId: 'school-11982',

  storageBucket: 'school-11982.appspot.com',

  messagingSenderId: '734510505911',

  appId: '1:734510505911:web:6dff6ab31bf66784c35232',

  measurementId: 'G-YSZHJN8R41',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
