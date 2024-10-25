import {motion} from "framer-motion";
import ArticleCard from "@/app/article-card";
import {MdOutlineInfo} from "react-icons/md";

const articles = [
    {
        imgSrc: "/images/rodina.webp",
        imgAlt: "Rodina, majetek a ochrana práv",
        title: "Rodina, majetek a ochrana práv",
        content: [
            "Převody majetku a úschovy (darovací smlouva, kupní smlouva, směnná smlouva úschova peněz a listin)",
            "Ochrana věřitele (notářské zápisy se svolením k vykonatelnosti, zástavní smlouva, oznámení věřitele o jeho výhradě práva dovolat se neúčinnosti právního jednání)",
            "Manželské majetkové právo",
            "Statut svěřenského fondu",
            "Určení opatrovníka pro případ budoucí vlastní nezpůsobilosti"
        ]
    },
    {
        imgSrc: "/images/podnikani.webp",
        imgAlt: "Právnické osoby a podnikání",
        title: "Právnické osoby a podnikání",
        content: [
            "Zakládání společností, družstev a jejich změny (založení obchodní korporace, dohoda společníků a akcionářů, valná hromada, rozhodnutí jediného společníka a akcionáře)",
            "Přímé zápisy do veřejných rejstříků",
            "Založení nadace a nadačního fondu",
            "Založení společenství vlastníků jednotek"
        ]
    },
    {
        imgSrc: "/images/overovani.webp",
        imgAlt: "Ověřování a výpisy z rejstříků",
        title: "Ověřování a výpisy z rejstříků",
        content: [
            "Vyhledávání v rejstřících a kontaktní místo Czech POINT (výpisy z Katastru nemovitostí, obchodního rejstříku a z ostatních rejstříků, výpisy z Rejstříku trestů a další)",
            "Ověření shody opisu nebo kopie s listinou",
            "Ověření pravosti podpisu"
        ]
    },
    {
        imgSrc: "/images/dedicke-pravo.webp",
        imgAlt: "Dědické právo",
        title: "Dědické právo",
        content: [
            "Závěti, dědické smlouvy a jiná pořízení pro případ smrti",
            "Pozůstalostní řízení"
        ]
    }
];
const variants = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
        },

    }),


    hidden: {opacity: 0, y: -50},

}


const ArticleList = () => {
    return (
        <div>


            <motion.div

                className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4  pt-5"}>
                {articles.map((article, index) => (
                    <motion.div key={article.title} custom={index}
                                variants={variants}
                                viewport={{once: true}}

                                initial={"hidden"}
                                whileInView={"visible"}>

                        <ArticleCard key={index} image={article.imgSrc} imageAlt={article.imgAlt} title={article.title}
                                     content={article.content}/>
                    </motion.div>


                ))}


            </motion.div>
            <motion.p
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.3,
                    delay: 0.3
                }}
                className={"items-center flex gap-4  text-xl font-semibold pt-10  md:m-auto"}>
                <MdOutlineInfo className={"flex-shrink-0 text-4xl fill-primary"}/>
                Notářská kancelář
                poskytuje
                služby rovněž v
                německém a anglickém jazyce.
            </motion.p>
        </div>
    );
};

export default ArticleList;
