import React from "react";
import { Kart } from "./Map.styled.js";

function Map(props) {
  return (
    <Kart>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.061470960959!2d69.20108341061842!3d41.28576660217431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta'lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1766910495210!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </Kart>
  );
}

export default Map;
