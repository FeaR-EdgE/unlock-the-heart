let Bon = sprites.create(assets.image`Bon`, SpriteKind.Player)
forever(function () {
    if (controller.left.isPressed()) {
        Bon.x += -5
    }
    if (controller.right.isPressed()) {
        Bon.x += 5
    }
    if (controller.up.isPressed()) {
        Bon.y += -5
    }
})
