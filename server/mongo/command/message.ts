import MessageSchema from "../schemas/message";
import { mongoService } from "../../service";

require("dotenv").config();

export class MessageModel {
  async create(messageObjcet: MessageObject) {
    try {
      const conn = await mongoService.connect("chat");
      const Message = conn.model(String(messageObjcet.roomName), MessageSchema);
      const userMessage = new Message({
        id: messageObjcet.id,
        message: messageObjcet.receiveMessage,
        roomName: messageObjcet.roomName,
      });
      await userMessage.save();
      conn.destroy();
    } catch (error) {
      console.error(error);
    }
  }

  async find(roomName: string) {
    try {
      const conn = await mongoService.connect("chat");
      const messageModel = conn.model(roomName, MessageSchema);
      const messages = await messageModel.find();
      await conn.destroy();
      return messages;
    } catch (error) {
      console.error(error);
    }
  }

  async findRecent(orderNum: number) {
    const connection = await mongoService.connect("chat");
    const messageModel = connection.model(String(orderNum), MessageSchema);
    const recentMessage = await messageModel
      .findOne()
      .select(["-_id", "-__v", "-roomName"])
      .sort({ $natural: -1 });
    await connection.destroy();
    return recentMessage;
  }
}

interface MessageObject {
  id: string;
  roomName: string;
  receiveMessage: string;
}
