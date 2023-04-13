

export default function Depannage({ Data }) {
    const { Service, Nom ,Prenom, Adress, Numero, TypeVD} = Data;
    const {Nom_Chauffeur ,Prenom_Chauffeur , Adress_Chauffeur, Numero_Chauffeur} = Data;
  return (
    <div>
      <h1>Service : { Service } </h1>
      <p>Nom : { Nom }</p>
      <p>Prenom : { Prenom } </p>
      <p>Address : { Adress } </p>
      <p>Numero : { Numero } </p>
      <p>Type De Vehicule : { TypeVD } </p>
      {Nom_Chauffeur ? (<p>Nom Chauffeur : { Nom_Chauffeur }</p>) : ('')}
      {Prenom_Chauffeur ? (<p>Prenom Chauffeur : { Prenom_Chauffeur }</p>) : ('')}
      {Adress_Chauffeur ? (<p>Adress Chauffeur : { Adress_Chauffeur }</p>) : ('')}
      {Numero_Chauffeur ? (<p>Numero Chauffeur : { Numero_Chauffeur }</p>) : ('')}
    </div>
  )
}
