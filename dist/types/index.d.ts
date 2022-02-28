export interface VideoRatioInfo {
    resolution: {
        detail: string;
        width: number;
        height: number;
    };
    ratio: string;
}
export declare function info(src: string, timeout?: number): Promise<string | VideoRatioInfo>;
