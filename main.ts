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
    if (weatherbit.soilMoisture() < 250) {
        basic.showString("L")
    } else if (weatherbit.soilMoisture() >= 250 && weatherbit.soilMoisture() < 450) {
        basic.showString("M")
    } else if (weatherbit.soilMoisture() >= 450) {
        basic.showString("H")
    }
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("temperature", weatherbit.temperature() / 100),
    datalogger.createCV("soil moisture", weatherbit.soilMoisture())
    )
})
let logging = false
basic.showIcon(IconNames.Giraffe)
weatherbit.startWeatherMonitoring()
datalogger.setColumnTitles(
"sound",
"temperature",
"soil moisture"
)
logging = false
let log_num = 0
let continuous_log = 0
datalogger.deleteLog()
loops.everyInterval(500, function () {
    if (logging) {
        continuous_log += 1
        datalogger.log(
        datalogger.createCV("sound", input.soundLevel()),
        datalogger.createCV("temperature", weatherbit.temperature() / 100),
        datalogger.createCV("soil moisture", -1)
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
