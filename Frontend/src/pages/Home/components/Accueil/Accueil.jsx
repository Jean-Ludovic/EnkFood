import React, { Fragment } from "react";

import { accueil } from "../../../../data/data";

const Accueil = () => {
  
  const { description } = accueil;
  const texteAvecDrapeaux = `${description.texte}
  `; 

  const descriptionModifiee = {
    ...description,
    texte: texteAvecDrapeaux,
  };

  return (
    <Fragment>
      <DescriptionAccueil description={descriptionModifiee} />
    </Fragment>
  );
};

const DescriptionAccueil = ({ description }) => {
  const { titre } = description;
  return (
    <div className="text_accueil m-20 p-20">
      <div>
        <h1>{titre}</h1>
        <p>Le meilleur des variétés africaines 🇹🇬</p>
      </div>
    </div>
  );
};
export default Accueil;
