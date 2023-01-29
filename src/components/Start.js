import React from 'react'

function Start(props) {
    return (
        <div className='container'>
            <h1 className='title'>QuizziSports</h1>
            <p className='description'> Test your Sport knowledge with this quiz!</p>
            
            <button className='start' onClick={props.startHandler}>
                {props.loading ? <div className="loader"></div> :"Start quiz"}
            </button>
        </div>
    )
}

export default Start