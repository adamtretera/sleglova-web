import {MdLink} from "react-icons/md";

const links = [
    {
        label: "NOTÁŘSKÝ TARIF",
        url: "https://example.com/notarsky-tarif"
    },
    {
        label: "NOTÁŘSKÁ KOMORA ČESKÉ REPUBLIKY",
        url: "https://example.com/notarska-komora"
    },
    {
        label: "JUSTICE",
        url: "https://example.com/justice"
    },
    {
        label: "EVIDENCE SKUTEČNÝCH",
        url: "https://example.com/evidence-skutecnych"
    },
    {
        label: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ",
        url: "https://example.com/cesky-urad-zememericky"
    },
    {
        label: "OCHRANA OSOBNÍCH ÚDAJŮ",
        url: "/images/gdpr.pdf"
    }
];

export function Links() {
    return (
        <ul className={"py-5"}>
            {links.map(link => (
                <li key={link.url}>
                    <a href={link.url} className={"flex gap-4 items-center text-lg font-medium"} target="_blank"
                       rel="noreferrer">
                        <MdLink className={"flex-shrink-0 text-4xl fill-primary"}/>
                        <span>{link.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

}