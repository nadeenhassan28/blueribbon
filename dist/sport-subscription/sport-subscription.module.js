"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportSubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sport_subscription_entity_1 = require("./sport-subscription.entity");
const sport_subscription_service_1 = require("./sport-subscription.service");
const sport_subscription_controller_1 = require("./sport-subscription.controller");
const member_entity_1 = require("../member/member.entity");
const sport_entity_1 = require("../sport/sport.entity");
let SportSubscriptionModule = class SportSubscriptionModule {
};
exports.SportSubscriptionModule = SportSubscriptionModule;
exports.SportSubscriptionModule = SportSubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sport_subscription_entity_1.SportSubscription, member_entity_1.Member, sport_entity_1.Sport])],
        controllers: [sport_subscription_controller_1.SportSubscriptionController],
        providers: [sport_subscription_service_1.SportSubscriptionService],
    })
], SportSubscriptionModule);
//# sourceMappingURL=sport-subscription.module.js.map