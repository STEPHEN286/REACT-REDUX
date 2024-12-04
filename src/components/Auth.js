import { useDispatch, useSelector } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/index";
import UserProfile from "./UserProfile";

const Auth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    console.log(isLogin);
  };
  return isLogin ? (
    <UserProfile />
  ) : (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={(e) => handleClick(e)}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
