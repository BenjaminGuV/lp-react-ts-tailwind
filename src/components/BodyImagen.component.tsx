import React from 'react'
import { Fade } from "react-awesome-reveal"

const BodyImagen = () => {
    return (
        <div>
            <section className="w-full h-screen bg-accounting bg-cover bg-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Fade>
                        <h1 className='cyellow'>Modernizamos la <strong>Contabilidad</strong></h1>
                    </Fade>
                </div>
            </section>
        </div>
    )
}

export default BodyImagen