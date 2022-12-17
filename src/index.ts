import 'reflect-metadata';
import App from "./app";
import UserRoute from "./routes/user.route";
import PostRoute from './routes/post.route';

const app = new App([
    new UserRoute(),
    new PostRoute()
]);

app.listen();