import styled from 'styled-components';

export const PrinterDiv = styled.div`
display:none;
h3 .tpService{
        margin-bottom:100px;
    };
@media print {
    display:flex;
    flex-direction: column;
    text-align: center;
    margin: 30px;
    
}
`;
    
   