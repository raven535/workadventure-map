WA.sendChatMessage('Hello world', 'Mr Robot');

onEnterZone('bap', () => {
    WA.sendChatMessage('Hello to Bap', 'Mr Robot');
    const mySound = WA.loadSound("ressources/audio/RoteSterne.mp3");
    const config = {
        volume : 0.5,
        loop : true,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    mySound.play(config);
    // ...
    mySound.stop();
})