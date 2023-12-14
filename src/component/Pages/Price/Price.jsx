import React from 'react'

function Price() {
    return (
        <main>
        <section className="pricing-plans">
            {/* <!-- <div className="pricing-card basic">
              <div className="heading">
                <h4>BASIC</h4>
                <p>for small websites or blogs</p>
              </div>
              <p className="price">
                $2
                <sub>/month</sub>
              </p>
              <ul className="features">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>1 domain</strong> name
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>10 GB</strong> of disk space
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>100GB </strong>of bandwidth
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>1 MySQL</strong> database
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>5 email</strong> accounts
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>cPanel</strong> control panel
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Free SSL</strong> certificate
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>24/7</strong> support
                </li>
              </ul>
              <button className="cta-btn">SELECT</button>
            </div> --> */}
            {/* <!-- <div className="pricing-card standard">
              <div className="heading">
                <h4>STANDARD</h4>
                <p>for medium-sized businesses</p>
              </div>
              <p className="price">
                $5
                <sub>/month</sub>
              </p>
              <ul className="features">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Unlimited</strong> domain name
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>50 GB</strong> of disk space
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>500GB </strong>of bandwidth
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>10 MySQL</strong> database
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>50 email</strong> accounts
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>cPanel</strong> control panel
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Free SSL</strong> certificate
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>24/7</strong> support
                </li>
              </ul>
              <button className="cta-btn">SELECT</button>
            </div> --> */}
            <div className="pricing-card premium">
              <div className="heading">
                <h4>PACOTE PREMIUM</h4>
              </div>
              <p className="price">
                RS 1800 
              </p>
              <ul className="features">
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Manutenção</strong> durante 1 ano
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Dominio gratuito</strong> durante 1 ano
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Servidor com tempo integral</strong> 24/7
                </li>
                
             
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Free SSL</strong> certificate
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>24/7 prioridade</strong> suporte  
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <strong>Tempo de entrega</strong> 3 a 10 dias
                </li>
              </ul>
              <button style={{cursor: 'pointer'}} className="cta-btn">Selecionar</button>
            </div>
          </section>
    </main>
    )
}

export {Price}
