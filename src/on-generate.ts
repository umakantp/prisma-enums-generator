import type { GeneratorOptions } from '@prisma/generator-helper';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'path';
import { parseConfig } from './config';

export async function onGenerate(options: GeneratorOptions) {
  const enums = options.dmmf.datamodel.enums;
  const outputFile = options.generator.output?.value ?? './types/index.ts';
  const config = parseConfig(options.generator.config);

  const output = enums.map(e => {
    let enumString = config.isExport ? `export enum ${e.name} {\n` : `enum ${e.name} {\n`;
    e.values.forEach(({ name: value }) => {
      enumString += `  ${value}` + (config.useComma ? `,\n` : `\n`);
    });
    enumString += `}\n\n`;

    return enumString;
  });

  mkdirSync(dirname(outputFile), { recursive: true });

  // Use commas to separate the enum values means it is a typescript enum
  // Otherwise it is a prisma enum, could be used for graphql files.
  const formattedCode = config.useComma ? output.join(`,\n`) : output.join(`\n`);

  writeFileSync(outputFile, formattedCode);
}
