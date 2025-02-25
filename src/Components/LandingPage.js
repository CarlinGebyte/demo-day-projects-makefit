import React from 'react';
import styles from "../Styles/LandingPage/LandingPage.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import LogoWhite from "../Styles/Images/logo-white.png";
import foodHome from "../Styles/Images/food.png";
import foodAnalyze from "../Styles/Images/food-analyze.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import nutritionTable from "../Styles/Images/nutritionTable.jpg";
import contactimage from "../Styles/Images/contact.png";

const LandingPage = () => {
    const navigate = useNavigate();

    //FUNCION PARA REDIRECCIONAR LA PAGINA AL LOGIN
    const redirectionLogin = () => {
        navigate("/login");
    }

    //FUNCION PARA OBTENER DATOS DEL FORMULARIO
    const handleContact = (e) => {
        e.preventDefault();
        const mailto = "jesudpf21@hotmail.com"
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        //VALIDACION DE CAMPOS
        if (name === "" || email === "" || message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields',
            })
        } else {
            //ENVIO DE DATOS AL MAIL
            window.location.href = `mailto:${mailto}?subject=${name} - ${email}&body=${message}`;
            //ALERTA DE ENVIO CORRECTO
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Your message has been sent successfully',
            })
            //RESETEAR FORMULARIO
            e.target.reset();
        }
    }

    return (

        <div className={styles.landing_container}>

            <nav className={styles.landing_nav}>
                <img src={Logo} alt=""></img>
            </nav>

            {/* SECCION DE HOME */}
            <div id="home" className={styles.landing_home}>
                <motion.div
                    className={styles.landing_home__text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1>Multifaceted recipe finder</h1>
                    <h2>
                        We present the most complete website of healthy
                        recipes where you will find countless healthy food
                        recipes with all their nutritional properties and an
                        amount of information about each recipe like you have
                        never seen before.
                    </h2>
                    <button onClick={() => redirectionLogin()}>Get Started</button>
                </motion.div>
                <motion.div
                    className={styles.landing_home__img}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <img src={foodHome} alt="" />
                </motion.div>
            </div>

            {/* SECCION DE ANALISIS DE NUTRIENTES */}
            <div className={styles.landing_analyze}>
                <div className={styles.landing_analyze__img}>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        src={foodAnalyze}
                        alt="food" />
                </div>
                <motion.div
                    className={styles.landing_analyze__text}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
                    <h1>
                        Analyze nutritional and calorie information for any recipe
                    </h1>
                    <h2>
                        Quickly and easily access detailed nutritional breakdowns and
                        calculate calories in any recipe—from recipes you’ve discovered
                        online to recipes you’ve created yourself.
                    </h2>
                </motion.div>
            </div>


            {/* SECCION DE INFORMACION NUTRICIONAL */}
            <div id='nutitrionalInfo' className={styles.landing_nutitrionalInfo}>
                <div className={styles.landing_nutitrionalInfo__img}>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        src={nutritionTable}
                        alt="table" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={styles.landing_nutitrionalInfo__text}>
                    <h1>Nutritional Information</h1>
                    <h2>
                        We compute the nutritional information for recipes
                        automatically using a proprietary algorithm. With
                        this information, you can find individual recipes or
                        even create entire meal plans that satisfy your users'
                        dietary goals.
                    </h2>
                </motion.div>
            </div>

            {/* SECCION DE FORMULARIO DE CONTACTO */}
            <div id='contact' className={styles.landing_contactForm}>
                <motion.form
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleContact}>
                    <h1>Contact Us</h1>

                    <label>Name</label>
                    <input name="name" type="text"></input>

                    <label>Email</label>
                    <input name="email" type="email"></input>

                    <label>Message</label>
                    <textarea name="message"></textarea>

                    <button>Send</button>
                </motion.form>
                <div className={styles.landing_contactForm__img}>
                    <img src={contactimage} alt="contactpng" />
                </div>
            </div>

            <div id='footer' className={styles.landing_footer}>
                <div className={styles.landing_footer__img}>
                    <img src={LogoWhite} alt=""></img>
                </div>

                <div className={styles.landing_footer__text}>
                    <h1>© 2022 MakeFit. All rights reserved.</h1>
                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage