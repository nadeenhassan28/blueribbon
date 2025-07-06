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
exports.SportSubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sport_subscription_entity_1 = require("./sport-subscription.entity");
const member_entity_1 = require("../member/member.entity");
const sport_entity_1 = require("../sport/sport.entity");
let SportSubscriptionService = class SportSubscriptionService {
    subscriptionRepo;
    memberRepo;
    sportRepo;
    constructor(subscriptionRepo, memberRepo, sportRepo) {
        this.subscriptionRepo = subscriptionRepo;
        this.memberRepo = memberRepo;
        this.sportRepo = sportRepo;
    }
    async subscribe(memberId, sportId) {
        const member = await this.memberRepo.findOne({ where: { id: memberId } });
        const sport = await this.sportRepo.findOne({ where: { id: sportId } });
        if (!member || !sport) {
            throw new common_1.NotFoundException('Member or Sport not found');
        }
        const existing = await this.subscriptionRepo.findOne({
            where: { member: { id: memberId }, sport: { id: sportId } },
        });
        if (existing) {
            throw new common_1.ConflictException('Already subscribed to this sport');
        }
        const sub = this.subscriptionRepo.create({ member, sport });
        return this.subscriptionRepo.save(sub);
    }
    async unsubscribe(memberId, sportId) {
        const sub = await this.subscriptionRepo.findOne({
            where: { member: { id: memberId }, sport: { id: sportId } },
        });
        if (!sub) {
            throw new common_1.NotFoundException('Subscription not found');
        }
        return this.subscriptionRepo.delete(sub.id);
    }
    async listSubscriptions(memberId) {
        return this.subscriptionRepo.find({
            where: { member: { id: memberId } },
        });
    }
};
exports.SportSubscriptionService = SportSubscriptionService;
exports.SportSubscriptionService = SportSubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sport_subscription_entity_1.SportSubscription)),
    __param(1, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __param(2, (0, typeorm_1.InjectRepository)(sport_entity_1.Sport)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SportSubscriptionService);
//# sourceMappingURL=sport-subscription.service.js.map