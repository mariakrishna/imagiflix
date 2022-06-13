import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="mt-36 px-12 text-gray-400 pb-4">
      <FontAwesomeIcon className="mr-4" icon={faFacebookSquare} size="2x" />
      <FontAwesomeIcon className="mr-4" icon={faTwitter} size="2x" />
      <FontAwesomeIcon className="mr-4" icon={faInstagram} size="2x" />
      <FontAwesomeIcon icon={faYoutube} size="2x" />
      <div className="grid grid-cols-4 gap-2 my-8">
        <a href="#">Idiomas e Legendas</a>
        <a href="#">Audiodescrição</a>
        <a href="#">Centro de ajuda</a>
        <a href="#">Cartão Pré-Pago</a>
        <a href="#">Imprensa</a>
        <a href="#">Relação com investidores</a>
        <a href="#">Carreiras</a>
        <a href="#">Termos de uso</a>
        <a href="#">Privacidade</a>
        <a href="#">Avisos Legais</a>
        <a href="#">Preferências de Cookies</a>
        <a href="#">Informações Coorporativas</a>
        <a href="#">Entre em contado</a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
