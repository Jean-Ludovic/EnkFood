const PRODUITS_URL = "http://localhost:5000/produits";

export const getProduit = async (produitId) => {
  const response = await fetch(`${PRODUITS_URL}/${produitId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Le produit ${produitId} n'a pas été récupéré`);
  }
};

export const deleteProduit = async (produitId) => {
  const response = await fetch(`${PRODUITS_URL}/${produitId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return produitId;
  } else {
    throw new Error(
      `Une erreur est survenue lors de la supprimer le produit ${produitId} `
    );
  }
};

export const updateProduit = async (values, produitId) => {
  const response = await fetch(`${PRODUITS_URL}/${produitId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, _id: produitId }),
  });

  if (response.ok) {
    return true;
  } else {
    throw new Error("Il y a eu une erreur dans la mise è jour du produit.");
  }
};

export const postProduit = async (values) => {
  const response = await fetch(`${PRODUITS_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (response.ok) {
    return true;
  } else {
    throw new Error(`Une erreur est survenue lors de l'ajout du produit !`);
  }
};
