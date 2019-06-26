import { Model, Document } from 'mongoose';

export abstract class Controller {
  protected model: Model<Document>;

  protected constructor(model: Model<Document>) {
    this.model = model;
  }
}
