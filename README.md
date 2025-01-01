# Prisma Enum Generator

<!-- [![Build Status](https://travis-ci.org/umakantp/prisma-enum-generator.svg?branch=master)](https://travis-ci.org/umakantp/prisma-enum-generator) -->

[![npm version](https://img.shields.io/npm/v/prisma-enum-generator.svg)](https://www.npmjs.com/package/prisma-enum-generator)
![GitHub Repo stars](https://img.shields.io/github/stars/umakantp/prisma-enum-generator?style=social)
![GitHub top language](https://img.shields.io/github/languages/top/umakantp/prisma-enum-generator?style=plastic)
[![License](https://img.shields.io/npm/l/prisma-enum-generator.svg)](https://opensource.org/licenses/MIT)

Prisma enum generator is a package that generates the enum that are available in your schema.

## Installation

```bash
npm install prisma-enum-generator
```

## Usage

```prisma
generator types {
  provider = "prisma-enum-generator"
}

// output = "path to file"
```

# Example

```ts

generator client {
  provider = "prisma-client-js"
}

generator enums {
  provider = "prisma-enum-generator"
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

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/umakantp/prisma-enum-generator/issues)

### License

prisma-enum-generator is open-source software licensed under the MIT [license](LICENSE).

```

```
