const firstName = document.querySelector('#firstName')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.send-btn')
const msgSent = document.querySelector('.msg-sent')

const showError = (input, msg) => {
    let errorMsg = input.parentElement.querySelector('.msg-error')

    if(errorMsg) {
        errorMsg.innerText = msg
    }

    input.classList.add('error')
    input.classList.remove('sucess')
}

const setSuccess = input => {
    let errorMsg = input.parentElement.querySelector('.msg-error')

    if (errorMsg) {
        errorMsg.innerText = ''
    }

    if (errorMsg) errorMsg.innerText = ''
	input.classList.add('success')
	input.classList.remove('error')
}

const isValidEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	return re.test(String(email).toLowerCase())
}

const checkInputs = () => {
    const firstNameValue = firstName.value.trim()
    const emailValue = email.value.trim()
    const msgValue = msg.value.trim()
    let isValid = true

    if(firstNameValue === '') {
        showError(firstName, 'This field is required')
        isValid = false
    } else {
        setSuccess(firstName)
    }

    if (emailValue === '') {
		showError(email, 'Email is required')
		isValid = false
	} else if (!isValidEmail(emailValue)) {
		showError(email, 'Sorry, invalid format here')
		isValid = false
	} else {
		setSuccess(email)
	}

    if(msgValue === '') {
        showError(msg, 'This field is required')
        isValid = false
    } else {
        setSuccess(msg)
    }

    if(isValid) {
        msgSent.style.opacity = '1'
        sendBtn.style.pointerEvents = 'none'
        setTimeout(()=> {
            msgSent.style.opacity ='0'
        }, 5000)
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault()
    checkInputs()
})