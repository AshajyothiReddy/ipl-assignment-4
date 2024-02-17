// Write your code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamDetailsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamCardDetails()
  }

  fetchTeamCardDetails = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({
      teamDetailsList: updatedData,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamsList = () => {
    const {teamDetailsList} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="heading">IPL dashboard</h1>
        </div>
        <ul className="team-list-container">
          {teamDetailsList.map(team => (
            <TeamCard key={team.id} teamDetails={team} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderLoader() : this.renderTeamsList()
  }
}

export default Home
