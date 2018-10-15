/**
 * Given the name of a class returns a list of all elements
 * that have that class.
 *
 * @param {string} className
 * @returns {Array.<HTMLElement>}
 */
let getElementsByClassName = function (className) {
    // var elements = className,
        matches = [];
        matches.push(className.tree.attributes.id);
    function traverse(node) {
        // console.log(node.tree.childNodes.length);
        for (var i = 0; i < node.tree.childNodes.length; i++) {
            // console.log(node.tree.childNodes[i])
            // if (node.tree.childNodes[i].childNodes.length > 0) {
            //     traverse(node.tree.childNodes[i]);
            // }
          
            if (node.tree.childNodes[i].attributes) {
                matches.push(node.tree.childNodes[i].attributes.id);
                }
            }
        

    }

    traverse(className);
    return matches;

}


let obj = {
    "className": "baz",
    "tree": {
        "tagName": "div",
        "attributes": {
            "id": "0",
            "class": "foo bar baz"
        },
        "childNodes": [{
            "tagName": "span",
            "attributes": {
                "id": "1",
                "class": "baz"
            },
            "childNodes": []
        }, {
            "tagName": "p",
            "attributes": {
                "id": "2",
                "class": "baz"
            },
            "childNodes": [{
                "tagName": "span",
                "attributes": {
                    "id": "3",
                    "class": "baz"
                },
                "childNodes": []
            }]
        }]
    }
}

// console.log(obj.tree.childNodes);

console.log(getElementsByClassName(obj))
