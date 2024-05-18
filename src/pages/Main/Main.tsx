import { Grid } from "@mui/material";
import { useStyles } from "./Main.style";
import Header from "src/components/Header/Header";
import AwardsSection from "src/components/AwardsSection/AwardsSection";
import LanguagesSection from "src/components/LanguagesSection/LanguagesSection";
import ExperienceSection from "src/components/ExperienceSection/ExperienceSection";
import TechSkillsSection from "src/components/TechSkillsSection/TechSkillsSection";
import SoftSkillsSections from "src/components/SoftSkillsSections/SoftSkillsSections";

const Main = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Header />

        <div style={styles.gridContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ExperienceSection />
            </Grid>

            <Grid item xs={12} md={6}>
              <TechSkillsSection />
            </Grid>

            <Grid item xs={12} md={6}>
              <SoftSkillsSections />
            </Grid>

            <Grid item xs={12} md={6}>
              <LanguagesSection />
            </Grid>

            <Grid item xs={12} md={6}>
              <AwardsSection />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Main;
