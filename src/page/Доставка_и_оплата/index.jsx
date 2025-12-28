import React from "react";
import { Strelka_ongga } from "@/components/icons";
import { useAppNavigation } from "@/hooks/useAppNavigation.js";
import { Tashqi, Дocтaвкa_и } from "./DeliveryAndPayment.styled.js";
import Дocтaвкa_Text from "./Delivery/index.jsx";
import Karta from "./Map/index.jsx";

function DeliveryAndPayment(props) {
  const { goToHome } = useAppNavigation();

  return (
    <>
      <div className="container">
        <Дocтaвкa_и>
          <div className="Katalog_strelka">
            <p onClick={goToHome}>Главная</p>
            <Strelka_ongga />
            <p>Доставка и оплата</p>
          </div>
        </Дocтaвкa_и>
        <Дocтaвкa_Text />
      </div>
      <Karta />
    </>
  );
}

export default DeliveryAndPayment;
