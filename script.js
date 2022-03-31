var nodeNum = 10;
var boxWidth = 500 / nodeNum;


var box = document.getElementsByClassName('box');


for (let i = 0; i < nodeNum; i++) {
    for (let j = 0; j < nodeNum; j++) {
        let idName = '';
        idName = i + ',' + j;
        var node = document.createElement('div');
        node.setAttribute('id', idName)
        node.setAttribute('style', 'background-color:white;width:' + (boxWidth - 1) + 'px;height:' + (boxWidth - 1) + 'px;border-right: gray solid 1px;border-bottom:gray solid 1px');
        box[0].appendChild(node)
    }

}