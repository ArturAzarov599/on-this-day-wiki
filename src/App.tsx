import Box from "@mui/material/Box/Box";
import Alert from "@mui/material/Alert/Alert";
import Button from "@mui/material/Button/Button";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

import { Typography } from "@mui/material";
import { useLazyGetEventsQuery } from "./redux/events/events.api";
import { useAppSelector } from "./redux/hooks";
import { useEventsActions } from "./redux/events/hooks";

const App = () => {
  const [getEvents, { isLoading }] = useLazyGetEventsQuery();
  const { events, isError } = useAppSelector((state) => state.eventsSlice);
  const { clearError } = useEventsActions();

  const handleShowMore = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    getEvents({
      accessToken: process.env.VITE_WIKI_ACCESS_TOKEN || "",
      searchCondition: `${year}/${month}/${day}`,
    });
  };

  return (
    <Box
      position="relative"
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Snackbar
        open={isError}
        onClose={() => {
          clearError();
        }}
        autoHideDuration={5000}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
      >
        <Alert
          severity="error"
          onClose={() => {
            clearError();
          }}
        >
          Can't load data
        </Alert>
      </Snackbar>

      {isLoading && (
        <Box
          position="absolute"
          zIndex={10}
          sx={{
            height: "100vh",
            width: "100vw",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              background: "white",
              padding: "20px",
              width: "fit-content",
              borderRadius: "12px",
            }}
          >
            <CircularProgress size={48} />
          </Box>
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="20px"
        className="events"
      >
        {events.map((event) => (
          <Box
            key={event.id}
            width="100%"
            className="event"
            sx={{
              padding: "5px",
              border: "1px solid black",
              marginBottom: "10px",
              cursor: "pointer",
              ":hover": {
                opacity: 0.3,
              },
            }}
          >
            <Typography textAlign="left">
              {event.name} - {event.year}
            </Typography>
          </Box>
        ))}

        <Button variant="contained" onClick={handleShowMore}>
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default App;
