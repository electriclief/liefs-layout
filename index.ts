import { liefsError, setArgsObj } from "liefs-lib";

export class Layout {
  label: string;
  isActive: boolean = true;
  container: Container;
  conditionalFunction: Function;
  myArgsObj: any;
  setArgsObj: Function = setArgsObj;
  constructor(...Arguments: any[]) {
    this.myArgsObj = argsObj(arguments);
    this.label = this.setArgsObj("string", 0, "layout ");
    this.conditionalFunction = this.setArgsObj("function", 0, "layout ");
    this.container = this.setArgsObj("Container", 0, "layout ");
    if ("Item" in this.myArgsObj) {
      this.container = (this.myArgsObj.Item[0]).container;
      if (!this.container)
        throw liefsError.badArgs("Container or Item-Parent of Container",
                    "Item - not the Parent of a Container", "New Layout" + ((this.label) ? " '" + this.label + "'" : ""));
    }
    if (!(this.container && this.conditionalFunction)) {
      liefsError.badArgs("At Least One Function and One Item/Container",
        JSON.stringify(Object.keys(this.myArgsObj)), "Create Instance Of Layout()");
    }
  }
}
