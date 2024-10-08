const level1 = new Level(
    [
        new EnemyWithClub(),
    ],
    [
        new Background('../assets/img/backgrounds/5.png', -150),
        new Background('../assets/img/backgrounds/6.png', 3105),
        new Background('../assets/img/backgrounds/4.png', 6361),
    ],
    [
        new Foreground('../assets/img/backgrounds/7.png', -150, 0),
        new Foreground('../assets/img/backgrounds/8.png', -104, 660)
    ],
    7000
);