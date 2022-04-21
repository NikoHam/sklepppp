radio.setGroup(20)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        radio.sendNumber(11)
        pins.servoWritePin(AnalogPin.P13, 180)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendNumber(10)
        pins.servoWritePin(AnalogPin.P13, 0)
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
