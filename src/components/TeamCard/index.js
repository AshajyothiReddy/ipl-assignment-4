// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} className="teamImage" alt={name} />
        <p className="team-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
