namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    teleportPlayerBackToSpawn("Don't Touch That", 3000)
})
function Movement () {
    if (controller.left.isPressed()) {
        Don.x += -1
    }
    if (controller.right.isPressed()) {
        Don.x += 1
    }
}
function Jump_Movement () {
    if (controller.up.isPressed() && (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile6`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`Sun`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`) || Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`))))))))) {
        pause(100)
        Don.setVelocity(0, -100)
        pause(375)
    } else {
        Don.setVelocity(0, 100)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key4`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(94,2)) , info.changeScoreBy (100)
    tiles.setTileAt(tiles.getTileLocation(112, 10), assets.tile`degradingBrain`)
    Don.sayText("The longer you live, the more you realize that only pain, suffering, and futility exist", 8000, false)
    music.baDing.play()
})
function gameOver () {
    info.changeScoreBy(100)
    game.over(true, effects.confetti)
}
function teleportPlayerBackToSpawn (deathMessage: string, timeOfDialoge: number) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8)) , info.setScore (0)
music.powerDown.play()
    Don.sayText(deathMessage, timeOfDialoge, false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`PinkDanger`, function (sprite, location) {
    teleportPlayerBackToSpawn("The Only Mystery Scooby-Doo Can't Solve is Why You Suck at this Game", 6005)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PurpleDanger`, function (sprite, location) {
    teleportPlayerBackToSpawn("Just Quit the Game... Your Trash", 7000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key1`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 13))
    tiles.setTileAt(tiles.getTileLocation(15, 14), assets.tile`Key2`)
    Don.sayText("Continue the Search for Keys", 2000, false) , info.changeScoreBy (100)
music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key2`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(32, 7))
    tiles.setTileAt(tiles.getTileLocation(57, 7), assets.tile`Key3`)
    Don.sayText("Avoid White Explosives", 3000, false)
    info.changeScoreBy (100)
})
function OnStart () {
    ScoreCount = 0
    Don = sprites.create(assets.image`Don`, SpriteKind.Player)
    Don.setStayInScreen(true)
    scene.cameraFollowSprite(Don)
    tiles.setCurrentTilemap(tilemap`World102`)
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8))
    tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`Key1`)
    IntroText = textsprite.create("Don is searching for keys to a Chamber")
    tiles.placeOnTile(IntroText, tiles.getTileLocation(8, 5))
    info.setScore(0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key3`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(64, 7))
    tiles.setTileAt(tiles.getTileLocation(81, 4), assets.tile`Key4`)
    Don.sayText("Wake up to Reality, Nothing goes as planned in this acursed world", 5000, false)
    info.changeScoreBy(100)
    music.baDing.play()
})
function IntroLetters () {
    for (let index = 0; index < 1; index++) {
        if (controller.anyButton.isPressed()) {
            pause(7000)
            IntroText.destroy()
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    teleportPlayerBackToSpawn("HaHa You Suck at This Game", 3000)
})
let IntroText: TextSprite = null
let ScoreCount = 0
let Don: Sprite = null
OnStart()
forever(function () {
    Movement()
})
forever(function () {
    IntroLetters()
})
forever(function () {
    Jump_Movement()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`degradingBrain`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(123, 6))
    Don.sayText("Where Am I? Did I get Lost Again? Keep Moving Forward", 6000, false)
    info.changeScoreBy(100)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`toHospital`, function (sprite, location) {
    
})