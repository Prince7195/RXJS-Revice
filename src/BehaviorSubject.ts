import { BehaviorSubject } from "rxjs/BehaviorSubject";

var subject = new BehaviorSubject("Initial");

var subscriber = subject.subscribe(
    data => addItem(`Subscriber 1: ${data}`),
    err => addItem(err),
    () => addItem("Completed")
);

subject.next("The first time call");
subject.next("...subscriber2 is about to subscribe...");

var subscriber2 = subject.subscribe(
    data => addItem(`Subscriber 2: ${data}`),
    err => addItem(err),
    () => addItem("Completed")
);

subject.next("The second time call");
subject.next("The third time call");

subscriber2.unsubscribe();

subject.next("The final call");

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}