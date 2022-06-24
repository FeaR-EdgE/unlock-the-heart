namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const Cops = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`toHospital`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(162, 9))
    Bon = sprites.create(assets.image`Bon`, SpriteKind.NPC)
    tiles.placeOnTile(Bon, tiles.getTileLocation(164, 9))
    Bon.sayText("Oh Your Finally Waking Up, Press A or B", 3000, false)
    Director = sprites.create(assets.image`Director`, SpriteKind.NPC2)
    tiles.placeOnTile(Director, tiles.getTileLocation(174, 9))
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(206, 7))
    Don.sayText("RUN FROM THE COPS", 5000, false)
    theOps = [sprites.create(assets.image`anOp`, SpriteKind.Cops)]
    theOpsChase(201)
    theOpsChase(202)
    theOpsChase(203)
})
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
    if (controller.up.isPressed() && (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile6`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`Sun`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`) || (Don.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`) || (Don.tileKindAt(TileDirection.Bottom, sprites.castle.tilePath2) || Don.tileKindAt(TileDirection.Center, sprites.castle.tileGrass2))))))))))) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`degradingBrain`, function (sprite, location) {
    tiles.placeOnTile(Don, tiles.getTileLocation(123, 6))
    Don.sayText("Where Am I? Did I get Lost Again? Keep Moving Forward", 6000, false)
    info.changeScoreBy(100)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`PinkDanger`, function (sprite, location) {
    teleportPlayerBackToSpawn("The Only Mystery Scooby-Doo Can't Solve is Why You Suck at this Game", 6005)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cops, function (sprite, otherSprite) {
    gameOver()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    gameOver()
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
    info.changeScoreBy(100)
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
function theOpsChase (X: number) {
    for (let index = 0; index <= theOps.length - 1; index++) {
        tiles.placeOnTile(theOps[index], tiles.getTileLocation(X, 7))
        theOps[index].follow(Don, 60)
    }
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
let theOps: Sprite[] = []
let Director: Sprite = null
let Bon: Sprite = null
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
forever(function () {
    if (controller.A.isPressed() && (Don.tileKindAt(TileDirection.Center, assets.tile`bedHospital`) || Don.tileKindAt(TileDirection.Center, assets.tile`tableHospital`)) || controller.B.isPressed() && (Don.tileKindAt(TileDirection.Center, assets.tile`bedHospital`) || Don.tileKindAt(TileDirection.Center, assets.tile`tableHospital`))) {
        Don.sayText("What Happened?", 3000, false)
        pause(3000)
        if (true) {
            Bon.sayText("You were in a Bad Car Accident", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("When?", 3000, false)
            pause(3000)
        }
        if (true) {
            Bon.sayText("3 Years Ago", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("What that's Not True, That's Impossible", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("I've Been On Adventure looking for keys to a chamber", 3000, false)
            pause(3000)
        }
        if (true) {
            Bon.sayText("Must've Been a Dream about the People you Kidnapped", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("No, No, No", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("I was Saving Those Kids", 3000, false)
            pause(3000)
        }
        if (true) {
            Bon.sayText("The Cops Will Arrive Shortly to Arrest You", 3000, false)
            pause(3000)
        }
        if (true) {
            Don.sayText("NO, NO, NO LET ME OUT OF HERE", 3000, false)
            pause(3000)
        }
        if (true) {
            Bon.sayText("Subdue Him", 3000, false)
            pause(3000)
        }
        if (true) {
            tiles.placeOnTile(Don, tiles.getTileLocation(171, 9))
            pause(3000)
        }
        if (true) {
            Director.sayText("CUUUUUUUTTTTTTTT", 3000, false)
            pause(3000)
        }
        if (true) {
            Director.sayText("Great Performance for the Players", 3000, false)
            pause(3000)
        }
        if (true) {
            Director.sayText("I hope they Love this Show as Much as I did Making it", 3000, false)
            pause(3000)
        }
        if (true) {
            Director.sayText("Thank you for Playing... Continue Forward for a Surprise", 3000, false)
        }
    }
})
