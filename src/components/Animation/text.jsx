import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AnimationText } from "../../styles/animation";

export default function TextAnimation({ title, color }) {
  const text = title.split(" ");
  return (
    <AnimationText variant="h1" sx={{color: color}}>
      {text.map((el, i) => (
        <motion.span
          whileInView="visible"
          viewport={{ once: "true" }}
          initial="hidden"
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          transition={{
            duration: 1,
            delay: i / 15,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </AnimationText>
  );
}

TextAnimation.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
