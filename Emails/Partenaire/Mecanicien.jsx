

export default function Mecanicien({ Data }) {
    const { Service, Nom ,Prenom, Adress, Numero, ZTravaille} = Data;
    
  return (
    <div>
      <h1>Service : { Service } </h1>
      <p>Nom : { Nom }</p>
      <p>Prenom : { Prenom } </p>
      <p>Address : { Adress } </p>
      <p>Numero : { Numero } </p>
      <p>Zone de travaille : { ZTravaille }</p>
    </div>
  )
}
