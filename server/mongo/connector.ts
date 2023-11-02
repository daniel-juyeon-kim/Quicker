import mongoose from "mongoose";

export class MongoConnector {
  private mongoUrl : string
  
  constructor(mongoUrl : string) {
    this.mongoUrl = mongoUrl
  }
  
  public connect(databaseName : string) {
    return mongoose.createConnection(this.mongoUrl , {dbName: databaseName});
  }
}