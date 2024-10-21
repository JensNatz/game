const level1 = new Level(
    [
        new EnemyWithClub(900),
        new EnemyWithGun(1500),
        new EnemyWithClub(3000),
        new EnemyWithClub(3200),
        new EnemyWithGun(4200),


        new Drone(4500)
    ],
    [
        new HealthpackToken(2000),
        new BombToken(3700),
    ],
    [
        new Background('assets/img/backgrounds/background.jpg', -150),
    ],
    [
        new Foreground('../assets/img/backgrounds/celing.png', -150, 0, 13842, 103),
        new Foreground('../assets/img/backgrounds/floor.png', -104, 0, 13842, 784)
    ],
    11000
);