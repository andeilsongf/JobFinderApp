import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type JobFireStoreDTO = {
  company: string;
  overview: string;
  type: 'remote' | 'full-time'
  requirements: string;
} 