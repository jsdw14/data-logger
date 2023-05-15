datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    log_num += 1
    basic.showNumber(log_num)
    basic.showIcon(IconNames.Yes)
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("light", input.lightLevel())
    )
})
input.onButtonPressed(Button.B, function () {
    if (logging) {
        logging = false
    } else {
        logging = true
    }
})
let log_num = 0
let logging = false
basic.showIcon(IconNames.Giraffe)
datalogger.setColumnTitles(
"sound",
"light"
)
logging = false
log_num = 0
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("light", input.lightLevel())
        )
        log_num += 1
        if (log_num % 2 == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
})
