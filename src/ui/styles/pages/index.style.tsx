import { experimentalStyled as styled } from '@material-ui/core';
import { Paper } from '@material-ui/core';

export const FormElementContainer = styled('div')`
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: ${({ theme }) =>
          theme.spacing(5)}; // espaço entre os componentes do container
     max-width: 650px;
     margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
     padding: ${({ theme }) => theme.spacing(7)};
     margin: 0 auto ${({ theme }) => theme.spacing(10)};

     ${({ theme }) => theme.breakpoints.down('md')} {
          &.MuiPaper-root {
               // & - selecao dos elementos proprios e não os filhos
               padding: 0;
               box-shadow: none;
          }
     }
`;

export const ProfissionaisContainer = styled('div')`
     display: grid; // grande / pequena
     grid-template-columns: 1fr;

     ${({ theme }) => theme.breakpoints.up('md')} {
          grid-template-columns: repeat(2, 1fr);
          gap: ${({ theme }) => theme.spacing(6)};
     } // tela grande

     ${({ theme }) => theme.breakpoints.down('md')} {
          margin-left: ${({ theme }) => theme.spacing(-2)};
          margin-right: ${({ theme }) => theme.spacing(-2)};
          > :nth-of-type(odd) {
               background-color: ${({ theme }) =>
                    theme.palette.background.paper};
          }
     } // tela pequena mobile
`;
