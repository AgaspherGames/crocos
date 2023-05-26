import React, { useState } from "react";
import Service, { IService } from "./Service";
interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const [services, setServices] = useState<IService[]>([
    { src: "/assets/services/security.png", text: "Охранные услуги", href: "#" },
    { src: "/assets/services/learning.png", text: "Обучение", href: "#" },
    { src: "/assets/services/market.png", text: "Маркет", href: "#" },
  ]);
  return (
    <div className="services">
      {services.map((service) => (
        <Service key={service.src} {...service} />
      ))}
    </div>
  );
};

export default Services;
