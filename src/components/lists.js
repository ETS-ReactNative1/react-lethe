/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { gql, useQuery } from '@apollo/client'
import { GiSettingsKnobs } from 'react-icons/gi'
import { FiDelete } from 'react-icons/fi'

const Lists = () => {
  const GET_MY_LISTS = gql`
    {
      getMyInfo {
        id
        lists {
          id
          title
          owner
        }
      }
    }
  `

  const { data, loading, error } = useQuery(GET_MY_LISTS)

  if (loading)
    return (
      <p
        css={css`
          color: #666;
        `}
      >
        Loading...
      </p>
    )
  if (error) return <p>{`ERROR: ${error}`}</p>
  if (!data) return <p>You currently have no lists. Create some!</p>

  console.log('data: ', data)

  return (
    <div>
      <ul
        css={css`
          list-style: none;
          padding-left: 0;
        `}
      >
        {data.getMyInfo.lists.map((list) => (
          <li
            key={list.id}
            css={css`
              display: grid;
              gap: 20px;
              grid-template-columns: 1fr 20px 20px;
              grid-template-rows: 40px;
              align-items: center;
              border: 1px solid #666;
              padding: 5px;
              color: #666;
            `}
          >
            <span
              css={css`
                color: #666;
              `}
            >
              {list.title}
            </span>
            <div>
              <GiSettingsKnobs color="tomato" />
            </div>
            <div type="button" onClick={() => console.log('delete')}>
              <FiDelete />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lists