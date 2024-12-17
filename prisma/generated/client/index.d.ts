
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sample
 * 
 */
export type Sample = $Result.DefaultSelection<Prisma.$SamplePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Samples
 * const samples = await prisma.sample.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Samples
   * const samples = await prisma.sample.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.sample`: Exposes CRUD operations for the **Sample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Samples
    * const samples = await prisma.sample.findMany()
    * ```
    */
  get sample(): Prisma.SampleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sample: 'Sample',
    User: 'User',
    Referral: 'Referral',
    Coupon: 'Coupon',
    Point: 'Point',
    Blog: 'Blog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "sample" | "user" | "referral" | "coupon" | "point" | "blog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sample: {
        payload: Prisma.$SamplePayload<ExtArgs>
        fields: Prisma.SampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findFirst: {
            args: Prisma.SampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          findMany: {
            args: Prisma.SampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          create: {
            args: Prisma.SampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          createMany: {
            args: Prisma.SampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>[]
          }
          delete: {
            args: Prisma.SampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          update: {
            args: Prisma.SampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          deleteMany: {
            args: Prisma.SampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SamplePayload>
          }
          aggregate: {
            args: Prisma.SampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSample>
          }
          groupBy: {
            args: Prisma.SampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SampleCountArgs<ExtArgs>
            result: $Utils.Optional<SampleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invitedUsers: number
    Coupon: number
    points: number
    blogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedUsers?: boolean | UserCountOutputTypeCountInvitedUsersArgs
    Coupon?: boolean | UserCountOutputTypeCountCouponArgs
    points?: boolean | UserCountOutputTypeCountPointsArgs
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sample
   */

  export type AggregateSample = {
    _count: SampleCountAggregateOutputType | null
    _avg: SampleAvgAggregateOutputType | null
    _sum: SampleSumAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  export type SampleAvgAggregateOutputType = {
    id: number | null
  }

  export type SampleSumAggregateOutputType = {
    id: number | null
  }

  export type SampleMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SampleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SampleAvgAggregateInputType = {
    id?: true
  }

  export type SampleSumAggregateInputType = {
    id?: true
  }

  export type SampleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SampleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sample to aggregate.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Samples
    **/
    _count?: true | SampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SampleMaxAggregateInputType
  }

  export type GetSampleAggregateType<T extends SampleAggregateArgs> = {
        [P in keyof T & keyof AggregateSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSample[P]>
      : GetScalarType<T[P], AggregateSample[P]>
  }




  export type SampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SampleWhereInput
    orderBy?: SampleOrderByWithAggregationInput | SampleOrderByWithAggregationInput[]
    by: SampleScalarFieldEnum[] | SampleScalarFieldEnum
    having?: SampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SampleCountAggregateInputType | true
    _avg?: SampleAvgAggregateInputType
    _sum?: SampleSumAggregateInputType
    _min?: SampleMinAggregateInputType
    _max?: SampleMaxAggregateInputType
  }

  export type SampleGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SampleCountAggregateOutputType | null
    _avg: SampleAvgAggregateOutputType | null
    _sum: SampleSumAggregateOutputType | null
    _min: SampleMinAggregateOutputType | null
    _max: SampleMaxAggregateOutputType | null
  }

  type GetSampleGroupByPayload<T extends SampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SampleGroupByOutputType[P]>
            : GetScalarType<T[P], SampleGroupByOutputType[P]>
        }
      >
    >


  export type SampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sample"]>

  export type SampleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sample"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sample"]>
    composites: {}
  }

  type SampleGetPayload<S extends boolean | null | undefined | SampleDefaultArgs> = $Result.GetResult<Prisma.$SamplePayload, S>

  type SampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SampleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SampleCountAggregateInputType | true
    }

  export interface SampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sample'], meta: { name: 'Sample' } }
    /**
     * Find zero or one Sample that matches the filter.
     * @param {SampleFindUniqueArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SampleFindUniqueArgs>(args: SelectSubset<T, SampleFindUniqueArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sample that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SampleFindUniqueOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SampleFindUniqueOrThrowArgs>(args: SelectSubset<T, SampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SampleFindFirstArgs>(args?: SelectSubset<T, SampleFindFirstArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindFirstOrThrowArgs} args - Arguments to find a Sample
     * @example
     * // Get one Sample
     * const sample = await prisma.sample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SampleFindFirstOrThrowArgs>(args?: SelectSubset<T, SampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Samples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Samples
     * const samples = await prisma.sample.findMany()
     * 
     * // Get first 10 Samples
     * const samples = await prisma.sample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sampleWithIdOnly = await prisma.sample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SampleFindManyArgs>(args?: SelectSubset<T, SampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sample.
     * @param {SampleCreateArgs} args - Arguments to create a Sample.
     * @example
     * // Create one Sample
     * const Sample = await prisma.sample.create({
     *   data: {
     *     // ... data to create a Sample
     *   }
     * })
     * 
     */
    create<T extends SampleCreateArgs>(args: SelectSubset<T, SampleCreateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Samples.
     * @param {SampleCreateManyArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SampleCreateManyArgs>(args?: SelectSubset<T, SampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Samples and returns the data saved in the database.
     * @param {SampleCreateManyAndReturnArgs} args - Arguments to create many Samples.
     * @example
     * // Create many Samples
     * const sample = await prisma.sample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Samples and only return the `id`
     * const sampleWithIdOnly = await prisma.sample.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SampleCreateManyAndReturnArgs>(args?: SelectSubset<T, SampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sample.
     * @param {SampleDeleteArgs} args - Arguments to delete one Sample.
     * @example
     * // Delete one Sample
     * const Sample = await prisma.sample.delete({
     *   where: {
     *     // ... filter to delete one Sample
     *   }
     * })
     * 
     */
    delete<T extends SampleDeleteArgs>(args: SelectSubset<T, SampleDeleteArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sample.
     * @param {SampleUpdateArgs} args - Arguments to update one Sample.
     * @example
     * // Update one Sample
     * const sample = await prisma.sample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SampleUpdateArgs>(args: SelectSubset<T, SampleUpdateArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Samples.
     * @param {SampleDeleteManyArgs} args - Arguments to filter Samples to delete.
     * @example
     * // Delete a few Samples
     * const { count } = await prisma.sample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SampleDeleteManyArgs>(args?: SelectSubset<T, SampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Samples
     * const sample = await prisma.sample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SampleUpdateManyArgs>(args: SelectSubset<T, SampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sample.
     * @param {SampleUpsertArgs} args - Arguments to update or create a Sample.
     * @example
     * // Update or create a Sample
     * const sample = await prisma.sample.upsert({
     *   create: {
     *     // ... data to create a Sample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sample we want to update
     *   }
     * })
     */
    upsert<T extends SampleUpsertArgs>(args: SelectSubset<T, SampleUpsertArgs<ExtArgs>>): Prisma__SampleClient<$Result.GetResult<Prisma.$SamplePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Samples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleCountArgs} args - Arguments to filter Samples to count.
     * @example
     * // Count the number of Samples
     * const count = await prisma.sample.count({
     *   where: {
     *     // ... the filter for the Samples we want to count
     *   }
     * })
    **/
    count<T extends SampleCountArgs>(
      args?: Subset<T, SampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SampleAggregateArgs>(args: Subset<T, SampleAggregateArgs>): Prisma.PrismaPromise<GetSampleAggregateType<T>>

    /**
     * Group by Sample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SampleGroupByArgs['orderBy'] }
        : { orderBy?: SampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sample model
   */
  readonly fields: SampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sample model
   */ 
  interface SampleFieldRefs {
    readonly id: FieldRef<"Sample", 'Int'>
    readonly name: FieldRef<"Sample", 'String'>
    readonly createdAt: FieldRef<"Sample", 'DateTime'>
    readonly updatedAt: FieldRef<"Sample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sample findUnique
   */
  export type SampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findUniqueOrThrow
   */
  export type SampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample findFirst
   */
  export type SampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findFirstOrThrow
   */
  export type SampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Sample to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Samples.
     */
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample findMany
   */
  export type SampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter, which Samples to fetch.
     */
    where?: SampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Samples to fetch.
     */
    orderBy?: SampleOrderByWithRelationInput | SampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Samples.
     */
    cursor?: SampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Samples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Samples.
     */
    skip?: number
    distinct?: SampleScalarFieldEnum | SampleScalarFieldEnum[]
  }

  /**
   * Sample create
   */
  export type SampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The data needed to create a Sample.
     */
    data: XOR<SampleCreateInput, SampleUncheckedCreateInput>
  }

  /**
   * Sample createMany
   */
  export type SampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample createManyAndReturn
   */
  export type SampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Samples.
     */
    data: SampleCreateManyInput | SampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sample update
   */
  export type SampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The data needed to update a Sample.
     */
    data: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
    /**
     * Choose, which Sample to update.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample updateMany
   */
  export type SampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Samples.
     */
    data: XOR<SampleUpdateManyMutationInput, SampleUncheckedUpdateManyInput>
    /**
     * Filter which Samples to update
     */
    where?: SampleWhereInput
  }

  /**
   * Sample upsert
   */
  export type SampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * The filter to search for the Sample to update in case it exists.
     */
    where: SampleWhereUniqueInput
    /**
     * In case the Sample found by the `where` argument doesn't exist, create a new Sample with this data.
     */
    create: XOR<SampleCreateInput, SampleUncheckedCreateInput>
    /**
     * In case the Sample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SampleUpdateInput, SampleUncheckedUpdateInput>
  }

  /**
   * Sample delete
   */
  export type SampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
    /**
     * Filter which Sample to delete.
     */
    where: SampleWhereUniqueInput
  }

  /**
   * Sample deleteMany
   */
  export type SampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Samples to delete
     */
    where?: SampleWhereInput
  }

  /**
   * Sample without action
   */
  export type SampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sample
     */
    select?: SampleSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    totalPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    totalPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profilPicture: string | null
    referralCode: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    profilPicture: string | null
    referralCode: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profilPicture: number
    referralCode: number
    totalPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    totalPoints?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    totalPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilPicture?: true
    referralCode?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilPicture?: true
    referralCode?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilPicture?: true
    referralCode?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    profilPicture: string | null
    referralCode: string
    totalPoints: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilPicture?: boolean
    referralCode?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviter?: boolean | User$inviterArgs<ExtArgs>
    invitedUsers?: boolean | User$invitedUsersArgs<ExtArgs>
    Coupon?: boolean | User$CouponArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilPicture?: boolean
    referralCode?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilPicture?: boolean
    referralCode?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | User$inviterArgs<ExtArgs>
    invitedUsers?: boolean | User$invitedUsersArgs<ExtArgs>
    Coupon?: boolean | User$CouponArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      inviter: Prisma.$ReferralPayload<ExtArgs> | null
      invitedUsers: Prisma.$ReferralPayload<ExtArgs>[]
      Coupon: Prisma.$CouponPayload<ExtArgs>[]
      points: Prisma.$PointPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      profilPicture: string | null
      referralCode: string
      totalPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends User$inviterArgs<ExtArgs> = {}>(args?: Subset<T, User$inviterArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    invitedUsers<T extends User$invitedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$invitedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany"> | Null>
    Coupon<T extends User$CouponArgs<ExtArgs> = {}>(args?: Subset<T, User$CouponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany"> | Null>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany"> | Null>
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilPicture: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly totalPoints: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.inviter
   */
  export type User$inviterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
  }

  /**
   * User.invitedUsers
   */
  export type User$invitedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User.Coupon
   */
  export type User$CouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
  }

  export type ReferralSumAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
    createdAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
    createdAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    inviterId: number
    inviteeId: number
    createdAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
  }

  export type ReferralSumAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: number
    inviterId: number
    inviteeId: number
    createdAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdAt?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdAt?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdAt?: boolean
  }

  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      inviter: Prisma.$UserPayload<ExtArgs>
      invitee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviterId: number
      inviteeId: number
      createdAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invitee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'Int'>
    readonly inviterId: FieldRef<"Referral", 'Int'>
    readonly inviteeId: FieldRef<"Referral", 'Int'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    discountValue: number | null
  }

  export type CouponSumAggregateOutputType = {
    id: number | null
    userId: number | null
    discountValue: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    discountValue: number | null
    isUsed: boolean | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    code: string | null
    discountValue: number | null
    isUsed: boolean | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    discountValue: number
    isUsed: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    id?: true
    userId?: true
    discountValue?: true
  }

  export type CouponSumAggregateInputType = {
    id?: true
    userId?: true
    discountValue?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    discountValue?: true
    isUsed?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    discountValue?: true
    isUsed?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    discountValue?: true
    isUsed?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: number
    userId: number
    code: string
    discountValue: number
    isUsed: boolean
    expiredAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    discountValue?: boolean
    isUsed?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    discountValue?: boolean
    isUsed?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    discountValue?: boolean
    isUsed?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      code: string
      discountValue: number
      isUsed: boolean
      expiredAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */ 
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'Int'>
    readonly userId: FieldRef<"Coupon", 'Int'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly discountValue: FieldRef<"Coupon", 'Int'>
    readonly isUsed: FieldRef<"Coupon", 'Boolean'>
    readonly expiredAt: FieldRef<"Coupon", 'DateTime'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
  }

  export type PointSumAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
  }

  export type PointMinAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type PointMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    points: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    userId: number
    points: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    id?: true
    userId?: true
    points?: true
  }

  export type PointSumAggregateInputType = {
    id?: true
    userId?: true
    points?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    userId?: true
    points?: true
    expiredAt?: true
    createdAt?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    userId?: true
    points?: true
    expiredAt?: true
    createdAt?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    userId?: true
    points?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: number
    userId: number
    points: number
    expiredAt: Date
    createdAt: Date
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    points?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    points?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    userId?: boolean
    points?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      points: number
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Point model
   */ 
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'Int'>
    readonly userId: FieldRef<"Point", 'Int'>
    readonly points: FieldRef<"Point", 'Int'>
    readonly expiredAt: FieldRef<"Point", 'DateTime'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    description: string | null
    category: string | null
    userId: number | null
    content: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    thumbnail: string | null
    description: string | null
    category: string | null
    userId: number | null
    content: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    thumbnail: number
    description: number
    category: number
    userId: number
    content: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    description?: true
    category?: true
    userId?: true
    content?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    description?: true
    category?: true
    userId?: true
    content?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    description?: true
    category?: true
    userId?: true
    content?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    thumbnail: string
    description: string
    category: string
    userId: number
    content: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    description?: boolean
    category?: boolean
    userId?: boolean
    content?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    description?: boolean
    category?: boolean
    userId?: boolean
    content?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    description?: boolean
    category?: boolean
    userId?: boolean
    content?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      thumbnail: string
      description: string
      category: string
      userId: number
      content: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */ 
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly thumbnail: FieldRef<"Blog", 'String'>
    readonly description: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly userId: FieldRef<"Blog", 'Int'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly deletedAt: FieldRef<"Blog", 'DateTime'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SampleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SampleScalarFieldEnum = (typeof SampleScalarFieldEnum)[keyof typeof SampleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profilPicture: 'profilPicture',
    referralCode: 'referralCode',
    totalPoints: 'totalPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    inviterId: 'inviterId',
    inviteeId: 'inviteeId',
    createdAt: 'createdAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    discountValue: 'discountValue',
    isUsed: 'isUsed',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    points: 'points',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumbnail: 'thumbnail',
    description: 'description',
    category: 'category',
    userId: 'userId',
    content: 'content',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SampleWhereInput = {
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    id?: IntFilter<"Sample"> | number
    name?: StringFilter<"Sample"> | string
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }

  export type SampleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SampleWhereInput | SampleWhereInput[]
    OR?: SampleWhereInput[]
    NOT?: SampleWhereInput | SampleWhereInput[]
    name?: StringFilter<"Sample"> | string
    createdAt?: DateTimeFilter<"Sample"> | Date | string
    updatedAt?: DateTimeFilter<"Sample"> | Date | string
  }, "id">

  export type SampleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SampleCountOrderByAggregateInput
    _avg?: SampleAvgOrderByAggregateInput
    _max?: SampleMaxOrderByAggregateInput
    _min?: SampleMinOrderByAggregateInput
    _sum?: SampleSumOrderByAggregateInput
  }

  export type SampleScalarWhereWithAggregatesInput = {
    AND?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    OR?: SampleScalarWhereWithAggregatesInput[]
    NOT?: SampleScalarWhereWithAggregatesInput | SampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sample"> | number
    name?: StringWithAggregatesFilter<"Sample"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sample"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilPicture?: StringNullableFilter<"User"> | string | null
    referralCode?: StringFilter<"User"> | string
    totalPoints?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    inviter?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    invitedUsers?: ReferralListRelationFilter
    Coupon?: CouponListRelationFilter
    points?: PointListRelationFilter
    blogs?: BlogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilPicture?: SortOrderInput | SortOrder
    referralCode?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviter?: ReferralOrderByWithRelationInput
    invitedUsers?: ReferralOrderByRelationAggregateInput
    Coupon?: CouponOrderByRelationAggregateInput
    points?: PointOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilPicture?: StringNullableFilter<"User"> | string | null
    totalPoints?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    inviter?: XOR<ReferralNullableScalarRelationFilter, ReferralWhereInput> | null
    invitedUsers?: ReferralListRelationFilter
    Coupon?: CouponListRelationFilter
    points?: PointListRelationFilter
    blogs?: BlogListRelationFilter
  }, "id" | "email" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilPicture?: SortOrderInput | SortOrder
    referralCode?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilPicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    referralCode?: StringWithAggregatesFilter<"User"> | string
    totalPoints?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: IntFilter<"Referral"> | number
    inviterId?: IntFilter<"Referral"> | number
    inviteeId?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdAt?: SortOrder
    inviter?: UserOrderByWithRelationInput
    invitee?: UserOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inviteeId?: number
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    inviterId?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "inviteeId">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Referral"> | number
    inviterId?: IntWithAggregatesFilter<"Referral"> | number
    inviteeId?: IntWithAggregatesFilter<"Referral"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: IntFilter<"Coupon"> | number
    userId?: IntFilter<"Coupon"> | number
    code?: StringFilter<"Coupon"> | string
    discountValue?: IntFilter<"Coupon"> | number
    isUsed?: BoolFilter<"Coupon"> | boolean
    expiredAt?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    userId?: IntFilter<"Coupon"> | number
    discountValue?: IntFilter<"Coupon"> | number
    isUsed?: BoolFilter<"Coupon"> | boolean
    expiredAt?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coupon"> | number
    userId?: IntWithAggregatesFilter<"Coupon"> | number
    code?: StringWithAggregatesFilter<"Coupon"> | string
    discountValue?: IntWithAggregatesFilter<"Coupon"> | number
    isUsed?: BoolWithAggregatesFilter<"Coupon"> | boolean
    expiredAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: IntFilter<"Point"> | number
    userId?: IntFilter<"Point"> | number
    points?: IntFilter<"Point"> | number
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    userId?: IntFilter<"Point"> | number
    points?: IntFilter<"Point"> | number
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Point"> | number
    userId?: IntWithAggregatesFilter<"Point"> | number
    points?: IntWithAggregatesFilter<"Point"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    thumbnail?: StringFilter<"Blog"> | string
    description?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    userId?: IntFilter<"Blog"> | number
    content?: StringFilter<"Blog"> | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    thumbnail?: StringFilter<"Blog"> | string
    description?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    userId?: IntFilter<"Blog"> | number
    content?: StringFilter<"Blog"> | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    thumbnail?: StringWithAggregatesFilter<"Blog"> | string
    description?: StringWithAggregatesFilter<"Blog"> | string
    category?: StringWithAggregatesFilter<"Blog"> | string
    userId?: IntWithAggregatesFilter<"Blog"> | number
    content?: StringWithAggregatesFilter<"Blog"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type SampleCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SampleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralCreateNestedManyWithoutInviterInput
    Coupon?: CouponCreateNestedManyWithoutUserInput
    points?: PointCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralUncheckedCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralUncheckedCreateNestedManyWithoutInviterInput
    Coupon?: CouponUncheckedCreateNestedManyWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUpdateManyWithoutUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUncheckedUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUncheckedUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUncheckedUpdateManyWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    createdAt?: Date | string
    inviter: UserCreateNestedOneWithoutInvitedUsersInput
    invitee: UserCreateNestedOneWithoutInviterInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: number
    inviterId: number
    inviteeId: number
    createdAt?: Date | string
  }

  export type ReferralUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitedUsersNestedInput
    invitee?: UserUpdateOneRequiredWithoutInviterNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: number
    inviterId: number
    inviteeId: number
    createdAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: number
    userId: number
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: number
    userId: number
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    id?: number
    userId: number
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type PointUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyInput = {
    id?: number
    userId: number
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type PointUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    title: string
    thumbnail: string
    description: string
    category: string
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    thumbnail: string
    description: string
    category: string
    userId: number
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    thumbnail: string
    description: string
    category: string
    userId: number
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SampleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SampleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SampleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ReferralNullableScalarRelationFilter = {
    is?: ReferralWhereInput | null
    isNot?: ReferralWhereInput | null
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilPicture?: SortOrder
    referralCode?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilPicture?: SortOrder
    referralCode?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilPicture?: SortOrder
    referralCode?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    totalPoints?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discountValue?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    isUsed?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discountValue?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    points?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReferralCreateNestedOneWithoutInviteeInput = {
    create?: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutInviteeInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralCreateNestedManyWithoutInviterInput = {
    create?: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput> | ReferralCreateWithoutInviterInput[] | ReferralUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutInviterInput | ReferralCreateOrConnectWithoutInviterInput[]
    createMany?: ReferralCreateManyInviterInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedOneWithoutInviteeInput = {
    create?: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutInviteeInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput> | ReferralCreateWithoutInviterInput[] | ReferralUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutInviterInput | ReferralCreateOrConnectWithoutInviterInput[]
    createMany?: ReferralCreateManyInviterInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReferralUpdateOneWithoutInviteeNestedInput = {
    create?: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutInviteeInput
    upsert?: ReferralUpsertWithoutInviteeInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutInviteeInput, ReferralUpdateWithoutInviteeInput>, ReferralUncheckedUpdateWithoutInviteeInput>
  }

  export type ReferralUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput> | ReferralCreateWithoutInviterInput[] | ReferralUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutInviterInput | ReferralCreateOrConnectWithoutInviterInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutInviterInput | ReferralUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ReferralCreateManyInviterInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutInviterInput | ReferralUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutInviterInput | ReferralUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUserInput | CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUserInput | CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUserInput | CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateOneWithoutInviteeNestedInput = {
    create?: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutInviteeInput
    upsert?: ReferralUpsertWithoutInviteeInput
    disconnect?: ReferralWhereInput | boolean
    delete?: ReferralWhereInput | boolean
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutInviteeInput, ReferralUpdateWithoutInviteeInput>, ReferralUncheckedUpdateWithoutInviteeInput>
  }

  export type ReferralUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput> | ReferralCreateWithoutInviterInput[] | ReferralUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutInviterInput | ReferralCreateOrConnectWithoutInviterInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutInviterInput | ReferralUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: ReferralCreateManyInviterInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutInviterInput | ReferralUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutInviterInput | ReferralUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput> | CouponCreateWithoutUserInput[] | CouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutUserInput | CouponCreateOrConnectWithoutUserInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutUserInput | CouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponCreateManyUserInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutUserInput | CouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutUserInput | CouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvitedUsersInput = {
    create?: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInviterInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvitedUsersNestedInput = {
    create?: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitedUsersInput
    upsert?: UserUpsertWithoutInvitedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitedUsersInput, UserUpdateWithoutInvitedUsersInput>, UserUncheckedUpdateWithoutInvitedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutInviterNestedInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    upsert?: UserUpsertWithoutInviterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInviterInput, UserUpdateWithoutInviterInput>, UserUncheckedUpdateWithoutInviterInput>
  }

  export type UserCreateNestedOneWithoutCouponInput = {
    create?: XOR<UserCreateWithoutCouponInput, UserUncheckedCreateWithoutCouponInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCouponNestedInput = {
    create?: XOR<UserCreateWithoutCouponInput, UserUncheckedCreateWithoutCouponInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponInput
    upsert?: UserUpsertWithoutCouponInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponInput, UserUpdateWithoutCouponInput>, UserUncheckedUpdateWithoutCouponInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReferralCreateWithoutInviteeInput = {
    createdAt?: Date | string
    inviter: UserCreateNestedOneWithoutInvitedUsersInput
  }

  export type ReferralUncheckedCreateWithoutInviteeInput = {
    id?: number
    inviterId: number
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutInviteeInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
  }

  export type ReferralCreateWithoutInviterInput = {
    createdAt?: Date | string
    invitee: UserCreateNestedOneWithoutInviterInput
  }

  export type ReferralUncheckedCreateWithoutInviterInput = {
    id?: number
    inviteeId: number
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutInviterInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput>
  }

  export type ReferralCreateManyInviterInputEnvelope = {
    data: ReferralCreateManyInviterInput | ReferralCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutUserInput = {
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutUserInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput>
  }

  export type CouponCreateManyUserInputEnvelope = {
    data: CouponCreateManyUserInput | CouponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointCreateWithoutUserInput = {
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type PointUncheckedCreateWithoutUserInput = {
    id?: number
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutUserInput = {
    title: string
    thumbnail: string
    description: string
    category: string
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    thumbnail: string
    description: string
    category: string
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutUserInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogCreateManyUserInputEnvelope = {
    data: BlogCreateManyUserInput | BlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralUpsertWithoutInviteeInput = {
    update: XOR<ReferralUpdateWithoutInviteeInput, ReferralUncheckedUpdateWithoutInviteeInput>
    create: XOR<ReferralCreateWithoutInviteeInput, ReferralUncheckedCreateWithoutInviteeInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutInviteeInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutInviteeInput, ReferralUncheckedUpdateWithoutInviteeInput>
  }

  export type ReferralUpdateWithoutInviteeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutInvitedUsersNestedInput
  }

  export type ReferralUncheckedUpdateWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutInviterInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutInviterInput, ReferralUncheckedUpdateWithoutInviterInput>
    create: XOR<ReferralCreateWithoutInviterInput, ReferralUncheckedCreateWithoutInviterInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutInviterInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutInviterInput, ReferralUncheckedUpdateWithoutInviterInput>
  }

  export type ReferralUpdateManyWithWhereWithoutInviterInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutInviterInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: IntFilter<"Referral"> | number
    inviterId?: IntFilter<"Referral"> | number
    inviteeId?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type CouponUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutUserInput, CouponUncheckedUpdateWithoutUserInput>
    create: XOR<CouponCreateWithoutUserInput, CouponUncheckedCreateWithoutUserInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutUserInput, CouponUncheckedUpdateWithoutUserInput>
  }

  export type CouponUpdateManyWithWhereWithoutUserInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutUserInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    id?: IntFilter<"Coupon"> | number
    userId?: IntFilter<"Coupon"> | number
    code?: StringFilter<"Coupon"> | string
    discountValue?: IntFilter<"Coupon"> | number
    isUsed?: BoolFilter<"Coupon"> | boolean
    expiredAt?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: IntFilter<"Point"> | number
    userId?: IntFilter<"Point"> | number
    points?: IntFilter<"Point"> | number
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
  }

  export type BlogUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
  }

  export type BlogUpdateManyWithWhereWithoutUserInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    thumbnail?: StringFilter<"Blog"> | string
    description?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    userId?: IntFilter<"Blog"> | number
    content?: StringFilter<"Blog"> | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type UserCreateWithoutInvitedUsersInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralCreateNestedOneWithoutInviteeInput
    Coupon?: CouponCreateNestedManyWithoutUserInput
    points?: PointCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitedUsersInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralUncheckedCreateNestedOneWithoutInviteeInput
    Coupon?: CouponUncheckedCreateNestedManyWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
  }

  export type UserCreateWithoutInviterInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedUsers?: ReferralCreateNestedManyWithoutInviterInput
    Coupon?: CouponCreateNestedManyWithoutUserInput
    points?: PointCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInviterInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invitedUsers?: ReferralUncheckedCreateNestedManyWithoutInviterInput
    Coupon?: CouponUncheckedCreateNestedManyWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInviterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
  }

  export type UserUpsertWithoutInvitedUsersInput = {
    update: XOR<UserUpdateWithoutInvitedUsersInput, UserUncheckedUpdateWithoutInvitedUsersInput>
    create: XOR<UserCreateWithoutInvitedUsersInput, UserUncheckedCreateWithoutInvitedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitedUsersInput, UserUncheckedUpdateWithoutInvitedUsersInput>
  }

  export type UserUpdateWithoutInvitedUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUpdateOneWithoutInviteeNestedInput
    Coupon?: CouponUpdateManyWithoutUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUncheckedUpdateOneWithoutInviteeNestedInput
    Coupon?: CouponUncheckedUpdateManyWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInviterInput = {
    update: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInviterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
  }

  export type UserUpdateWithoutInviterInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedUsers?: ReferralUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUpdateManyWithoutUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedUsers?: ReferralUncheckedUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUncheckedUpdateManyWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCouponInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralCreateNestedManyWithoutInviterInput
    points?: PointCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCouponInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralUncheckedCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralUncheckedCreateNestedManyWithoutInviterInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCouponInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponInput, UserUncheckedCreateWithoutCouponInput>
  }

  export type UserUpsertWithoutCouponInput = {
    update: XOR<UserUpdateWithoutCouponInput, UserUncheckedUpdateWithoutCouponInput>
    create: XOR<UserCreateWithoutCouponInput, UserUncheckedCreateWithoutCouponInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponInput, UserUncheckedUpdateWithoutCouponInput>
  }

  export type UserUpdateWithoutCouponInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUpdateManyWithoutInviterNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUncheckedUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUncheckedUpdateManyWithoutInviterNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralCreateNestedManyWithoutInviterInput
    Coupon?: CouponCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralUncheckedCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralUncheckedCreateNestedManyWithoutInviterInput
    Coupon?: CouponUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUncheckedUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUncheckedUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlogsInput = {
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralCreateNestedManyWithoutInviterInput
    Coupon?: CouponCreateNestedManyWithoutUserInput
    points?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: number
    name: string
    email: string
    password: string
    profilPicture?: string | null
    referralCode: string
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter?: ReferralUncheckedCreateNestedOneWithoutInviteeInput
    invitedUsers?: ReferralUncheckedCreateNestedManyWithoutInviterInput
    Coupon?: CouponUncheckedCreateNestedManyWithoutUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUpdateManyWithoutUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilPicture?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: ReferralUncheckedUpdateOneWithoutInviteeNestedInput
    invitedUsers?: ReferralUncheckedUpdateManyWithoutInviterNestedInput
    Coupon?: CouponUncheckedUpdateManyWithoutUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReferralCreateManyInviterInput = {
    id?: number
    inviteeId: number
    createdAt?: Date | string
  }

  export type CouponCreateManyUserInput = {
    id?: number
    code: string
    discountValue: number
    isUsed?: boolean
    expiredAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointCreateManyUserInput = {
    id?: number
    points: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type BlogCreateManyUserInput = {
    id?: number
    title: string
    thumbnail: string
    description: string
    category: string
    content: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUpdateWithoutInviterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitee?: UserUpdateOneRequiredWithoutInviterNestedInput
  }

  export type ReferralUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}