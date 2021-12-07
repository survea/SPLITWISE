// This file is exporting an Object with a single key/value pair.

module.exports = {
  // email subject line, body and html
  confirm: id => ({
    subject: '6150 Project - Registration Confirm Email',
    html: `
      <a href='http://localhost:3000/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: http://localhost:3000/confirm/${id}`
  })
  
}