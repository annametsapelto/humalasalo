import Image from 'next/image';

const Badge = (props) => (
    <div>
        <Image 
        src={props.pic}
        alt={props.alt}
        height="50"
        width="50"
        />
    </div>

    )

export default Badge;