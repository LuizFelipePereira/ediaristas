import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
     return (
          <div>
               <PageTitle
                    title={'Conheça os Profissionais'}
                    subtitle={
                         'Preencha seu endereço e veja todos os profissionais da sua localidade'
                    }
               ></PageTitle>
               <SafeEnvironment></SafeEnvironment>
          </div>
     );
}
