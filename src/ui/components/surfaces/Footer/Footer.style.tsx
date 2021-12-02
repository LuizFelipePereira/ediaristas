import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

export const FooterStyled = styled('footer')`
     background-color: ${({ theme }) => theme.palette.primary.main};
     color: ${({ theme }) =>
          theme.palette.getContrastText(theme.palette.primary.main)};
     padding: ${({ theme }) => theme.spacing(4)} 0;
     margin-top: auto; // colar o rodape no fim da pagina
`;

export const FooterContainer = styled(Container)`
     display: flex; // horizontal
     justify-content: space-between;
     gap: ${({ theme }) => theme.spacing(2)};
     flex-wrap: wrap; // mudar de linha quando a tela diminui
     ${({ theme }) => theme.breakpoints.down('md')} {
          gap: ${({ theme }) => theme.spacing(5)};
     } // aumentar um pouco o espaçamento entre as divs do container
`;

export const FooterTitle = styled((props) => (
     <Typography component={'h2'} variant={'body2'} {...props}></Typography>
))`
     font-weight: bold;
`;

export const AppList = styled('ul')`
     display: flex; // horizontal
     list-style-type: none;
     padding: 0; // margem interna
     gap: ${({ theme }) => theme.spacing()};
     img {
          width: 122px;
     }
`;
