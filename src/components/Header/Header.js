import { React, useEffect } from 'react';
import { Box, Modal, Button } from '@material-ui/core'
import { useState } from 'react'

import metamask from '../../images/MetaMask.png'
import walletconnect from '../../images/WalletConnect.png'
import binance from '../../images/BinanceWallet.png'
import trust from '../../images/TrustWallet.png'


import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers';
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnect from "@walletconnect/client";
import {
    injected,
    walletConnect,
    trustWallet,
    binance_wallet,
} from "../../utils/connectors";
import _ from "lodash";

const Header = () => {
    const [modal, modal_flag] = useState(false)
    const [flag_modal, set_flag] = useState(false)
    const [btn_letter, set_btn_letter] = useState({
        address: 'Wallet Connect'
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 468,
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        backgroundColor: '#1e2644',
        display: "flex",
        flexDirection: 'column',
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };

    const MOBILE_CONNECTORS = {
        MetaMask: injected,
        TrustWallet: trustWallet,
        BinanceWallet: trustWallet,
    };

    const walletConnectors = DESKTOP_CONNECTORS;
    const { account, connector, activate } = useWeb3React();
    const getShortTxHash= (txHash, margin = 4)=> {
        if (_.isEmpty(txHash)) {
          return "";
        }
        return txHash.replace(
          txHash.substring(margin + 2, txHash.length - margin),
          "....",
        );
      }

    useEffect(() => {
        console.log(account)
    }, [account])

    const handleConnect = async(currentConnector, wallet) => {
        setOpen(false);
        activate(currentConnector);

        // console.log(currentConnector)
        // if (wallet ==='meta') {
        //     let [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        //     const provider = new ethers.providers.Web3Provider(window.ethereum);
        //     const network = await provider.getNetwork();
        //     if (network.name !== 'bnb') {
        //         let temp = { ...btn_letter }
        //         temp.address = 'Connect Error!'
        //         set_btn_letter(temp);
        //         return alert("You must select bsc network!");
        //     }
        //     else {
        //         let temp = { ...btn_letter }
        //         temp.address = account.slice(0, 5) + '...' + account.slice(account.length - 5, account.length)
        //         set_btn_letter(temp)
        //     }
            

        // }
    }

    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/explore-1">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a href="/activity" className="nav-link">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                <i className="fas fa-search" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>

                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a onClick={handleOpen} className="btn ml-lg-auto btn-bordered-white" ><i className="icon-wallet mr-md-2" />{ connector === walletConnectors['MetaMask']?getShortTxHash(account, 8):"Connect Wallet"}</a>
                        </li>
                    </ul>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Box sx={{
                                height: '68px',
                                display: 'flex',

                                alignItems: 'flex-start',
                                lineHeight: 'initial',
                            }}>
                                <Box fontSize='24px' fontWeight='bold' color='white'>Select a Wallet</Box>
                                {/* <Button top="8px" right='16px' color='white' border='1px solid white'>Exit</Button> */}
                            </Box>
                            <Box display='flex' flexDirection='column' height="100%" width='100%'>
                                <Box display='flex' alignItems="center" height="100%" flex='1' >
                                    <Box sx={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        padding: '16px',
                                        transition: 'ease-out 0.4s',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        flexDirection: 'row',
                                        backgroundColor: '#1c2132',
                                        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                        height: '85%',
                                    }} onClick={() => { handleConnect(walletConnectors['MetaMask'], 'meta') }}>
                                        <img src={metamask} width="40px" height="40px"></img><Box fontWeight='bold' margin='8px' color='#337ab7' fontSize='1.25rem'>MetaMask</Box>
                                    </Box>
                                </Box>
                                <Box display='flex' alignItems="center" height="100%" flex='1'>
                                    <Box sx={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        padding: '16px',
                                        transition: 'ease-out 0.4s',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        flexDirection: 'row',
                                        backgroundColor: '#1c2132',
                                        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                        height: '85%',
                                    }} onClick={() => { handleConnect(walletConnectors['WalletConnect']) }}>
                                        <img src={walletconnect} width="40px" height="40px"></img><Box fontWeight='bold' margin='8px' color='#337ab7' fontSize='1.25rem'>WalletConnect</Box>
                                    </Box>
                                </Box>
                                <Box display='flex' alignItems="center" height="100%" flex='1'>
                                    <Box sx={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        padding: '16px',
                                        transition: 'ease-out 0.4s',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        flexDirection: 'row',
                                        backgroundColor: '#1c2132',
                                        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                        height: '85%',
                                    }} onClick={() => { handleConnect(walletConnectors['BinanceWallet']) }}>
                                        <img src={binance} width="40px" height="40px"></img><Box fontWeight='bold' margin='8px' color='#337ab7' fontSize='1.25rem'>BinanceWallet</Box>
                                    </Box>
                                </Box>
                                <Box display='flex' alignItems="center" height="100%" flex='1'>
                                    <Box sx={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        padding: '16px',
                                        transition: 'ease-out 0.4s',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        flexDirection: 'row',
                                        backgroundColor: '#1c2132',
                                        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                        height: '85%',
                                    }}  onClick={() => { handleConnect(walletConnectors['TrustWallet']) }}>
                                        <img src={trust} width="40px" height="40px"></img><Box fontWeight='bold' margin='8px' color='#337ab7' fontSize='1.25rem'>TrustWallet</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Modal>


                </div>

            </nav>
        </header>
    );
};

export default Header;