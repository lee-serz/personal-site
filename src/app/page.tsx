import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import s from "./page.module.scss";

export default function Home() {
  return (
    <div className={s.container}>
      <Header />
      <Welcome />
    </div>
  );
}
