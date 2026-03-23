import {
  Dialog as BaseDialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const Dialog = ({ open, onClose, title, message, action }) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      {action && action.length > 0 && (
        <DialogActions>
          {action.map((item, idx) => (
            <Button key={idx} onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </BaseDialog>
  );
};

export default Dialog;
