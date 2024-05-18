import { Typography } from "@mui/material";
import { UI_LABELS } from "src/constants/labels.const";
import { useStyles } from "./SoftSkillsSections.style";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const SoftSkillsSections = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography sx={styles.title}>{UI_LABELS.TITLES.SOFT_SKILLS}</Typography>

      <div style={styles.itemsContainer}>
        {RESUME_TEMPLATE.SOFT_SKILLS.map((skill, index) => (
          <div key={index} style={styles.itemContainer}>
            <Typography key={index} sx={styles.item}>
              {skill}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkillsSections;
