import React, { useState, useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, EMAIL, PHONE, LOCATION } from "../../constants/urls";
import { MdLocationOn } from "react-icons/md";
import { getThemeBackground } from "../../utils/themeStyles";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const { theme } = React.useContext(ThemeContext);
  const formRef = useRef();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Note: You'll need to set up EmailJS and add your service ID, template ID, and public key
      // Get these from https://www.emailjs.com/
      // For now, this is a placeholder that will need your actual EmailJS credentials
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly via email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contacts"
      style={getThemeBackground(theme)}
      h="fit-content"
      pb="100px"
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
        Get In Touch
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
      <Flex w="80%" margin="auto" mt="50px" justifyContent="space-between">
        <Image
          w="50%"
          display={{ base: "none", md: "none", lg: "block" }}
          src="https://i.ibb.co/Fb6X2xq/contact-me.gif"
          borderRadius={"50px"}
          alt="Contact me illustration"
        />
        <Flex
          marginBottom="50px"
          flexDirection="column"
          gap="20px"
          fontFamily="Poppins"
          w={{ base: "100%", md: "100%", lg: "40%" }}
        >
          <Box
            padding="20px"
            backgroundColor={theme ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.1)"}
            borderRadius="15px"
            border={theme ? "2px solid rgba(200, 200, 200, 0.5)" : "2px solid rgba(255, 255, 255, 0.2)"}
            backdropFilter="blur(10px)"
            mb="20px"
          >
            <Flex
              flexDirection="column"
              gap="15px"
            >
              <Flex
                alignItems="center"
                gap="15px"
                style={theme ? { color: "black" } : { color: "white" }}
                fontSize={{ base: "16px", md: "18px" }}
                _hover={{ transform: "translateX(5px)", transition: "all 0.3s ease" }}
                cursor="pointer"
              >
                <BsFillTelephoneFill color="#26A1DA" size="20px" />
                <a href={`tel:${PHONE}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {PHONE}
                </a>
              </Flex>
              <Flex
                alignItems="center"
                gap="15px"
                style={theme ? { color: "black" } : { color: "white" }}
                fontSize={{ base: "16px", md: "18px" }}
                _hover={{ transform: "translateX(5px)", transition: "all 0.3s ease" }}
                cursor="pointer"
              >
                <SiGmail color="#26A1DA" size="20px" />
                <a href={`mailto:${EMAIL}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {EMAIL}
                </a>
              </Flex>
              <Flex
                alignItems="center"
                gap="15px"
                style={theme ? { color: "black" } : { color: "white" }}
                fontSize={{ base: "16px", md: "18px" }}
                _hover={{ transform: "translateX(5px)", transition: "all 0.3s ease" }}
                cursor="pointer"
              >
                <MdLocationOn color="#26A1DA" size="20px" />
                {LOCATION}
              </Flex>
              <Flex
                alignItems="center"
                gap="15px"
                style={theme ? { color: "black" } : { color: "white" }}
                fontSize={{ base: "16px", md: "18px" }}
                _hover={{ transform: "translateX(5px)", transition: "all 0.3s ease" }}
                cursor="pointer"
              >
                <AiFillGithub color="#26A1DA" size="20px" />
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {GITHUB_URL.replace("https://", "")}
                </a>
              </Flex>
            </Flex>
          </Box>
          <Flex 
            justifyContent="space-evenly" 
            gap="15px"
            flexWrap="wrap"
          >
            <Button
              backgroundColor="rgb(107,184,255)"
              fontWeight="600"
              boxShadow="lg"
              _hover={{ 
                backgroundColor: "white", 
                color: "#26A1DA",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(107, 184, 255, 0.3)"
              }}
              padding="15px 25px"
              color="white"
              borderRadius="8px"
              transition="all 0.3s ease"
              onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
            >
              <BsLinkedin style={{ marginRight: "8px" }} />
              LinkedIn
            </Button>
            <Button
              backgroundColor="rgb(36,45,73)"
              fontWeight="600"
              boxShadow="lg"
              _hover={{ 
                backgroundColor: "white", 
                color: "#26A1DA",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(36, 45, 73, 0.3)"
              }}
              padding="15px 25px"
              color="white"
              borderRadius="8px"
              transition="all 0.3s ease"
              onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
            >
              <FaGithub style={{ marginRight: "8px" }} />
              GitHub
            </Button>
            <Button
              backgroundColor="#EA4335"
              fontWeight="600"
              boxShadow="lg"
              _hover={{ 
                backgroundColor: "white", 
                color: "#EA4335",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(234, 67, 53, 0.3)"
              }}
              padding="15px 25px"
              color="white"
              borderRadius="8px"
              transition="all 0.3s ease"
              onClick={() => window.open(`mailto:${EMAIL}`, "_blank", "noopener,noreferrer")}
            >
              <AiOutlineMail style={{ marginRight: "8px" }} />
              Email
            </Button>
          </Flex>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Flex
              flexDirection="column"
              gap="20px"
              style={theme ? { color: "" } : { color: "white" }}
            >
              <FormControl isRequired>
                <FormLabel style={theme ? { color: "black" } : { color: "white" }}>
                  Name
                </FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  border="2px solid"
                  borderColor={theme ? "rgba(0, 99, 99, 0.3)" : "rgba(38, 161, 218, 0.3)"}
                  placeholder="Enter your name"
                  backgroundColor={theme ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.08)"}
                  backdropFilter="blur(10px)"
                  color={theme ? "black" : "white"}
                  borderRadius="10px"
                  _hover={{
                    borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "#26A1DA",
                    transition: "all 0.3s ease"
                  }}
                  _focus={{ 
                    borderColor: "#26A1DA",
                    boxShadow: "0 0 0 3px rgba(38, 161, 218, 0.2)",
                    backgroundColor: theme ? "white" : "rgba(255, 255, 255, 0.12)"
                  }}
                  _placeholder={{ color: theme ? "gray.400" : "gray.400" }}
                  transition="all 0.3s ease"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel style={theme ? { color: "black" } : { color: "white" }}>
                  Email
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  border="2px solid"
                  borderColor={theme ? "rgba(100, 149, 237, 0.5)" : "#26A1DA"}
                  placeholder="Enter your email"
                  backgroundColor={theme ? "white" : "rgba(255, 255, 255, 0.1)"}
                  color={theme ? "black" : "white"}
                  _focus={{ 
                    borderColor: "#26A1DA",
                    boxShadow: "0 0 0 3px rgba(38, 161, 218, 0.2)"
                  }}
                  _placeholder={{ color: theme ? "gray.400" : "gray.400" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel style={theme ? { color: "black" } : { color: "white" }}>
                  Message
                </FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  border="2px solid"
                  borderColor={theme ? "rgba(0, 99, 99, 0.3)" : "rgba(38, 161, 218, 0.3)"}
                  placeholder="Enter your message"
                  rows={5}
                  backgroundColor={theme ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.08)"}
                  backdropFilter="blur(10px)"
                  color={theme ? "black" : "white"}
                  borderRadius="10px"
                  _hover={{
                    borderColor: theme ? "rgba(100, 149, 237, 0.5)" : "#26A1DA",
                    transition: "all 0.3s ease"
                  }}
                  _focus={{ 
                    borderColor: "#26A1DA",
                    boxShadow: "0 0 0 3px rgba(38, 161, 218, 0.2)",
                    backgroundColor: theme ? "white" : "rgba(255, 255, 255, 0.12)"
                  }}
                  _placeholder={{ color: theme ? "gray.400" : "gray.400" }}
                  transition="all 0.3s ease"
                />
              </FormControl>
            </Flex>
            <Button
              type="submit"
              backgroundColor="#26A1DA"
              fontWeight="600"
              boxShadow="lg"
              _hover={{ 
                backgroundColor: "#1e8fc7",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(38, 161, 218, 0.4)"
              }}
              padding="20px"
              color="white"
              isLoading={isSubmitting}
              loadingText="Sending..."
              mt="10px"
              width="100%"
              fontSize="18px"
              borderRadius="8px"
              transition="all 0.3s ease"
            >
              Send Message
            </Button>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
}
