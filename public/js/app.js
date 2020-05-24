const form = document.querySelector('form')
const loc = document.querySelector('#location')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')
const msg3 = document.querySelector('#message-3')
const msg4 = document.querySelector('#message-4')
const msg5 = document.querySelector('#message-5')   

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    search = loc.value
    msg1.textContent = 'Loading.....'
    msg2.textContent = ''
    msg3.textContent = ''
    msg4.textContent = ''
    msg5.textContent = ''
    fetch('/weather?location=' + search).then((responce) => {
        responce.json().then((data) => {
            if(data.error) {
                msg1.textContent = data.error
                msg2.textContent = ''
                msg3.textContent = ''
                msg4.textContent = ''
                msg5.textContent = ''
            } else{
                msg1.textContent = 'Your weather is ' + data.main + '.' + 'Your current tempreture is ' + data.temp + ' K.'
                msg2.textContent = 'Latitude : ' + data.lat +'.' + 'Longitude : ' + data.lon
                msg3.textContent = 'Wind speed is ' + data.wind + ' mile/h and degree of wind flow is in ' + data.windDegree + ' degree.'
                msg4.textContent = 'Air pressure is currently is ' + data.pressure + ' mbars.'
                msg5.textContent = 'Your location is ' + data.location +' ,' + data.country
            }
                        
        })
    })
})
