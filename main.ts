let Bon = sprites.create(assets.image`Bon`, SpriteKind.Player)
Bon.setStayInScreen(true)
scene.cameraFollowSprite(Bon)
tiles.setCurrentTilemap(tilemap`level102`)
tiles.placeOnTile(Bon, tiles.getTileLocation(0, 8))
forever(function () {
    Bon.setVelocity(0, 89)
    if (controller.left.isPressed()) {
        Bon.x += -5
    }
    if (controller.right.isPressed()) {
        Bon.x += 5
    }
    if (controller.up.isPressed()) {
        Bon.y += -5
    } else {
    	
    }
})
