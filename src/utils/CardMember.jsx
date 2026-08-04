const CardMember = ({ member }) => {
    return (
        <div className="card-member-container">
            <div className="member-image">

                <img src={member.gif} alt={member.name} loading="lazy"
                decoding="async" />

            </div>
            <div className="member-info">

                <h2>{member.name}</h2>

                <h3>{member.nickname}</h3>

                <h4>{member.role}</h4>

                <p>{member.description}</p>

            </div>
        </div>
    )
}

export default CardMember
