import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import "./nav.css";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { RESUME_URL_DESKTOP, RESUME_URL_MOBILE } from "../../constants/urls";
import { getNavbarBackground } from "../../utils/themeStyles";

function Nav() {
  const { theme, settheme } = React.useContext(ThemeContext);
  const [open, setopen] = useState(false);

  function changetheme() {
    settheme(!theme);
  }

  function opentoggle() {
    setopen(!open);
  }

  function closeMenu() {
    setopen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className="navbar"
      style={getNavbarBackground(theme)}
    >
      <Box
        className="changer"
        onClick={changetheme}
        cursor="pointer"
        _hover={{
          transform: "scale(1.1)",
          transition: "all 0.3s ease"
        }}
        transition="all 0.3s ease"
        style={
          theme
            ? { 
                backgroundColor: "rgb(15, 22, 36)",
                boxShadow: "0 4px 15px rgba(15, 22, 36, 0.3)"
              }
            : { 
                backgroundColor: "white",
                boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)"
              }
        }
      >
        <Image
          className="logo"
          style={theme ? { display: "block" } : { display: "none" }}
          src="https://i.ibb.co/MPscNwf/icons8-night-mode-25.png"
          alt="Dark mode icon"
        />
        <Image
          className="logo"
          style={theme ? { display: "none" } : { display: "block" }}
          src="https://i.ibb.co/3ypPKw9/icons8-sun-50.png"
          alt="Light mode icon"
        />
      </Box>
      <Flex className="sign" fontWeight="500">
        <Text
          fontFamily="Guild of Professional Actors"
          className="mdl"
          fontSize={{ base: "30px", md: "45px" }}
          style={theme ? { color: "rgb(15, 22, 36)" } : { color: "#fff" }}
        >
          Zeeshan Ilahi
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
        <Link to="#experience" smooth className="experience eff">
          Experience
        </Link>
        <Link to="#skill" smooth className="skill eff">
          Skills
        </Link>
        <Link to="#projects" smooth className="projects eff">
          Projects
        </Link>
        <Link to="#contacts" smooth className="contact eff">
          Contact
        </Link>
        <a
          className="res eff"
          href={RESUME_URL_DESKTOP}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </Flex>
      <Box display={{ base: "block", md: "block", lg: "none" }} mr="10%">
        <Flex
          flexDirection="column"
          gap="3px"
          onClick={opentoggle}
          cursor="pointer"
          aria-label="Toggle navigation menu"
        >
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
      </Box>
      {open && (
        <Box
          className="toggletray"
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          zIndex="1100"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.45)"
            onClick={closeMenu}
            cursor="pointer"
          />
          <Flex
            className="mobile-menu-panel"
            position="absolute"
            top="0"
            right="0"
            h="100%"
            w={{ base: "72%", sm: "55%" }}
            maxW="320px"
            pl="24px"
            pt="90px"
            pb="24px"
            flexDirection="column"
            alignItems="flex-start"
            gap="18px"
            fontFamily="preconnect"
            fontWeight="700"
            fontSize="22px"
            onClick={(e) => e.stopPropagation()}
            style={
              theme
                ? {
                    background: "rgba(255, 255, 255, 0.97)",
                    backdropFilter: "blur(12px)",
                    color: "rgb(15, 22, 36)",
                    boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.15)",
                  }
                : {
                    background: "rgba(18, 18, 18, 0.97)",
                    backdropFilter: "blur(12px)",
                    color: "rgb(247, 237, 181)",
                    boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.35)",
                  }
            }
          >
            <Link to="#home" smooth onClick={closeMenu}>
              Home
            </Link>
            <Link to="#about" smooth onClick={closeMenu}>
              About
            </Link>
            <Link to="#experience" smooth onClick={closeMenu}>
              Experience
            </Link>
            <Link to="#skill" smooth onClick={closeMenu}>
              Skills
            </Link>
            <Link to="#projects" smooth onClick={closeMenu}>
              Projects
            </Link>
            <Link to="#contacts" smooth onClick={closeMenu}>
              Contact
            </Link>
            <a
              className="res eff"
              href={RESUME_URL_MOBILE}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </Flex>
        </Box>
      )}
    </Flex>
  );
}

export default Nav;
