import React from 'react'
import { style } from 'glamor'
import { Link } from 'react-router'
import { Label } from 'semantic-ui-react'
import { color, lightness } from 'kewler'
import { graphql } from 'react-apollo'
import getContainersTotal from '../queries/getContainersTotal'
import colors from '../colors'

const containerStyles = style({
  background: colors.primary,
  minWidth: '200px',
  flexGrow: 1
})

const linkStyles = style({
  padding: '10px',
  color: '#fff',
  ':hover': {
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%'
})

const logoStyles = style({
  background: color(colors.primary, lightness(-15)),
  color: '#fff',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px'
})

const Sidebar = ({ data }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div {...logoStyles}>Docker Dashboard</div>
    <div {...containerStyles}>
      <div>
        <Link to='/apps' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>
          Apps <Label horizontal>42</Label>
        </Link>
      </div>
      <div>
        <Link to='/containers' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>
          Containers <Label horizontal>{data.containerTotal}</Label>
        </Link>
      </div>
      <div>
        <Link to='/images' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>
          Images <Label horizontal>42</Label>
        </Link>
      </div>
      <div>
        <Link to='/volumes' activeStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} {...linkStyles}>
          Volumes <Label horizontal>42</Label>
        </Link>
      </div>
    </div>
  </div>
)

export default graphql(getContainersTotal)(Sidebar)
