// import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Modal, Fade, Backdrop } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import _ from 'lodash'



const WalletModal = ({ open, setOpen }) => {


    return (
        <>
            {open &&
                <Modal open={open} onClose={() => setOpen(false)}
                    BackdropComponent={Overlay}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <StyledContainer bgcolor='white' fontFamily='Poppins' color='white'>
                            <ModalHeader component='header'>
                                <Box component='h4' width='100%' lineHeight='110%' margin='0px' fontWeight='600' fontSize='20px' color='rgb(4,17,29)'>
                                    Connect Wallet
                                </Box>
                            </ModalHeader>
                            <ModalBody component='section'>
                                <Box width='100%' boxShadow='2px 2px 5px 1px #ccc' mt={3} overflow='auto'>

                                </Box>
                            </ModalBody>
                            <ModalFoot>
                                <Action mt='30px'>
                                    <MyButton variant='contained' color='secondary' onClick={() => setOpen(false)}>Cancel</MyButton>
                                </Action>
                            </ModalFoot>
                            <Box display='flex' position='absolute' right='24px' top='24px'>
                                <CloseButton component='button' onClick={() => setOpen(false)}>
                                    <CloseOutlined style={{ fontSize: 24 }} />
                                </CloseButton>
                            </Box>
                        </StyledContainer>
                    </Fade>
                </Modal >
            }
        </>
    )
}

const THead = styled(Box)``

const TBody = styled(Box)``

const Table = styled(Box)`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: white;
        font-weight: 600;
    }
    thead >tr >th:nth-of-type(6) {
        text-align: center;
    }
    tbody tr {
        transition: .3s;
        background-color: white;
        border-top: 1px solid lightgrey;
    }
    tr:hover {background-color: #eee;}
    th, td {
        padding: 8px;
    }
`

const Action = styled(Box)`
    >button+button {
        margin-left: 30px;
    }
`

const MyButton = styled(Button)`
    text-transform: none !important;
`

const Overlay = styled(Backdrop)`
    background-color: rgba(0, 0, 0, 0.8) !important;
`

const CloseButton = styled(Box)`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    padding: 0px;
    background: inherit;
    >svg { color: rgb(138, 147, 155); }
    &:hover {
        >svg { color: rgb(112, 122, 131); }
    }
`

const ModalHeader = styled(Box)`
    padding: 24px;
    border-bottom: 1px solid rgb(229, 232, 235);
    >h4 { word-break: break-word; }
`

const ModalBody = styled(Box)`
    padding: 24px;
    height: 100%;
    overflow-y: auto;
    font-weight: 400;
    color: rgb(53, 56, 64);
`

const ModalFoot = styled(Box)`
    padding: 24px;
    text-align: right;
`

const StyledContainer = styled(Box)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: transparent;
    max-height: calc(100% - 50px);
    overflow-y: auto;
    min-width: 600px;
    @media (max-width: 1000px) {
        width: calc(100% - 32px);
    }
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-corner {
        background: inherit;
    }
    &::-webkit-scrollbar-thumb {
        width: 30px;
        border-radius: 15px;
        background: rgb(33,37,41);
    }
    input {
        outline: none;
        border: 1.5px solid lightgrey;
        border-radius: 5px;
        transition: .3s;
        padding: 5px;
        height: fit-content;
        align-self: center;
        &:focus {
            border-color: #c850c0;
        }
    }
    select {
        border: none;
        outline: none;
        padding: 4px;
        border-radius: 5px;
    }
`

export default WalletModal