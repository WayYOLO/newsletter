function $$ (selector,context){
    context = context || document;
    var elements = context.querySelectoerAll(selector);
    return Array.prototype.slice.call(elements);
}
