import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
  ) {}

  create(createPersonInput: CreatePostInput): Promise<Post> {
    const person = new this.postModel(createPersonInput);
    return this.postModel.create(person);
  }

  findAll() {
    return this.postModel.find();
  }

  async findById(postId: string) {
    return this.postModel.findById(postId);
  }

  async findAllByAuthorId(authorId: string) {
    return this.postModel.find({authorId});
  }
}
