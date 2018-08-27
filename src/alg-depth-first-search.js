

// classic Depth-First-Search algorithm application
// Using Data structures : ds-07-build-tree.js

function traverse (el, callback) {
    callback(el);
    const list = el.children;

    for (let i = 0; i < list.length; i++) {
        traverse(list[i], callback);
    }
}