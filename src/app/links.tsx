import {MdLink} from "react-icons/md";

const links = [
    {
        label: "NOTÁŘSKÝ TARIF",
        url: "https://www.zakonyprolidi.cz/cs/2001-196"
    },
    {
        label: "NOTÁŘSKÁ KOMORA ČESKÉ REPUBLIKY",
        url: "https://www.nkcr.cz/"
    },
    {
        label: "JUSTICE",
        url: "https://justice.cz"
    },
    {
        label: "EVIDENCE SKUTEČNÝCH MAJITELŮ",
        url: "https://esm.justice.cz/ias/issm/rejstrik"
    },
    {
        label: "ČESKÝ ÚŘAD ZEMĚMĚŘICKÝ A KATASTRÁLNÍ",
        url: "https://cuzk.gov.cz/"
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
                    <a href={link.url} className={"flex gap-4 text-lg font-medium"} target="_blank"
                       rel="noreferrer">
                        <MdLink className={"flex-shrink-0 text-4xl fill-primary"}/>
                        <span>{link.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );

}