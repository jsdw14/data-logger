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
input.onButtonPressed(Button.B, function () {
    if (logging) {
        logging = false
    } else {
        logging = true
    }
})
let logging = false
basic.showIcon(IconNames.Giraffe)
datalogger.setColumnTitles(
"sound",
"light"
)
logging = false
let icon = 0
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("light", input.lightLevel())
        )
        icon += 1
        if (icon % 2 == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
})
