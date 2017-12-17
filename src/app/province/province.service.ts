import { provincelist } from "./provincelist";
import { Injectable } from "@angular/core";
import { province } from "./province";

@Injectable()
export class provinceservice {
    getAllProvince():province[]{
        return provincelist;
    }
    
}