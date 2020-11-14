import React from "react";
import {Button, Card, CardBody, CardImg, CardTitle} from "reactstrap";

export default (props) => {
    const setModalData = () => {
        props.setModalData(prevState => {
            return {
                ...prevState,
                id: props.el.id,
                title: props.el.title,
                text: <p><b>{props.el.text}</b> <br/><br/>При покупке схемы вы получаете: <br/><br/>► Сам товар<br/>►
                    Гарантию, на
                    аккаунты - 14 дней, на схемы - пожизненно<br/>► Консультацию по любым вопросам касающихся рефанда в
                    ТГ -
                    @goodsellerlzt</p>,
                btnText: "Купить",
                price: props.el.price,
            }
        });
    };
    return (
        <Card>
            <button className="ml-auto mt-3 mr-3 no-style" onClick={() => {
                setModalData();
                props.toggleInfoModal()
            }}>
                <img src="https://img.icons8.com/android/24/000000/info.png" alt="Узнать больше"/>
            </button>
            <CardImg top src={props.el.image}/>
            <CardBody>
                <div className="title-wrapper">
                    <CardTitle>{props.el.title}</CardTitle>
                    <CardTitle className="left-amount"> {
                        props.el.amount ?
                        `В наличии ${props.el.amount} шт.` :
                        props.el.amount === 0 ? "Нет в наличии" :
                            undefined
                    } </CardTitle>
                </div>
                <div className="bottom-card">
                    <div className="price">{props.el.price}
                        <span style={{
                            fontSize: "13px",
                            position: "relative",
                            bottom: "1.25em"
                        }}>
                            <s style={{
                                textDecoration: "line-through",
                                textDecorationLine: "line-through",
                                textDecorationStyle: "initial",
                                textDecorationColor: "red",
                            }}>
                                {Math.floor(props.el.price / 100 * 150)}
                            </s>
                    </span></div>
                    <Button color="first" onClick={() => {
                            setModalData();
                            props.toggleCheckoutModal()
                        }}>Купить!</Button>
                </div>
            </CardBody>
        </Card>
    )
}