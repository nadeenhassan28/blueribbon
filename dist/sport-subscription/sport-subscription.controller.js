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
exports.SportSubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const sport_subscription_service_1 = require("./sport-subscription.service");
let SportSubscriptionController = class SportSubscriptionController {
    subService;
    constructor(subService) {
        this.subService = subService;
    }
    subscribe(memberId, sportId) {
        return this.subService.subscribe(+memberId, +sportId);
    }
    unsubscribe(memberId, sportId) {
        return this.subService.unsubscribe(+memberId, +sportId);
    }
    list(memberId) {
        return this.subService.listSubscriptions(+memberId);
    }
};
exports.SportSubscriptionController = SportSubscriptionController;
__decorate([
    (0, common_1.Post)(':memberId/:sportId'),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Param)('sportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SportSubscriptionController.prototype, "subscribe", null);
__decorate([
    (0, common_1.Delete)(':memberId/:sportId'),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Param)('sportId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SportSubscriptionController.prototype, "unsubscribe", null);
__decorate([
    (0, common_1.Get)(':memberId'),
    __param(0, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SportSubscriptionController.prototype, "list", null);
exports.SportSubscriptionController = SportSubscriptionController = __decorate([
    (0, common_1.Controller)('subscriptions'),
    __metadata("design:paramtypes", [sport_subscription_service_1.SportSubscriptionService])
], SportSubscriptionController);
//# sourceMappingURL=sport-subscription.controller.js.map