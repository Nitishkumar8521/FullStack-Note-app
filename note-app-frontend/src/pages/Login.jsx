import { useState, useRef, useEffect } from "react"; // Importing hooks from React for state management, references, and side effects
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import Error from "../Status/Error"; // Importing Error component to display in case of failure
import Loading from "../Status/Loading"; // Importing Loading component to show a loading state
import loginImage from "../Images/login.jpg"; // Importing the login background image
import {
  useToast, // Chakra UI hook for displaying notifications
  Input, 
  InputRightElement, 
  InputGroup, 
  Button, 
  InputLeftElement, 
  VStack, 
  Heading, 
  Box,
} from "@chakra-ui/react"; // Importing Chakra UI components for layout and styling

import { EmailIcon } from "@chakra-ui/icons"; // Importing EmailIcon for the input field

function Login() {
  // State variables for email, password, loading state, and visibility of password
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  
  const toast = useToast(); // Toast function for showing success/error messages
  const myRef = useRef(null); // useRef for focusing the input field

  function handleFocus() {
    myRef.current.focus(); // Focuses the email input field when the component mounts
  }

  useEffect(() => {
    handleFocus(); // useEffect to trigger handleFocus on component mount
  }, []);

  const navigate = useNavigate(); // useNavigate for programmatic navigation

  const handleClick = () => setShow(!show); // Toggles the visibility of the password (show/hide)

  // Function to display a toast notification based on the status
  function handleToast({ status }) {
    toast({
      title: status === "success" ? "Login Successfully" : "Something Went Wrong", // Shows different messages for success or error
      description:
        status === "success"
          ? "Hi! Welcome Back." // Success message
          : "Please try After some time", // Error message
      status, // Status: success or error
      duration: 3000, // Duration of the toast message
      isClosable: true, // Allows the user to close the toast
      position: "top", // Position of the toast message
    });
  }

  // Function to handle login request
  const handleLogin = async () => {
    const payload = {
      email, // Email entered by the user
      password, // Password entered by the user
    };

    try {
      setLoading(true); // Setting loading to true to show loading state
      const response = await fetch(
        "https://devnotes-zlbr.onrender.com/user/login", // Sending login request to the backend API
        {
          method: "POST", // POST request
          headers: {
            "Content-Type": "application/json", // JSON content type
          },
          body: JSON.stringify(payload), // Payload containing email and password
        }
      );

      const data = await response.json(); // Parsing the response to JSON
      setLoading(false); // Stopping the loading state after the response is received
      if (data.token) { // If a token is received in the response
        localStorage.setItem("token", data.token); // Storing the token in localStorage
        handleToast({ status: "success" }); // Showing a success toast message
        navigate("/notes"); // Navigating to the notes page upon successful login
      } else {
        handleToast({ status: "error" }); // Showing an error toast if login fails
      }
    } catch (error) {
      console.log(error); // Logging any errors in the console
      return <Error />; // Returning the Error component in case of a failure
    }
  };

  // Show the Loading component if the loading state is true
  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      backgroundSize="cover"
      py={12}
      bgImage={`url(${loginImage})`} // Setting the background image for the login page
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={2}
      height="100vh"
    >
      <VStack
        boxShadow="md"
        p="6"
        rounded="md"
        bg="#F0FFF4"
        w={["80%", "60%", "40%"]}
        margin="0 auto"
      >
        <Heading as="h4" size="md" bg="blue.100" p="1" borderRadius="2px">
          Login Here
        </Heading>
        
        {/* Email input field */}
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" /> {/* Email icon inside input */}
          </InputLeftElement>
          <Input
            placeholder="Enter Email" // Placeholder text for the email input
            value={email} // Binding the email state to the input value
            onChange={(e) => setEmail(e.target.value)} // Updates the email state on input change
            color="black" // Text color
            ref={myRef} // Ref to focus the input field
          />
        </InputGroup>

        {/* Password input field */}
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"} // Toggles between text and password type
            placeholder="Enter Password" // Placeholder text for the password input
            value={password} // Binding the password state to the input value
            onChange={(e) => setPassword(e.target.value)} // Updates the password state on input change
            color="black" // Text color
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"} {/* Button text toggles between "Hide" and "Show" */}
            </Button>
          </InputRightElement>
        </InputGroup>

        {/* Submit button */}
        <Button
          onClick={() => {
            handleLogin(), handleToast(); // Calls handleLogin and handleToast on click
          }}
        >
          Submit {/* Button text */}
        </Button>
      </VStack>
    </Box>
  );
}

export default Login; // Exporting the Login component for use in other parts of the app
