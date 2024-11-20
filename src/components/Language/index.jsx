import { AppbarBtn } from "../../styles/header";

import { useLanguageContext } from "../../utils/Context/languageContext";

function Language() {
  const { onClickLanguageChange } = useLanguageContext();

  return (
      <AppbarBtn value="fr" onClick={onClickLanguageChange}>
        FRA
      </AppbarBtn>
  );
}

export default Language;
