import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
import Loading from "../Status/Loading"; // Importing Loading component to show a loading state
import {
  Heading,
  Button,
  SimpleGrid,
  Box,
  Text,
  HStack,
  Spacer,
  useToast,
} from "@chakra-ui/react"; // Importing Chakra UI components for layout and styling

import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import noteImage from "../Images/note.jpg"; // Importing the background image for the notes page

function Notes() {
  const [notes, setNotes] = useState([]); // State to hold the list of notes
  const [loading, setLoading] = useState(false); // State to manage the loading status
  const toast = useToast(); // Chakra UI hook for displaying notifications
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Function to fetch notes from the backend API
  const fetchNotes = async () => {
    const token = localStorage.getItem("token"); // Getting the token from localStorage
    try {
      setLoading(true); // Set loading to true when fetching notes
      const response = await fetch("https://devnotes-zlbr.onrender.com/note", {
        headers: {
          Authorization: `Bearer ${token}`, // Attaching the token for authorization
        },
      });
      const data = await response.json(); // Parsing the response to JSON
      setLoading(false); // Stop the loading state after receiving the response
      setNotes(data.notes); // Set the notes state with the fetched data
    } catch (error) {
      console.log(`An error occurred: ${error}`); // Logging the error to the console
      handleToast({status:'error'}); // Displaying an error toast if fetching notes fails
    }
  };

  // useEffect to fetch notes when the component mounts
  useEffect(() => {
    fetchNotes(); // Calling fetchNotes function when the component is mounted
  }, []);

  // Function to delete a note by its ID
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token"); // Getting the token from localStorage
    try {
      await fetch(`https://devnotes-zlbr.onrender.com/note/delete-note/${id}`, {
        method: "DELETE", // DELETE request to remove the note
        headers: {
          Authorization: `Bearer ${token}`, // Attaching the token for authorization
        },
      });
      fetchNotes(); // Refetch notes after deletion to update the list
    } catch (error) {
      console.log(`An error occurred ${error}`); // Logging the error to the console
      handleToast({status:'error'}); // Displaying an error toast if deleting a note fails
    }
  };

  // Function to display toast notifications
  function handleToast({status}) {
    toast({
      title: status === 'success' ? "See you soon..." : 'Please check console', // Different titles for success and error
      status, // Status of the toast (success or error)
      duration: 3000, // Duration of the toast message (3 seconds)
      isClosable: true, // Allow the user to close the toast
      position: "top", // Position the toast at the top of the screen
    });
  }

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Removing the token from localStorage on logout
    handleToast({status:'success'}); // Displaying a success toast on logout
    window.location.href = "/login"; // Redirecting the user to the login page
  };

  return (
    <Box
      width="90vw"
      backgroundSize="cover"
      py={12}
      bgImage={`url(${noteImage})`} // Setting the background image for the notes page
      bgPosition="center"
      bgRepeat="no-repeat"
      mb={2}
      height="100vh"
      p="10"
      borderRadius="4"
    >
      {/* Header section with Notes heading and buttons for creating a note and logging out */}
      <HStack mb="10" bg="#F687B3" p="2" borderRadius="3">
        <Heading as="h3" size="lg">
          Notes
        </Heading>
        <Spacer /> {/* Spacer to push buttons to the right */}
        <HStack>
          <Button
            onClick={() => {
              navigate("/create-note"); // Navigate to the create-note page
            }}
            colorScheme="blue"
          >
            Create Note
          </Button>
          <Button onClick={handleLogout} colorScheme="blue">
            LOGOUT
          </Button>
        </HStack>
      </HStack>

      {/* Show the loading component if loading is true */}
      {loading && <Loading />}
      
      {/* Check if the notes array has elements, if yes, display them in a grid */}
      {notes.length > 0 && (
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {notes.map((note, ind) => (
            <Box key={ind} boxShadow="dark-lg" bg="#F6E05E" p="5" borderRadius="10">
              {/* Displaying note title and content */}
              <Text as="b" fontSize="xl">
                {note.title}
              </Text>
              <Text fontSize="md">{note.content}</Text>
              
              {/* Button to delete the note */}
              <Button onClick={() => handleDelete(note._id)}>
                Delete the note
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Notes; // Exporting the Notes component for use in other parts of the app
