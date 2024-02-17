// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails

  return (
    <div className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <h1 className="heading">{competingTeam}</h1>
      <p className="desc">{result}</p>
      <p className="status">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
