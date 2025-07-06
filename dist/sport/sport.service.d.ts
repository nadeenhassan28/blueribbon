import { Repository } from 'typeorm';
import { Sport } from './sport.entity';
export declare class SportService {
    private sportRepo;
    constructor(sportRepo: Repository<Sport>);
    create(data: Partial<Sport>): Promise<Sport>;
    findOne(id: number): Promise<Sport | null>;
    findAll(): Promise<Sport[]>;
    update(id: number, data: Partial<Sport>): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
