import type { GeneratorOptions } from '@prisma/generator-helper';
import { mkdirSync, writeFileSync } from 'node:fs';
import { format } from 'prettier';
import { dirname } from 'path';
import { parseConfig } from './config';

export async function onGenerate(options: GeneratorOptions) {
  const enums = options.dmmf.datamodel.enums;
  const outputFile = options.generator.output?.value ?? './types/index.ts';
  const config = parseConfig(options.generator.config);

  const output = enums.map(e => {
    let enumString = config.isExport ? `export enum ${e.name} = {\n` : `enum ${e.name} = {\n`;
    e.values.forEach(({ name: value }) => {
      enumString += `  ${value},\n`;
    });
    enumString += `}\n\n`;

    return enumString;
  });

  mkdirSync(dirname(outputFile), { recursive: true });

  const formattedCode = await format(output.join(`\n`), {
    parser: 'typescript',
  });

  writeFileSync(outputFile, formattedCode);
}
