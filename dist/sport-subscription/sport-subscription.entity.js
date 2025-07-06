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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportSubscription = void 0;
const typeorm_1 = require("typeorm");
const member_entity_1 = require("../member/member.entity");
const sport_entity_1 = require("../sport/sport.entity");
let SportSubscription = class SportSubscription {
    id;
    member;
    sport;
};
exports.SportSubscription = SportSubscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SportSubscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => member_entity_1.Member, (member) => member.id, { eager: true }),
    __metadata("design:type", member_entity_1.Member)
], SportSubscription.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sport_entity_1.Sport, (sport) => sport.id, { eager: true }),
    __metadata("design:type", sport_entity_1.Sport)
], SportSubscription.prototype, "sport", void 0);
exports.SportSubscription = SportSubscription = __decorate([
    (0, typeorm_1.Entity)()
], SportSubscription);
//# sourceMappingURL=sport-subscription.entity.js.map