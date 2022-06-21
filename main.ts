namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8)) , info.changeScoreBy (-10)
    Don.sayText("Haha You Suck at This Game", 1000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 13))
    tiles.setTileAt(tiles.getTileLocation(15, 14), assets.tile`myTile11`)
    Don.sayText("Continue the Search for Keys", 2000, false) , info.changeScoreBy (100)
})
let transitionToNextLevelThree = function (sprite:Sprite, location:tiles.Location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(32, 7))
    tiles.setTileAt(tiles.getTileLocation(57, 7), assets.tile`myTile12`)
    Don.sayText("Avoid the White Explosives", 2000, false), info.changeScoreBy(100)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, transitionToNextLevelThree )

let ScoreCount = 0
let Don: Sprite = null
Don = sprites.create(assets.image`Don`, SpriteKind.Player)
Don.setStayInScreen(true)
scene.cameraFollowSprite(Don)
tiles.setCurrentTilemap(tilemap`World102`)
tiles.placeOnTile(Don, tiles.getTileLocation(0, 8))
tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`myTile10`)
let IntroText = textsprite.create("Don is searching for keys to a Chamber")
let DonAbility = textsprite.create("Don has the Ability to Teleport Jump")
tiles.placeOnTile(IntroText, tiles.getTileLocation(8, 5))
tiles.placeOnTile(DonAbility, tiles.getTileLocation(8, 4))
info.setScore(0)
forever(function () {
    if (controller.up.isPressed()) {
        Don.y += -40
        pause(1100)
    }
})
forever(function () {
    for (let index = 0; index < 1; index++) {
        if (controller.anyButton.isPressed()) {
            pause(7000)
            IntroText.destroy()
            DonAbility.destroy()
        }
    }
})
forever(function () {
    Don.setVelocity(0, 50)
    if (controller.left.isPressed()) {
        Don.x += -1
    }
    if (controller.right.isPressed()) {
        Don.x += 1
    }
})
