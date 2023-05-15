datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("light", input.lightLevel())
    )
    basic.showIcon(IconNames.Giraffe)
})
basic.showIcon(IconNames.Giraffe)
datalogger.setColumnTitles(
"sound",
"light"
)
