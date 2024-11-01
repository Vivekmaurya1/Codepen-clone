import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Heading = styled(Box)`
  background: #ldle22;
  display: flex;
`;

const Editor = () => {
  return (
    <Box>
      <Box>
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            /
          </Box>
          html
        </Heading>
        <CloseFullscreenIcon/>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Editor;
