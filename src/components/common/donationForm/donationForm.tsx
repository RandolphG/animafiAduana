import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Modal, Order, Toppings, Base, Header, Home } from "./components";
import { AnimatePresence } from "framer-motion";
import "./styles/_donationFormStyles.scss";

/**
 *  Donation Form
 *
 * Argument of type any is not assignable to type never:
 * https://www.explainprogramming.com/typescript/never-type/
 *
 * Uncaught Could not find router reducer in state tree,
 * it must be mounted under "router" :
 * https://stackoverflow.com/questions/54315988/connectedrouter-error-could-not-find-router-reducer-in-state-tree-it-must-be-m
 *
 *  @constructor
 */
function DonationForm() {
  const location = useLocation();
  const [pizza, setPizza] = useState<{ base: string; toppings: any[] }>({
    base: "",
    toppings: [],
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  function addBase(base: any) {
    setPizza({ ...pizza, base });
  }

  function addTopping(topping: any[]) {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default DonationForm;
