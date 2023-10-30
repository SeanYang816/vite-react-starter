import { useEffect } from 'react'

export const GraphQL = () => {
  useEffect(() => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ query: '{ hello }' })
    })
      .then(r => r.json())
      .then(data => console.info('data returned:', data))
  }, [])
  
  return (
    <>
    </>
  )
}
