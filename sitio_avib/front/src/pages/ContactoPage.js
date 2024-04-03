import '../styles/components/pages/ContactoPage.css';

const ContactoPage = () => {
  return (
    <main className="holder">
        <div className='contacto'>
            <form action="" method="" className="formulario">
            <h2>Contacto Rápido</h2>
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
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