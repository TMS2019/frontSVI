import { Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ButtonService from '../../../services/ButtonService';
import style from '../../Styles/style';

const CreateEditArticle = ({ isModal, handleClick, titleModal, titles, param, id
     ,title,context,status,category }) => {

    const [title2, settitle2] = useState('');
    const [context2, setcontext2] = useState('');
    const [status2, setstatus2] = useState('');
    const [category2, setcategory2] = useState('');

    React.useEffect(() => {
        settitle2(title);
        setcontext2(context);
        setstatus2(status);
        setcategory2(category);
    }, [title,context,status,category])

    const Simpan = () => {
        var data;
            data = {
                rowStatus:'ACT',
                id:id,
                title: title2,
                context: context2,
                status: status2,
                category: category2,
                created_date:"2022-08-16T04:38:06.8",
                updated_date:"2022-08-16T04:38:06.8"
                 
            };
        ButtonService.Simpan(titleModal, titles, param, data);
        handleClick();
        window.location.reload();
    }

    const status1 = [
        { label: 'publish'},
        { label: 'draft'},
        { label: 'trash'},
       
         
      ];

    return (
        <Modal
            open={isModal}
            // onClose={handleClick}
            onClose={(_, reason) => {
                if (reason !== "backdropClick") {
                  handleClick();
                }
              }}
      
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableBackdropClick="false"
        >
            <Box sx={style}>
                <Box display="flex" alignItems="center"
                    justifyContent="center">
                    <Typography id="modal-modal-title" variant="h6" component="h2" justifyContent='center'>
                        {titleModal} {title}
                    </Typography>
                </Box>
                <br></br>
                <form onSubmit={Simpan}>
                    <Box>
                        <TextField
                            name="title"
                            label="title"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={title2}
                            onChange={(e) => settitle2(e.target.value)}
                        /><br></br><br></br>
                        <TextField
                            name="context"
                            label="context"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={context2}
                            onChange={(e) => setcontext2(e.target.value)}
                        /><br></br><br></br>
                        <TextField
                            name="status"
                            label="status"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={status2}
                            onChange={(e) => setstatus2(e.target.value)}
                        />
                         <TextField
                            name="category"
                            label="category"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={category2}
                            onChange={(e) => setcategory2(e.target.value)}
                        />
                    </Box>
                    <br></br>
                    <Box display="flex" alignItems="center"
                        justifyContent="right">
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" type='submit'>Save</Button>
                            <Button variant="contained" onClick={handleClick} color='error'>Cancel</Button>
                        </Stack>

                    </Box>

                </form>


            </Box>
        </Modal>
    )
}

export default CreateEditArticle