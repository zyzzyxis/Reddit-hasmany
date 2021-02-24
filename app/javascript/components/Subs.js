import React from 'react'

export default (props) => {
  const {subs} = props
    // the above is pulling subs off of props. this would be the same as const subs = props.sub
  const renderSubs = () => {
    return subs.map(sub => {
      return(
        <div className='sub-container'>
          <h1>{sub.name}</h1>
        </div>
      )
    })
   }
  return(
    <>
      <h1>Subs Here</h1>
      <div className='subs-container'></div>
      {renderSubs()}
    </>  
  )
}


