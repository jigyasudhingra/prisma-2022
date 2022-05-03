import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ---- Live Mode ----
const firebaseConfig = {
  apiKey: 'AIzaSyBrqcum0SDxpOtx-HQefItsVZjGIFZS7Y4',
  authDomain: 'prisma-2k22.firebaseapp.com',
  projectId: 'prisma-2k22',
  storageBucket: 'prisma-2k22.appspot.com',
  messagingSenderId: '41205389002',
  appId: '1:41205389002:web:ad61287e94c3bea1ba4633',
  measurementId: 'G-0VPRE28DNR',
};

// ---- Test Mode ----
// const firebaseConfig = {
//   apiKey: 'AIzaSyDB-OPmobiX5NE7opUJtjy-RanuK7mFlxM',
//   authDomain: 'razorpay-integration-testing.firebaseapp.com',
//   databaseURL:
//     'https://razorpay-integration-testing-default-rtdb.firebaseio.com',
//   projectId: 'razorpay-integration-testing',
//   storageBucket: 'razorpay-integration-testing.appspot.com',
//   messagingSenderId: '1064755374124',
//   appId: '1:1064755374124:web:01eb97a9f4db42d608c989',
//   measurementId: 'G-HL24FXFLN0',
// };

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app);
export const storage = getStorage();
