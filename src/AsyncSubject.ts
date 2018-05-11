import { AsyncSubject } from "rxjs/AsyncSubject";

// AsyncSubject - returns values to observables only after it completes - subject.complete()
var subject = new AsyncSubject();

var subscriber = subject.subscribe(
    data => addItem(`Subscriber 1: ${data}`),
    () => addItem("Completed 1")
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var subscriber2 = subject.subscribe(
        data => addItem(`Subscriber 2: ${data}`),
        err => addItem(err),
        () => addItem("Completed 2")
    );
    subject.complete();
}, 500);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}