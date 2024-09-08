import { ProductService } from 'src/modules/product/services/product.service';
import { UserService } from 'src/modules/user/services/user.service';
import { recomendacaoDTO } from '../dtos/recomendacaoDTO';
export declare class RecomendacaoController {
    private readonly productService;
    private readonly userService;
    constructor(productService: ProductService, userService: UserService);
    productRecomendation(req: any): Promise<recomendacaoDTO[] | {
        message: string;
    }>;
    private jaccardSimilarity;
}
