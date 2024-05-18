import { Typography } from "@mui/material";
import { useStyles } from "./LanguagesSection.style";
import { UI_LABELS } from "src/constants/labels.const";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const LanguagesSection = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography sx={styles.title}>{UI_LABELS.TITLES.LANGUAGES}</Typography>

      <div style={styles.itemsContainer}>
        {RESUME_TEMPLATE.LANGUAGES.map((language, index) => (
          <div key={index} style={styles.itemContainer}>
            <Typography sx={styles.language}>{language.LANGUAGE}</Typography>
            <Typography sx={styles.proficiency}>
              {language.PROFICIENCY}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
