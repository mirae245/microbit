input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.showArrow(ArrowNames.North)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    내변수 = 1
    for (let index = 0; index < 내집층수; index++) {
        basic.showNumber(내변수)
        내변수 = 내변수 + 1
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.showArrow(ArrowNames.South)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    내변수 = 내집층수
    for (let index = 0; index < 내집층수; index++) {
        basic.showNumber(내변수)
        내변수 = 내변수 - 1
    }
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
})
let 내변수 = 0
let 내집층수 = 0
basic.clearScreen()
music.setVolume(80)
내집층수 = 3
