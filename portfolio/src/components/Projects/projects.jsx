import React from "react";
import { Box, Flex, Grid, Image, Spacer, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";

export default function Projects() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      id="projects"
      style={
        theme
          ? { backgroundColor: "rgb(229, 242, 219)" }
          : { backgroundImage: "linear-gradient(#01070E,#031d38)" }
      }
      h="fit-content"
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
        Projects
      </Text>
      <br />
      <br />
      <br />
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
        style={theme ? { color: "rgb(78, 0, 0)" } : { color: "aqua" }}
      >
        <Flex
          textAlign="left"
          padding="20px"
          flexDirection="column"
          h="100%"
          boxShadow="outline"
          _hover={{ boxShadow: "dark-lg" }}
          borderRadius="20px"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Stylelife
          </Text>
          <Image
            borderRadius="20px"
            src="https://i.ibb.co/0fG6kyP/nearbuy.jpg"
            w="100%"
            mt="10px"
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
            <a href="https://github.com/sdekrishan/Style-Life" target="_blank">
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
              />
            </a>
            <a href="https://stylelife-sdekrishan.vercel.app/" target="_blank">
              <Image
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="20px"
          flexDirection="column"
          h="100%"
          boxShadow="outline"
          _hover={{ boxShadow: "dark-lg" }}
          borderRadius="20px"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Nyresa
          </Text>
          <Image
            borderRadius="20px"
            src="https://camo.githubusercontent.com/933bc5f49e109cda220b27dfd57df94356bf53cd89e25694240e71c801f8c87c/68747470733a2f2f692e6962622e636f2f52364a717950392f4e79726573612e706e67"
            w="100%"
            mt="10px"
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
            <a href="https://github.com/himanshudestiny/Nyresa" target="_blank">
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
              />
            </a>
            <a
              href="https://numerous-governor-3295.netlify.app/"
              target="_blank"
            >
              <Image
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="20px"
          flexDirection="column"
          h="100%"
          boxShadow="outline"
          _hover={{ boxShadow: "dark-lg" }}
          borderRadius="20px"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            ProperHealth
          </Text>
          <Image
            borderRadius="20px"
            src="https://i.ibb.co/zn6jTXN/Proper-Health-5f8733778ec5beaa8de6.png"
            w="100%"
            mt="10px"
          />
          <Text fontSize="14px" mt="10px">
            ProperHealth is a Fitness Based App Inspired by Cronometer App. It
            has Login/Signup Functionality along with the functionality of
            adding Blog Articles once logged in.
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Individual</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex>
            <Text>React | Javascript | Chakra UI | CSS</Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a
              href="https://github.com/zeeshani26/unnatural-throat-9914/tree/main/properhealth"
              target="_blank"
            >
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
              />
            </a>
            <a href="https://properhealth.netlify.app/" target="_blank">
              <Image
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="20px"
          flexDirection="column"
          h="100%"
          boxShadow="outline"
          _hover={{ boxShadow: "dark-lg" }}
          borderRadius="20px"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            HubSpot
          </Text>
          <Image
            borderRadius="20px"
            src="https://i.ibb.co/BqgWLBX/Hub-e492961bb1e26d1c5f7a.png"
            w="100%"
            mt="10px"
          />
          <Text fontSize="14px" mt="10px">
            HubSpot is a CRM platform that connects everything scaling companies
            need to deliver a best-in-class customer experience into one place.
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
            <li>Pricing and Tootls Page</li>
            <li>FAQ section</li>
            <li>Footer</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex>
            <Text>HTML | CSS | Javascript</Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a
              href="https://github.com/Mohitnikum/adhesive-cactus-7535"
              target="_blank"
            >
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
              />
            </a>
            <a href="https://hupspot.netlify.app/" target="_blank">
              <Image
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Flex>
        <Flex
          textAlign="left"
          padding="20px"
          flexDirection="column"
          h="100%"
          boxShadow="outline"
          _hover={{ boxShadow: "dark-lg" }}
          borderRadius="20px"
        >
          <Text
            textAlign="center"
            as="b"
            fontSize="20px"
            style={theme ? { color: "blue" } : { color: "white" }}
          >
            Farfetch
          </Text>
          <Image
            borderRadius="20px"
            src="https://i.ibb.co/rcXnfJY/Farfetch.png"
            w="100%"
            mt="10px"
          />
          <Text fontSize="14px" mt="10px">
            Farfetch is a Fashion and Clothing Based Website. It has Cart
            Functionality along with the functionality of displaying the
            products along with sort and filter
          </Text>
          <Text as="b" color="blue.500">
            Project type
          </Text>
          <ul style={{ paddingLeft: "30px", fontSize: "14px" }}>
            <li>Individual</li>
          </ul>
          <Text as="b" color="blue.500">
            Techstacks
          </Text>
          <Flex>
            <Text>HTML | CSS | Javascript</Text>
          </Flex>
          <Flex h="100px" alignItems="center" gap="20px">
            <a
              href="https://github.com/zeeshani26/lying-flesh-4692"
              target="_blank"
            >
              <Image
                src="https://i.ibb.co/Zg4Ywks/icons8-github.gif"
                w="35px"
                borderRadius="50%"
              />
            </a>
            <a
              href="https://guileless-cocada-b7920d.netlify.app"
              target="_blank"
            >
              <Image
                src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png"
                backgroundColor="white"
                padding={0.5}
                w="35px"
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
