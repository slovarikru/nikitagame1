basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(1000)
    while (true) {
        basic.showLeds(`
            # . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . . .
            # . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            # . . . #
            . . . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
})
