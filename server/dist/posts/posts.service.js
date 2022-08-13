"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("../schemas/post.schema");
const user_schema_1 = require("../schemas/user.schema");
let PostsService = class PostsService {
    constructor(postModel, userModel) {
        this.postModel = postModel;
        this.userModel = userModel;
    }
    async getAll() {
        try {
            const posts = await this.postModel.find();
            return posts;
        }
        catch (e) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getOne(id) {
        try {
            let post = await this.postModel.findById(id);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
    }
    async create(id, createDto) {
        try {
            const user = await this.userModel.findById(id);
            const post = await this.postModel.create(createDto);
            user.posts.push(post._id);
            post.author = user._id;
            await user.save();
            await post.save();
            return post;
        }
        catch (e) {
            throw new common_1.HttpException("Bad Request", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PostsService);
exports.default = PostsService;
//# sourceMappingURL=posts.service.js.map