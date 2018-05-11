import { Observable } from "rxjs/Observable";
import { merge } from "rxjs/observable/merge";

var observable = Observable.create((observer: any) => {
    observer.next("Hello!");
});

var observable2 = Observable.create((observer: any) => {
    observer.next("Welcome");
});

var observable3 = Observable.create((observer: any) => {
    observer.next("To RxJS");
});

var newObs = merge(observable, observable2, observable3);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}