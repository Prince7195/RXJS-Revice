import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";

var observable = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

var subject = new Subject();

setTimeout(() => {
    subject.next("Hello");
}, 5000);

var newObj = observable.skipUntil(subject);

newObj.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}