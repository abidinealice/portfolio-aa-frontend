import { useLanguageContext } from "../../utils/Context/languageContext";
import { ErrorContainer, ErrorText } from "../../styles/error";
import {ErrorImg} from "../../styles/error"
import Error404 from "../../images/404error.gif"
import { Link } from 'react-router-dom'

function Error() {
  //Translation
  const { t } = useLanguageContext();

  return (
    <ErrorContainer id="sectionAbout">
        <ErrorImg src={Error404} alt="Error 404" />
        <Link to="/" style={{textDecoration: "none"}}>
          <ErrorText>{t("errorText")}</ErrorText>
        </Link>
    </ErrorContainer>
  );
}

export default Error;