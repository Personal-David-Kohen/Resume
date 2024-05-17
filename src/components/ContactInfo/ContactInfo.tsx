import {
  RESUME_TEMPLATE,
  RESUME_TEMPLATE_WRAPPER,
} from "src/constants/template.const";

import { Link } from "@mui/material";
import { useStyles } from "./ContactInfo.style";
import { Email, LinkedIn, Smartphone } from "@mui/icons-material";

const ContactInfo = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <Smartphone sx={styles.icon} />
        <Link sx={styles.link} href={`tel:${RESUME_TEMPLATE_WRAPPER.PHONE}`}>
          {RESUME_TEMPLATE_WRAPPER.PHONE}
        </Link>
      </div>

      <div style={styles.section}>
        <Email sx={styles.icon} />
        <Link sx={styles.link} href={`mailto:${RESUME_TEMPLATE_WRAPPER.EMAIL}`}>
          {RESUME_TEMPLATE_WRAPPER.EMAIL}
        </Link>
      </div>

      <div style={styles.section}>
        <LinkedIn sx={styles.icon} />
        <Link sx={styles.link} href={RESUME_TEMPLATE_WRAPPER.LINKEDIN}>
          {RESUME_TEMPLATE.CONTACT.LINKEDIN.DISPLAY}
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
