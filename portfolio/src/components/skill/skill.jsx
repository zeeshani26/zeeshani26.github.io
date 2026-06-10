import React from "react";
import { Box, Text, Grid, Flex } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import SkillCard from "./SkillCard";
import LazyImage from "../common/LazyImage";
import { SKILLS } from "../../constants/skills";
import { getThemeBackground } from "../../utils/themeStyles";
import { useInView } from "../../hooks/useInView";

export default function Skill() {
  const { theme } = React.useContext(ThemeContext);
  const [statsRef, statsInView] = useInView("300px");

  return (
    <Box
      id="skill"
      paddingTop="70px"
      paddingBottom="100px"
      style={getThemeBackground(theme)}
      h="fit-content"
      overflowX="hidden"
      w="100%"
      maxW="100vw"
    >
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "40px", md: "55px", lg: "60px" }}
        style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
        fontWeight="bold"
        textAlign="center"
        mb="10px"
      >
        Skills & Technologies
      </Text>
      <Box
        w="100px"
        h="4px"
        background="linear-gradient(90deg, transparent, #26A1DA, transparent)"
        margin="auto"
        mb="40px"
        borderRadius="2px"
        mt="5px"
      />
      <Box marginBottom="50px" overflow="hidden" w="100%">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(5,1fr)",
          }}
          w={{ base: "95%", md: "90%" }}
          maxW="1200px"
          margin="auto"
          gap={{ base: "10px", md: "30px", lg: "40px" }}
        >
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={index}
              imageSrc={skill.imageSrc}
              name={skill.name}
              theme={theme}
            />
          ))}
        </Grid>
      </Box>
      <Flex
        flexDirection="column"
        w="80%"
        alignItems="center"
        margin="auto"
        padding="30px"
        borderRadius="20px"
        gap="25px"
        backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
        backdropFilter="blur(15px)"
        border={theme ? "2px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)"}
        boxShadow={theme 
          ? "0 8px 32px rgba(0, 0, 0, 0.08)" 
          : "0 8px 32px rgba(0, 0, 0, 0.3)"}
        _hover={{
          boxShadow: theme 
            ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
            : "0 12px 40px rgba(38, 161, 218, 0.3)",
          borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.4)",
          transition: "all 0.4s ease"
        }}
        transition="all 0.4s ease"
      >
        <Text
          fontSize={{ base: "24px", md: "28px" }}
          style={theme ? { color: "rgb(100, 149, 237)" } : { color: "#26A1DA" }}
          fontWeight="bold"
          mb="10px"
        >
          📊 My GitHub Stats
        </Text>

        <Box ref={statsRef} w="100%">
          {statsInView && (
            <>
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection={{ base: "column", md: "row" }}
                gap="20px"
                w="100%"
              >
                <LazyImage
                  src="https://github-readme-stats-fast.vercel.app/api?username=zeeshani26&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  w={{ base: "100%", md: "48%" }}
                  maxW="480px"
                />
                <LazyImage
                  src="https://github-readme-stats-fast.vercel.app/api/streak?username=zeeshani26&theme=radical"
                  alt="GitHub Streak"
                  w={{ base: "100%", md: "50%" }}
                  maxW="500px"
                />
              </Flex>

              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection={{ base: "column", md: "row" }}
                gap="20px"
                w="100%"
                mt="20px"
              >
                <LazyImage
                  src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=zeeshani26&layout=compact&theme=radical"
                  alt="Top Languages"
                  w={{ base: "100%", md: "38%" }}
                  maxW="480px"
                />
                <LazyImage
                  src="https://github.pumbas.net/api/contributions/zeeshani26?colour=37BCF7&bgColour=0D1117&line=37BCF7&areaColour=37BCF71A&dotColour=1aff1d&hideBorder=false"
                  alt="Zeeshan Ilahi's Contribution Graph"
                  w={{ base: "100%", md: "51%" }}
                  maxW="1000px"
                  border="1px solid #fff"
                  borderRadius="10px"
                />
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
