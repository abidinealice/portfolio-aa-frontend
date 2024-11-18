import { useLanguageContext } from "../../utils/Context/languageContext";
import { ErrorContainer, ErrorText } from "../../styles/error";

function About() {
  //Translation
  const { t } = useLanguageContext();

  return (
    <ErrorContainer id="sectionAbout">
        <ErrorText>{t("errorText")}</ErrorText>
    </ErrorContainer>
  );
}

export default About;