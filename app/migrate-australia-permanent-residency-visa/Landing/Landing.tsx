import React from 'react'
import BigVideo from "../BigVideo/BigVideo"
import TrustedVisa from '../TrustedVisa/TrustedVisa'
import Collabration from '../Collabration/Collabration'
import Review from "../Review/Review"
import CanadaSection from '../AusSection/Aussection'
import Form from "../Form/Form"
import Whychoose from '../Whychoose/Whychoose'
import Howto from "../Howto/Howto"
import Process from "../Processsuccess/Processsuccess"
import Requirements from "../Requirements/Requirements"
import Livein from '../Livein/Livein'
import Footer from "@/app/components/Footer";
import WhyAus from "../WhyAus/WhyAus"
import Typespr from "../Typespr/Typespr"
const Landing = () => {
  return (
    <div>
      <BigVideo></BigVideo>
      <Form></Form>
      <TrustedVisa></TrustedVisa>
      <Howto></Howto>
      <Process></Process>
      <Requirements></Requirements>
      <Collabration></Collabration>
      <Typespr></Typespr>
      <Review></Review>
      <WhyAus></WhyAus>
      <CanadaSection></CanadaSection>
      <Whychoose></Whychoose>
      <Livein></Livein>
      <Footer />
    </div>
  )
}

export default Landing