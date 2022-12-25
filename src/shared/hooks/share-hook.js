import { useState, useCallback } from "react";


export const useCart = () => {
  const [shop, setShop] = useState();
  const [show, setShow] = useState(false);

  const buy = useCallback((shopping) => {
    setShop(shopping)
  }, []);
  const removeItem = useCallback((shopping) => {
    setShop(shopping)
  }, []);
  const showModal = useCallback(() => {
    setShow(true)
  }, []);
  const closeModal = useCallback(() => {
    setShow(false)
  }, []);
  return { buy,removeItem, shop, showModal, closeModal, show };
};
