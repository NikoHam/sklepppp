input.onButtonPressed(Button.A, function () {
    radio.sendNumber(11)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(10)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 0)
})
radio.setGroup(20)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
	
})
