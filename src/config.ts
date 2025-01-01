export interface PrismaEnumsGeneratorConfig {
    /**
     * The namespace to generate the types in.
     *
     * @default true
     */
    isExport: boolean | undefined,

    /**
     * Use commas to separate the enum values.
     *
     * @default true
     */
    useComma: boolean | undefined,
}

export function parseConfig(
config: Record<string, string | string[] | undefined>
): PrismaEnumsGeneratorConfig {
return {
    isExport: config.isExport ? String(config.isExport).toLowerCase().trim() === 'true' : true,
    useComma: config.useComma ? String(config.useComma).toLowerCase().trim() === 'true' : true,
};
}
