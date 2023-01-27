import React from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Spacer,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Contacts() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      id="contacts"
      style={
        theme
          ? { backgroundColor: "rgb(229, 242, 219)" }
          : { backgroundImage: "linear-gradient(#01070E,#031d38)" }
      }
      h="fit-content"
      pb="100px"
    >
      <br />
      <br />
      <br />
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "40px", md: "55px" }}
        style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
        as="b"
      >
        Contact Me
      </Text>
      <Flex w="80%" margin="auto" mt="50px" justifyContent="space-between">
        <Image
          w="50%"
          display={{ base: "none", md: "none", lg: "block" }}
          src="https://i.ibb.co/Fb6X2xq/contact-me.gif"
          borderRadius={"50px"}
        />
        <Flex
          marginBottom="50px"
          flexDirection="column"
          gap="20px"
          fontFamily="Poppins"
          w={{ base: "100%", md: "100%", lg: "40%" }}
        >
          <Flex
            alignItems="center"
            gap="20px"
            style={theme ? { color: "black" } : { color: "white" }}
            fontSize={{ base: "16px", md: "" }}
          >
            <BsFillTelephoneFill color="#26A1DA" />
            +91 9205800291
          </Flex>
          <Flex
            alignItems="center"
            gap="20px"
            style={theme ? { color: "black" } : { color: "white" }}
            fontSize={{ base: "16px", md: "" }}
          >
            <SiGmail color="#26A1DA" />
            zeeshan02679@gmail.com
          </Flex>
          <Flex
            alignItems="center"
            gap="20px"
            style={theme ? { color: "black" } : { color: "white" }}
            fontSize={{ base: "16px", md: "" }}
          >
            <AiFillGithub color="#26A1DA" />
            https://github.com/zeeshani26
          </Flex>
          <Flex justifyContent="space-evenly">
            <Button
              backgroundColor="rgb(107,184,255)"
              fontWeight="300"
              boxShadow="lg"
              _hover={{ backgroundColor: "white", color: "#26A1DA" }}
              padding="0px 20px"
              color="white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/zeeshanilahi/",
                  "_blank"
                )
              }
            >
              <BsLinkedin />
              LinkedIn
            </Button>
            <Button
              backgroundColor="rgb(36,45,73)"
              fontWeight="300"
              boxShadow="lg"
              _hover={{ backgroundColor: "white", color: "#26A1DA" }}
              padding="0px 20px"
              color="white"
              onClick={() =>
                window.open("https://github.com/zeeshani26", "_blank")
              }
            >
              <FaGithub />
              Github
            </Button>
            <Button
              backgroundColor="red"
              fontWeight="300"
              boxShadow="lg"
              _hover={{ backgroundColor: "white", color: "#26A1DA" }}
              padding="0px 20px"
              color="white"
            >
              <AiOutlineMail />
              Gmail
            </Button>
          </Flex>
          <Flex
            flexDirection="column"
            gap="20px"
            style={theme ? { color: "" } : { color: "white" }}
          >
            <Input outline="1px solid #26A1DA" placeholder="Name" />
            <Input outline="1px solid #26A1DA" placeholder="Email" />
            <Textarea outline="1px solid #26A1DA" placeholder="Messages" />
          </Flex>
          <Button
            backgroundColor="#26A1DA"
            fontWeight="300"
            boxShadow="lg"
            _hover={{ backgroundColor: "white", color: "#26A1DA" }}
            padding="0px 20px"
            color="white"
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
