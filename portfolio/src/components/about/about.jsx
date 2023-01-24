import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import "./about.css";

export default function About() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Flex
      id="about"
      style={
        theme
          ? { backgroundColor: "rgb(229, 242, 219)" }
          : { backgroundImage: "linear-gradient(#01070E,#031d38)" }
      }
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        align="center"
        gap="20px"
        justifyContent="center"
      >
        <Box
          w={{ base: "265px", md: "365px" }}
          p={1}
          position="relative"
          margin="auto"
        >
          <Text
            fontFamily="Open Sans"
            fontSize={{ base: "40px", md: "55px" }}
            style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
            as="b"
          >
            About Me...
          </Text>
        </Box>
        <br />
        <br />
        <Flex
          flexDirection="column"
          style={theme ? { color: "rgb(0, 99, 99)" } : { color: "white" }}
          as="i"
          fontSize={{ base: "18px", md: "22px" }}
          textAlign="left"
          justifyContent="center"
          w={{ base: "90vw", md: "80%" }}
          h="fit-content"
          padding="20px"
          backgroundColor="rgba(255, 255, 255, 0.3)"
          margin="auto"
          borderRadius="20px"
          border="2px solid black"
          gap="15px"
        >
          <li>
            A highly motivated enthusiast with hands-on experience in building
            web Applications using MERN stack.
          </li>
          <li>
            Well versed in various web technologies including HTML, CSS, JS and
            React.Js on the front-end and NodeJs, Express.Js on the back-end. I
            am a fast learner with core knowledge of stack technology. I always
            seek for an opportunity to enhance my skills and knowledge
          </li>
          <li>
            Always eager to learn new technologies. Looking forward to making a
            a significant contribution to an organization through dedicated and
            consistent effort.
          </li>
        </Flex>
      </Flex>
    </Flex>
  );
}
