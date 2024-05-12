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
      <Subtitle>Web developer based in France/Paris</Subtitle>
      <SecondaryTitle>Work</SecondaryTitle>
      <Text>
        I am currently a Vue.JS developer at Nibelis working on their framework
        and studying at Ynov Paris Campus. I am also helping a content creator{" "}
        <LinkStyled
          href="https://www.instagram.com/antoine_gbz/"
          target="_blank"
        >
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
      <SecondaryTitle>Projects</SecondaryTitle>
      <Text>
        Loic Marcou and I plan to create custom keycaps for the iso azerty
        layout for mechanical keyboards, to help grow the comumunity in
        France/Europe. We plan to launch our website in the beginning of 2025.
        I’m also working with Antoine GBZ to create his website for his online
        coaching business. More information soon. You can also check my GitHub
        for minor projects.
      </Text>
      <SecondaryTitle>Contact</SecondaryTitle>
      <IconList>
        <a href="https://github.com/saithomas-gbz" target="_blank">
          <IconItem>
            <FaGithub />
            <span> saithomas-gbz </span>
          </IconItem>
        </a>
        <a href="https://twitter.com/saithomas_gbz" target="_blank">
          <IconItem>
            <FaTwitter />
            <span>saithomas_gbz</span>
          </IconItem>
        </a>
        <a href="https://www.linkedin.com/in/thomas-grare/" target="_blank">
          <IconItem>
            <FaLinkedin />
            <span>thomas-grare</span>
          </IconItem>
        </a>
        <a href="https://www.instagram.com/saithomas.gbz/" target="_blank">
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