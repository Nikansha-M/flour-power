import React from 'react';

import './Footer.css';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="text-center bg-body-tertiary">
            <Container>
                <Stack direction="horizontal" gap={3}>
                    <div className="nav-links mt-1 p-2">
                        <Nav.Link href="/about">About</Nav.Link>
                    </div>
                    <div className="nav-links mt-1 p-2">Location & Hours</div>
                    <div className="nav-links mt-1 p-2">FAQs</div>

                    <div className="ms-auto">
                        <div className="nav-links mt-1"><a href="https://www.linkedin.com/"><FaLinkedin color="black" /></a></div>
                    </div>
                    <div>
                        <div className="nav-links mt-1"><a href="https://www.instagram.com/"><FaInstagram color="black" /></a></div>
                    </div>
                    <div>
                        <div className="nav-links mt-1"><a href="https://www.pinterest.com/"><FaPinterest color="black" /></a></div>
                    </div>
                </Stack>
                <Stack>
                    <div className="text-center mb-2">&copy; {new Date().getFullYear()} Flour Power Bakery & Cafe</div>
                </Stack>
            </Container>

        </div>

    );
}

export default Footer;