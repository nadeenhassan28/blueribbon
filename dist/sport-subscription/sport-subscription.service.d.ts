import { Repository } from 'typeorm';
import { SportSubscription } from './sport-subscription.entity';
import { Member } from '../member/member.entity';
import { Sport } from '../sport/sport.entity';
export declare class SportSubscriptionService {
    private subscriptionRepo;
    private memberRepo;
    private sportRepo;
    constructor(subscriptionRepo: Repository<SportSubscription>, memberRepo: Repository<Member>, sportRepo: Repository<Sport>);
    subscribe(memberId: number, sportId: number): Promise<SportSubscription>;
    unsubscribe(memberId: number, sportId: number): Promise<import("typeorm").DeleteResult>;
    listSubscriptions(memberId: number): Promise<SportSubscription[]>;
}
