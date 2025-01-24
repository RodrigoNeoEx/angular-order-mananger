export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: (window as any).env.FIREBASE_API_KEY || "",
    authDomain: (window as any).env.FIREBASE_AUTH_DOMAIN || "",
    projectId: (window as any).env.FIREBASE_PROJECT_ID || "",
    storageBucket: (window as any).env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: (window as any).env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId: (window as any).env.FIREBASE_APP_ID || "",
    measurementId: (window as any).env.FIREBASE_MEASUREMENT_ID || "",
  },
};
