// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import {
    getFirestore,
    addDoc,
    collection,
    serverTimestamp,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
(async () => {
    if (await isSupported()) {
        const analytics = getAnalytics(app);
    }
})();

export const db = getFirestore(app);

export const COLLECTION_NAMES = {
    WAITLIST: 'wait-list-emails',
    NEWSLETTER: 'news-letter-emails',
};

const waitlistCollectionReference = collection(db, COLLECTION_NAMES.WAITLIST);
const newsletterCollectionReference = collection(
    db,
    COLLECTION_NAMES.NEWSLETTER,
);

export async function storeWaitlistData(full_name: string, email: string) {
    try {
        await addDoc(waitlistCollectionReference, {
            full_name,
            email,
            created_at: serverTimestamp(),
        });
    } catch (error) {
        throw error;
    }
}

export async function storeNewsLetterEmail(email: string) {
    try {
        await addDoc(newsletterCollectionReference, {
            email,
            created_at: serverTimestamp(),
        });
    } catch (error) {
        throw error;
    }
}
