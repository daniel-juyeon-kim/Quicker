import chalk from "chalk";

interface Object {
  [t : string] : Value
}

type Value = string | undefined

export class KeyChecker {
  
  public checkKey(key : string, value : Value) {
    if(value === undefined) {
      console.error(chalk.bold.yellow(`[WARNNING] | ${key} is undefined`));      
      return "undefined"
    }
    return value
  }
  
  public checkObject(object: Object) {
    for (const key in object) {
      this.isValueUndefined(key, object[key]);
    }
    return object as {[key : string] : string}
  }

  private isValueUndefined(key: string, value: string | undefined) {
    if (this.isUndefined(value)) {
      console.error(chalk.bold.yellow(`[WARNNING] | ${key} is undefined`));
    }
  }

  private isUndefined(value: Value) {
    return value === undefined
  }
}
