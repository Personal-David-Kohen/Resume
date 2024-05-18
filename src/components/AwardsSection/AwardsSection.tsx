import { Typography } from "@mui/material";
import { useStyles } from "./AwardsSection.style";
import { UI_LABELS } from "src/constants/labels.const";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const AwardsSection = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>{UI_LABELS.TITLES.AWARDS}</Typography>

      <div style={styles.itemsContainer}>
        {RESUME_TEMPLATE.AWARDS.map((award, index) => (
          <div key={index} style={styles.itemContainer}>
            <Typography style={styles.award}>{award.TITLE}</Typography>
            <Typography style={styles.date}>{award.DATE}</Typography>
            <Typography style={styles.description}>
              {award.DESCRIPTION}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
