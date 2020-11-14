import React from 'react';
import {Button} from "reactstrap"

const Footer = () => {
    return (
        <div className="shadow-sm-dark" id="support" style={{background: "white"}}>
        <div className="container pt-5 pb-5 mt-5">
            <h3 className="additional-headline text-center">
                Поддержка
            </h3>
            <div className="d-flex justify-content-center">
                <a rel="noopener noreferrer" target="_blank" href="https://teleg.run/goodsellerlzt">
                    <Button  color="primary" outline className="d-flex align-items-center">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src="https://img.icons8.com/fluent/48/000000/telegram-app.png"/>
                        <div className="pl-1">Написать в TG</div>
                    </Button>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://vk.com/im?media=&sel=-163871471">
                    <Button color="primary" outline className="d-flex align-items-center ml-3">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src="https://img.icons8.com/color/50/000000/vk-circled.png"/>
                        <div className="pl-1">Написать в VK</div>
                    </Button>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Footer;