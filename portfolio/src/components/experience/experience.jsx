import React from "react";
import { Box, Flex, Text, Badge } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import { getThemeBackground } from "../../utils/themeStyles";
import { EXPERIENCE } from "../../constants/experience";

export default function Experience() {
  const { theme } = React.useContext(ThemeContext);

  const cardBg = theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.06)";
  const cardBorder = theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.12)";
  const textColor = theme ? "rgb(60, 60, 60)" : "white";
  const accentColor = theme ? "rgb(100, 149, 237)" : "#26A1DA";

  return (
    <Box
      id="experience"
      style={getThemeBackground(theme)}
      py="80px"
      pb="100px"
    >
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "40px", md: "55px", lg: "60px" }}
        color="#26A1DA"
        fontWeight="bold"
        textAlign="center"
        mb="10px"
      >
        Experience
      </Text>
      <Box
        w="100px"
        h="4px"
        background="linear-gradient(90deg, transparent, #26A1DA, transparent)"
        margin="auto"
        mb="50px"
        borderRadius="2px"
      />

      <Flex
        flexDirection="column"
        gap="24px"
        w={{ base: "92%", md: "80%", lg: "70%" }}
        maxW="900px"
        margin="auto"
      >
        {EXPERIENCE.map((role, index) => (
          <Box
            key={index}
            padding="28px"
            backgroundColor={cardBg}
            borderRadius="20px"
            border={cardBorder}
            backdropFilter="blur(12px)"
            boxShadow={theme ? "0 4px 20px rgba(0,0,0,0.06)" : "0 4px 20px rgba(0,0,0,0.2)"}
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: theme
                ? "0 12px 36px rgba(100, 149, 237, 0.15)"
                : "0 12px 36px rgba(38, 161, 218, 0.25)",
              transition: "all 0.35s ease",
            }}
            transition="all 0.35s ease"
            position="relative"
            pl={{ base: "28px", md: "36px" }}
            _before={{
              content: '""',
              position: "absolute",
              left: "14px",
              top: "28px",
              bottom: "28px",
              width: "3px",
              borderRadius: "2px",
              background: "linear-gradient(180deg, #26A1DA, transparent)",
            }}
          >
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ base: "flex-start", md: "center" }}
              gap="8px"
              mb="12px"
            >
              <Box>
                <Text fontSize={{ base: "20px", md: "22px" }} fontWeight="bold" color={accentColor}>
                  {role.title}
                </Text>
                <Text fontSize="16px" color={textColor} fontWeight="600">
                  {role.company} · {role.location}
                </Text>
              </Box>
              <Flex gap="8px" alignItems="center" flexWrap="wrap">
                <Badge colorScheme="blue" fontSize="12px" px="10px" py="4px" borderRadius="full">
                  {role.type}
                </Badge>
                <Text fontSize="14px" color={textColor} opacity={0.85}>
                  {role.period}
                </Text>
              </Flex>
            </Flex>

            <Flex flexDirection="column" gap="6px" mb="14px">
              {role.highlights.map((item, i) => (
                <Text
                  key={i}
                  fontSize={{ base: "15px", md: "16px" }}
                  color={textColor}
                  lineHeight="1.75"
                >
                  {item}
                </Text>
              ))}
            </Flex>

            <Flex gap="8px" flexWrap="wrap">
              {role.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  colorScheme="cyan"
                  fontSize="11px"
                  px="8px"
                  py="3px"
                  borderRadius="6px"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
