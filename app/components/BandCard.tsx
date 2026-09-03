import Image from "next/image"
import { Band } from "../types/band"

type Props = {
    band: Band
}

export default function BandCard({ band }: Props) {
    return (
        <article className="bandCard">
            <Image
                src={band.image}
                alt={band.name}
                width={400}
                height={250}
                sizes="(max-width: 768px) 100vw, 33vw"
            />

            <h2>{band.name}</h2>
            <p>แนวเพลง: {band.genre}</p>

            <h3>สมาชิก</h3>

            <ul>
                {band.members.map((member) => (
                    <li key={member.name}>
                        {member.name} - {member.role}
                    </li>
                ))}
            </ul>
        </article>
    )
}