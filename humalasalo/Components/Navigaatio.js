import Link from 'next/link';

const Navigaatio = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Etusivu</a></Link></li>
            <li><Link href="/toiminta"><a>Toiminta</a></Link></li>
            <li><Link href="/SCA"><a>SCA</a></Link></li>
            <li><Link href="/jäsenyys"><a>Jäsenyys</a></Link></li>
            <li><Link href="/seuralaisille"><a>Seuralaisille</a></Link></li>
            <li><Link href="/keikalle"><a>Keikalle</a></Link></li>
            <li><Link href="/vuokrattavana"><a>Vuokrattavana</a></Link></li>
            <li><Link href="/yhteystiedot"><a>Yhteystiedot</a></Link></li>
        </ul>
    </div>
)

export default Navigaatio;