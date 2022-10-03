import Collapse from "../components/Collapse";

import background from "../assets/hero-bg-desktop.png";

const AboutPage = () => {
  return (
    <main className="about-page">
      <section
        className="hero__section about"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      <section className="about-page__collapses">
        <Collapse name={"Fiabilité"} isOpen={false}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse name={"Respect"} isOpen={false}>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse name={"Service"} isOpen={false}>
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>

        <Collapse name={"Sécurité"} isOpen={false}>
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
      </section>
    </main>
  );
};

export default AboutPage;
