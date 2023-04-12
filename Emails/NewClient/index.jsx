import React from 'react'

export default function NewClient({ Data }) {

  const {
    Service,
    Nom,
    Prenom,
    Adress,
    Numero,
    Marchandise,
    TypeVT,
    Destination,
    Vehicule,
    BesoinDequipeDaide,
    PActuelle,
    PDisitination,
    TypeVD,
    TypeVM,
    DescDePanne,
    PPane
  } = Data;


  return (
    <div className='NewClient'>
      { Service ? <h1>Service : { Service }</h1> : ''}
      { Nom ? <h1>Nom : { Nom }</h1> : ''}
      { Prenom ? <h1>Prenom : { Prenom }</h1> : ''}
      { Adress ? <h1>Adress : { Adress }</h1> : ''}
      { Numero ? <h1>Numero : { Numero }</h1> : ''}
      { Marchandise ? <h1>Marchandise : { Marchandise }</h1> : ''}
      { TypeVT ? <h1> Type De Vehicule : { TypeVT }</h1> : ''}
      { Destination ? <h1> Destination : { Destination }</h1> : ''}
      { Vehicule ? <h1>Vehicule : { Vehicule }</h1> : ''}
      { BesoinDequipeDaide ? <h1>Besoin D'equipe D'aide : OUI</h1> : ''}
      { PActuelle ? <h1> Position Actuelle : { PActuelle }</h1> : ''}
      { TypeVD ? <h1> Type De Vehicule : { TypeVD }</h1> : ''}
      { PDisitination ? <h1> Position De Disitination : { PDisitination }</h1> : ''}
      { TypeVM ? <h1>Type De Vehicule : { TypeVM }</h1> : ''}
      { DescDePanne ? <h1>Description De Panne : { DescDePanne }</h1> : ''}
      { PPane ? <h1> Position De Panne : { PPane }</h1> : ''}
    </div>
  )
}
