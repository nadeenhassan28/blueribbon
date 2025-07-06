import { MemberService } from './member.service';
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    create(body: any): Promise<import("./member.entity").Member>;
    findAll(): Promise<import("./member.entity").Member[]>;
    findOne(id: string): Promise<import("./member.entity").Member | null>;
    update(id: string, body: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
