const level1 = new Level(
    [
        new EnemyWithClub(),
       // new EnemyWithGun(),
    ],
    [
        new Background('assets/img/backgrounds/background.jpg', -150),
    ],
    [
        new Foreground('../assets/img/backgrounds/7.png', -150, 0),
        new Foreground('../assets/img/backgrounds/8.png', -104, 660)
    ],
    11000
);