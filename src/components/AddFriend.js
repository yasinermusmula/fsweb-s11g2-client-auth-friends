import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";

export default function AddFriend() {
  const { axiosWithAuthInstance } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
    axiosWithAuthInstance
      .post("friends", data)
      .then((res) => {
        console.log("/friendsADD", res);
      })
      .catch((err) => {
        console.log("/friendsADD", err);
      });
  };

  return(
    <div>
        <h2></h2>
    </div>
  )
}
