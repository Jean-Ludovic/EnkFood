import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../Admin.module.scss";
import { postProduit } from "../../../../apis/produits";
import { Link } from "react-router-dom";

import { GiReturnArrow } from "react-icons/gi";
const AdminAddProduitForm = ( {setShowForm }) => {
  const [success, setSuccess] = useState(false);
  const defaultValues = {
    name: "",
    note: "",
    image: "",
  };
 
  const schema = yup.object({
    name: yup
      .string()
      .required("Le nom du produit est requis !")
      .min(1, "Nom trop court."),
    note: yup
      .string()
      .required("Les notes du produit sont requises !")
      .min(5, "Notes trop courtes."),
    image: yup
      .string()
      .required("L'url de l'image du produit est requise !")
      .min(5, "Url de l'image invalide."),
  });

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const submit = async (values) => {
    try {
      const response = await postProduit(values);
      if (response) {
        setSuccess(true);
        reset(defaultValues);
      }
    } catch (error) {
      setError("submit", { type: "generic", message: error.message });
    }
  };

  return (
    <div className={styles.add_product_form}>

      <Link to="/" className={styles.backButton}>
        <GiReturnArrow size ="50px" color="Black"/> 
      </Link>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit(submit)} action="">
        <div>
          <label htmlFor="name">Le nom du produit : </label>
          <input type="text" {...register("name")} />
          {errors?.name && (
            <span style={{ color: "red" }}> {errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="note">Les notes du produit : </label>
          <input type="text" {...register("note")} />
          {errors?.note && (
            <span style={{ color: "red" }}> {errors.note.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="image">Le lien de l'image du produit : </label>
          <input type="text" {...register("image")} />
          {errors?.image && (
            <span style={{ color: "red" }}> {errors.image.message}</span>
          )}
        </div>
        <button disabled={isSubmitting} type="submit" className="decouvrir">
          Sauvegarder
        </button>
        <div>
          {errors?.submit && (
            <span style={{ color: "red" }}> {errors.submit.message}</span>
          )}
          {success && <span style={{ color: "green" }}> Ajout effectué !</span>}
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduitForm;
