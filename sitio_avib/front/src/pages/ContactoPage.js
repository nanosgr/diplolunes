import React from 'react'

const ContactoPage = () => {
  return (
    <main className="holder">
      <div className="contacto">
          <form action="" method="" className="formulario">
              <h2>Contacto Rápido</h2>
              <p>
                  <label for="nombre">Nombre</label>
                  <input type="text" name="" />
              </p>
              <p>
                  <label for="email">Email</label>
                  <input type="text" name="" />
              </p>
              <p>
                  <label for="telefono">Teléfono</label>
                  <input type="text" name="" />
              </p>
              <p>
                  <label for="mensaje">Mensaje</label>
                  <textarea name=""></textarea>
              </p>
              <p>
                  <input type="submit" value="Enviar" />
              </p>
          </form>
          <div className="datos">
              <h2>Otras vías  de comunicación</h2>
              <p>También puede contactarse con nosotros usando los siguientes medios</p>
              <ul>
                  <li>Teléfono: 4222244</li>
                  <li>email: aberturas@avib.com</li>
                  <li>Facebook:</li>
                  <li>Twitter:</li>
                  <li>Skype:</li>
              </ul>
          </div>
      </div>
    </main>
  )
}

export default ContactoPage;