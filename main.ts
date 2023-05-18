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
    soil_level = weatherbit.soilMoisture()
    if (soil_level < 100) {
        basic.showNumber(0)
    } else if (soil_level >= 100 && soil_level < 200) {
        basic.showNumber(1)
    } else if (soil_level >= 200 && soil_level < 300) {
        basic.showNumber(2)
    } else if (soil_level >= 300 && soil_level < 400) {
        basic.showNumber(3)
    } else if (soil_level >= 400 && soil_level < 500) {
        basic.showNumber(4)
    } else if (soil_level >= 500 && soil_level < 600) {
        basic.showNumber(5)
    } else if (soil_level >= 600 && soil_level < 700) {
        basic.showNumber(6)
    } else if (soil_level >= 700 && soil_level < 800) {
        basic.showNumber(7)
    } else if (soil_level >= 800 && soil_level < 900) {
        basic.showNumber(8)
    } else if (soil_level >= 900) {
        basic.showNumber(9)
    }
    datalogger.log(
    datalogger.createCV("sound", input.soundLevel()),
    datalogger.createCV("temperature", weatherbit.temperature() / 100),
    datalogger.createCV("soil moisture", soil_level)
    )
})
let soil_level = 0
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
