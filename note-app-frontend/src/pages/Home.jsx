import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import { Box, Button, ButtonGroup, Stack, Heading } from "@chakra-ui/react"; // Importing Chakra UI components for layout and styling
import HomeImage from "../Images/home.webp"; // Importing the image to be used as the background on the Home page

function Home() {
  const navigate = useNavigate(); // Using useNavigate to programmatically navigate to other routes

  // Function to handle navigation to the Register page
  const handleRegister = () => {
    navigate("/register");
  };

  // Function to handle navigation to the Login page
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Stack direction="column" margin="auto"> {/* Stack for layout, with column direction and centered horizontally */}
        <Heading>Your Digital Notebook</Heading> {/* Heading for the page */}
        <Box
          display="flex" // Setting display to flex for easy alignment
          alignItems="center" // Vertically centering the content
          justifyContent="center" // Horizontally centering the content
          width="100vw" // Setting the width to 100% of the viewport
          backgroundSize="cover" // Ensuring the background image covers the box
          py={12} // Padding along the y-axis (top and bottom)
          bgImage={`url(${HomeImage})`} // Setting the imported image as the background
          bgPosition="center" // Positioning the background image in the center
          bgRepeat="no-repeat" // Preventing the background image from repeating
          mb={2} // Adding margin at the bottom
          height="100vh" // Setting the height to 100% of the viewport height
        >
          <ButtonGroup gap="4"> {/* Grouping the buttons with a gap of 4 units between them */}
            <Button
              colorScheme="blackAlpha" // Applying Chakra UI's blackAlpha color scheme to the button
              onClick={handleRegister} // Calling handleRegister when the button is clicked
              w="80px" // Setting the button width to 80px
            >
              Register {/* Button text */}
            </Button>
            <Button
              colorScheme="blackAlpha" // Applying Chakra UI's blackAlpha color scheme to the button
              onClick={handleLogin} // Calling handleLogin when the button is clicked
              w="80px" // Setting the button width to 80px
            >
              Login {/* Button text */}
            </Button>
          </ButtonGroup>
        </Box>
      </Stack>
    </>
  );
}

export default Home; // Exporting the Home component for use in other parts of the app
