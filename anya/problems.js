// farenheight to celcius
// [23, 140, 212, 41] => [-5, 60, 100, 5]

const farenheight = [23, 140, 212, 41]
function getCelcius(farenheight) {
    return farenheight.map(value => (value - 32) * 5/9)
}
