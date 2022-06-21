namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`heart key`, function (sprite, location) {
    tiles.placeOnTile(Bon, tiles.getTileLocation(0, 13))
    tiles.setTileAt(tiles.getTileLocation(15, 14), img`myTile8`)
    Bon.sayText(":3", 200, false)
})
scene.onOverlapTile(SpriteKind.Player, img`myTile7`, function (sprite, location) {
    tiles.placeOnTile(Bon, tiles.getTileLocation(0, 8))
})
scene.onOverlapTile(SpriteKind.Player, img`myTile8`, function (sprite, location) {
    game.over(true, effects.hearts)
    pause(5000)
    game.reset()
})
let Bon: Sprite = null
Bon = sprites.create(assets.image`Bon`, SpriteKind.Player)
Bon.setStayInScreen(true)
scene.cameraFollowSprite(Bon)
tiles.setCurrentTilemap(tilemap`level102`)
tiles.placeOnTile(Bon, tiles.getTileLocation(0, 8))
tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`heart key`)
scene.setBackgroundColor(9)
forever(function () {
    Bon.setVelocity(0, 50)
    if (controller.left.isPressed()) {
        Bon.x += -1
    }
    if (controller.right.isPressed()) {
        Bon.x += 1
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        Bon.y += -40
        pause(1000)
    }
})
