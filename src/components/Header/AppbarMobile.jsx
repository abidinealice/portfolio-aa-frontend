import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguageContext } from "../../utils/Context/languageContext";
import { Spin as Hamburger } from "hamburger-react";
import Language from "../Language";
import { Colors } from "../../styles/theme";
import { AppbarMContainer, AppBarMOpen, AppBarHambuger, AppBarLinks, AppBarMLink, AppBarMSeparator, AppBarMIcon } from "../../styles/header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function AppbarMobile() {
  const { t } = useLanguageContext();
  const [isOpen, setOpen] = useState(false);
  const closeNav = () =>{
    setOpen(false)
  };
  const ref = useRef(null);

  return (
    <AppbarMContainer>
      <AppBarHambuger
        ref={ref}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          color={Colors.hamburgerMenu}
          distance="lg"
        />
      </AppBarHambuger>
      <AnimatePresence>
        {isOpen && (
          <AppBarMOpen
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active"
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 1 / 10,
                }}
                key={2}
                onClick={closeNav}
              >
                {t("nav1")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionSkills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 2 / 10,
                }}
                key={3}
                onClick={closeNav}
              >
                {t("nav2")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionProjects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 3 / 10,
                }}
                key={4}
                onClick={closeNav}
              >
                {t("nav3")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionContact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 4 / 10,
                }}
                key={5}
                onClick={closeNav}
              >
                {t("nav4")}
              </AppBarMLink>
            </Link>

            <AppBarMSeparator />

            <AppBarLinks
              component={motion.div}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 6 / 10,
              }}
              key={6}>
                <AppBarMIcon
                  href="https://github.com/abidinealice"                  
                >
                  <GitHubIcon sx={{width: "40px", height: "40px"}}/>
                </AppBarMIcon>              
                <AppBarMIcon
                  href="https://www.linkedin.com/in/alice-abidine"
                >
                  <LinkedInIcon sx={{width: "45px", height: "45px"}}/>
                </AppBarMIcon>
                <Language />

            </AppBarLinks>

          </AppBarMOpen>
        )}
      </AnimatePresence>
    </AppbarMContainer>
  );
}

export default AppbarMobile;
