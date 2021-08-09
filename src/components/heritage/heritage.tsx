import React from 'react'
import './styles/_heritageStyles.scss'

const Heritage = () => {
  return (
    <div>
      <div className="CSSgal">
        <s id="s1" />
        <s id="s2" />
        <s id="s3" />
        <s id="s4" />
        <s id="s5" />

        <div className="slider">
          <div
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              background: '#e95',
              padding: '0 2rem',
              border: 'solid black 3px',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '39%',
                fontSize: '2rem',
                padding: '0 2rem',
              }}
            >
              The Aduana people believe that their ancestors originally came
              from Asumanya. They also believe that they were led there by a
              duiker, a deer like animal, that had flames coming out of the
              mouth. They settled in Dormaa where they believe the flame is
              still alight.
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              background: '#e95',
              padding: '0 2rem',
              border: 'solid black 3px',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '30%',
                fontSize: '2rem',
                padding: '0 2rem',
              }}
            >
              A section of the Aduana people went to Akwamu. The principal towns
              where the Aduana people settled were Dormaa, Akwamu, and Twifo
              Herman. In Asante Kingdom, the Aduana people settled in Kumawu,
              Asumanya, Kwaman, Boama, Agogo, Ampromaase, Akyem Apapam, Tikurom,
              Kaase, Apagya, Bompata, Kwaso, Akyease, Takyiman, Nsoatre, Drobo.
              The dog is the symbol of the Aduana people.
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              background: '#e95',
              padding: '0 2rem',
              border: 'solid black 3px',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '30%',
                fontSize: '2rem',
                padding: '0 2rem',
              }}
            >
              The first queen mother of of Obo Kwahu in 1675 was called Animafi
              She was a co-founder of Obo and it was the reason why Obo royal
              stools the OKOMENG and ADARKWA, rotate among three different royal
              houses These royal houses are Animafi Aduana royal house, Gyemfa
              Kyeade royal house and Afari Obuagyan/Ofosua Kobour Aduana royal
              house.
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              background: '#e95',
              padding: '0 2rem',
              border: 'solid black 3px',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '30%',
                fontSize: '2rem',
                padding: '0 2rem',
              }}
            >
              Animafi finally migrated from Nyanoase near Nsawam after series of
              migrations notably from Twifo Heman and the Akwamu territories.
              She left her uncle King Ansa Sasraku of Akwamu empire around 1670.
              Five years later she and her entourage landed at Ekyeso near Obo.
              There, She met Gyemfa Kyeade's group.
            </div>
          </div>
        </div>

        <div className="prevNext">
          <div>
            <a href="#s5" />
            <a href="#s2" />
          </div>
          <div>
            <a href="#s1" />
            <a href="#s3" />
          </div>
          <div>
            <a href="#s2" />
            <a href="#s4" />
          </div>
          <div>
            <a href="#s3" />
            <a href="#s5" />
          </div>
          <div>
            <a href="#s4" />
            <a href="#s1" />
          </div>
        </div>

        <div className="bullets">
          <a href="#s1">1</a>
          <a href="#s2">2</a>
          <a href="#s3">3</a>
          <a href="#s4">4</a>
          <a href="#s5">5</a>
        </div>
      </div>
    </div>
  )
}

export default Heritage
