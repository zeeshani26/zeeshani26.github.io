import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import "./nav.css";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  const { theme, settheme } = React.useContext(ThemeContext);
  const [open, setopen] = useState(false);

  function changetheme() {
    settheme(!theme);
  }

  function opentoggle() {
    setopen(!open);
  }

  let te1 = "";
  let te2 = "";

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className="navbar"
      style={
        theme
          ? { backgroundColor: "rgb(247, 237, 181)" }
          : { backgroundColor: "#191919" }
      }
    >
      <Box
        className="changer"
        onClick={changetheme}
        style={
          theme
            ? { backgroundColor: "rgb(15, 22, 36)" }
            : { backgroundColor: "white" }
        }
      >
        <Image
          className="logo"
          style={theme ? { display: "block" } : { display: "none" }}
          src="https://i.ibb.co/MPscNwf/icons8-night-mode-25.png"
        />
        <Image
          className="logo"
          style={theme ? { display: "none" } : { display: "block" }}
          src="https://i.ibb.co/3ypPKw9/icons8-sun-50.png"
        />
      </Box>
      <Flex className="sign" fontWeight="500">
        <Text
          fontFamily="poppins"
          fontSize={{ base: "25px", md: "35px" }}
          style={theme ? { color: "rgb(15, 22, 36)" } : { color: "#fff" }}
        >
          {te1}
        </Text>
        <Text
          fontFamily="Guild of Professional Actors"
          className="mdl"
          fontSize={{ base: "30px", md: "45px" }}
          style={theme ? { color: "rgb(15, 22, 36)" } : { color: "#fff" }}
        >
          Zeeshan Ilahi
        </Text>
        <Text
          fontFamily="poppins"
          fontSize={{ base: "25px", md: "35px" }}
          style={theme ? { color: "rgb(15, 22, 36)" } : { color: "#fff" }}
        >
          {te2}
        </Text>
      </Flex>
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        style={
          theme
            ? {
                fontFamily: "preconnect",
                fontWeight: "700",
                fontSize: "22px",
                color: "black",
              }
            : {
                fontFamily: "preconnect",
                fontWeight: "700",
                fontSize: "22px",
                color: "white",
              }
        }
        gap={{ md: "20px", lg: "30px" }}
        mr={{ md: "10%", lg: "15%" }}
      >
        <Link to="#home" smooth className="home eff">
          Home
        </Link>
        <Link to="#about" smooth className="about eff">
          About
        </Link>
        <Link to="#skill" smooth className="skill eff">
          Skill
        </Link>
        <Link to="#projects" smooth className="projects eff">
          Projects
        </Link>
        <Link to="#contacts" smooth className="contact eff">
          Contact
        </Link>
        <a
          className="res eff"
          href="https://drive.google.com/drive/folders/1C0eTcJ8aXX2V55e3etUEhDiXoBtfaJHc"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </Flex>
      <Box display={{ base: "block", md: "block", lg: "none" }} mr="10%">
        <Flex flexDirection="column" gap="3px" onClick={opentoggle}>
          <Box
            w="15px"
            h="3px"
            style={
              theme
                ? { backgroundColor: "rgb(15, 22, 36)" }
                : { backgroundColor: "white" }
            }
          ></Box>
          <Box
            w="15px"
            h="3px"
            style={
              theme
                ? { backgroundColor: "rgb(15, 22, 36)" }
                : { backgroundColor: "white" }
            }
          ></Box>
          <Box
            w="15px"
            h="3px"
            style={
              theme
                ? { backgroundColor: "rgb(15, 22, 36)" }
                : { backgroundColor: "white" }
            }
          ></Box>
        </Flex>
        {open && (
          <Flex
            className="toggletray"
            position="absolute"
            top="0"
            left="0"
            fontFamily="preconnect"
            fontWeight="700"
            fontSize="25px"
            w="100vw"
            h="100vh"
          >
            <Box onClick={opentoggle} h="100vw" w="50%"></Box>
            <Flex
              h="100vh"
              w="50%"
              pl="20px"
              pt="20px"
              flexDirection="column"
              alignItems="flex-start"
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.1)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
            >
              <Link to="#home" smooth>
                Home
              </Link>
              <Link to="#about" smooth>
                About
              </Link>
              <Link to="#skill" smooth>
                Skill
              </Link>
              <Link to="#projects" smooth>
                Projects
              </Link>
              <Link to="#contacts" smooth>
                Contact
              </Link>
              <a
                className="res eff"
                href="https://drive.google.com/file/d/1L1lfsrKExeigDmQMzzPnD5CCVNfG9agn/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

export default Nav;
