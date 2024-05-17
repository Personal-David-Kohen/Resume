import { Typography } from "@mui/material";
import { useStyles } from "./Header.style";
import ContactInfo from "../ContactInfo/ContactInfo";
import { RESUME_TEMPLATE } from "src/constants/template.const";

const Header = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography sx={styles.title}>{RESUME_TEMPLATE.FULLNAME}</Typography>
      <Typography sx={styles.subtitle}>{RESUME_TEMPLATE.PROFESSION}</Typography>

      {RESUME_TEMPLATE.PROLOGUE.map((paragraph, index) => (
        <Typography key={index} sx={styles.paragraph}>
          {paragraph}
        </Typography>
      ))}

      <ContactInfo />
    </div>
  );
};

export default Header;
