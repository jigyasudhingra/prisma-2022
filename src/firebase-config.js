import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBrqcum0SDxpOtx-HQefItsVZjGIFZS7Y4',
  authDomain: 'prisma-2k22.firebaseapp.com',
  projectId: 'prisma-2k22',
  storageBucket: 'prisma-2k22.appspot.com',
  messagingSenderId: '41205389002',
  appId: '1:41205389002:web:ad61287e94c3bea1ba4633',
  measurementId: 'G-0VPRE28DNR',
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app);
export const storage = getStorage();
