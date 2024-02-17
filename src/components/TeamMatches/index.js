// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedTeamBannerUrl = data.team_banner_url
      const updatedLatestMatchDetails = {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.secondInnings,
        matchStatus: data.latest_match_details.match_status,
      }

      const updatedRecentMatches = data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.secondInnings,
        matchStatus: each.match_status,
      }))
      this.setState({
        teamBannerUrl: updatedTeamBannerUrl,
        latestMatchDetails: updatedLatestMatchDetails,
        recentMatches: updatedRecentMatches,
      })
    }
  }

  render() {
    const {teamBannerUrl, recentMatches, latestMatchDetails} = this.state
    return (
      <div className="bg-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <h1 className="heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-match-team-card-container">
          {recentMatches.map(each => (
            <MatchCard key={each.id} matchCardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
