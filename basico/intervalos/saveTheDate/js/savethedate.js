;(function () {
    const heroContent = document.querySelector('.hero-content')
    const saveTheDate = heroContent.querySelector('h1 span').innerText
    const countdownParagraph = document.querySelector('p')
    const countdownTimer = document.createElement('span')
    countdownParagraph.appendChild(countdownTimer)

    function parseDate(text) {
        const [date, time] = text.split(' ')
        const [day, month, year] = date.split('/')
        const [hours, minutes] = time.split('H')
        return new Date(year, month - 1, day, hours, minutes)
    }

    function convertMilliseconds(duration) {
        let remain = duration
        let days = Math.floor(remain / (1000 * 60 * 60 * 24))
        remain = remain % (1000 * 60 * 60 * 24)
        let hours = Math.floor(remain / (1000 * 60 * 60))
        remain = remain % (1000 * 60 * 60)
        let minutes = Math.floor(remain / (1000 * 60))
        remain = remain % (1000 * 60)
        let seconds = Math.floor(remain / 1000)
        remain = remain % 1000
        return { days, hours, minutes, seconds }
    }

    function formatCountdown(duration, flagFinished = false) {
        const { days, hours, minutes, seconds } = duration
        if (flagFinished) {
            countdownTimer.textContent = 'Evento encerrado'
        } else {
            countdownTimer.textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`
        }
    }

    function updateCountdown(interval = undefined) {
        const finalDate = parseDate(saveTheDate)
        const dateDifference = finalDate.getTime() - new Date().getTime()
        let flagFinished = false
        if (interval === undefined && dateDifference < 0) {
            flagFinished = true
        } else if (interval && dateDifference < 0) {
            clearInterval(interval)
            flagFinished = true
        }
        const countdownDuration = convertMilliseconds(dateDifference)
        formatCountdown(countdownDuration, flagFinished)
    }

    updateCountdown()

    const interval = setInterval(() => updateCountdown(interval), 1000)
})()
