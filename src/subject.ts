import { Subject } from "rxjs/Subject";

var subject = new Subject();

var subscriber = subject.subscribe(
    data => addItem(`Subscriber 1: ${data}`),
    err => addItem(err),
    () => addItem("Completed")
);

subject.next("The first time call");

var subscriber2 = subject.subscribe(
    data => addItem(`Subscriber 2: ${data}`),
    err => addItem(err),
    () => addItem("Completed")
);

subject.next("The second time call");
subject.next("The third time call");

subscriber2.unsubscribe();

subject.next("The final call");