import React from "react";
import "./Feature.css";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaCogs,
  FaSyncAlt,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const WhyFedNet = () => {
  return (
    <section className="why-fednet">
      <h2>_Why FedNet?</h2>
      <p className="subtitle">
        A unified platform for federated learning with security, scalability,
        and efficiency.
      </p>
      <div className="cards-container">
        <Card
          icon={<FaNetworkWired />}
          title="Decentralized Training"
          description="FedNet enables decentralized model training across multiple devices without sharing raw data."
        />
        <Card
          icon={<FaShieldAlt />}
          title="Enhanced Security"
          description="Implements encryption and secure aggregation techniques to ensure data privacy."
        />
        <Card
          icon={<FaCogs />}
          title="Customizable Frameworks"
          description="Supports TensorFlow, PyTorch, and other ML frameworks for seamless integration."
        />
        <Card
          icon={<FaSyncAlt />}
          title="Efficient Synchronization"
          description="Optimized for minimal communication overhead and faster model convergence."
        />
        <Card
          icon={<FaUsers />}
          title="Scalable Collaboration"
          description="Handles large-scale distributed learning with thousands of clients efficiently."
        />
        <Card
          icon={<FaLaptopCode />}
          title="Cross-Platform Compatibility"
          description="Works across cloud, mobile, and edge devices to enable federated learning anywhere."
        />
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WhyFedNet;
