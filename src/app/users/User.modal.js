import React from 'react';
import { Paper, Typography, Button, Modal, TextField, Card, CardHeader, Avatar} from '@material-ui/core';
  

const UserModal = props => {
    const { classes, open, handleClose, type, user, onChange, handleModalButton} = props;
    console.log(user);
    return (
      <div>
        <Modal open={open} disableAutoFocus onBackdropClick={handleClose}>
        {
          type === 'Create' || type === 'Edit' ?
          <Paper className={classes.paperModal}>
            <Typography variant="h6">
              {type}
            </Typography>
                  <form noValidate autoComplete="off">
                  <TextField
                    required
                    id="name"
                    label="Nombre"
                    name="name"
                    fullWidth
                    value={user ? user.first_name : ''}
                    onChange={onChange('first_name')}
                    margin="normal"
                    variant="outlined"
                  />
                    <TextField
                    required
                    id="last_name"
                    label="Apellido"
                    name="Apellido"
                    fullWidth
                    value={user ? user.last_name : ''}
                    onChange={onChange('last_name')}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="job"
                    label="Trabajo"
                    name="job"
                    fullWidth
                    value={user ? user.job : ''}
                    onChange={onChange('job')}
                    margin="normal"
                    variant="outlined"
                    />
                </form>
                <div className={classes.buttonGroup}>
              <Typography component="p" variant="subtitle1" color="secondary">
              </Typography>
              {
                  (type === 'Create' || type === 'Edit')
                  &&  <Button onClick={() => handleModalButton(type)} color="primary" variant="contained" className={classes.button}>
                      {type}
                    </Button>
              }
              <Button onClick={handleClose} color="default" variant="contained" className={classes.button}>
                Cancel
              </Button>
            </div>
          </Paper>
          :
          <Paper className={classes.paperCard}>
          <Card className={classes.card}>
                {
                  user && <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" src={user.avatar} className={classes.avatar}/>
                  }
                  title={`${user.first_name} ${user.last_name}`}
                />
                }
                
              </Card>
              </Paper>
            }
            
        </Modal>
        
      </div>
    );
  }
  

export default UserModal;  