import React from 'react'

const Footer = ({user,type ='desktop'}:FooterProps) => {
  return (
    <footer className="footer">
        <div className="footer_name"></div>
            <p className="text-xl font-bold text-gray-700"> 

                {user.name}
            </p>

    </footer>
  )
}

export default Footer