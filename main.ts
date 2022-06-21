namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 8))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(0, 13))
    tiles.setTileAt(tiles.getTileLocation(15, 14), assets.tile`myTile11`)
    Don.sayText("Continue the Search for Keys", 2000, false)
})
let Don: Sprite = null
Don = sprites.create(assets.image`Don`, SpriteKind.Player)
Don.setStayInScreen(true)
scene.cameraFollowSprite(Don)
tiles.setCurrentTilemap(tilemap`level102`)
tiles.placeOnTile(Don, tiles.getTileLocation(0, 8))
tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`myTile10`)
let IntroText = textsprite.create("This is Don and He is searching for keys to a secret Chamber")
let DonAbility = textsprite.create("Don has the Ability to Teleport Jump")
forever(function () {
    Don.setVelocity(0, 50)
    if (controller.left.isPressed()) {
        Don.x += -1
    }
    if (controller.right.isPressed()) {
        Don.x += 1
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        Don.y += -40
        pause(1000)
    }
})
