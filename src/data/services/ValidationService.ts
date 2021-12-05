export const ValidationService = {
     cep(cep = ''): boolean {
          return cep.replace(/\D/g, '').length === 8; //g - global toda string
          //D - tudo que nao for numero
          //d - tudo que for numero
     },
};
