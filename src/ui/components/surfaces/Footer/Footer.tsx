import React from 'react';
import {
     FooterStyled,
     FooterContainer,
     FooterTitle,
     AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
     return (
          <FooterStyled>
               <FooterContainer>
                    <Box sx={{ maxWidth: '400px' }}>
                         {' '}
                         <FooterTitle>Quem Somos</FooterTitle>
                         <Typography variant={'body2'} sx={{ marginTop: 2 }}>
                              E-Diaristas te ajuda a encontrar um profissional
                              perfeito para realizar a limpea da sua casa.
                              Garantimos a melhor profissional com total
                              segurança e praticidade! São milhares de clientes
                              satisfeitos por todo o país.
                         </Typography>
                    </Box>

                    <div>
                         <FooterTitle>Baixe os nossos aplicativos</FooterTitle>
                         <AppList>
                              <li>
                                   <a
                                        href={'/'}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                   >
                                        <img
                                             src="/img/logos/app-store.png"
                                             alt="App Store"
                                        />
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href={'/'}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                   >
                                        <img
                                             src="/img/logos/google-play.png"
                                             alt="Google Play"
                                        />
                                   </a>
                              </li>
                         </AppList>
                    </div>
               </FooterContainer>
          </FooterStyled>
     );
};

export default Footer;
