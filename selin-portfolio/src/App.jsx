import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Avatar
        alt="Selin profile picture"
        className="avatar"
        src="/src/assets/profile.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <h1>Selin Yan</h1>
      <h4>
        I love beautiful websites!
      </h4>
      <p>
        I enjoy exploring new web technologies and building meaningful customizable web projects.
      </p>
      <h4>Languages</h4>
      <p>#english #chinese #cantonese #wordpress #javascript</p>
      <h4>What inspires me</h4>
      <RestaurantIcon fontSize="large" />
      <MenuBookIcon fontSize="large" />
      <FlightTakeoffIcon fontSize="large" />
      <HeadphonesIcon fontSize="large" />
      <div className="card">


      </div>
      <h4>Where to find me</h4>
      <IconButton aria-label="github.com" onClick={() => window.open('https://www.github.com/selinyan')}>
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Email" onClick={() => window.open('mailto:selinyan2016@gmail.com')}>
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Email" onClick={() => window.open("tel:+358449754273")}>
        <PhoneIphoneIcon fontSize="large" />
      </IconButton>
    </>
  )
}

export default App
