import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export default function ProfileModal({id}) {
    const navigate = useNavigate()
    function logOut() {
        localStorage.removeItem('user')
        localStorage.removeItem('name')
        localStorage.removeItem('avatar')
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
        return
    }
    return (
      <div className={styles.profileModal}>
        <Link to={`/profile/${id}`}><div>Личный кабинет</div></Link>
        <div className={styles.logout} onClick={logOut}>Выйти</div>
      </div>
    )
  }