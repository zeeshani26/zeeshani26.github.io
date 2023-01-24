import React from "react";
import { Box, Text, Grid, Image, Flex } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";

export default function Skill() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Box
      id="skill"
      paddingTop="70px"
      style={
        theme
          ? { backgroundColor: "rgb(229, 242, 219)" }
          : { backgroundImage: "linear-gradient(#01070E,#031d38)" }
      }
      h="fit-content"
    >
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "40px", md: "55px" }}
        style={theme ? { color: "#26A1DA" } : { color: "#26A1DA" }}
        as="b"
      >
        Skills
      </Text>
      <br />
      <br />
      <br />
      <Box marginBottom="50px">
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          w="80%"
          margin="auto"
          gap={{ base: "20px", md: "50px", lg: "70px" }}
        >
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
              justifyContent="space-between"
              h="100%"
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/HxzTFPz/icons8-html-5-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                HTML
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/qJyXfRR/icons8-css3-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                CSS
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/mXc7Q7m/icons8-javascript-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                JAVASCRIPT
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/ykmjx6w/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                REACT
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/YZTh61R/icons8-redux-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                REDUX
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/f1TNyHx/icons8-typescript-144-1.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                TYPESCRIPT
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/DDxhgKx/icons8-chakra-ui-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                CHAKRA UI
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/6P603Qj/icons8-node-js-144.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                NODE JS
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/SXY3rsR/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                MONGO DB
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://i.ibb.co/bQBX4sw/icons8-express-js-150.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                EXPRESS
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="Https://i.ibb.co/CM99Qxv/icons8-postman-is-the-only-complete-api-development-environment-96.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                POSTMAN
              </Text>
            </Flex>
          </Tilt>
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
              style={
                theme
                  ? {
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }
                  : {
                      background: "rgba(200,200,200,0.1)",
                      backdropFilter: "blur(5px)",
                      color: "rgb(247, 237, 181)",
                    }
              }
              borderRadius="10px"
            >
              <Image
                src="https://pngimg.com/uploads/github/github_PNG40.png"
                w="144px"
                alt=""
              />
              <Text
                fontFamily="poppins"
                fontSize="25px"
                color="rgb(255, 243, 70)"
                as="b"
              >
                Github
              </Text>
            </Flex>
          </Tilt>
        </Grid>
      </Box>
      <Flex
        flexDirection="column"
        w="80%"
        alignItems="center"
        margin="auto"
        padding="10px"
        borderRadius="10px"
        style={
          theme
            ? { backgroundColor: "rgb(229, 242, 219)", border: "3px solid" }
            : {
                backgroundColor: "rgba(255, 255, 255, 0.300)",
                border: "3px solid white",
              }
        }
      >
        <GitHubCalendar username="zeeshani26" />
        <Image
          w={{ base: "100%", md: "50%" }}
          src="https://streak-stats.demolab.com/?user=zeeshani26&theme=chartreuse-dark"
          alt=""
        />
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
        >
          <p>
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=zeeshani26&show_icons=true&locale=en"
              alt="zeeshan-stats"
            />
          </p>
          <Image
            marginTop="20px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=zeeshani26&layout=demo"
            alt=""
          />
        </Flex>
      </Flex>
    </Box>
  );
}
