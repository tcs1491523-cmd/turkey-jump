turkey.onA(function () {
    turkey.turkeyJump()
})
turkey.onStartSimple(function () {
    turkey.addTurkey()
})
turkey.onCages(15, function () {
    turkey.turkeyWin()
})
turkey.turkeyOverlapCage(function () {
    turkey.changeScoreOverride(1)
    turkey.freeTurkey()
})
