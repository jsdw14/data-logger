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
    datalogger.createCV("temperature", weatherbit.temperature()),
    datalogger.createCV("soil moisture", -1)
    )
    basic.showIcon(IconNames.Yes)
})
let log_num = 0
let logging = false
basic.showIcon(IconNames.Giraffe)
weatherbit.startWeatherMonitoring()
datalogger.setColumnTitles(
"sound",
"temperature",
"soil moisture"
)
logging = false
log_num = 0
loops.everyInterval(500, function () {
    if (logging) {
        log_num += 1
        datalogger.log(
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("temperature", weatherbit.temperature()),
        datalogger.createCV("soil moisture", weatherbit.soilMoisture())
        )
        if (log_num % 2 == 0) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.showIcon(IconNames.Giraffe)
    }
})
