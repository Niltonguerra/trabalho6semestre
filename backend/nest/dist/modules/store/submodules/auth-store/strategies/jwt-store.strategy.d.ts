declare const JwtStrategyStore_base: new (...args: any[]) => any;
export declare class JwtStrategyStore extends JwtStrategyStore_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
