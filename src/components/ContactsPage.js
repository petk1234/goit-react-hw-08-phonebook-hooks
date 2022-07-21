import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import routes from "./routes";
function ContactsPage() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.token);
  console.log(isAuthenticated);
  useEffect(() => {
    console.log("useEffect");
    let myStorage = window.localStorage;
    let isAuthenticated_ = myStorage.getItem("token");
    console.log(myStorage.getItem("token"));
    console.log(isAuthenticated_);
    if (isAuthenticated_ === null) {
      console.log("from contacts to login");
      //   navigate(`${routes.login}`);
    }
  }, []);
  return <p>It is Contacts page</p>;
}
export default ContactsPage;
