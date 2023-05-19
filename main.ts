datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    if (logging) {
        logging = false
    } else {
        logging = true
    }
})
input.onButtonPressed(Button.B, function () {
    log_num += 1
    basic.showNumber(log_num)
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("temperature", weatherbit.temperature() / 100),
    datalogger.createCV("location", log_num)
    )
})
let log_num = 0
let logging = false
basic.showIcon(IconNames.Giraffe)
weatherbit.startWeatherMonitoring()
datalogger.setColumnTitles(
"sound",
"temperature",
"location"
)
logging = false
log_num = 0
let continuous_log = 0
datalogger.deleteLog()
loops.everyInterval(500, function () {
    if (logging) {
        continuous_log += 1
        datalogger.log(
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("temperature", weatherbit.temperature() / 100)
        )
        if (continuous_log % 2 == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
})
