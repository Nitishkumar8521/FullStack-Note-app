import { useState, useRef, useEffect } from "react"; // Importing hooks from React for state management, references, and side effects
import { useNavigate } from "react-router-dom"; // useNavigate for navigating between pages
import { Box, useToast } from "@chakra-ui/react"; // Importing Chakra UI components for styling and Toast notifications
import Loading from "../Status/Loading"; // Importing the Loading component for when the form is submitting
import registrationImage from "../Images/registration.jpg"; // Importing the background image for the registration page

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputRightElement,
  InputGroup,
  Button,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Heading
} from "@chakra-ui/react"; // Importing Chakra UI form elements and components for layout

function Register() {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes
  const [name, setName] = useState(""); // State for user's name input
  const [email, setEmail] = useState(""); // State for user's email input
  const [password, setPassword] = useState(""); // State for user's password input
  const [gender, setGender] = useState(""); // State for user's gender input
  const [age, setAge] = useState(""); // State for user's age input
  const [loading, setLoading] = useState(false); // State to manage loading status during API call
  const toast = useToast(); // Chakra UI hook for displaying toast notifications
  const [show, setShow] = useState(false); // State to manage password visibility
  const myRef = useRef(null); // useRef to handle focus on the first input field

  // Function to focus the name input field when the component is mounted
  function handleFocus() {
    myRef.current.focus();
  }

  // useEffect to handle focus on the name input when the component mounts
  useEffect(() => {
    handleFocus(); // Automatically focus on name input field after rendering
  }, []);

  // Toggle function to show/hide the password field
  const handleClick = () => setShow(!show);

  // Function to display a success toast when the account is created
  function handleToast() {
    toast({
      title: "Account created.", // Title for the success toast
      description: "We've created your account for you.", // Description for the success toast
      status: "success", // Status of the toast (success)
      duration: 5000, // Duration of the toast in milliseconds (5 seconds)
      isClosable: true, // Allow the user to close the toast
      position: "top", // Position of the toast at the top of the screen
    });
  }

  // Function to handle form submission and register a new user
  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      password,
      gender,
      age,
    }; // Payload object to send to the API

    try {
      setLoading(true); // Set loading to true when the submission starts
      await fetch("https://devnotes-zlbr.onrender.com/user/register", {
        mode: "cors", // Allow cross-origin resource sharing
        method: "POST", // HTTP method is POST to send data to the server
        headers: {
          "Content-Type": "application/json", // Setting content type to JSON
        },
        body: JSON.stringify(payload), // Converting the payload to JSON string before sending
      });
      setLoading(false); // Set loading to false after the request completes
      handleToast(); // Show success toast notification
      navigate("/login"); // Navigate the user to the login page after registration
    } catch (error) {
      alert(`An Error occurred ${error}`); // Show an alert if there's an error during registration
    }
  };

  // If the form is submitting, display the Loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      width="100vw"
      backgroundSize="cover"
      py={12}
      bgImage={`url(${registrationImage})`} // Setting the background image for the registration page
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={2}
      height="100vh"
    >
      <Heading>Hi! Register Here</Heading> {/* Heading for the registration form */}
      
      {/* VStack to vertically stack the form controls */}
      <VStack
        boxShadow="md"
        bg="#D6BCFA" // Setting background color
        p="5"
        w={["80%", "60%","40%"]} // Responsive width for different screen sizes
        margin="auto"
        borderRadius={10} // Rounded corners for the form
      >
        {/* Form control for the name input */}
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={name} // Binds the input value to the name state
            onChange={(e) => setName(e.target.value)} // Updates the name state on change
            ref={myRef} // Reference to focus on this input when component mounts
          />
        </FormControl>

        {/* Form control for the email input */}
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            value={email} // Binds the input value to the email state
            onChange={(e) => setEmail(e.target.value)} // Updates the email state on change
          />
        </FormControl>

        {/* Form control for the password input */}
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"} // Conditionally show or hide the password
              placeholder="Enter password"
              value={password} // Binds the input value to the password state
              onChange={(e) => setPassword(e.target.value)} // Updates the password state on change
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"} {/* Button to toggle password visibility */}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Form control for the gender input */}
        <FormControl isRequired>
          <FormLabel>Gender</FormLabel>
          <Input
            placeholder="Enter Gender"
            value={gender} // Binds the input value to the gender state
            onChange={(e) => setGender(e.target.value)} // Updates the gender state on change
          />
        </FormControl>

        {/* Form control for the age input */}
        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <NumberInput max={50} min={10}> {/* Number input with a range between 10 and 50 */}
            <NumberInputField
              value={age} // Binds the input value to the age state
              onChange={(e) => setAge(e.target.value)} // Updates the age state on change
            />
            <NumberInputStepper>
              <NumberIncrementStepper /> {/* Button to increase age */}
              <NumberDecrementStepper /> {/* Button to decrease age */}
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        {/* Submit button to trigger the handleSubmit function */}
        <Button colorScheme="blackAlpha" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default Register; // Exporting the Register component
