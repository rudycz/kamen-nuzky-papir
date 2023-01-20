let ruka = 0
let vyhra = 0
input.onButtonPressed(Button.A, function () {
    ruka = randint(1, 3)
    if (ruka == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            `)
    } else if (ruka == 2) {
        basic.showLeds(`
            # . . . #
            # # . # .
            . . # . .
            # # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(vyhra)
})
input.onButtonPressed(Button.B, function () {
    vyhra += 1
})
input.onGesture(Gesture.Shake, function () {
    vyhra = 0
})
