import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type JobFireStoreDTO = {
  company: string;
  description: string;
  type: 'Remote' | 'Presential';
  requirements: string;
  email: string;
  title: string;
  whatsapp: string;
  created_at: FirebaseFirestoreTypes.Timestamp;
} 