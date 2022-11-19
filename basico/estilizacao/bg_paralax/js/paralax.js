;(function () {
    window.addEventListener('scroll', () => {
        const paralaxContainer = Array.from(
            document.querySelectorAll(`[data-paralax]`)
        )

        function isContainerOut(container) {
            return container.getBoundingClientRect().top <= 0
        }

        function getNewPosition(c) {
            const v = parseFloat(c.getAttribute('data-p-velocity')) || 0.5
            return c.getBoundingClientRect().top * v * -1
        }

        function positionImage() {
            paralaxContainer.forEach((c) => {
                let x = getComputedStyle(c).backgroundPositionX
                let y = getComputedStyle(c).backgroundPositionY

                if (isContainerOut(c)) {
                    c.style.backgroundPosition = `${x} ${getNewPosition(c)}px`
                } else {
                    c.style.backgroundPosition = `${x} 0px`
                }
            })
        }

        positionImage()
    })
})()
