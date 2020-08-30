/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import { MenuContext } from '../contexts/menu-context/menu-context'
import handleKeyPress from '../../utils/on-key-press'

const TabMenu = ({ listTitle }) => {
  const { activeItemTab, setActiveItemTab } = React.useContext(MenuContext)

  return (
    <nav
      sx={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto auto',
        alignContent: 'end',
      }}
    >
      <span
        sx={{
          fontSize: 1,
          color: 'textSecondary',
          marginBottom: '5px',
        }}
      >
        {listTitle}
      </span>
      <ol
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          margin: 0,
          paddingLeft: 0,
          gap: 2,
        }}
      >
        <li>
          <button
            type="button"
            aria-label="Active Items Tab"
            tabIndex="0"
            sx={{
              border: 'none',
              fontSize: 0,
              padding: 3,
              color: 'textSecondary',
              backgroundColor: !activeItemTab ? 'colorTwo' : 'offWhite',
              cursor: 'pointer',
            }}
            onClick={() => setActiveItemTab(false)}
            onKeyPress={(event) =>
              handleKeyPress(event, () => setActiveItemTab(false))
            }
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-label="Completed Items Tab"
            tabIndex="0"
            sx={{
              border: 'none',
              fontSize: 0,
              padding: 3,
              color: 'textSecondary',
              backgroundColor: activeItemTab ? 'colorTwo' : 'offWhite',
              cursor: 'pointer',
            }}
            onClick={() => setActiveItemTab(true)}
            onKeyPress={(event) =>
              handleKeyPress(event, () => setActiveItemTab(false))
            }
          >
            Complete
          </button>
        </li>
      </ol>
    </nav>
  )
}

TabMenu.propTypes = {
  listTitle: PropTypes.string.isRequired,
}

export default TabMenu
