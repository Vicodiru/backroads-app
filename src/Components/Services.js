import React from 'react';
import Title from './Title';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="seervices" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-titleS">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
