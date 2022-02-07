import './error.css';
import { Link } from 'react-router-dom';

import Lottie from "react-lottie";
import Robot404 from "../../lotties/robot-404.json";

export default function Error() {
  return (
    <div className="container-error">
      {/* <img src="notfound.png" alt="Página não encontrada." /> */}
      <div className='ilustracao-404'>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Robot404,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <h1>Oops, página não encontrada!</h1>
      <Link to="/">Voltar ao início</Link>
    </div>
  );
}