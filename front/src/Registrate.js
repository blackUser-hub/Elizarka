import LoginForm from "./components/reg_page/login_form";
import RegFrom from "./components/reg_page/reg_form";
import "./css/registrate.css"

const Registrate = () => {
    return (<div className="registrate">
        <RegFrom />
        <LoginForm />
    </div>
  );
}

export default Registrate;