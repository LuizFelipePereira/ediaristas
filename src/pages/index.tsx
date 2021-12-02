import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextField from 'ui/components/inputs/TextField/TextField';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';

export default function Home() {
     return (
          <div>
               <SafeEnvironment></SafeEnvironment>
               <PageTitle
                    title={'Conheça os Profissionais'}
                    subtitle={
                         'Preencha seu endereço e veja todos os profissionais da sua localidade'
                    }
               />

               <TextFieldMask label={'Digite seu CEP'} fullWidth />

               <UserInformation
                    name={'Luiz Felipe'}
                    picture={'https://github.com/LuizFelipePereira.png'}
                    rating={3}
                    description={'Pouso Alegre'}
               />
          </div>
     );
}
