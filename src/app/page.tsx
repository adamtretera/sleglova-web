"use client"

import ArticleList from "@/app/articel-list";
import {AnimatePresence, motion} from "framer-motion";

import {
    MdAccessTime, MdCircle,
    MdLocalParking,
    MdLocalPhone,
    MdLocationPin,
    MdMail,
    MdOutlineAlternateEmail, MdOutlineFileDownload, MdTram
} from "react-icons/md";
import {BsExclamationLg} from "react-icons/bs";

import {Links} from "@/app/links";

export default function Home() {
    return (
        <div className={"px-10 md:px-2 md:container m-auto"}>
            <header>
                <motion.nav initial={{opacity: 0, y: -100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.25,
                                delay: 0.1
                            }}
                            className={"pt-10 sm:pt-5 flex justify-center md:justify-between mb-10 md:mb-2"}>
                    <ul className={"flex gap-4  flex-col  md:flex-row text-xl "}>
                        <li className={"w-[12rem]"}>
                            <a className={"w-full uppercase justify-center flex  py-3 bg-primary rounded-lg text-white"}
                               href="/#kontakt">Kontakty</a>
                        </li>
                        <li className={"w-[12rem]"}>
                            <a className={"w-full uppercase justify-center flex  py-3 bg-primary rounded-lg text-white"}
                               href="/#sluzby">Naše služby</a>
                        </li>
                        <li className={"w-[12rem]"}>
                            <a className={"w-full uppercase justify-center flex  py-3 bg-primary rounded-lg text-white"}
                               href="/#onas">O nás</a>
                        </li>
                    </ul>
                    <img src={"/images/logo.webp"} alt={"main"} width={200} height={200}
                         className={"max-w-full col-span-1 hidden md:block"}/>

                </motion.nav>

            </header>

            <motion.section initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.25,
                                delay: 0.2
                            }}
                            className={"grid grid-cols-1 md:grid-cols-2 gap-4 md:justify-items-center md:min-h-[60vh]"}>

                <motion.div initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{
                                duration: 0.25,
                                delay: 0.2
                            }} className={"flex flex-col col-span-1 gap-10 items-center justify-center  sm:px-16"}>
                    <h1 className={"text-4xl sm:text-5xl font-sans text-center"}>
                        <div>
                            Notářská kancelář
                        </div>
                        <div>
                            JUDr. Kateřiny Šleglové,
                        </div>
                        <div>
                            notářky v Plzni
                        </div>
                    </h1>

                    <p className={"text-center text-xl"}>
                        Zkušený pracovní kolektiv je připraven vám
                        naslouchat, vyhodnotit vaše potřeby, požadavky a
                        nabídnout vám jasná a srozumitelná řešení.
                    </p>

                    <button
                        className={"self-center uppercase px-10  py-1 text-lg font-medium bg-primary text-white rounded-lg"}>
                        domluvte si <br/>
                        schůzku
                    </button>
                </motion.div>
                <div className={"flex w-full justify-end sm:hidden"}>
                    <img src={"/images/logo.webp"} alt={"main"} width={130} height={130}
                         className={"max-w-full col-span-1 "}/>
                </div>
                <motion.img initial={{opacity: 0, x: 100}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{
                                duration: 0.25,
                                delay: 0.2
                            }} src={"/images/main.webp"} alt={"main"} className={"max-w-full col-span-1"}/>
            </motion.section>

            <section
                id={"onas"}
                className={"py-10 sm:py-16 md:min-h-[80vh]"}>
                <motion.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.25,
                        delay: 0.2
                    }}
                    className={"flex justify-center"}>
                    <h2 className={"py-4 bg-primary font-semibold rounded-lg text-2xl sm:text-4xl text-white uppercase w-60 sm:w-72 flex items-center justify-center sm:mt-5"}>O
                        nás</h2>
                </motion.div>

                <div className={"grid grid-cols-1 sm:grid-cols-10 gap-4 md:py-5"}>

                    <motion.article initial={{opacity: 0, x: -100}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{
                                        duration: 0.25,
                                        delay: 0.2
                                    }}
                                    className={"md:flex items-center py-5 sm:gap-10 col-span-10 sm:col-span-6 "}>
                        <img src={"/images/headshot.webp"} width={180}/>
                        <div>
                            <h3 className={"underline text-2xl md:text-3xl font-semibold pt-5"}>
                                JUDr. Kateřina Šleglová, notářka
                            </h3>
                            <p className={"text-2xl pt-4 tracking-wide text-secondary"}>
                                JUDr. Kateřina Šleglová vystudovala Právnickou fakultu
                                Univerzity Karlovy v Praze. Notářskou praxi zahájila v
                                roce 2016. Většinu této praxe absolvovala v kanceláři
                                JUDr. Jana Stránského, notáře v Plzni. Notářkou byla
                                jmenovaná v roce 2024 a je členkou Notářské komory v
                                Plzni. Působí jako soudní komisařka v řízeních o
                                pozůstalosti v obvodu Okresního soudu Plzeň-jih.
                            </p>
                        </div>

                    </motion.article>

                    <motion.section
                        initial={{opacity: 0, x: 100}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 0.25,
                            delay: 0.2
                        }}
                        className={"col-span-10 sm:col-span-4 flex flex-col justify-between py-5 gap-10 sm:min-h-[30vh] items-center"}>
                        <article className={"text-center"}>
                            <h4 className={"text-xl md:text-2xl font-semibold flex gap-2 sm:pb-3 items-center"}>
                                <MdCircle className={"text-2xl fill-primary"}/>
                                Mgr. Bc. et Bc. Veronika Durasová
                            </h4>
                            <p className={"text-lg md:text-2xl text-secondary"}>
                                - notářská kandidátka a zástupkyně notářky
                            </p>
                            <p className={"text-lg md:text-2xl text-secondary"}>
                                - v notářské praxi působí od roku 2016
                            </p>
                        </article>

                        <article className={"text-center"}>

                            <h4 className={"text-xl md:text-2xl font-semibold flex gap-2 sm:pb-3 items-center"}>
                                <MdCircle className={"text-2xl fill-primary"}/>
                                Mgr. Radka Matoušů
                            </h4>
                            <p className={"text-lg md:text-2xl text-secondary"}>
                                - notářská tajemnice
                            </p>
                            <p className={"text-lg md:text-2xl text-secondary"}>
                                - v notářské praxi působí od roku 2011
                            </p>
                        </article>
                    </motion.section>

                </div>


                <motion.div
                    initial={{opacity: 0, y: -100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.25,
                        delay: 0.2
                    }}
                    className={"text-center text-xl font-semibold pt-10 md:w-8/12 md:m-auto"}>
                    Notářská kancelář poskytuje komplexní právní
                    služby založené na odborných znalostech a
                    praktických zkušenostech. Setkáte se zde s
                    profesionálním, ale zároveň vstřícným a
                    lidským přístupem.
                </motion.div>

            </section>


            <section id={"sluzby"} className={"md:min-h-[70vh] flex items-center justify-center flex-col"}>
                <motion.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.25,
                        delay: 0.2
                    }}
                    className={"flex justify-center"}>
                    <h2 className={"py-4 bg-primary font-semibold rounded-lg text-2xl sm:text-4xl text-white uppercase w-60 sm:w-72 flex items-center justify-center md:my-8"}>Naše
                        Služby</h2>
                </motion.div>
                <ArticleList/>

                <motion.p
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.25,
                        delay: 0.2
                    }}
                    className={"flex gap-4 self-end  items-center font-medium md:justify-end md:mt-[-6rem] text-xl"}>
                    <BsExclamationLg
                        className={"flex-shrink-0  text-6xl fill-primary md:text-7xl "}/> Notářská kancelář
                    poskytuje
                    služby rovněž v
                    německém a anglickém jazyce.
                </motion.p>
            </section>


            <motion.section initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.15,
                                delay: 0.2
                            }} className={"grid grid-cols-12 md:gap-x-10 pb-10 md:pt-20"} id={"kontakt"}>
                <div className={"col-span-12 md:col-span-3"}>
                    <div className={"flex py-4"}>
                        <h2 className={"py-4 bg-primary font-semibold rounded-lg text-2xl text-white uppercase w-60 flex items-center justify-center"}>
                            Kontakty</h2>
                    </div>
                    <section className={"flex flex-col  justify-center gap-4"}>
                        <div className={"flex items-center  gap-4"}>
                            <MdLocalPhone className={"text-4xl  fill-primary"}/>
                            <span className={"text-xl font-semibold"}>
                                +420 734 843 974
                            </span>
                        </div>
                        <div className={"flex  items-center gap-4 "}>
                            <MdOutlineAlternateEmail className={"text-4xl fill-primary"}/>
                            <a className={"text-xl font-semibold"} href={"mailto:info@notarplzenjih.cz"}>
                                info@notarplzenjih.cz
                            </a>
                        </div>

                        <div className={"flex items-center gap-4 "}>
                            <MdMail className={"text-4xl  fill-primary"}/>
                            <div>
                                <p className={"text-xl"}>datová schránka</p>
                                <p className={"text-xl font-semibold"}>
                                    qf73ye4
                                </p>
                            </div>

                        </div>


                    </section>
                    <section className={"flex flex-col  m-auto  gap-4 pt-10"}>
                        <h5 className={"text-2xl font-semibold flex gap-4"}>
                            <span>
                             Úřední hodiny
                            </span>
                            <MdAccessTime className={"text-4xl fill-primary"}/>
                        </h5>

                        <p>
                            Pondělí 8.00 - 12.00 / 13.00 - 16.00
                        </p>
                        <p>
                            Úterý 8.00 - 12.00 / 13.00 – 15.00
                        </p>
                        <p>
                            Středa 8.00 - 12.00 / 13.00 - 16.00
                        </p>
                        <p>
                            Čtvrtek 8.00 - 12.00 / 13.00 – 15.00
                        </p>
                        <p>
                            Pátek 8.00 – 14.00
                        </p>

                    </section>
                </div>

                <div className={"col-span-12 md:col-span-6 py-6 md:px-10 border-x-primary md:border-x-2 border-dashed"}>
                    <a href={"#"} className={"grid grid-cols-2 gap-8 justify-items-center"}>
                        <div className={"col-span-2 sm:col-span-1 w-60"}>
                            <iframe className={"border-0 h-full w-full"}
                                    src="https://en.frame.mapy.cz/s/hokapehazu"
                            ></iframe>
                            <span
                                className={"text-secondary text-center text-xs"}>2x klikněte na obrázek pro odkázání na mapy.cz</span>
                        </div>
                        <div className={"col-span-2 sm:col-span-1 w-60"}>
                            <img src={"/images/office.webp"} className={"w-full object-cover"}/>
                        </div>


                    </a>
                    <div className={"flex justify-center pt-10"}>
                        <h3 className={"text-2xl text-center md:text-3xl"}>
                            <span className={"font-semibold"}>Pražská 79/5</span>
                            <div className={"flex gap-4 items-center"}>
                                <MdLocationPin className={"text-4xl fill-primary"}/>
                                Vnitřní Město, 301 00 Plzeň
                            </div>
                        </h3>
                    </div>
                    <p className={"md:py-3 font-medium text-center text-secondary"}>
                        Kancelář se nachází v prvním patře domu, který je bezprostředně u náměstí Republiky.
                    </p>

                    <div className={"flex justify-center pt-10"}>
                        <h3 className={"text-lg"}>
                            <div className={"flex gap-4 items-center"}>
                                <MdLocalParking className={"flex-shrink-0 text-4xl fill-primary"}/>
                                Možnost parkování v parkovacím domě Rychtářka
                                nedaleko notářské kanceláře.
                            </div>
                        </h3>
                    </div>

                    <div className={"flex justify-center pt-10"}>
                        <h3 className={"text-lg"}>
                            <div className={"flex gap-4 items-center"}>
                                <MdTram className={"flex-shrink-0 text-4xl fill-primary"}/>
                                Kancelář sídlí přímo na zastávce „náměstí Republiky“, kam jezdí tramvaj č.1 a č. 2 (z
                                hlavního vlakového nádraží skvělá dostupnost).
                            </div>
                        </h3>
                    </div>

                </div>


                <div className={"col-span-12 md:col-span-3"}>
                    <h2 className={"py-4 bg-primary font-semibold rounded-lg text-2xl text-white uppercase w-60 flex items-center justify-center"}>
                        Odkazy</h2>

                    <Links/>
                    <h2 className={"py-4 bg-primary font-semibold rounded-lg text-2xl text-white uppercase w-60 flex items-center justify-center"}>Ke
                        stažení</h2>
                    <div className={"py-5"}>

                        <a href={"#"} className={"flex gap-4 items-center text-xl font-medium"} target="_blank"
                           rel="noreferrer">
                            <MdOutlineFileDownload className={"flex-shrink-0 text-4xl fill-primary"}/>
                            <span>formulář k předběžnému šetření</span>
                        </a>
                        <a href={"#"} className={"flex gap-4 items-center text-xl font-medium"} target="_blank"
                           rel="noreferrer">
                            <MdOutlineFileDownload className={"flex-shrink-0 text-4xl fill-primary"}/>
                            <span>plná moc</span>
                        </a>
                    </div>
                </div>

            </motion.section>

            <p className={"text-secondary pb-10"}>
                Po předchozí domluvě je možné poskytnout notářské služby i mimo úřední hodiny, případně mimo kancelář
                notářky.
            </p>


        </div>
    );
}
