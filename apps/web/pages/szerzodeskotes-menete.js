import React from 'react'
import Banner from '../components/szerzodeskotes-menete/banner'
import NavigationBar from '../components/navigation-bar'
import Description from '../components/szerzodeskotes-menete/description'
import Steps from '../components/szerzodeskotes-menete/steps'

export default function SzerzodeskotesMenete() {
  return (
    <>
    <NavigationBar pageTitle="Szerződéskötés menete" currentPage="szerzodeskotes-menete"/>
    <Banner/>
    <Description/>
    <Steps/>
    </>
  )
}
