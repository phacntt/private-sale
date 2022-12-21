import 'reflect-metadata';
import App from "./app";
import UserRoute from "./routes/user.route";
import PostRoute from './routes/post.route';
import AccountRoute from './routes/account.route';

const app = new App([
    new UserRoute(),
    new PostRoute(),
    new AccountRoute()
]);

app.listen();