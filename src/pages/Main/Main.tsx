import { useStyles } from "./Main.style";
import Header from "src/components/Header/Header";

const Main = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Header />
      </div>
    </div>
  );
};

export default Main;
