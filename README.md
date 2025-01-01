# Prisma Enums Generator

Generates enums from your prisma schema to typescript or graphql files. Note it doesn't generate the typescript or types for shapes.

[![npm version](https://img.shields.io/npm/v/prisma-enums-generator.svg)](https://www.npmjs.com/package/prisma-enums-generator)
![GitHub Repo stars](https://img.shields.io/github/stars/umakantp/prisma-enums-generator?style=social)
![GitHub top language](https://img.shields.io/github/languages/top/umakantp/prisma-enums-generator?style=plastic)
[![License](https://img.shields.io/npm/l/prisma-enums-generator.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install prisma-enums-generator
```

## Usage

```prisma
generator enums {
  provider = "prisma-enums-generator"
  isExport = true
  useComma = true
  // output = "path to file"
}
```

# Example

```ts

generator client {
  provider = "prisma-client-js"
}

generator enums {
  provider = "prisma-enums-generator"
  isExport = true
  useComma = true
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserType {
  pro
  best
}

model User {
  id       String    @unique @default(uuid())
  name     String
  username String
  type     UserType
}
```

#### Generates

```sh
  npx prisma generate
```

> It will default generate the following file, prisma/types/index.ts with the following code

```ts
export enum UserType {
  pro,
  best,
}
```

### Contributing

If you'd like to contribute, please follow our contribution guidelines.

## Support

If you like the project, please consider supporting us by giving a ⭐️ on Github.

### Bugs

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/umakantp/prisma-enums-generator/issues)

### License

prisma-enums-generator is open-source software licensed under the MIT [license](LICENSE).

```

```
