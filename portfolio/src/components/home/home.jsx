import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../../context/themecontext";
import "./home.css";
import resume from "./Zeeshan-Ilahi-Resume.pdf";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants/urls";
import { getIntroText } from "../../constants/personalInfo";

function Home() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      id="home"
      className="home-section"
      style={
        theme
          ? { 
              backgroundImage: "linear-gradient(135deg, #e8edf5 0%, #d6e3f0 25%, #e0ebf5 50%, #d6e3f0 75%, #e8edf5 100%)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed"
            }
          : {
              backgroundImage: "url(https://i.ibb.co/nw6stXy/banner-bg.png)",
              backgroundColor: "#121212",
            }
      }
      h="100vh"
      position="relative"
      overflow="hidden"
    >
      {/* Animated background particles */}
      <Box
        className="particles"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="0"
        pointerEvents="none"
      />
      {/* Animated gradient orbs */}
      <Box
        className="gradient-orb orb-1"
        position="absolute"
        w="400px"
        h="400px"
        borderRadius="50%"
        filter="blur(80px)"
        opacity={theme ? "0.1" : "0.3"}
        style={{
          background: theme 
            ? "radial-gradient(circle, rgba(100, 149, 237, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, #26A1DA 0%, transparent 70%)",
          top: "10%",
          left: "10%",
          animation: "float 20s ease-in-out infinite"
        }}
        zIndex="0"
      />
      <Box
        className="gradient-orb orb-2"
        position="absolute"
        w="300px"
        h="300px"
        borderRadius="50%"
        filter="blur(60px)"
        opacity={theme ? "0.1" : "0.25"}
        style={{
          background: theme 
            ? "radial-gradient(circle, rgba(100, 149, 237, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(38, 161, 218, 0.8) 0%, transparent 70%)",
          bottom: "15%",
          right: "15%",
          animation: "float 15s ease-in-out infinite reverse"
        }}
        zIndex="0"
      />
      <Flex
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        w={{ base: "100%", md: "80%", lg: "80%" }}
        h="100%"
        justifyContent={{ base: "center", md: "center", lg: "space-between" }}
        margin="auto"
        padding={{ base: "50px", md: "100px", lg: "100px" }}
        position="relative"
        zIndex="1"
      >
        <Box
          w="100%"
          textAlign="left"
          order={{ base: "1", md: "1", lg: "0" }}
          fontFamily="Poppins"
          as="b"
        >
          <Text
            fontSize={{ base: "24px", md: "30px" }}
            style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
            mb="10px"
            opacity={0.9}
            letterSpacing="2px"
            textTransform="uppercase"
            fontWeight="500"
          >
            Hello, I'm
          </Text>
          <Text
            fontSize={{ base: "40px", md: "60px", lg: "70px" }}
            style={theme ? { color: "rgb(60, 60, 60)" } : { color: "white" }}
            fontWeight="bold"
            mb="10px"
            lineHeight="1.2"
            background={theme ? "linear-gradient(135deg, rgb(100, 149, 237) 0%, rgb(70, 130, 180) 100%)" : "linear-gradient(135deg, #ffffff 0%, #26A1DA 100%)"}
            backgroundClip="text"
            css={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            letterSpacing="-1px"
          >
            Zeeshan Ilahi
          </Text>
          <Text
            fontSize={{ base: "20px", md: "26px", lg: "28px" }}
            h="60px"
            mb="15px"
            style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
            fontWeight="600"
          >
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1500}
              words={[
                "I'm a Software Developer.",
                "I'm a Full Stack Developer.",
                "I'm a MERN Stack Developer.",
                "I'm an AI Enthusiast.",
              ]}
            />
          </Text>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
            mb="30px"
            opacity={0.9}
          >
            {getIntroText()}
          </Text>
          <a
            href={resume}
            download="Zeeshan-Ilahi-Resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button 
              className="resume" 
              bg="#26A1DA"
              color="white"
              size="lg"
              fontSize={{ base: "16px", md: "18px" }}
              padding="25px 40px"
              borderRadius="8px"
              fontWeight="600"
              _hover={{ 
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(38, 161, 218, 0.3)",
                bg: "#1e8fc7"
              }}
              transition="all 0.3s ease"
            >
              Download Resume
            </Button>
          </a>
          <Flex h="100px" alignItems="center" gap="25px" mt="20px">
            <Box
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              _hover={{
                transform: "translateY(-5px) scale(1.1)",
                transition: "all 0.3s ease"
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="55px"
                h="55px"
                borderRadius="50%"
                alt="GitHub profile link"
                filter="drop-shadow(0 4px 8px rgba(38, 161, 218, 0.3))"
              />
            </Box>
            <Box
              as="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              _hover={{
                transform: "translateY(-5px) scale(1.1)",
                transition: "all 0.3s ease"
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              <Image
                src="https://i.ibb.co/R2Z4YMK/icons8-linkedin-circled.gif"
                w="55px"
                h="55px"
                borderRadius="50%"
                alt="LinkedIn profile link"
                filter="drop-shadow(0 4px 8px rgba(38, 161, 218, 0.3))"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          borderRadius="50%"
          w={{ base: "80%", md: "350px", lg: "380px" }}
          p="8px"
          mt={{ base: "30px", md: "0px" }}
          position="relative"
          className="profile-image-container"
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.5s ease"
          }}
          transition="all 0.5s ease"
          style={
            theme
              ? { 
                  border: "5px solid rgb(100, 149, 237)",
                  boxShadow: "0 0 30px rgba(100, 149, 237, 0.3), inset 0 0 30px rgba(100, 149, 237, 0.1)"
                }
              : { 
                  border: "5px solid #26A1DA",
                  boxShadow: "0 0 40px rgba(38, 161, 218, 0.5), inset 0 0 30px rgba(38, 161, 218, 0.1)"
                }
          }
          _before={{
            content: '""',
            position: "absolute",
            top: "-5px",
            left: "-5px",
            right: "-5px",
            bottom: "-5px",
            borderRadius: "50%",
            border: theme ? "2px solid rgb(0, 99, 99)" : "2px solid #26A1DA",
            opacity: "0.5",
            animation: "rotate 3s linear infinite"
          }}
        >
          <Image
            src="https://i.ibb.co/5nRFdcD/1659119750908-jpg.jpg"
            w="100%"
            h="100%"
            borderRadius="50%"
            alt="Zeeshan Ilahi profile photo"
            objectFit="cover"
            style={
              theme
                ? { border: "3px solid rgb(252, 250, 247)" }
                : { border: "3px solid rgb(247, 237, 181)" }
            }
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
