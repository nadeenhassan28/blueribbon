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
exports.SportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sport_entity_1 = require("./sport.entity");
let SportService = class SportService {
    sportRepo;
    constructor(sportRepo) {
        this.sportRepo = sportRepo;
    }
    create(data) {
        const sport = this.sportRepo.create(data);
        return this.sportRepo.save(sport);
    }
    findOne(id) {
        return this.sportRepo.findOne({ where: { id } });
    }
    findAll() {
        return this.sportRepo.find();
    }
    update(id, data) {
        return this.sportRepo.update(id, data);
    }
    delete(id) {
        return this.sportRepo.delete(id);
    }
};
exports.SportService = SportService;
exports.SportService = SportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sport_entity_1.Sport)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SportService);
//# sourceMappingURL=sport.service.js.map