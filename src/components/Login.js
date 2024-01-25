import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useAuth } from "../context/authContext";

function Login() {
  const { loginUserAPI, isLoggedIn, loginError } = useAuth(); // useAuth ile kullanıcının login olacağı fonksiyonu alıyoruz. login durumunu ve login erroru alıyoruz.

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "workintech", password: "wecandoit" },
  });
  // Bu kısımlar react hook form ile alındı

  const history = useHistory();

  const onSubmitHandler = (data) => {
    console.log(data);
    loginUserAPI(data);
  };

  useEffect(() => {
    // Sayfam ilk açıldığında ilk önce loggedIn mi diye bakıyor.
    
    if (isLoggedIn) {
      history.push("/friends");
    }
  }, [isLoggedIn]);

  console.log(errors);
  return (
    <div>
      <h2>LOGIN</h2>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="inputGroup">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder="workintech"
              {...register("username", { required: "This field is required" })}
            />
            {errors.username && (
              <div className="error">{errors.username.message}</div>
            )}
          </div>
          <div className="inputGroup">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              type="password"
              placeholder="workintech"
              {...register("password", { required: "Pass field is required" })}
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          {loginError && <div className="error">{loginError}</div>}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
