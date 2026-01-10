import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import "./about.css";
import { getThemeBackground } from "../../utils/themeStyles";
import { PERSONAL_INFO, getEducationText } from "../../constants/personalInfo";

export default function About() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Flex
      id="about"
      style={getThemeBackground(theme)}
      minH="100vh"
      py="80px"
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
            fontSize={{ base: "40px", md: "55px", lg: "60px" }}
            style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
            fontWeight="bold"
            mb="15px"
            textAlign="center"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, transparent, #26A1DA, transparent)",
              borderRadius: "2px"
            }}
          >
            About Me
          </Text>
          <Box
            w="100px"
            h="4px"
            background="linear-gradient(90deg, transparent, #26A1DA, transparent)"
            margin="auto"
            mb="30px"
            borderRadius="2px"
            mt="5px"
          />
        </Box>
        <br />
        <br />
        <Box
          w={{ base: "90vw", md: "80%", lg: "70%" }}
          maxW="900px"
        >
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            style={theme ? { color: "rgb(60, 60, 60)" } : { color: "white" }}
            textAlign="center"
            mb="30px"
            lineHeight="1.8"
          >
            {PERSONAL_INFO.tagline}. With experience in building scalable applications and working 
            with cutting-edge technologies, I bring a strong foundation in software engineering 
            principles and a commitment to continuous learning.
          </Text>
          
          <Flex
            flexDirection="column"
            gap="25px"
            mt="40px"
          >
            <Box
              padding="30px"
              backgroundColor={theme ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.08)"}
              borderRadius="20px"
              border={theme ? "2px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)"}
              backdropFilter="blur(15px)"
              boxShadow={theme 
                ? "0 8px 32px rgba(0, 0, 0, 0.08)" 
                : "0 8px 32px rgba(0, 0, 0, 0.3)"}
              _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: theme 
                  ? "0 15px 40px rgba(100, 149, 237, 0.15)" 
                  : "0 15px 40px rgba(38, 161, 218, 0.4)",
                borderColor: theme ? "rgba(100, 149, 237, 0.4)" : "rgba(255, 255, 255, 0.4)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              overflow="hidden"
            >
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
                fontWeight="bold"
                mb="15px"
              >
                💼 Professional Experience
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                style={theme ? { color: "rgb(60, 60, 60)" } : { color: "white" }}
                lineHeight="1.8"
              >
                Currently working as a Software Developer Intern at Futurewonder, where I've optimized 
                web platform performance by 70%, resolved 120+ development tickets, and built automated 
                testing tools. Previously worked at Meritto, where I developed 12+ scalable web applications 
                and achieved 98% client satisfaction.
              </Text>
            </Box>

            <Box
              padding="30px"
              backgroundColor={theme ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.08)"}
              borderRadius="20px"
              border={theme ? "2px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)"}
              backdropFilter="blur(15px)"
              boxShadow={theme 
                ? "0 8px 32px rgba(0, 0, 0, 0.08)" 
                : "0 8px 32px rgba(0, 0, 0, 0.3)"}
              _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: theme 
                  ? "0 15px 40px rgba(100, 149, 237, 0.15)" 
                  : "0 15px 40px rgba(38, 161, 218, 0.4)",
                borderColor: theme ? "rgba(100, 149, 237, 0.4)" : "rgba(255, 255, 255, 0.4)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              overflow="hidden"
            >
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
                fontWeight="bold"
                mb="15px"
              >
                🎓 Education & Learning
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                style={theme ? { color: "rgb(60, 60, 60)" } : { color: "white" }}
                lineHeight="1.8"
              >
                {getEducationText()} with coursework in Data Structures, Algorithms, AI, Cloud Computing, 
                and Software Engineering. Previously completed a comprehensive {PERSONAL_INFO.education.previousEducation.program} 
                program at {PERSONAL_INFO.education.previousEducation.school}, mastering both front-end and 
                back-end technologies.
              </Text>
            </Box>

            <Box
              padding="30px"
              backgroundColor={theme ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.08)"}
              borderRadius="20px"
              border={theme ? "2px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)"}
              backdropFilter="blur(15px)"
              boxShadow={theme 
                ? "0 8px 32px rgba(0, 0, 0, 0.08)" 
                : "0 8px 32px rgba(0, 0, 0, 0.3)"}
              _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: theme 
                  ? "0 15px 40px rgba(100, 149, 237, 0.15)" 
                  : "0 15px 40px rgba(38, 161, 218, 0.4)",
                borderColor: theme ? "rgba(100, 149, 237, 0.4)" : "rgba(255, 255, 255, 0.4)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              overflow="hidden"
            >
              <Text
                fontSize={{ base: "20px", md: "24px" }}
                style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
                fontWeight="bold"
                mb="15px"
              >
                🚀 What I Do
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                style={theme ? { color: "rgb(60, 60, 60)" } : { color: "white" }}
                lineHeight="1.8"
              >
                I specialize in building scalable web applications using the MERN stack, implementing 
                CI/CD pipelines, and working with cloud technologies like AWS. I'm passionate about 
                writing clean, maintainable code, following SOLID principles, and continuously exploring 
                new technologies to solve complex problems.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
