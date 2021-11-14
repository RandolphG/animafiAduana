import React, { Fragment } from "react";
import { Scrollspy } from "./ScrollSpyState";
import "./styles/_heritageStyles.scss";
import { images } from "../../resources";

/**
 * Heritage Page
 */
const Heritage = () => {
  return (
    <Fragment>
      <Scrollspy
        ids={["One", "Two", "Three", "Four", "Five", "Six", "Seven"]}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="active"
        itemClassName="spyItemClass"
      />
      <div id="main">
        <section className="textSection">
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ color: "black" }}>
                <h1 id="One">The Aduana People</h1>
                <p className="heritageText" style={{ color: "black" }}>
                  The Aduana people believe that their ancestors originally came
                  from Asumanya. They also believe that they were led there by a
                  duiker, a deer like animal, that had flames coming out of the
                  mouth. They settled in Dormaa where they believe the flame is
                  still alight.
                </p>
              </span>
            </div>
            <div style={{ width: "100%", background: "green" }}>
              <img
                style={{ width: "100vw", objectFit: "cover" }}
                src={images.image01}
                alt="photos"
              />
            </div>
          </div>
        </section>
        <section className="textSection">
          <h2 id="Two">Voyage to Akwamu</h2>
          <p className="heritageText">
            A section of the Aduana people went to Akwamu. The principal towns
            where the Aduana people settled were Dormaa, Akwamu, and Twifo
            Herman. In Asante Kingdom, the Aduana people settled in Kumawu,
            Asumanya, Kwaman, Boama, Agogo, Ampromaase, Akyem Apapam, Tikurom,
            Kaase, Apagya, Bompata, Kwaso, Akyease, Takyiman, Nsoatre, Drobo.
            The dog is the symbol of the Aduana people.
          </p>
          <img src={images.image02} alt="photos" />
          <br />
        </section>
        <div className="textSection">
          <h2 id="Three">The First Queen Mother</h2>
          <p className="heritageText">
            The first queen mother of of Obo Kwahu in 1675 was called Animafi.
            She was a co-founder of Obo and it was the reason why Obo royal
            stools, the OKOMENG and ADARKWA, rotate among three different royal
            houses. These royal houses are Animafi Aduana royal house, Gyemfa
            Kyeade royal house and Afari Obuagyan/Ofosua Kobour Aduana royal
            house.
          </p>
          <img src={images.image03} alt="photos" />
          <br />
        </div>
        <div className="textSection">
          <h2 id="Four">Animafi's Final Migration</h2>
          <p className="heritageText">
            Animafi finally migrated from Nyanoase near Nsawam after series of
            migrations notably from Twifo Heman and the Akwamu territories. She
            left her uncle King Ansa Sasraku of Akwamu empire around 1670. Five
            years later she and her entourage landed at Ekyeso near Obo. There,
            She met Gyemfa Kyeade's group.
          </p>
          <img src={images.image04} alt="photos" />
          <br />
        </div>
        <div className="textSection">
          <h2 id="Five">The Palace Area</h2>
          <p className="heritageText">
            Afterwards, they made a decision to move downwards to Hantrase (the
            Palace Area) were they settled for many years. She had a biological
            brother known as Ofori Kobon (Ofori Gyata) who also founded the
            present day Agogo State. These pictures are remnants of the original
            ancestral compound.
          </p>
          <img src={images.image05} alt="photos" />
          <br />
        </div>
        <div className="textSection">
          <h2 id="Six">Symbol of Pride</h2>
          <p className="heritageText">
            Bright ideas and symbol of pride for Animafi Aduana people in the
            past lay in ruins. A new and restored Ancestral Compound will bring
            back all it’s significance. Our generation and future generations
            will work tirelessly to preserve our heritage so that the hard work
            of our ancestors will not be in vain.
          </p>
          <img src={images.image07} alt="photos" />
          <p className="ourMessage">
            Animafi Aduana is volunteer-driven nonprofit association of ordinary
            people, inspired, full of passion, dedicated for a worthy cause.
          </p>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Heritage;
