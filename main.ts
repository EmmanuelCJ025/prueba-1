basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 60) {
        basic.showIcon(IconNames.Skull)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("TEMPERATURA ESTABLE")
    }
    basic.pause(5000)
})
