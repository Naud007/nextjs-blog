import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>En tant que professionnel aux multiples talents, je suis passionné par la résolution de problèmes, la conception de systèmes et d'architectures, ainsi que par le développement d'interfaces frontales belles et fonctionnelles. Avec une solide expertise en JavaScript, React, Bootstrap et Next.js, ainsi qu'une maîtrise approfondie de WordPress, je suis en mesure de créer des expériences utilisateur exceptionnelles et réactives, que ce soit en utilisant des frameworks modernes ou en travaillant avec des CMS populaires.

Mon parcours professionnel m'a également permis d'acquérir une expérience précieuse dans la gestion de projets et la gestion des médias sociaux, notamment en utilisant WordPress comme outil central de création de sites web. J'ai travaillé sur des projets variés, allant de sites vitrines aux boutiques en ligne complexes, en mettant l'accent sur l'optimisation des performances, la sécurité et l'expérience utilisateur. Je suis à l'aise avec les thèmes et les plugins WordPress, et je suis capable de personnaliser et d'étendre leurs fonctionnalités pour répondre aux besoins spécifiques de mes clients.

Ce qui distingue ma pratique, c'est ma passion pour le design graphique. Mon expertise en matière de conception me permet de créer des interfaces esthétiques, intuitives et centrées sur l'utilisateur, en combinant harmonieusement les fonctionnalités et l'esthétique visuelle. J'apporte une attention particulière aux détails et m'efforce de fournir des expériences visuelles remarquables qui font la différence.

Ce qui me motive au quotidien, c'est ma capacité à apprendre rapidement de nouveaux concepts et technologies. Je suis constamment à l'affût des dernières tendances de l'industrie et je cherche toujours à améliorer mes compétences, que ce soit en matière de développement web ou de gestion de projets WordPress. Mon objectif est de devenir un architecte de produits ou un chef de produit, en combinant ma passion pour le développement avec ma vision stratégique et mon souci du détail.

Sur ce blog, je partagerai mes connaissances, mes expériences et mes réflexions dans le domaine de la technologie, du développement web et de WordPress. Je souhaite créer une communauté dynamique où nous pourrons échanger des idées, discuter des dernières avancées technologiques et collaborer sur des projets passionnants, qu'ils soient basés sur des frameworks modernes ou sur WordPress.

Rejoignez-moi dans cette aventure et ensemble, explorons le monde fascinant du développement web, de l'architecture de produits, du design et de WordPress. Que vous soyez un développeur en herbe ou un utilisateur chevronné de WordPress, vous trouverez ici des ressources utiles, des conseils pratiques et des discussions enrichissantes.

Merci de votre visite et n'hésitez pas à me contacter pour toute question, collaboration ou opportunité professionnelle. Je suis impatient de partager avec vous mes connaissances et mon enthousiasme pour l'industrie technologique et WordPress.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}