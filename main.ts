namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8)) , info.changeScoreBy (-10)
Don.sayText("Don't Touch That", 3000, false)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Key1`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        tiles.placeOnTile(Don, tiles.getTileLocation(0, 13))
        tiles.setTileAt(tiles.getTileLocation(15, 14), assets.tile`Key2`)
        Don.sayText("Continue the Search for Keys", 2000, false) , info.changeScoreBy (100)
    }
})
function IntroLetters () {
    for (let index = 0; index < 1; index++) {
        if (controller.anyButton.isPressed()) {
            pause(7000)
            IntroText.destroy()
            DonAbility.destroy()
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8)), info.changeScoreBy(-10)
Don.sayText("Haha You Suck at This Game", 3000, false)
})
let DonAbility: TextSprite = null
let IntroText: TextSprite = null
let Don: Sprite = null
let ScoreCount = 0
let transitionToNextLevelThree = function (sprite:Sprite, location:tiles.Location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(32, 7))
    tiles.setTileAt(tiles.getTileLocation(57, 7), assets.tile`Key3`)
    Don.sayText("Avoid the White Explosives", 2000, false), info.changeScoreBy(100)
}
for (let index = 0; index < 1; index++) {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`Key2`, transitionToNextLevelThree )
}
Don = sprites.create(assets.image`Don`, SpriteKind.Player)
Don.setStayInScreen(true)
scene.cameraFollowSprite(Don)
tiles.setCurrentTilemap(tilemap`World102`)
tiles.placeOnTile(Don, tiles.getTileLocation(0, 8))
tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`Key1`)
IntroText = textsprite.create("Don is searching for keys to a Chamber")
DonAbility = textsprite.create("Don has the Ability to Teleport Jump")
tiles.placeOnTile(IntroText, tiles.getTileLocation(8, 5))
tiles.placeOnTile(DonAbility, tiles.getTileLocation(8, 4))
info.setScore(0)
forever(function () {
    IntroLetters()
})
forever(function () {
    Jump_Movement()
})
forever(function () {
    Movement()
})
