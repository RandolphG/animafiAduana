import React, { Fragment } from "react";
import { Scrollspy } from "./ScrollSpyState";
import { images } from "../../resources";
import "./styles/_heritageStyles.scss";

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
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <h1
                  className="textSection__container_content_span_header"
                  id="One"
                >
                  The Aduana People
                </h1>
                <p className="textSection__container_content_span_heritageText">
                  The Aduana people believe that their ancestors originally came
                  from Asumanya. They also believe that they were led there by a
                  duiker, a deer like animal, that had flames coming out of the
                  mouth. They settled in Dormaa where they believe the flame is
                  still alight.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image01}
                alt="photos"
              />
            </div>
          </div>
        </section>
        <section className="textSection">
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <h2
                  className="textSection__container_content_span_header"
                  id="Two"
                >
                  Voyage to Akwamu
                </h2>
                <p className="textSection__container_content_span_heritageText">
                  A section of the Aduana people went to Akwamu. The principal
                  towns where the Aduana people settled were Dormaa, Akwamu, and
                  Twifo Herman. In Asante Kingdom, the Aduana people settled in
                  Kumawu, Asumanya, Kwaman, Boama, Agogo, Ampromaase, Akyem
                  Apapam, Tikurom, Kaase, Apagya, Bompata, Kwaso, Akyease,
                  Takyiman, Nsoatre, Drobo. The dog is the symbol of the Aduana
                  people.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image02}
                alt="photos"
              />
            </div>
          </div>
        </section>
        <div className="textSection">
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <h2
                  className="textSection__container_content_span_header"
                  id="Three"
                >
                  The First Queen Mother
                </h2>
                <p className="textSection__container_content_span_heritageText">
                  The first queen mother of of Obo Kwahu in 1675 was called
                  Animafi. She was a co-founder of Obo and it was the reason why
                  Obo royal stools, the OKOMENG and ADARKWA, rotate among three
                  different royal houses. These royal houses are Animafi Aduana
                  royal house, Gyemfa Kyeade royal house and Afari
                  Obuagyan/Ofosua Kobour Aduana royal house.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image03}
                alt="photos"
              />
            </div>
          </div>
        </div>
        <div className="textSection">
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <h2
                  className="textSection__container_content_span_header"
                  id="Four"
                >
                  Animafi's Final Migration
                </h2>
                <p className="textSection__container_content_span_heritageText">
                  Animafi finally migrated from Nyanoase near Nsawam after
                  series of migrations notably from Twifo Heman and the Akwamu
                  territories. She left her uncle King Ansa Sasraku of Akwamu
                  empire around 1670. Five years later she and her entourage
                  landed at Ekyeso near Obo. There, She met Gyemfa Kyeade's
                  group.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image04}
                alt="photos"
              />
            </div>
          </div>
        </div>
        <div className="textSection">
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <h2
                  className="textSection__container_content_span_header"
                  id="Five"
                >
                  The Palace Area
                </h2>
                <p className="textSection__container_content_span_heritageText">
                  Afterwards, they made a decision to move downwards to Hantrase
                  (the Palace Area) were they settled for many years. She had a
                  biological brother known as Ofori Kobon (Ofori Gyata) who also
                  founded the present day Agogo State. These pictures are
                  remnants of the original ancestral compound.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image05}
                alt="photos"
              />
            </div>
          </div>
        </div>
        <div className="textSection">
          <div className="textSection__container">
            <div className="textSection__container_content">
              <span className="textSection__container_content_span">
                <p
                  className="textSection__container_content_span_header"
                  id="Six"
                >
                  Symbol of Pride
                </p>
                <p className="textSection__container_content_span_heritageText">
                  Bright ideas and symbol of pride for Animafi Aduana people in
                  the past lay in ruins. A new and restored Ancestral Compound
                  will bring back all it’s significance. Our generation and
                  future generations will work tirelessly to preserve our
                  heritage so that the hard work of our ancestors will not be in
                  vain.
                </p>
              </span>
            </div>
            <div className="textSection__container_image">
              <img
                className="textSection__container_image_element"
                src={images.image07}
                alt="photos"
              />
            </div>
          </div>
          <p className="ourMessage">
            Animafi Aduana is volunteer-driven nonprofit association of ordinary
            people, inspired, full of passion, dedicated for a worthy cause.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Heritage;
