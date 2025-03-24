let sum = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sum += 1
    basic.showString("" + (sum), 100)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("" + (sum), 100)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sum += -1
    basic.showString("" + (sum), 100)
})
