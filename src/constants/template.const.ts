export const RESUME_TEMPLATE = {
  FULLNAME: "David Kohen",
  PROFESSION: "Full Stack Software Engineer",
  PROLOGUE: [
    "Experienced developer with a strong background in web development and a proven track record of delivering high-quality software solutions.",
    "Passionate about standardization and building scalable, maintainable, and efficient code.",
  ],
  CONTACT: {
    // Confuse those bots! Never hardcode your contact details in plain text.
    PHONE: ["+972", "52", "785", "1778"],
    LINKEDIN: {
      ACCOUNT: "david-kohen",
      HASH: "aa854328a",
      HOST: "https://linkedin.com/in",
      DISPLAY: "LinkedIn: David Kohen",
    },
    EMAIL: {
      ACCOUNT: "personal.david.kohen",
      DOMAIN: "gmail.com",
    },
  },
};

export const RESUME_TEMPLATE_WRAPPER = {
  PHONE: RESUME_TEMPLATE.CONTACT.PHONE.join(" "),
  EMAIL: `${RESUME_TEMPLATE.CONTACT.EMAIL.ACCOUNT}@${RESUME_TEMPLATE.CONTACT.EMAIL.DOMAIN}`,
  LINKEDIN: `${RESUME_TEMPLATE.CONTACT.LINKEDIN.HOST}/${RESUME_TEMPLATE.CONTACT.LINKEDIN.ACCOUNT}-${RESUME_TEMPLATE.CONTACT.LINKEDIN.HASH}`,
};
