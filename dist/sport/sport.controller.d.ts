import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
export declare class SportController {
    private sportService;
    constructor(sportService: SportService);
    create(body: CreateSportDto): Promise<import("./sport.entity").Sport>;
    findOne(id: string): Promise<import("./sport.entity").Sport | null>;
    findAll(): Promise<import("./sport.entity").Sport[]>;
    update(id: string, body: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
