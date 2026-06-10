import React from "react";
import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react";
import LazyImage from "../common/LazyImage";
import { ThemeContext } from "../../context/themecontext";
import { getThemeBackground } from "../../utils/themeStyles";

export default function Projects() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      id="projects"
      style={getThemeBackground(theme)}
      h="fit-content"
      paddingTop="70px"
      paddingBottom="100px"
    >
      <br />
      <br />
      <br />
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "40px", md: "55px", lg: "60px" }}
        style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
        fontWeight="bold"
        textAlign="center"
        mb="10px"
      >
        Projects
      </Text>
      <Box
        w="80px"
        h="4px"
        background="linear-gradient(90deg, transparent, #26A1DA, transparent)"
        margin="auto"
        mb="16px"
        borderRadius="2px"
      />
      <Text
        textAlign="center"
        fontSize={{ base: "15px", md: "17px" }}
        color={theme ? "gray.600" : "gray.300"}
        maxW="700px"
        margin="auto"
        mb="40px"
        px="4%"
        lineHeight="1.7"
      >
        Flagship work spanning distributed systems, AI-assisted products, and full-stack applications.
      </Text>
      <Grid
        gap="20px"
        fontFamily="Open Sans"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        margin="auto"
        w="90%"
        style={theme ? { color: "rgb(60, 60, 60)" } : { color: "aqua" }}
      >
        <Flex
          textAlign="left"
          padding="25px"
          flexDirection="column"
          h="100%"
          backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
          backdropFilter="blur(10px)"
          border={theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)"}
          boxShadow={theme 
            ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)"}
          _hover={{ 
            boxShadow: theme 
              ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
              : "0 12px 40px rgba(38, 161, 218, 0.3)",
            transform: "translateY(-8px) scale(1.02)",
            borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
        >
          <Badge
            position="absolute"
            top="16px"
            right="16px"
            colorScheme="green"
            fontSize="11px"
            px="10px"
            py="4px"
            borderRadius="full"
            zIndex="1"
          >
            Featured
          </Badge>
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Patient AI Operations Portal
          </Text>
          <LazyImage
            borderRadius="20px"
            src="https://i.ibb.co/ynXbpv2Q/Screenshot-2026-06-08-132344.png"
            w="100%"
            mt="10px"
            alt="Patient AI Operations Portal - Clinical Intelligence and Resilience Console screenshot"
          />
          <Text fontSize="14px" mt="10px">
            A microservices platform for explainable patient risk, intervention what-if analysis,
            and causal guardrails under stress. Features a unified browser console served by the
            API gateway with patient registry, digital twin workflows, AI copilot, and chaos
            engineering panels for resilience experimentation.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Individual (Independent Study, IUI)</li>
          </ul>
          <Text as="b" color="blue.500">
            Key Features
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Multi-service architecture (Auth, Patient, Analytics, AI Chatbot)</li>
            <li>Explainable risk assessment & digital twin workflows</li>
            <li>Intervention what-if analysis with AI copilot</li>
            <li>Chaos Center for resilience & guardrail experimentation</li>
            <li>REST, gRPC, and Kafka event-driven integration</li>
            <li>Docker Compose deployment with observability hooks</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex paddingLeft="0px">
            <Text>
              Java 21 | Spring Boot | PostgreSQL | Kafka | ZooKeeper | gRPC | Docker Compose | Google Gemini
            </Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a href="https://github.com/zeeshani26/Patients_AI_Operations_Portal" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
                alt="GitHub repository link for Patient AI Operations Portal project"
              />
            </a>
            <a href="http://159.65.104.236:4004/" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
                alt="Live demo link for Patient AI Operations Portal project"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="25px"
          flexDirection="column"
          h="100%"
          backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
          backdropFilter="blur(10px)"
          border={theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)"}
          boxShadow={theme 
            ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)"}
          _hover={{ 
            boxShadow: theme 
              ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
              : "0 12px 40px rgba(38, 161, 218, 0.3)",
            transform: "translateY(-8px) scale(1.02)",
            borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
        >
          <Badge
            position="absolute"
            top="16px"
            right="16px"
            colorScheme="green"
            fontSize="11px"
            px="10px"
            py="4px"
            borderRadius="full"
            zIndex="1"
          >
            Featured
          </Badge>
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            ThreatGuard AI
          </Text>
          <LazyImage
            borderRadius="20px"
            src="https://i.ibb.co/CgZdXmg/Threat-Guard-AI.png"
            w="100%"
            mt="10px"
            alt="ThreatGuard AI - Phishing Detection Application screenshot"
          />
          <Text fontSize="14px" mt="10px">
            A modern web application that uses Google's Gemini AI to detect phishing emails and malicious URLs.
            Upload suspicious files (PDF, TXT, DOCX, EML) or analyze URLs to get real-time threat intelligence
            with risk scores, confidence levels, and actionable recommendations.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Individual</li>
          </ul>
          <Text as="b" color="blue.500">
            Key Features
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Multi-format file analysis (PDF, TXT, DOCX, EML)</li>
            <li>URL threat detection</li>
            <li>AI-powered analysis with Google Gemini AI</li>
            <li>Detailed risk reports with recommendations</li>
            <li>Modern glassmorphism UI</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex paddingLeft="0px">
            <Text>
              Python | Flask | Google Gemini AI | HTML | CSS | JavaScript | Render
            </Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a href="https://github.com/zeeshani26/Phishing-Detection-App" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
                alt="GitHub repository link for ThreatGuard AI project"
              />
            </a>
            <a href="https://phishing-detection-app-y2vz.onrender.com/" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
                alt="Live demo link for ThreatGuard AI project"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="25px"
          flexDirection="column"
          h="100%"
          backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
          backdropFilter="blur(10px)"
          border={theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)"}
          boxShadow={theme 
            ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)"}
          _hover={{ 
            boxShadow: theme 
              ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
              : "0 12px 40px rgba(38, 161, 218, 0.3)",
            transform: "translateY(-8px) scale(1.02)",
            borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            The Game Store
          </Text>
          <LazyImage
            borderRadius="20px"
            src="https://i.ibb.co/HTkq4fbm/Screenshot-2026-06-08-133650.png"
            w="100%"
            mt="10px"
            alt="The Game Store project screenshot"
          />
          <Text fontSize="14px" mt="10px">
            A full-stack e-commerce platform to buy latest game titles online. Built with React, Bootstrap, 
            Redux, Node.js, Express, and MongoDB. Features cross-platform compatibility, secure authentication, 
            and comprehensive admin functionality.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Individual</li>
          </ul>
          <Text as="b" color="blue.500">
            Key Features
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Cross-platform compatibility</li>
            <li>Fully responsive design</li>
            <li>User authentication & authorization</li>
            <li>Product pagination & search</li>
            <li>PayPal payment integration</li>
            <li>Admin dashboard with product & order management</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex paddingLeft="0px">
            <Text>
              React | Bootstrap | Redux | Node.js | Express | MongoDB | PayPal API
            </Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a href="https://github.com/zeeshani26/game-store" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
                alt="GitHub repository link for The Game Store project"
              />
            </a>
            <a href="https://the-game-store.vercel.app/" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
                alt="Live demo link for The Game Store project"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="25px"
          flexDirection="column"
          h="100%"
          backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
          backdropFilter="blur(10px)"
          border={theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)"}
          boxShadow={theme 
            ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)"}
          _hover={{ 
            boxShadow: theme 
              ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
              : "0 12px 40px rgba(38, 161, 218, 0.3)",
            transform: "translateY(-8px) scale(1.02)",
            borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Stylelife
          </Text>
          <LazyImage
            borderRadius="20px"
            src="https://i.ibb.co/0fG6kyP/nearbuy.jpg"
            w="100%"
            mt="10px"
            alt="Stylelife project screenshot"
          />
          <Text fontSize="14px" mt="10px">
            Stylelife offers its merchants a strong branding and visibility-led
            platform that enables customers, in and around their establishments,
            to easily discover their businesses.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Collaborative</li>
          </ul>
          <Text as="b" color="blue.500">
            My responsibility
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>All Products page</li>
            <li>Single Product Page</li>
            <li>Add to Cart functionality</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex paddingLeft="0px">
            <Text>
              React | Javascript | Chakra UI | CSS | Nodejs | Express | MongoDB
            </Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a href="https://github.com/sdekrishan/Style-Life" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
                alt="GitHub repository link for Stylelife project"
              />
            </a>
            <a href="https://stylelife-sdekrishan.vercel.app/" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
                alt="Live demo link for Stylelife project"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="25px"
          flexDirection="column"
          h="100%"
          backgroundColor={theme ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.05)"}
          backdropFilter="blur(10px)"
          border={theme ? "1px solid rgba(200, 200, 200, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)"}
          boxShadow={theme 
            ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
            : "0 4px 20px rgba(0, 0, 0, 0.2)"}
          _hover={{ 
            boxShadow: theme 
              ? "0 12px 40px rgba(100, 149, 237, 0.2)" 
              : "0 12px 40px rgba(38, 161, 218, 0.3)",
            transform: "translateY(-8px) scale(1.02)",
            borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Nyresa
          </Text>
          <LazyImage
            borderRadius="20px"
            src="https://i.ibb.co/hxMkYyS9/Nyresa-Project.png"
            w="100%"
            mt="10px"
            alt="Nyresa project screenshot"
          />
          <Text fontSize="14px" mt="10px">
            Nyresa is a clothing and fashion based e-commerce website. It has
            all the required e-commerce functionality like authentcation product
            display, sorting, filtering etc.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Collaborative</li>
          </ul>
          <Text as="b" color="blue.500">
            My responsibility
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Home page</li>
            <li>Navbar</li>
            <li>Footer</li>
            <li>Responsiveness</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex>
            <Text>React | Javascript | Chakra UI | CSS</Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a href="https://github.com/himanshudestiny/Nyresa" target="_blank" rel="noreferrer">
              <LazyImage
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
                alt="GitHub repository link for Nyresa project"
              />
            </a>
            <a
              href="https://numerous-governor-3295.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LazyImage
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
                alt="Live demo link for Nyresa project"
              />
            </a>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
