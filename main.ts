   //% weight=100 color=#b5cf0a icon="\uf085" block="Boson Kit V3"

enum BosonAnalogPins {
    P0 = AnalogPin.P0,
    P1 = AnalogPin.P1,
    P2 = AnalogPin.P2,
    C16 = AnalogPin.C16
}
enum BosonPins {
    P0 = DigitalPin.P0,
    P1 = DigitalPin.P1,
    P2 = DigitalPin.P2,
    P3 = DigitalPin.P3,
    C16 = DigitalPin.C16,
    C17 = DigitalPin.C17
}
enum BosonSpeakerPins {
    M0,
    M1
}
namespace BosonKitV3 {

 
    //% block="set digital value for fan on %pin to %level"
    //% blockId="writeDigitalPin"
    //% block.loc.de="setze digitalen Wert für Ventilator an %pin auf %level"
    //% level.min=0 level.max=1 level.defl=1
    export function writeDigitalPin(pin: BosonPins, level: number): void {
        pins.digitalWritePin(<number>pin, level);
    }
    //% block="set analog value for fan on %pin to %level"
    //% blockId="writeAnalogPin"
    //% block.loc.de="setze analogen Wert für Ventilator an %pin auf %level"
    //% level.min=0 level.max=1023 level.defl=511
    export function writeAnalogPin(pin: BosonPins, level: number): void {
        pins.digitalWritePin(<number>pin, level);
    }


    //% blockId=readAnalogSensor weight=100
    //% block="analog sensor value at pin %pin"
    //% block.loc.de="analoge Werte von Sensor an %pin"
    export function readAnalogSensor(pin: BosonAnalogPins): number {
        return pins.analogReadPin(<number>pin);
    }


    //% blockId=readDigitalSensor weight=100
    //% block="digital sensor value at pin %pin"
    //% block.loc.de="digitale Werte von Sensor an %pin"
    export function readDigitalSensor(pin: BosonPins): number {
        return pins.digitalReadPin(<number>pin);
    }
    //% blockId="writeServo"
    //% block="servo write pin %pin to %level"
    //% block.loc.de="setze Winkel von Servo %pin auf %level°"
    //% level.min=0 level.max=180 level.defl=90
    export function writeServo(pin: BosonPins, level: number): void {
        return pins.servoWritePin(<number>pin, level)
    }


    //% blockId=setSpeakerPin weight=100
    //% block="set audio pin to %pin at volume %volume"
    //% block.loc.de="setze Audio Pin auf %pin mit Lautstärke %volume"
    //% volume.min=0 volume.max=100 volume.defl=50
    export function setSpeakerPin(pin: BosonSpeakerPins, volume: number) {
        switch (pin) {
            case BosonSpeakerPins.M0:
                pins.digitalWritePin(DigitalPin.M_MODE, 0)
                pins.digitalWritePin(DigitalPin.M0_SPEED, 0)
                pins.setAudioPin(AnalogPin.M0_DIR)
                music.setSilenceLevel(0)
                music.setVolume(volume)
                break;
            case BosonSpeakerPins.M1:
                pins.digitalWritePin(DigitalPin.M_MODE, 0)
                pins.digitalWritePin(DigitalPin.M1_SPEED, 0)
                pins.setAudioPin(AnalogPin.M1_DIR)
                music.setSilenceLevel(0)
                music.setVolume(volume)
                break;
        }

    }


    //% blockId="onEventOnPin"
    //% block="on event on pin %pin"
    //% block.loc.de="wenn Ereignis an Pin %pin "
    export function onEventOnPin(pin: BosonPins, handler: () => void): void {
        pins.setPull(<number>pin, PinPullMode.PullUp);
        input.onPinTouchEvent(<number>pin, input.buttonEventValue(ButtonEvent.Up), handler);
    }
}
basic.forever(function () {
	
})
