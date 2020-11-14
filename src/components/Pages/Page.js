import React, {useState} from 'react'
import Card from './Card'
export default (props) => {
    const cards = props.data ? props.data.map((el) => {
        return (
            <Card el={el}
                  setModalData={props.setModalData}
                  toggleInfoModal={props.toggleInfoModal}
                  toggleCheckoutModal={props.toggleCheckoutModal}
            />
        )
    }) : <h3 className="text-center p-5" style={{gridArea: "1 / span 3"}}> К сожалению товаров в этой категории пока нету :(</h3>;
    return (
        <div className="page">
            {cards}
        </div>
    )
}