declare const JwtStrategyUser_base: new (...args: any[]) => any;
export declare class JwtStrategyUser extends JwtStrategyUser_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
