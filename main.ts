input.onGesture(Gesture.LogoUp, function () {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            led.plot(2, index)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
	
})
basic.forever(function () {
	
})
