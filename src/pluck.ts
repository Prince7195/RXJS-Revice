import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";

from([
    {
        first: {
            name: "Vijay"
        },
        last: "Deepak"
    },
    {
        first: {
            name: "Prince"
        },
        last: "Deepak"
    }
])
    .pluck("first")
    .pluck("name")
    .subscribe((x: any) => addItem(x));

function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}