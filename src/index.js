import Navigation from './components/Navigation.js';
import LoginForm from './components/LoginForm.js';


const root = $('#root');
const navigation = $('#navigation');
const router = $('#router');

const nav = Navigation();
const loginForm = LoginForm();

navigation.append(nav);
router.append(loginForm);
