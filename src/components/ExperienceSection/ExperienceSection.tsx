import { Typography } from "@mui/material";
import { useStyles } from "./ExperienceSection.style";
import { UI_LABELS } from "src/constants/labels.const";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const ExperienceSection = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography sx={styles.title}>{UI_LABELS.TITLES.EXPERIENCE}</Typography>

      {RESUME_TEMPLATE.EXPERIENCE.map((item, index) => (
        <>
          <Typography key={index} sx={styles.jobTitle}>
            {item.TITLE}
          </Typography>
          <Typography sx={styles.company}>{item.COMPANY}</Typography>
          <Typography sx={styles.duration}>{item.DURATION}</Typography>
          <ul>
            {item.DESCRIPTION.map((description, index) => (
              <li key={index}>
                <Typography sx={styles.item}>{description}</Typography>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default ExperienceSection;
