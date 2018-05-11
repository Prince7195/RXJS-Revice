import { ReplaySubject } from "rxjs/ReplaySubject";

// ReplaySubject(numberofEventsToEmit, BufferTime)
var subject = new ReplaySubject(20, 500);

var subscriber = subject.subscribe(
    data => addItem(`Subscriber 1: ${data}`),
    err => addItem(err),
    () => addItem("Completed")
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var subscriber2 = subject.subscribe(
        data => addItem(`Subscriber 2: ${data}`),
        err => addItem(err),
        () => addItem("Completed")
    );
}, 500);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}