import React, { Component } from 'react';
import { PrinterDiv } from '../assets/Styles/Components/printer';

export default class Talvez extends Component {
   
  render() {
       const h2Style = {
          'text-align': 'left',
          'margin': '0px',
          'font-size': '25px',
          'margin-botton': '30px',
      };
       const h3Style = {
          'text-align': 'left',
          'margin': '0px',
          'font-size': '25px',
          'margin-botton': '100px',
      };
      const spanStyle = {
          'font-weight': '150',
          'margin-right': '1ch',
      }
      const assCliente = {
          'border-top': '1px solid',
          'margin-top': '70px',
          'font-size': '25px',
          'width': '80%',
          'margin-left': '80px',
      };
    return (
        <PrinterDiv className='containerInput' >

            <h2>Impressao de chamados</h2>
            <h3 style={h2Style}>Nome: <span style={spanStyle}>{this.props.printService.userName}
            </span>   Pedido: <span style={spanStyle}>{this.props.printService.dataPedido}
                </span><br /> Agendado: <span style={spanStyle}>{this.props.printService.dataService}</span>
                Bairro: <span style={spanStyle}>{this.props.printService.bairro}</span>
            </h3>
            <h3 style={h2Style}>Endereço : <span style={spanStyle}>{`Rua ${this.props.printService.rua}`}</span>Nº: <span style={spanStyle}>{this.props.printService.numero} </span>
            </h3>
            <h3 style={h2Style}>
                Cidade: <span style={spanStyle}>{this.props.printService.cidade} </span>
                Contato: <span style={spanStyle}>{this.props.printService.telefone} </span>
            </h3>
            <h3 style={h3Style}>Tipo de serviço: <span style={spanStyle}>{this.props.printService.tipoDeServico}</span></h3>
            <div >
                <span>Ao assinar que declaro que foi efetuado a visita pelo tecnico da refrigeração Ventura</span>
                <div style={assCliente}>Assinatura do cliente</div>
            </div>
            <hr />
        </PrinterDiv>
    )
  }
}
