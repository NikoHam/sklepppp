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
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
radio.setGroup(20)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(11)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(5000)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        radio.sendNumber(10)
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        radio.sendNumber(21)
        pins.servoWritePin(AnalogPin.P14, 180)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(20)
        pins.servoWritePin(AnalogPin.P14, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        radio.sendNumber(31)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        radio.sendNumber(30)
        pins.servoWritePin(AnalogPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
})
