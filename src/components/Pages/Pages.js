import React, {useState, useEffect} from "react";

import Pills from "./Pills";
import Page from "./Page";
import {TabContent, TabPane} from 'reactstrap'
import Modals from './Modals'
import {db} from "../app"

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
export default () => {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        setActiveTab(tab);
    };

    const [infoModal, setInfoModal] = useState(false);
    const [checkoutModal, setCheckoutModal] = useState(false);
    const [postCheckoutModal, setPostCheckoutModal] = useState(false);

    const toggleInfoModal = () => {
        setInfoModal(!infoModal);
        setCheckoutModal(false)
    };
    const toggleCheckoutModal = () => {
        setCheckoutModal(!checkoutModal);
        setInfoModal(false)
    };
    const togglePostCheckoutModal = () => {
        if(/^[0-9]*$/ig.test(modalData.amount) &&
            modalData.amount < 100 && modalData.amount > 0) {
            setPostCheckoutModal(!postCheckoutModal);
            setCheckoutModal(false)
        } else {
            if(!/^[0-9]*$/ig.test(modalData.amount)) alert("Количество должно быть числом");
            else if(modalData.amount > 100 || modalData.amount < 1) alert("Такого кол-ва товара нет (");
            else alert("Что то пошло не так(")
        }
    };

    const [modalData, setModalData] = useState({
        id: 0,
        title: '',
        text: '',
        btnText: '',
        price: '',
        comment: randomInteger(1000000, 9999999),
        email: '',
        amount: 1
    });
    const [tabs, setTabs] = useState(<div />);

    useEffect(() => {
        async function fetchData() {
            const data = await db.collection("products").get();
            const arr = [];
            data.forEach(e => {
                arr.push(e.data().data)
            });
            const elements = [];
            for(let i = 0; i < 3; i++) {
                elements.push(
                    <TabPane key={i} tabId={`${i + 1}`}>
                    <Page setModalData={setModalData}
                          modalData={modalData}
                          toggleInfoModal={toggleInfoModal}
                          toggleCheckoutModal={toggleCheckoutModal}
                          data={arr[i]}/>
                    </TabPane>
                )
            }
            setTabs(elements)

        }
        fetchData()
    }, []);

    return (
        <section className="container pages" id="pages">
            <h3 className="additional-headline">
                Товары
            </h3>
            <Pills activeTab={activeTab} toggle={toggle}/>

            <TabContent activeTab={activeTab}>
                {tabs}
            </TabContent>


            <Modals modals={{
                toggleInfoModal: toggleInfoModal,
                toggleCheckoutModal: toggleCheckoutModal,
                togglePostCheckoutModal: togglePostCheckoutModal,

                infoModal: infoModal,
                checkoutModal: checkoutModal,
                postCheckoutModal: postCheckoutModal
            }} modalData={modalData} setModalData={setModalData} />

        </section>
    )
}