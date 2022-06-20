scene.onOverlapTile(SpriteKind.Player, assets.tile`heart key`, function (sprite, location) {
    game.over(true, effects.hearts)
})
let Bon = sprites.create(assets.image`Bon`, SpriteKind.Player)
Bon.setStayInScreen(true)
scene.cameraFollowSprite(Bon)
tiles.setCurrentTilemap(tilemap`level102`)
tiles.placeOnTile(Bon, tiles.getTileLocation(0, 8))
tiles.setTileAt(tiles.getTileLocation(15, 8), assets.tile`heart key`)
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
