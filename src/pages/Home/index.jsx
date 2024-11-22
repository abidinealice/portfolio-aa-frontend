import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguageContext } from "../../utils/Context/languageContext";
import Icon from "../../images/iconAA.png";
import HomeIcon from '@mui/icons-material/Home';
import AnimationWave from "../../components/Animation/wave.jsx";
import {
  HomeContainer,
  HomeContentContainer,
  HomeGrid,
  HomeImg,
  HomeBubbleBox,
  HomeTypographyTitle,
  HomeTypographySubtitle,
  HomeLocationBox
} from "../../styles/home";

function Home() {
  //Translation
  const { t } = useLanguageContext();

  //Animation
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const animationText = useTransform(scrollYProgress, [0, 1], [0, 290]);

  return (
    <HomeContainer ref={container}>
      <AnimationWave />
      <HomeContentContainer>
        <HomeGrid>
          <motion.div style={{ y: animationText }}>
            <HomeBubbleBox>
              <HomeTypographyTitle variant="h1">
                ALICE ABIDINE
              </HomeTypographyTitle>
              <HomeTypographyTitle variant="h1">
              {t("homeText4")}
              </HomeTypographyTitle>
              <HomeLocationBox>
                <HomeIcon sx={{color:"#6F4449"}}/>
                <HomeTypographySubtitle>
                {t("homeText6")}
                </HomeTypographySubtitle>
              </HomeLocationBox>              
            </HomeBubbleBox>
          </motion.div>
          <HomeImg src={Icon} alt="Icon Alice Abidine" />
        </HomeGrid>
      </HomeContentContainer>
    </HomeContainer>
  );
}

export default Home;
