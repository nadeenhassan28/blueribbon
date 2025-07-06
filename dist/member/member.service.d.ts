import { Repository } from 'typeorm';
import { Member } from './member.entity';
export declare class MemberService {
    private memberRepo;
    constructor(memberRepo: Repository<Member>);
    create(data: Partial<Member>): Promise<Member>;
    findAll(): Promise<Member[]>;
    findOne(id: number): Promise<Member | null>;
    update(id: number, data: Partial<Member>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
