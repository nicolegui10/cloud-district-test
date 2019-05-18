import app from 'firebase/app'
import 'firebase/auth';
import { FIREBASE_CONFIG } from '../../constants/Constants';

const config = FIREBASE_CONFIG

export default class Firebase {
  constructor () {
    app.initializeApp(config)
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.auth = app.auth();
  }

  signInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  signOut = () => this.auth.signOut();
}
