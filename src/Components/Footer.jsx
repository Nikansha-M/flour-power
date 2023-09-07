import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { FaFacebook, FaInstagram, FaPinterest, FaSpotify } from "react-icons/fa";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
            <div className="text-center bg-body text-dark">
                <span className="mx-2 mt-3 pt-2">

                    <div className="row text-center mt-2">
                        <div className="col-xl-3 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-4">About us</h6>
                            <h6 className="text-uppercase fw-bold mb-4">Location & Hours</h6>
                            <h6 className="text-uppercase fw-bold mb-4">FAQ</h6>
                        </div>

                        <div className="col-xl-4 mx-auto mb-2">
                            <h6 className="fw-bold">Connect with us</h6>
                            <Stack direction="horizontal" gap={3}>
                                <div><a href="https://www.facebook.com/"><FaFacebook /></a></div>
                                <div><a href="https://www.instagram.com/"><FaInstagram /></a></div>
                                <div><a href="https://www.pinterest.com/"><FaPinterest /></a></div>
                                <div><a href="https://www.spotify.com/"><FaSpotify /></a></div>
                            </Stack>
                        </div>

                        <div className="text-center">Copyright &copy; {new Date().getFullYear()} Flour Power Bakery & Cafe</div>
                    </div>

                </span>
            </div>
        </>
    )
}


export default Footer;