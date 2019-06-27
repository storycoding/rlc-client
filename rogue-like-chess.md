#### player (k) is a king chess piece
#### enemy (p) is also a pawn chess piece

```
[ ][p]
[ ][ ]
[ ][ ]
[k][ ]
```
#### player moves first
```
[ ][p]
[ ][ ]
[k][ ]
[ ][ ]
```
#### enemy moves second
```
[ ][ ]
[ ][p]
[k][ ]
[ ][ ]
```
#### player will innevitably move forward and be forced to destroy e (just like chess)
```
[ ][ ]
[ ][k]
[ ][ ]
[ ][ ]
```

#### by destroying enemy, a new path opens up with another enemy (t) which is a tower
```
[ ][ ]   [t]
[ ][k][ ][ ]
[ ][ ]   [ ]
[ ][ ]
```

#### player can move again
```
[ ][ ]   [t]
[ ][ ][k][ ]
[ ][ ]   [ ]
[ ][ ]
```
#### enemy tower moves
```
[ ][ ]   [ ]
[ ][ ][k][ ]
[ ][ ]   [t]
[ ][ ]
```
####player destroys tower
```
[ ][ ]   [ ]
[ ][ ][ ][ ]
[ ][ ]   [k]
[ ][ ]
```
####new path with new enemy opens up
```
[ ][ ]   [ ]
[ ][ ][ ][ ]
[ ][ ]   [k][ ][ ][ ][t] 
[ ][ ]
```
####
```
[ ][ ]   [ ]
[ ][ ][ ][k]
[ ][ ]   [ ][ ][ ][ ][t] 
[ ][ ]
```

####
```
[ ][ ]   [ ]
[ ][ ][ ][k]
[ ][ ]   [t][ ][ ][ ][ ] 
[ ][ ]
```
####
```
[ ][ ]   [ ]
[ ][ ][ ][ ]
[ ][ ]   [k][ ][ ][ ][ ] 
[ ][ ]
```
####
```
[ ][ ]   [ ]
[ ][ ][ ][ ]
[ ][ ]   [k][ ][ ][ ][ ] 
[ ][ ]   [ ]
         [ ]
         [ ]
         [p]
```
#### etc