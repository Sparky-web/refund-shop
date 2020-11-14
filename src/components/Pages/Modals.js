import React, {useState} from "react";
import {Alert, Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import axios from 'axios'

export default (props) => {
    function selectText(event) {
        event.target.select()
    }

    const handleAmountChange = (event) => props.setModalData({...props.modalData, amount: event.target.value});

    const number = "+79521344070";
    const checkPayment = () => {
        const data = {
            ...props.modalData,
            text: undefined
        };
        console.log(data);
        setProduct(
            <div className="ball-loader">
                <div className="ball-loader-ball ball1"/>
                <div className="ball-loader-ball ball2"/>
                <div className="ball-loader-ball ball3"/>
            </div>);
        axios.post('http://localhost:5001/vk-retriv/us-central1/helloWorld', data)
            .then(e => {
                if(e.data.result) {
                    setProduct(<p className="font-weight-bold mr-auto">
                        Перейдите по <a rel="noopener noreferrer" target="_blank" href={e.data.data.link}>ссылке</a> для получения товара.
                    </p>)
                } else {
                    setProduct(<p className="font-weight-bold mr-auto">
                        Мы не нашли ваш платеж, попробуйте снова
                    </p>)
                }

            })
            .catch(e => console.log("Error -> " + e))
    };

    const [product, setProduct] = useState(<div/>);

    return (
        <>
            <Modal isOpen={props.modals.infoModal} toggle={props.modals.toggleInfoModal}>
                <ModalHeader toggle={props.modals.toggleInfoModal}>{props.modalData.title}</ModalHeader>
                <ModalBody>
                    {props.modalData.text}
                </ModalBody>
                <ModalFooter>
                    <Button color="first" onClick={props.modals.toggleCheckoutModal}>{props.modalData.btnText}</Button>
                    <Button color="secondary" onClick={props.modals.toggleInfoModal}>Закрыть</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={props.modals.checkoutModal} toggle={props.modals.toggleCheckoutModal}>
                <Form onSubmit={e => e.preventDefault()}>
                    <ModalHeader toggle={props.modals.toggleCheckoutModal}>{props.modalData.title}</ModalHeader>
                    <ModalBody>
                        <Table>
                            <tbody>
                            <tr>
                                <th>Товар</th>
                                <td>{props.modalData.title}</td>
                            </tr>
                            <tr>
                                <th>Сумма за шт.</th>
                                <td>{`${props.modalData.price}.00 руб.`}</td>
                            </tr>
                            <tr>
                                <th>Количество</th>
                                <td>
                                    <Input value={props.modalData.amount} onChange={handleAmountChange} className="w-25"/>
                                </td>
                            </tr>
                            <tr>
                                <th>Способ оплаты</th>
                                <td>QIWI<span role="img">🥝</span></td>
                            </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="w-100" type="submit" color="first" onClick={props.modals.togglePostCheckoutModal} >Продолжить</Button>
                        <Button className="w-100" color="secondary" onClick={props.modals.toggleCheckoutModal}>Закрыть</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <Modal isOpen={props.modals.postCheckoutModal} toggle={props.modals.togglePostCheckoutModal}>
                <ModalHeader toggle={props.modals.togglePostCheckoutModal}>{props.modalData.title}</ModalHeader>
                <ModalBody>
                    <Table>
                        <tbody>
                        <tr>
                            <th>Товар</th>
                            <td>{props.modalData.title}</td>
                        </tr>
                        <tr>
                            <th>Количество</th>
                            <td>{props.modalData.amount}</td>
                        </tr>
                        <tr>
                            <th>Сумма</th>
                            <td>{`${props.modalData.price * props.modalData.amount}.00 руб.`}</td>
                        </tr>
                        <tr>
                            <th>QIWI Кошелек</th>
                            <td><Input onClick={selectText} defaultValue={number} readOnly/></td>
                        </tr>
                        <tr>
                            <th>Комментарий к платежу</th>
                            {/* eslint-disable-next-line no-useless-concat */}
                            <td><Input onClick={selectText} readOnly defaultValue={`${props.modalData.amount}` + `${props.modalData.id}` + `${props.modalData.comment}`}/></td>
                        </tr>
                        </tbody>
                    </Table>
                    <Alert color="danger" className="w-100 p-3">Внимание! Очень важно чтобы вы переводили деньги с этим
                        примечанием, иначе средства не будут зачислены автоматически.</Alert>
                    <a rel="noopener noreferrer" target="_blank" href={`https://qiwi.com/payment/form/99?amountInteger=${props.modalData.price * props.modalData.amount}&amountFraction=0&extra[%27account%27]=${number}&extra[%27comment%27]=${props.modalData.amount.toString() + props.modalData.id.toString() + props.modalData.comment.toString()}&blocked[0]=sum&blocked[1]=account&blocked[2]=comment`}>
                        <Button color="first" className="w-100">
                            Оплатить в 1 клик!
                        </Button>
                    </a>
                </ModalBody>
                <ModalFooter>
                    <Button className="w-100" color="success" onClick={() => checkPayment()}>Проверить</Button>
                    <Button className="w-100" color="secondary" onClick={props.modals.togglePostCheckoutModal}>Закрыть</Button>
                </ModalFooter>
                <ModalFooter>
                    {product}
                </ModalFooter>
            </Modal>
        </>
    )
}