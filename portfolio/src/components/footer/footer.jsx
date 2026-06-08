import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { ThemeContext } from "../../context/themecontext";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "../../constants/urls";
import { PERSONAL_INFO } from "../../constants/personalInfo";

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      py="40px"
      px="5%"
      borderTop="1px solid"
      borderColor={theme ? "rgba(200,200,200,0.4)" : "rgba(255,255,255,0.1)"}
      backgroundColor={theme ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.4)"}
      backdropFilter="blur(10px)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        gap="24px"
        maxW="1200px"
        margin="auto"
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text
            fontWeight="bold"
            fontSize="18px"
            color="#26A1DA"
            mb="6px"
          >
            {PERSONAL_INFO.name}
          </Text>
          <Text
            fontSize="14px"
            color={theme ? "gray.600" : "gray.300"}
            maxW="320px"
          >
            {PERSONAL_INFO.availability}
          </Text>
        </Box>

        <Flex gap="20px" flexWrap="wrap" justify="center">
          {[
            { label: "Home", to: "#home" },
            { label: "About", to: "#about" },
            { label: "Experience", to: "#experience" },
            { label: "Skills", to: "#skill" },
            { label: "Projects", to: "#projects" },
            { label: "Contact", to: "#contacts" },
          ].map((item) => (
            <Link
              as={HashLink}
              key={item.to}
              to={item.to}
              smooth
              fontSize="14px"
              color={theme ? "gray.700" : "gray.200"}
              _hover={{ color: "#26A1DA" }}
            >
              {item.label}
            </Link>
          ))}
        </Flex>

        <Flex gap="16px" align="center">
          <Link href={GITHUB_URL} isExternal fontSize="14px" color={theme ? "gray.700" : "gray.200"} _hover={{ color: "#26A1DA" }}>
            GitHub
          </Link>
          <Link href={LINKEDIN_URL} isExternal fontSize="14px" color={theme ? "gray.700" : "gray.200"} _hover={{ color: "#26A1DA" }}>
            LinkedIn
          </Link>
          <Link href={`mailto:${EMAIL}`} fontSize="14px" color={theme ? "gray.700" : "gray.200"} _hover={{ color: "#26A1DA" }}>
            Email
          </Link>
        </Flex>
      </Flex>

      <Text
        textAlign="center"
        fontSize="13px"
        color={theme ? "gray.500" : "gray.400"}
        mt="30px"
      >
        © {year} {PERSONAL_INFO.name}. Built with React & Chakra UI.
      </Text>
    </Box>
  );
}
