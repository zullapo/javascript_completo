;(function () {
    const heroContent = document.querySelector('.hero-content')
    const eventDateText = heroContent.querySelector('h1 span').innerText

    const [eventDate, eventTime] = eventDateText.split(' ')
    const [eventDay, eventMonth, eventYear] = eventDate.split('/')
    const [eventHours, eventMinutes] = eventTime.split('H')

    const dateEventObj = new Date(
        eventYear,
        eventMonth - 1,
        eventDay,
        eventHours,
        eventMinutes
    )

    const millisecondsDifference = dateEventObj.getTime() - new Date().getTime()

    function convertMilliseconds(duration) {
        /*
        1000 * 60 * 60 * 24 = 1 day in milliseconds
        1000 * 60 * 60 = 1 hour in milliseconds
        1000 * 60 = 1 minute in milliseconds
        1000 = 1 second in milliseconds
        */
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

    function formatDuration(dhms) {
        const { days, hours, minutes, seconds } = dhms
        return `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`
    }

    const countdownTimer = document.createElement('p')
    countdownTimer.textContent = formatDuration(
        convertMilliseconds(millisecondsDifference)
    )
    heroContent.appendChild(countdownTimer)
})()
