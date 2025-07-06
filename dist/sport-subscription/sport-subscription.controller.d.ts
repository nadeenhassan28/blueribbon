import { SportSubscriptionService } from './sport-subscription.service';
export declare class SportSubscriptionController {
    private subService;
    constructor(subService: SportSubscriptionService);
    subscribe(memberId: string, sportId: string): Promise<import("./sport-subscription.entity").SportSubscription>;
    unsubscribe(memberId: string, sportId: string): Promise<import("typeorm").DeleteResult>;
    list(memberId: string): Promise<import("./sport-subscription.entity").SportSubscription[]>;
}
