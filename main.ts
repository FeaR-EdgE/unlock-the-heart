let Bon = sprites.create(assets.image`Bon`, SpriteKind.Player)
Bon.setStayInScreen(true)
scene.cameraFollowSprite(Bon)
tiles.setCurrentTilemap(tilemap`level102`)
tiles.placeOnTile(Bon, tiles.getTileLocation(0, 8))
forever(function () {
    Bon.setVelocity(0, 50)
    if (controller.left.isPressed()) {
        Bon.x += -3
    }
    if (controller.right.isPressed()) {
        Bon.x += 3
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        Bon.y += -40
        pause(1000)
    }
})
