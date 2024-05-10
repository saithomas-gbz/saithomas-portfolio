import { Title, SecondaryTitle, Subtitle, Text, LinkStyled } from "../shared/Title";
import { List, ListItem, IconList, IconItem } from "../shared/List";
import LogoComponent from "../components/LogoComponent";
import GbzLogo from "../components/GbzLogo";
import Footer from "../components/Footer";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home () {
  return (
    <>
      <LogoComponent />
      <Title>GRARE THOMAS</Title>
      <Subtitle>Web developer based in France, Paris</Subtitle>
      <SecondaryTitle>Work</SecondaryTitle>
      <Text>
        I am currently a Vue.JS developer at Nibelis working on their framework
        and studying at Ynov Paris Campus. I am also helping a content creator{" "}
        <LinkStyled href="https://www.instagram.com/antoine_gbz/">
          Antoine GBZ
        </LinkStyled>{" "}
        to build his identity on the web.
      </Text>
      <GbzLogo />
      <SecondaryTitle>Bio</SecondaryTitle>
      <List>
        <ListItem>
          2019: Gratuated from High School of Rosa Parks (Montgeron, France)
        </ListItem>
        <ListItem>2021: BTS (french diploma) in computer science</ListItem>
        <ListItem>2022: Worked at Cegedim SRH as a web developer</ListItem>
        <ListItem>
          Now: Working at Nibelis and studying at Ynov Paris Campus
        </ListItem>
      </List>
      <SecondaryTitle>Hobbies</SecondaryTitle>
      <Text>Skating, Swimming, Fitness, Djing, Reading</Text>
      <SecondaryTitle>Skills</SecondaryTitle>
      <List>
        <ListItem>Vue</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>Node.JS</ListItem>
        <ListItem>React.JS</ListItem>
        <ListItem>Docker</ListItem>
        <ListItem>Git</ListItem>
        <ListItem>Linux</ListItem>
      </List>
      <SecondaryTitle>Contact</SecondaryTitle>
      <IconList>
        <a href="https://github.com/saithomas-gbz">
          <IconItem>
            <FaGithub />
            <span> saithomas-gbz </span>
          </IconItem>
        </a>
        <a href="https://twitter.com/saithomas_gbz">
          <IconItem>
            <FaTwitter />
            <span>saithomas_gbz</span>
          </IconItem>
        </a>
        <a href="https://www.linkedin.com/in/thomas-grare/">
          <IconItem>
            <FaLinkedin />
            <span>thomas-grare</span>
          </IconItem>
        </a>
        <a href="https://www.instagram.com/saithomas.gbz/">
          <IconItem>
            <FaInstagram />
            <span>saithomas.gbz</span>
          </IconItem>
        </a>
      </IconList>
      <Footer />
    </>
  );
}

export default Home;