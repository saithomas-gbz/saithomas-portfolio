import { Title, SecondaryTitle, Subtitle, Text } from "../shared/Title";
import LogoComponent from "../components/LogoComponent";

function Home () {
  return (
    <>
      <LogoComponent />
      <Title>GRARE THOMAS</Title>
      <Subtitle>Web developer based in France, Paris</Subtitle>
      <SecondaryTitle>Work</SecondaryTitle>
      <Text>
        I am currently a Vue.JS developer at Nibelis working on their framework and studying at Ynov Paris Campus. 
        I am also helping a content creator (Antoine GBZ) to build his identity on the web.
      </Text>
    </>
  );
}

export default Home;