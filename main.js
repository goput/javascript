var batasAtas = 6;
var batasSamping = 5;
var batasBertambah = 1;
var pascal = [];
var s = '';

/* Kodingan Persegi Bintang */
// for(var i = 0 ; i < batasAtas ; i++){
//     for(var j = 0; j < batasSamping; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* Kodingan Segitiga Bintang */
// for(var i = 0 ; i < batasAtas ; i++){
//     for(var j = 0; j <= i; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* Kodingan Segitiga Bintang pojok kanan*/
// for(var i = batasAtas ; i > 0 ; i--){
//     for(var j = 0; j <= batasAtas; j++){
//         s += (j < i) ? ' ' : '*';
//     }
//     s += '\n';
// }
// console.log(s);

/* Kodingan Segitiga Bintang kebalik pojok kiri*/
// for(var i = batasAtas ; i > 0 ; i--){
//     for(var j = 0; j < i; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// for(var i = 0 ; i < batasAtas; i++){
//     for(var j = i; j < batasAtas; j++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/*Kodingan Segitiga Bintang Kebalik pojok kanan */
// for(var i = 0 ; i < batasAtas ; i++){
//     for(var j = 0; j <= batasAtas; j++){
//         s += (j > i) ? '*' : ' ';
//     }
//     s += '\n';
// }
// console.log(s);

/* Kodingan Jajar Genjang Bintang */
// for(var i = batasAtas ; i > 0 ; i--){
//     for(var j = 0; j < i; j++){
//         s += ' ';
//     }
//     for(var k = 0; k < batasAtas ; k++){
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

/*Kodingan Segitiga Sama Kaki */
// for(var i = batasAtas ; i >= 0 ; i--){
//     for(var j = 0; j < i; j++){
//         s += ' ';
//     }
//     for(var k = 0; k < batasBertambah ; k++){
//         s += '*';
//     }
//     batasBertambah += 2;
//     s += '\n';
// }
// console.log(s);

// for(var i = 0 ; i <= batasAtas ; i++){
//     for(var j = i; j < batasAtas; j++){
//         s += ' ';
//     }
//     for(var k = 0; k < batasBertambah ; k++){
//         s += '*';
//         // s += ' ';
//     }
//     batasBertambah += 2;
//     s += '\n';
// }
// console.log(s);
// console.log(batasBertambah)

/*Kodingan segitiga sama kaki kebalik */
// for(var i = 0 ; i < batasAtas; i++){
//     for(var j = 0; j < i; j++){
//         s += ' ';
//     }
//     for(var k = batasAtas*2; k > batasBertambah; k--){
//         s += '*';
//     }
//     batasBertambah += 2;
//     s += '\n';
// }
// console.log(s);

/*Kodingan Belah Ketupat */
// var rentang = (1/2)*batasAtas;
// for(var i = 0 ; i < batasAtas ; i++){
//     if(i < rentang){
//         for(var j = i; j < batasAtas; j++){
//             s += ' ';
//         }
//     } else {
//         for(var j = 0; j <= i; j++){
//             s += ' ';
//         }
//     }
//     if(i < rentang){
//         for(var k = 0; k < batasBertambah ; k++){
//             s += '*';
//         }
//     } else {
//         for(var k = batasAtas*2; k > batasBertambah ; k--){
//             s += '*';
//         }
//     }
//     batasBertambah += 2;
//     s += '\n';
// }
// console.log(s);

/* Kodingan Segitiga Pascal */
// var m = '';
// var batasBertambah1 = 1;
// for(var z = 0; z < batasAtas; z++){
//     pascal[z] = [];
//     for(var j = z; j < batasAtas; j++){
//         m += ' ';
//     }
//     for(var y = 0; y < batasBertambah1; y++){
//         if(y==0 || y==z){
//             pascal[z][y] = 1;
//         } else {
//             pascal[z][y] = pascal[z-1][y-1]+pascal[z-1][y];
//         }
//         m += pascal[z][y];
//         m += ' ';
//     }
//     batasBertambah1 += 1;
//     m += '\n';
// }
// console.log(m);