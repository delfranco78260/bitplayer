let allumer_LED = game.createSprite(2, 2)
let X = 2
let Y = 2
basic.clearScreen()
basic.forever(function () {
    if (BitPlayer.OnJoystick(Joystick.Up)) {
        Y += -1
        allumer_LED = game.createSprite(X, Y)
        basic.pause(100)
        basic.clearScreen()
    }
    if (BitPlayer.OnJoystick(Joystick.Right)) {
        X += 1
        allumer_LED = game.createSprite(X, Y)
        basic.pause(100)
        basic.clearScreen()
    }
    if (BitPlayer.OnJoystick(Joystick.Down)) {
        Y += 1
        allumer_LED = game.createSprite(X, Y)
        basic.pause(100)
        basic.clearScreen()
    }
    if (BitPlayer.OnJoystick(Joystick.Left)) {
        X += -1
        allumer_LED = game.createSprite(X, Y)
    }
    basic.pause(2000)
    basic.clearScreen()
})
