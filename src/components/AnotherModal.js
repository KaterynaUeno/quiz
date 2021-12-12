import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Result from "./Result";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AnotherModal = ({ results, data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="content">
      <Button onClick={handleOpen}>Click here for more info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h4>Your answers:</h4>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <section>
              <ol>
                {results.map((result, index) => {
                  return (
                    <li key={index}>
                      <h5>{result.q}</h5>{" "}
                      <p className="orange">
                        Your answer: {data[index].answer}
                      </p>
                      <p className="green">
                        Correct answer: {data[index].answer}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </section>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default AnotherModal;
