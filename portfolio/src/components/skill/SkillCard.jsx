import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import LazyImage from "../common/LazyImage";
import Tilt from "react-parallax-tilt";
import "./skill.css";

/**
 * Reusable SkillCard component
 * @param {string} imageSrc - URL of the skill icon
 * @param {string} name - Name of the skill
 * @param {boolean} theme - Theme state (true for light, false for dark)
 */
export default function SkillCard({ imageSrc, name, theme }) {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.05}
      borderRadius="10px"
    >
      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={{ base: "15px", md: "20px" }}
        position="relative"
        className="skill-card-futuristic"
        style={
          theme
            ? {
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 200, 200, 0.4)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.06)",
              }
            : {
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(38, 161, 218, 0.1)",
                color: "rgb(247, 237, 181)",
              }
        }
        borderRadius="15px"
        _hover={{
          transform: "translateY(-5px) scale(1.05)",
          boxShadow: theme 
            ? "0 8px 25px rgba(100, 149, 237, 0.2), 0 0 30px rgba(100, 149, 237, 0.2)" 
            : "0 8px 25px rgba(38, 161, 218, 0.3), 0 0 40px rgba(38, 161, 218, 0.4)",
          borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "rgba(255, 255, 255, 0.5)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: theme 
            ? "linear-gradient(90deg, transparent, rgba(100, 149, 237, 0.2), transparent)"
            : "linear-gradient(90deg, transparent, rgba(38, 161, 218, 0.3), transparent)",
          transition: "left 0.5s ease",
          borderRadius: "15px"
        }}
        _hoverBefore={{
          left: "100%"
        }}
      >
        <LazyImage
          src={imageSrc}
          w={{ base: "80px", md: "120px", lg: "144px" }}
          h={{ base: "80px", md: "120px", lg: "144px" }}
          objectFit="contain"
          alt={`${name} logo`}
        />
        <Text
          fontFamily="poppins"
          fontSize={{ base: "16px", md: "22px", lg: "25px" }}
          color={theme ? "rgb(60, 60, 60)" : "rgb(255, 243, 70)"}
          as="b"
          fontWeight="600"
        >
          {name}
        </Text>
      </Flex>
    </Tilt>
  );
}


