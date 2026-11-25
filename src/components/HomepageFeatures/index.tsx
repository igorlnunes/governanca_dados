import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DAMA-DMBOK + Prática Moderna',
    to: '/docs/category/01-fundamentos',
    description: (
      <>
        Estrutura organizada em 8 módulos cobrindo desde fundamentos, papéis e
        políticas até observabilidade, <em>Data Contracts</em> e{' '}
        <em>Data Mesh</em>.
      </>
    ),
  },
  {
    title: 'Qualidade, Catálogo e LGPD',
    to: '/docs/category/03-qualidade-de-dados',
    description: (
      <>
        Espaços dedicados para dimensões de qualidade, linhagem de dados,
        classificação, controle de acesso e conformidade regulatória.
      </>
    ),
  },
  {
    title: 'Pronto para Evoluir',
    to: '/docs/modelo-de-nota',
    description: (
      <>
        Cada tema já possui tópicos-guia e um modelo reutilizável de nota. Basta
        preencher conforme avança nos estudos e criar novas páginas quando
        precisar.
      </>
    ),
  },
];

function Feature({title, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--md">
        <Heading as="h3">
          <Link to={to}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
