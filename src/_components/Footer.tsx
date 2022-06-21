import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="mt-36 px-12 text-gray-400 pb-4 text-sm">
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-poiter"
        icon={faFacebookSquare}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-poiter"
        icon={faTwitter}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-poiter"
        icon={faInstagram}
        size="2x"
      />
      <FontAwesomeIcon
        className="hover:text-white cursor-poiter"
        icon={faYoutube}
        size="2x"
      />
      <div className="grid grid-cols-4 gap-2 my-8">
        <a className="hover:text-white" href="#">
          Idiomas e Legendas
        </a>
        <a className="hover:text-white" href="#">
          Audiodescrição
        </a>
        <a className="hover:text-white" href="#">
          Centro de ajuda
        </a>
        <a className="hover:text-white" href="#">
          Cartão Pré-Pago
        </a>
        <a className="hover:text-white" href="#">
          Imprensa
        </a>
        <a className="hover:text-white" href="#">
          Relação com investidores
        </a>
        <a className="hover:text-white" href="#">
          Carreiras
        </a>
        <a className="hover:text-white" href="#">
          Termos de uso
        </a>
        <a className="hover:text-white" href="#">
          Privacidade
        </a>
        <a className="hover:text-white" href="#">
          Avisos Legais
        </a>
        <a className="hover:text-white" href="#">
          Preferências de Cookies
        </a>
        <a className="hover:text-white" href="#">
          Informações Coorporativas
        </a>
        <a className="hover:text-white" href="#">
          Entre em contado
        </a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
