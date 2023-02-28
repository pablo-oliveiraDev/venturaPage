import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import * as IconsSL from 'react-icons/sl';
import AreaPrint from './talvez';




export default class TesteClass extends Component {
    constructor(props) {
        super(props);
        this.state = { myDisplay: 'none' }

    }

    render() {

        const styleDiv = {
            'background': 'none',
            'display': 'none'
        }

        return (
            <>
                <ReactToPrint
                    trigger={() => {

                        return <Button variant='primary' ><IconsSL.SlPrinter size={25} /></Button>;
                    }}
                    onafterprint={() => this.setState(state => ({ myDisplay: 'none' }))}
                    onBeforePrint={() => { this.setState(state => ({ myDisplay: '' })) }}
                    content={() => this.componentRef}
                />

                <AreaPrint
                    ref={el => (this.componentRef = el)}
                    printService={this.props.printService}

                />





            </>

        )
    }
}
