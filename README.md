# Prisma Enums Generator

[![npm version](https://img.shields.io/npm/v/prisma-enums-generator.svg)](https://www.npmjs.com/package/prisma-enums-generator)
![GitHub Repo stars](https://img.shields.io/github/stars/umakantp/prisma-enums-generator?style=social)
![GitHub top language](https://img.shields.io/github/languages/top/umakantp/prisma-enums-generator?style=plastic)
[![License](https://img.shields.io/npm/l/prisma-enums-generator.svg)](https://opensource.org/licenses/MIT)

Prisma enum generator is a package that generates the enum that are available in your schema.

## Installation

```bash
npm install prisma-enums-generator
```

## Usage

```prisma
generator enums {
  provider = "prisma-enums-generator"
}

// output = "path to file"
```

# Example

```ts

generator client {
  provider = "prisma-client-js"
}

generator enums {
  provider = "prisma-enums-generator"
  previewFeatures = ["isExport"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String    @unique @default(uuid())
  name     String
  username String
  Profile  Profile[]
}

enum UserType {
  pro
  best
}

model Profile {
  id      String @unique @default(uuid())
  contact Int
  user    User   @relation(fields: [userId], references: [id])
  userId  String
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
