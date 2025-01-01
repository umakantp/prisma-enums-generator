export interface PrismaEnumsGeneratorConfig {
    /**
     * The namespace to generate the types in.
     *
     * @default undefined
     */
    isExport: boolean | undefined,
}

export function parseConfig(
config: Record<string, string | string[] | undefined>
): PrismaEnumsGeneratorConfig {
return {
    isExport: config.isExport ? String(config.isExport).toLowerCase().trim() === 'true' : false
};
}