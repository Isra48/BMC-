import React from 'react'
import '../Components/styles/intro.css'
import segmento_clientes from '../images/intro/segmento-cliente.jpg'
import propuesta_valor from '../images/intro/propuesta-valor.jpg'
import relacion_cliente from '../images/intro/relacion-cliente.jpg'
import canales_dist from '../images/intro/canales-distribucion.jpg'
import fuentes_ingresos from '../images/intro/fuente-ingresos.jpg'
import actividades_clave from '../images/intro/actividades-clave.jpg'
import recursos_clave from '../images/intro/recursos-clave.jpg'
import socios from '../images/intro/socios.jpg'
import costos from '../images/intro/costos.jpg'


class intro extends React.Component {
    render() {
        return <div className="main-info">

    <div className="tips">
        <div className="tips-title" style={{marginBottom: '3em', marginTop: '1em'}}>
            <h2 className="titulo1">Introducción al Business Model Canvas (BMC)</h2>
        </div>
    
      <section className="espacio-tips">
        <div className="row">
          <div className="col-md-7">
            <h2 className="titulos">1. Segmento de clientes </h2>
            <p className="pt">Al completar este bloque, tendrás identificadas y delimitadas las características del cliente que va a comprar tu producto o servicio. <b>Recuerda que una empresa puede tener varios tipos de clientes y tu misión será enamorarlos con cada acción que realices.</b>  Asignarles nombre y características para tomar decisiones siempre pensando en ellos. Es más sencillo recordar a Pedro o Sandra de 34 años que trabaja en un coworking. ¿Quieres conocerlos ya? Comienza tu BMC ahora mismo.
            </p>
          
          </div>
          <div className="col-md-5">
            <img src={segmento_clientes} alt=" Imagen de BMC" className="img_ejemplo "/>
          </div>
        </div>

      </section>

    
      <section>
        <div className="row">
          <div className="col-md-7">
            <h2 className="titulos">2. Propuesta de valor</h2>
            <p className="pt">¿Por qué el cliente va a comprar tu producto y no el de la competencia? <b>En este segundo bloque definirás eso que te hace único y especial.</b>  Para encontrar tu valor no hace falta romperte la cabeza, solo analiza cuál crees que es tu mejor cualidad. No seas uno más del montón y comienza ya.
              </p>
         
          </div>
          <div className="col-md-5">
            <img src={propuesta_valor} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

          
      <section>
        <div className="row">
          <div className="col-md-7">
            <h2 className="titulos">3. Canales de distribución</h2>
            <p className="pt"><b>¿Dónde te encontrarán tus clientes?</b> En este bloque te llevarás todo lo necesario para saber cómo darás a conocer tu producto o servicio y cómo lo entregarás. <b>Es momento de ponerte creativo y definir cómo te verá el mundo.</b> Dale vida a tu marca ya. 
              </p>
          

          </div>
          <div className="col-md-5">
            <img src={canales_dist} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

      <section>
          <div className="row">
            <div className="col-md-7">
              <h2 className="titulos">4.
                Relación con clientes
                </h2>
              <p className="pt">No basta con conocerlo, hay que enamorarlo. <b>Cuando completes este bloque sabrás cómo conquistar a tu cliente como todo un experto.</b>  ¿Quieres saber qué le gusta?, ¿si prefiere sugerencias o es un comprador decidido? No lo pienses más y defínelo ahora mismo. 
                </p>
            
  
            </div>
            <div className="col-md-5">
              <img src={relacion_cliente} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

        <section>
          <div className="row">
            <div className="col-md-7">
              <h2 className="titulos">5. Fuente de ingresos</h2>
              <p className="pt"> <b>Ninguna empresa existe sin ingresos.</b> En el quinto bloque encontrarás de dónde recibirás dinero. No basta con la simple venta, hoy es posible tener fuentes menos evidentes en donde aproveches mejor todos tus recursos. <b>Este punto es el más importante para convertir tu idea en una empresa rentable.</b> Descubre todas las posibilidades que tiene tu negocio.</p>
           
  
            </div>
            <div className="col-md-5">
              <img src={fuentes_ingresos} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

      <section>
        <div className="row">
          <div className="col-md-7">
                <h2 className="titulos">6. Recursos claves</h2>
                <p className="pt">¿Cuáles son los recursos indispensables para llevar a cabo tus procesos? <b>En este bloque conocerás qué tendrás que comprar o a qué experto tendrás que contratar.</b> Es el momento en que integrarás a tu dream team para despegar. ¡No pierdas más tiempo!
                  </p>
        
              </div>
              <div className="col-md-5">
                <img src={recursos_clave} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
              </div>
        </div>

      </section>


        <section>
          <div className="row">
            <div className="col-md-7">
              <h2 className="titulos">7. Actividades clave</h2>
              <p className="pt">Sabemos que ya tienes muy claro lo que harás, pero <b>¿sabes cuánto te tardas en tu producción o el tiempo que tarda en desarrollarse cada tarea?</b> Estás en el lugar correcto para asignar costos y tiempos por cada etapa de tu negocio. ¡Comienza ahora!
                </p>
            

            </div>
            <div className="col-md-5">
              <img src={actividades_clave}alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

    
      <section>
        <div className="row">
          <div className="col-md-7">
            <h2 className="titulos">8. Socios clave</h2>
            <p className="pt">Nadie construye un edificio solo. <b>En este bloque conocerás qué tendrás que comprar o a qué experto tendrás que contratar.</b> Además de tu equipo necesitarás socios clave para levantar los cimientos de tu operación. Aquí descubrirás por qué son los aliados perfectos para ti. ¿Te causa curiosidad? Piensa bien en quiénes son y no olvides a ninguno.
              </p>
         

          </div>
          <div className="col-md-5">
            <img src={socios} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
          </div>
        </div>

      </section>

        <section>
          <div className="row">
            <div className="col-md-7">
              <h2 className="titulos">9. Estructura de costos</h2>
              <p className="pt">El último bloque es el que cerrará todo tu proceso. Los recursos, actividades y hasta los detalles para enamorar a tus clientes generan gastos. <b>Cierra con broche de oro tu BMC y crea tu lista de costos fijos y variables para encontrar tu inversión inicial</b> y levantar la cortina de tu negocio de inmediato. ¡Queremos verte emprender!
                </p>
           
  
            </div>
            <div className="col-md-5">
              <img src={costos} alt=" Imagen de BMC" className="img_ejemplo espacio-img"/>
            </div>
          </div>
  
        </section>

    </div>
    

            
        </div>
    }
}

export default intro;