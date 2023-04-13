

export default function Transport({ Data }) {
    const { Service, Nom ,Prenom, Adress, Numero, TypeVT, Tonage} = Data;
    const {Nom_Chauffeur ,Prenom_Chauffeur , Adress_Chauffeur, Numero_Chauffeur} = Data;
  return (
    <div>
      <h1>Service : { Service } </h1>
      <p>Nom : { Nom }</p>
      <p>Prenom : { Prenom } </p>
      <p>Address : { Adress } </p>
      <p>Numero : { Numero } </p>
      <p>Type De Vehicule : { TypeVT } </p>
      <p>Tonage : { Tonage } </p>
      {Nom_Chauffeur ? (<p>Nom Chauffeur : { Nom_Chauffeur }</p>) : ('')}
      {Prenom_Chauffeur ? (<p>Prenom Chauffeur : { Prenom_Chauffeur }</p>) : ('')}
      {Adress_Chauffeur ? (<p>Adress Chauffeur : { Adress_Chauffeur }</p>) : ('')}
      {Numero_Chauffeur ? (<p>Numero Chauffeur : { Numero_Chauffeur }</p>) : ('')}
    </div>
  )
}
