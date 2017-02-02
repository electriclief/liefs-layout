var Layout = (function () {
    function Layout() {
        var Arguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Arguments[_i] = arguments[_i];
        }
        this.isActive = true;
        this.setArgsObj = setArgsObj;
        this.myArgsObj = argsObj(arguments);
        this.label = this.setArgsObj("string", 0, "layout ");
        this.conditionalFunction = this.setArgsObj("function", 0, "layout ");
        this.container = this.setArgsObj("Container", 0, "layout ");
        if ("Item" in this.myArgsObj) {
            this.container = (this.myArgsObj.Item[0]).container;
            if (!this.container)
                throw liefsError.badArgs("Container or Item-Parent of Container", "Item - not the Parent of a Container", "New Layout" + ((this.label) ? " '" + this.label + "'" : ""));
        }
        if (!(this.container && this.conditionalFunction)) {
            liefsError.badArgs("At Least One Function and One Item/Container", JSON.stringify(Object.keys(this.myArgsObj)), "Create Instance Of Layout()");
        }
    }
    return Layout;
}());
function L() {
    var Arguments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arguments[_i] = arguments[_i];
    }
    return new (Layout.bind.apply(Layout, [void 0].concat(Arguments)))();
}
