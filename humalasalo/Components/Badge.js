import Image from 'next/image';

const Badge = (props) => (
    <div>
        <Image 
        src={props.pic}
        alt={props.alt}
        height="60"
        width="60"
        />
    </div>

    )

export default Badge;