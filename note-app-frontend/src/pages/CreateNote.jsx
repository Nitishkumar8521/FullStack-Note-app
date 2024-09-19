import { useState, useRef, useEffect } from "react"; // Importing React hooks for managing state, refs, and side effects
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation after form submission
import { Box, useToast } from "@chakra-ui/react"; // Importing Chakra UI components for layout and toast notifications
import Loading from "../Status/Loading"; // Importing a custom Loading component to show during data fetching
import registrationImage from "../Images/registration.jpg"; // Importing an image to be used as background

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react"; // Importing additional Chakra UI form components

function CreateNote() {
  const navigate = useNavigate(); // For navigation within the app
  const [title, setTitle] = useState(""); // State for the title input field
  const [content, setContent] = useState(""); // State for the content input field
  const [status, setStatus] = useState(null); // State for the status dropdown field
  const [loading, setLoading] = useState(false); // State for controlling the loading state during the API request
  const toast = useToast(); // Chakra UI hook for showing toast notifications
  const myRef = useRef(null); // useRef hook to manage focus for the title input field

  // Function to handle focusing the title input field using the useRef hook
  function handleFocus() {
    myRef.current.focus();
  }

  // useEffect hook to automatically focus the title input field when the component mounts
  useEffect(() => {
    handleFocus();
  }, []);

  // Function to handle the toast notification once the note is successfully created
  function handleToast() {
    toast({
      title: "Note created.",
      description: "We've created your note.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  // Function to handle the form submission
  const handleSubmit = async () => {
    const token = localStorage.getItem("token"); // Retrieving the JWT token from localStorage
    const payload = {
      title,
      content,
      status,
    }; // Creating the payload for the API request with title, content, and status

    try {
      setLoading(true); // Setting loading state to true before making the API request
      // Sending a POST request to create a new note
      await fetch("https://devnotes-zlbr.onrender.com/note/create", {
        mode: "cors", // Enabling CORS for cross-origin requests
        method: "POST", // Setting HTTP method to POST for creating a new resource
        headers: {
          "Content-Type": "application/json", // Setting the request headers to JSON
          Authorization: `Bearer ${token}`, // Sending the JWT token in the Authorization header
        },
        body: JSON.stringify(payload), // Sending the payload as a JSON string
      });
      setLoading(false); // Resetting loading state after the request completes
      handleToast(); // Showing a success toast notification
      navigate("/notes"); // Navigating to the "/notes" page after note creation
    } catch (error) {
      console.error("Error:", error); // Logging any errors that occur during the request
      alert(`An Error occurred: ${error.message}`); // Alerting the user of the error
    }
  };

  // If loading is true, render the Loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      width="100vw" // Setting the width of the box to 100% of the viewport width
      backgroundSize="cover" // Ensuring the background image covers the entire box
      py={12} // Padding along the y-axis
      bgImage={`url(${registrationImage})`} // Using the imported image as the background
      bgPosition="center" // Centering the background image
      bgRepeat="no-repeat" // Preventing the background image from repeating
      mb={2} // Adding margin at the bottom
      height="100vh" // Setting the height of the box to 100% of the viewport height
    >
      <Heading>Hi! Register Here</Heading> {/* Heading for the form */}
      <VStack
        boxShadow="md" // Adding a medium shadow to the form container
        bg="#D6BCFA" // Background color for the form container
        p="5" // Padding inside the form container
        w={["80%", "60%", "40%"]} // Setting the width responsively for mobile, tablet, and desktop
        margin="auto" // Centering the form container horizontally
        borderRadius={10} // Adding rounded corners to the form container
      >
        <FormControl isRequired> {/* Form control for the title input */}
          <FormLabel>Title</FormLabel> {/* Label for the title input */}
          <Input
            placeholder="Enter title" // Placeholder text for the input field
            value={title} // Binding the title input field to the title state
            onChange={(e) => setTitle(e.target.value)} // Updating the title state when the input changes
            ref={myRef} // Referencing the input field to handle auto-focus
          />
        </FormControl>

        <FormControl isRequired> {/* Form control for the content input */}
          <FormLabel>Content</FormLabel> {/* Label for the content input */}
          <Input
            placeholder="Enter Content" // Placeholder text for the input field
            value={content} // Binding the content input field to the content state
            onChange={(e) => setContent(e.target.value)} // Updating the content state when the input changes
          />
        </FormControl>

        <FormControl isRequired> {/* Form control for the status dropdown */}
          <FormLabel>Status</FormLabel> {/* Label for the status dropdown */}
          <Select
            placeholder="Select Status" // Placeholder text for the dropdown
            value={status} // Binding the dropdown value to the status state
            onChange={(e) => setStatus(e.target.value === "true")} // Updating the status state (converting string to boolean)
          >
            <option value="true">Complete</option> {/* Option for completed status */}
            <option value="false">Not Complete</option> {/* Option for not completed status */}
          </Select>
        </FormControl>

        <Button
          colorScheme="blackAlpha" // Setting the button color scheme
          onClick={() => {
            handleSubmit(); // Calling handleSubmit function when the button is clicked
          }}
        >
          Submit {/* Button text */}
        </Button>
      </VStack>
    </Box>
  );
}

export default CreateNote; // Exporting the CreateNote component for use in other parts of the app
