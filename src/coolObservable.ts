import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/share";

var observable = Observable.create((observer: any) => {
    try {
        observer.next("Hey Hello!");
        observer.next("Hey How r u?");
        setInterval(() => {
            observer.next("Hey Sorry I'm Late");
        }, 2000);
    } catch(err) {
        observer.error(err);
    }
}).share();

var subscriber = observable.subscribe(
    (x: any) => addItem(x),
    (err: any) => addItem(err),
    () => addItem("Completed")
);

// var subscriber2 = observable.subscribe(
//     (x: any) => addItem(x)
// );

// subscriber.add(subscriber2) // adding two subscribers

// setTimeout(() => {
//     subscriber.unsubscribe();
// }, 6000);

setTimeout(() => {
    var subscriber2 = observable.subscribe(
        (x: any) => addItem(`Subscriber 2: ${x}`)
    )
}, 1000);

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}