import { Typography } from "@mui/material";
import { useStyles } from "./TechSkillsSection.style";
import { UI_LABELS } from "src/constants/labels.const";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const TechSkillsSection = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography sx={styles.title}>{UI_LABELS.TITLES.TECH_SKILLS}</Typography>

      {RESUME_TEMPLATE.TECH_SKILLS.map((category, index) => (
        <div key={index} style={styles.categoryContainer}>
          <Typography sx={styles.category}>{category.CATEGORY}</Typography>
          <div style={styles.skillsContainer}>
            {category.SKILLS.map((skill, index) => (
              <Typography key={index} sx={styles.item}>
                {`${skill},`}
              </Typography>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechSkillsSection;
