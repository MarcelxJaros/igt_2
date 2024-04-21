import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography'; 
import Modal from '@mui/material/Modal'; 
import { useAtom } from 'jotai';  
import ModalToggleAtom from '../atoms/Modal'; 
import image from '../assets/image.png'; 

// Styles for the modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// BasicModal component
const BasicModal = () => {
  // State management for modal
  const [modal, setModal] = useAtom(ModalToggleAtom); // State for modal

  // Event handler for modal close
  const handleClose = () => setModal({toggle: false, heading: modal.heading, desc: modal.desc});

  return (
    <div>
      <Modal
        open={modal.toggle} // Whether the modal is open or not
        onClose={handleClose} // Event handler for modal close
        aria-labelledby="modal-modal-title" // ID for modal title
        aria-describedby="modal-modal-description" // ID for modal description
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.heading} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modal.desc} 
          </Typography>
          <img className="image" src={image} alt="image" /> 
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal; 
