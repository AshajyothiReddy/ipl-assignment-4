// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-card">
      <div className="upper-part">
        <div className="upper-heading-part">
          <h1 className="main-heading">{competingTeam}</h1>
          <p className="desc">{date}</p>
          <p className="desc">{venue}</p>
          <p className="desc">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <hr className="line" />
      <div className="lower-part">
        <h1 className="heading">First Innings</h1>
        <p className="desc">{firstInnings}</p>
        <h1 className="heading">Second Innings</h1>
        <p className="desc">{secondInnings}</p>
        <h1 className="heading">Man Of The Match</h1>
        <p className="desc">{manOfTheMatch}</p>
        <h1 className="heading">Umpires</h1>
        <p className="desc">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
