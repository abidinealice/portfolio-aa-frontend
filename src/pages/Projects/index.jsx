import { useLanguageContext } from "../../utils/Context/languageContext";
import GalleryV2 from "../../components/Gallery/GalleryV2";
import { ProjectContainer } from "../../styles/projects";
import TextAnimation from "../../components/Animation/text";

function Projects() {
  //Translation
  const { t } = useLanguageContext();
  return (
    <ProjectContainer id="sectionProjects" className="section">
      <TextAnimation title={t("projectsTitle")} />
      <GalleryV2 />
    </ProjectContainer>
  );
}

export default Projects;
