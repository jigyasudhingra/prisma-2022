import { db } from 'firebase-config';

import { collection, addDoc, getDocs } from 'firebase/firestore';

const EntriesCollectionRef = collection(db, 'entries');
class EntriesDataService {
  addEntry = (newEntry) => {
    return addDoc(EntriesCollectionRef, newEntry);
  };

  getAllEntries = () => {
    return getDocs(EntriesCollectionRef);
  };
}

export default new EntriesDataService();
