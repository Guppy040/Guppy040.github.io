function testfunction(){
    console.log("testFunctionを実行");
}

function aiueo(hikisuu1 ,hikisuu2, hikisuu3){
    console.log('hikisuu1: ${hikisuu1}');
    console.log('hikisuu2: ${hikisuu2}');
    console.log('hikisuu3: ${hikisuu3}');

}
aiueo(1,2,3);

function kakikukeko(hikisuu1 = "デフォルト"){
    console.log('hikisuu1: ${hikisuu1}');
}
kakikukeko();
kakikukeko("カスタマイズした値");