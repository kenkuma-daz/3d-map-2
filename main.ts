
const map = img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 5 6 5 6 6 6 3 6 6 6 3 6 6 6 6 6 3 6 6
    6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . . . . 6 . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . 7 . . . 5 . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . 7 . . . 6 . . 7 7 7 7 7 7 7 7 7 7 . . . . 6 6 6 6 6 6 6
    6 . . . 1 . . . 6 . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 6
    6 . . . 2 . . . 6 . . 6 6 6 6 6 . . . . . . . 7 . . . . . . . 6
    6 . . . 7 . . . 6 . . . . . . 6 . . . . . . . 4 . . . . . . . 6
    6 . . . 1 . . . 6 4 6 6 4 6 6 6 . . . . . . . 7 . . . . . . . 6
    6 . . . 7 . . . . . . . . . . . . . . . . . . 7 . . . . . . . 6
    6 6 6 6 6 6 6 6 6 6 6 5 6 6 6 5 6 6 . . 6 6 5 6 6 6 6 5 6 6 6 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . 7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 7 7 4 7 7 7 . . . . 6
    6 . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . 6
    6 . . . . 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 2 6 6 6 6 6 . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 7 7 7 2 7 7 7 7 7 7 1 7 7 7 7 1 7 7 7 2 7 7 7 . . . . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . 6
    6 . . . . . . . . . . 7 7 7 . . . . . . . . . 7 7 7 7 7 7 7 7 6
    6 . . 6 . . . . 7 7 7 7 . . . . . . . . . . . . . . . . . . . 6
    6 . . 6 . . . . 6 . . . . . 7 7 7 7 7 . . . . 7 7 7 . . . . . 6
    6 . . 6 . . . . 6 . . . . . 7 . . . 7 7 . . . 7 . 7 7 . . . . 6
    6 . . 6 . . . . 6 . . . . . 7 7 . . . 7 . . . . 7 . 7 7 . . 7 6
    6 . . 6 . . . . 6 6 7 . . . . 7 . . . 7 . . . 7 . . . 7 . . 7 6
    6 . . 6 . . . . . . 7 7 7 . . 7 . . . 7 7 7 7 7 . . . 7 7 7 7 6
    6 . . 6 . . . . . . . . 7 7 7 7 . . . . . . . . . . . . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
`
const textures = [
    img`
        8 8 8 8 8 8 8 8 8 8 b b b b b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 b b b 4 4 4 4 4 4 b b 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 2 2 4 4 4 4 4 d d d 4 4 4 b 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 2 4 4 4 4 4 4 4 4 d d d d 4 4 e 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e 8 8 8 8 8 8 8 8 8 8 8
        8 8 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e 8 8 8 8 8 8 8 8 8 8
        8 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e 8 8 8 8 8 8 8 8 8 8
        8 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8
        2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8
        2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8 8
        2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8
        2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 8 8 8 8 8 8 8 8
        2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 8 8 8 8 8 8 8 8
        2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e 8 8 8 8 8 8 8 8
        2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e 8 8 8 8 8 8 8 8
        8 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8 8
        8 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e 8 8 8 8 8 8 8
        8 8 e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e 8 8 8 8 8 8 8
        8 8 8 e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e 8 8 8 8 8 8 8
        8 8 8 8 8 e e e e e e 2 2 2 b b 4 4 b b b 4 b b e 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 e e e e e 2 2 2 b b 4 4 b b b b e e 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 e 2 2 2 b b b b b b b e c 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e 2 b b b b e e b d b 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e c d d d b 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 1 b b b b 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 1 1 d b b
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 b 1 1 1 1 1 c
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c 1 1 d d 1 c
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c d 1 d b c 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c b 1 1 c 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 c c c 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    `,
    null,
    img`
        9 9 9 9 9 9 9 9 9 9 9 9 3 3 3 3 b b 9 9 b b 3 3 3 3 3 9 9 9 9 9
        9 9 9 9 9 9 9 9 3 b b 3 1 1 1 1 d 3 b 3 1 1 d 1 1 1 d 3 3 9 9 9
        9 9 9 9 9 9 9 3 b d d 1 1 1 1 1 d b d 1 1 d 1 1 1 1 1 1 1 3 9 9
        9 9 9 9 9 9 9 b d d d d 1 1 1 1 b d 1 1 d 1 1 1 d d 1 1 1 1 3 9
        9 9 9 9 9 9 3 d 1 1 1 d d 1 1 1 b 1 1 d 1 1 1 d d 3 3 d 1 1 d 3
        9 9 9 9 9 9 3 d 1 1 1 1 1 d d 1 d 1 1 d 1 1 1 d 1 1 d 3 3 1 1 3
        9 9 9 9 b b 3 d 1 1 1 1 1 1 d d 1 3 d d 1 1 1 d 1 d d 3 b 3 1 b
        9 9 9 b 3 d 3 d d 1 1 1 1 1 1 d d 1 3 d d 1 1 d 1 d d d b b d b
        9 9 9 3 d d d 3 1 d 1 1 1 1 1 1 d d 1 3 3 d d d d d d d b 9 b 9
        9 9 3 1 1 1 1 1 d 1 d d d 1 1 1 1 d d 1 1 d d d d d d 3 3 9 9 9
        9 9 3 1 1 1 1 1 1 d 1 1 1 d d 1 1 1 d d 1 1 1 1 d d 3 3 1 3 9 9
        9 9 b d d d 1 1 1 1 d d d 1 1 d d 1 1 1 d 1 1 1 1 1 1 1 1 3 9 9
        9 9 3 1 1 d d d 1 1 1 d d d d 1 1 d d 1 1 d d d 1 1 1 1 d d b 9
        9 9 3 1 1 1 1 d d 1 1 1 d d d d 1 1 d d 1 1 1 d d d d d d d b 9
        9 9 9 b d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d 1 1 1 1 1 1 1 d 3 b 9
        9 9 9 4 d d 1 1 1 1 d 1 1 1 3 d d d 1 1 d d d 1 1 1 d 3 3 3 b 9
        9 9 4 d b d d d d 1 1 d 1 1 1 3 3 d d d d d d d d d d d d b 9 9
        9 4 d d b d d d d d 1 1 d 1 1 1 d 3 3 d d d d d d d d d 3 b 9 9
        9 4 d d d b 1 1 d d d 1 1 d d 1 1 1 d 3 3 3 d d d d 3 b b 9 9 9
        9 4 d d 5 5 b 1 1 1 d 1 1 d d 1 1 1 1 1 d 3 3 3 3 b b b 9 9 9 9
        9 4 4 5 5 5 5 b 1 1 1 d 1 1 d d d d 1 1 1 1 1 1 d d b 9 9 9 9 9
        9 4 4 5 5 5 5 5 b d 1 d 3 1 1 d d d d d d d d d d d 3 9 9 9 9 9
        9 4 5 4 5 5 5 5 5 b b 1 d 3 1 1 1 d d d d d d d 1 1 3 9 9 9 9 9
        9 4 5 5 4 5 5 5 5 5 5 b 3 3 3 d 1 1 1 1 1 1 1 1 1 3 9 9 9 9 9 9
        4 5 5 5 5 4 5 5 5 5 5 5 b b b 3 3 d 1 1 1 1 1 d 3 3 9 9 9 9 9 9
        4 d 5 5 5 5 4 5 5 5 5 5 5 5 d b b b 3 d 1 1 d 3 3 9 9 9 9 9 9 9
        4 d d 5 5 5 5 4 5 5 5 5 5 d d d d d 4 3 3 3 3 9 9 9 9 9 9 9 9 9
        4 5 d d 5 5 5 5 4 4 d d d d d d d 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 4 5 d d 5 5 5 5 d 4 4 d d d d 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 4 5 d d 5 5 d d d d 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 4 5 d d 5 5 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 4 4 4 4 4 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    `,
    null,
    img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b 3 3 3 b 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b 3 3 3 d 3 3 b 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b 3 3 3 3 3 3 d 3 a 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b 3 3 3 3 2 e e e e d b a 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 b b b 3 3 3 3 2 3 e e e 2 e 3 a 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a 6 6 6
        6 6 6 6 6 6 6 b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a 6 6 6
        6 6 6 6 6 6 b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a 6 6
        6 6 6 b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a 6 6
        6 6 b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a 6 6
        b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a 6
        b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a 6
        b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a 6
        b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a
        b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a
        b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a
        b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a
        b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a
        b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a
        b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a
        b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a
        b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a
        b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a
        b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a
        b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a
        6 6 6 b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a
        6 6 6 6 6 6 6 b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a
        6 6 6 6 6 6 6 6 6 6 6 b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b d d d 5 d 5 5 d 5 b 3 b a
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b b d d d d b 3 b a 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b b b a a a a 6 6
    `,
    null,
    img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b b b b 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 b b 6 6 6 6 3 3 3 3 b a a 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a 1 1 1 1
        1 1 1 1 1 1 1 b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a 1 1 1
        1 1 1 1 1 1 b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e 1 1
        1 1 1 1 1 b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e 1 1
        1 1 1 1 b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e 1
        1 1 1 b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e 1
        1 1 b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e 1
        1 1 b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e
        1 b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e
        1 b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e
        1 b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e
        b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e
        b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e
        a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e
        a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e 1
        a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e 1
        a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e 1 1
        a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e 1 1
        a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e 1 1 1
        1 e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e 1 1 1 1
        1 e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e 1 1 1 1 1
        1 1 e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e 1 1 1 1 1 1
        1 1 e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e 1 1 1 1 1 1 1
        1 1 1 e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e 1 1 1 1 1 1 1 1
        1 1 1 1 e b e e e b b b b b b b b 4 4 4 4 e e 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 e e b b b b 4 4 4 4 4 4 4 4 e e 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 e e e b b b 4 4 4 e e e 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 e e e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `,
    null,
    img`
    
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c b 5 b c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c b 5 b c c c c c c c c c c c c c
        c c c c c c c c c c c c c b b b b b b c c c c c c c c c c c c c
        c c c c c c c c c c c c b b 5 5 5 5 5 b c c c c c c c c c c c c
        c c c c c c c c c c c b b 5 d 1 f 5 5 d f c c c c c c c c c c c
        c c c c c c c c c c c b 5 5 1 f f 5 d 4 c c c c c c c c c c c c
        c c c c c c c c c c c b 5 5 d f b d d 4 4 c c c c c c c c c c c
        c c c c c c c c b b b d 5 5 5 5 5 4 4 4 4 4 b c c c c c c c c c
        c c c c c c c b d d d b b d 5 5 4 4 4 4 4 b c c c c c c c c c c
        c c c c c c c b b d 5 5 5 b 5 5 5 5 5 5 b c c c c c c c c c c c
        c c c c c c c c d c 5 5 5 5 d 5 5 5 5 5 5 b c c c c c c c c c c
        c c c c c c c c b d c d 5 5 b 5 5 5 5 5 5 b c c c c c c c c c c
        c c c c c c c c c d d c c b d 5 5 5 5 5 d b c c c c c c c c c c
        c c c c c c c c c c b d d d d d 5 5 5 b b c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c b b c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    `,
    null,
    img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 6 6 6 6 6 6 8 6 6 6 8 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 6 6 6 6 6 6 8 6 6 6 8 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 6 6 6 6 6 6 8 6 6 6 8 6 6 6 6 6 6 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 8 6 6 6 8 6 6 6 6 6 6 8
        6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8
        6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 7 7 7 7 7 7 7 7 7 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8
        8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `,
    img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 9 9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 9 9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 7 7 8 8 9 9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 8 9 9 9 8 9 9 9 9 9 9 8
        9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 7 7 7 7 7 7 7 7 7 8 9 9 9 9 9 9 9 8 9 9 9 9 9 9 9 9 9 9 9 9 8
        8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
    `,
    img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1
        1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1
        1 1 1 1 7 7 7 1 1 7 7 7 1 1 1 1 7 7 7 1 1 1 1 7 7 7 1 7 7 7 1 1
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3
        3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3
        3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3 3 7 7 7 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    `,
    img`
        9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 9 8
        9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        2 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9
        9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9
    `,
]

game.stats = true
let t0 = textures[0]
for (let i = 0; i < textures.length; ++i) {
    if (textures[i])
        t0 = textures[i]
    else
        textures[i] = t0
}

const fpx = 10
const fpx_scale = 1024
const fov = 0.66
function tofpx(n: number) {
    return (n * fpx_scale) | 0
}

class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}

const st = new State()
game.onUpdate(function () {
    st.updateControls()
})
game.onPaint(function () {
    st.trace()
})

