import React from "react";
import {Button} from "reactstrap"

export default () => {
    return (
        <section className="header-headline">
            <div className="container">
                <div className="headline">
                    <div className="typewriter">
                        <h1>REFUND SHOP</h1>
                    </div>
                    <h3 className="sub-text">Магазин настоящего рефандера! Множество различных схем рефа, а так же аккаунты Aliexpress, и все это по самым привлекательным ценам!</h3>
                    <a href="#pages">
                        <Button color="primary" className="mt-2">Посмотреть товары</Button>
                    </a>
                </div>
                <div>
                    <img src={require('../assets/img/headline.svg')} alt=""/>
                </div>
            </div>
        </section>
    )
}