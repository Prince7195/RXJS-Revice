import { Observable } from "rxjs/Observable";
import { fromEvent } from "rxjs/Observable/fromEvent";

var observable = fromEvent(document, "mousemove");

setTimeout(() => {
    observable.subscribe(
        (x: any) => addItem(`X: ${x.x}   Y: ${x.y}`)
    )
}, 2000);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}