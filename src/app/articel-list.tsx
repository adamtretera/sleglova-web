import {MdCircle} from "react-icons/md";

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
            "Závěti, dědické smlouvy a jiná pořízení",
            "Pozůstalostní řízení a jiná pořízení pro případ smrti"
        ]
    }
];

const ArticleList = () => {
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 pt-10"}>
            {articles.map((article, index) => (
                <article key={index} className={"flex flex-col gap-4 items-center text-center"}>
                    <img
                        src={article.imgSrc}
                        alt={article.imgAlt}
                        className={"object-cover h-48 w-48 md:w-56 md:h-56 opacity-80 bg-blend-lighten"}
                    />
                    <h4 className={"text-3xl text-secondary font-semibold md:min-h-[5rem]"}>{article.title}</h4>
                    {article.content.map((paragraph, i) => (
                        <div key={paragraph} className={"flex gap-2 w-full"}>
                            <MdCircle className={"text-sm flex-shrink-0 fill-primary"}/>
                            <p className={" text-start"} key={i}>{paragraph}</p>

                        </div>
                    ))}
                </article>
            ))}
        </div>
    );
};

export default ArticleList;
