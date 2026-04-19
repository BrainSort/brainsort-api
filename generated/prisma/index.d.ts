
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Algoritmo
 * 
 */
export type Algoritmo = $Result.DefaultSelection<Prisma.$AlgoritmoPayload>
/**
 * Model EjercicioPrediccion
 * 
 */
export type EjercicioPrediccion = $Result.DefaultSelection<Prisma.$EjercicioPrediccionPayload>
/**
 * Model ProgresoUsuario
 * 
 */
export type ProgresoUsuario = $Result.DefaultSelection<Prisma.$ProgresoUsuarioPayload>
/**
 * Model Insignia
 * 
 */
export type Insignia = $Result.DefaultSelection<Prisma.$InsigniaPayload>
/**
 * Model ProgresoInsignia
 * 
 */
export type ProgresoInsignia = $Result.DefaultSelection<Prisma.$ProgresoInsigniaPayload>
/**
 * Model SesionSimulacion
 * 
 */
export type SesionSimulacion = $Result.DefaultSelection<Prisma.$SesionSimulacionPayload>
/**
 * Model RespuestaEjercicio
 * 
 */
export type RespuestaEjercicio = $Result.DefaultSelection<Prisma.$RespuestaEjercicioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  Estudiante: 'Estudiante',
  Profesor: 'Profesor',
  Autodidacta: 'Autodidacta'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const CategoriaAlgoritmo: {
  Ordenamiento: 'Ordenamiento',
  Busqueda: 'Busqueda',
  EstructurasLineales: 'EstructurasLineales'
};

export type CategoriaAlgoritmo = (typeof CategoriaAlgoritmo)[keyof typeof CategoriaAlgoritmo]


export const DificultadEjercicio: {
  Facil: 'Facil',
  Medio: 'Medio',
  Dificil: 'Dificil'
};

export type DificultadEjercicio = (typeof DificultadEjercicio)[keyof typeof DificultadEjercicio]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type CategoriaAlgoritmo = $Enums.CategoriaAlgoritmo

export const CategoriaAlgoritmo: typeof $Enums.CategoriaAlgoritmo

export type DificultadEjercicio = $Enums.DificultadEjercicio

export const DificultadEjercicio: typeof $Enums.DificultadEjercicio

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs>;

  /**
   * `prisma.algoritmo`: Exposes CRUD operations for the **Algoritmo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Algoritmos
    * const algoritmos = await prisma.algoritmo.findMany()
    * ```
    */
  get algoritmo(): Prisma.AlgoritmoDelegate<ExtArgs>;

  /**
   * `prisma.ejercicioPrediccion`: Exposes CRUD operations for the **EjercicioPrediccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EjercicioPrediccions
    * const ejercicioPrediccions = await prisma.ejercicioPrediccion.findMany()
    * ```
    */
  get ejercicioPrediccion(): Prisma.EjercicioPrediccionDelegate<ExtArgs>;

  /**
   * `prisma.progresoUsuario`: Exposes CRUD operations for the **ProgresoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgresoUsuarios
    * const progresoUsuarios = await prisma.progresoUsuario.findMany()
    * ```
    */
  get progresoUsuario(): Prisma.ProgresoUsuarioDelegate<ExtArgs>;

  /**
   * `prisma.insignia`: Exposes CRUD operations for the **Insignia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insignias
    * const insignias = await prisma.insignia.findMany()
    * ```
    */
  get insignia(): Prisma.InsigniaDelegate<ExtArgs>;

  /**
   * `prisma.progresoInsignia`: Exposes CRUD operations for the **ProgresoInsignia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgresoInsignias
    * const progresoInsignias = await prisma.progresoInsignia.findMany()
    * ```
    */
  get progresoInsignia(): Prisma.ProgresoInsigniaDelegate<ExtArgs>;

  /**
   * `prisma.sesionSimulacion`: Exposes CRUD operations for the **SesionSimulacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SesionSimulacions
    * const sesionSimulacions = await prisma.sesionSimulacion.findMany()
    * ```
    */
  get sesionSimulacion(): Prisma.SesionSimulacionDelegate<ExtArgs>;

  /**
   * `prisma.respuestaEjercicio`: Exposes CRUD operations for the **RespuestaEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RespuestaEjercicios
    * const respuestaEjercicios = await prisma.respuestaEjercicio.findMany()
    * ```
    */
  get respuestaEjercicio(): Prisma.RespuestaEjercicioDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Usuario: 'Usuario',
    Administrador: 'Administrador',
    Algoritmo: 'Algoritmo',
    EjercicioPrediccion: 'EjercicioPrediccion',
    ProgresoUsuario: 'ProgresoUsuario',
    Insignia: 'Insignia',
    ProgresoInsignia: 'ProgresoInsignia',
    SesionSimulacion: 'SesionSimulacion',
    RespuestaEjercicio: 'RespuestaEjercicio'
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
      modelProps: "usuario" | "administrador" | "algoritmo" | "ejercicioPrediccion" | "progresoUsuario" | "insignia" | "progresoInsignia" | "sesionSimulacion" | "respuestaEjercicio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Algoritmo: {
        payload: Prisma.$AlgoritmoPayload<ExtArgs>
        fields: Prisma.AlgoritmoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlgoritmoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlgoritmoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          findFirst: {
            args: Prisma.AlgoritmoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlgoritmoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          findMany: {
            args: Prisma.AlgoritmoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>[]
          }
          create: {
            args: Prisma.AlgoritmoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          createMany: {
            args: Prisma.AlgoritmoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlgoritmoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>[]
          }
          delete: {
            args: Prisma.AlgoritmoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          update: {
            args: Prisma.AlgoritmoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          deleteMany: {
            args: Prisma.AlgoritmoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlgoritmoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlgoritmoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlgoritmoPayload>
          }
          aggregate: {
            args: Prisma.AlgoritmoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlgoritmo>
          }
          groupBy: {
            args: Prisma.AlgoritmoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlgoritmoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlgoritmoCountArgs<ExtArgs>
            result: $Utils.Optional<AlgoritmoCountAggregateOutputType> | number
          }
        }
      }
      EjercicioPrediccion: {
        payload: Prisma.$EjercicioPrediccionPayload<ExtArgs>
        fields: Prisma.EjercicioPrediccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioPrediccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioPrediccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          findFirst: {
            args: Prisma.EjercicioPrediccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioPrediccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          findMany: {
            args: Prisma.EjercicioPrediccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>[]
          }
          create: {
            args: Prisma.EjercicioPrediccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          createMany: {
            args: Prisma.EjercicioPrediccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioPrediccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>[]
          }
          delete: {
            args: Prisma.EjercicioPrediccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          update: {
            args: Prisma.EjercicioPrediccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioPrediccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioPrediccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EjercicioPrediccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPrediccionPayload>
          }
          aggregate: {
            args: Prisma.EjercicioPrediccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicioPrediccion>
          }
          groupBy: {
            args: Prisma.EjercicioPrediccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioPrediccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioPrediccionCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioPrediccionCountAggregateOutputType> | number
          }
        }
      }
      ProgresoUsuario: {
        payload: Prisma.$ProgresoUsuarioPayload<ExtArgs>
        fields: Prisma.ProgresoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ProgresoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          findMany: {
            args: Prisma.ProgresoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>[]
          }
          create: {
            args: Prisma.ProgresoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          createMany: {
            args: Prisma.ProgresoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.ProgresoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          update: {
            args: Prisma.ProgresoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgresoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ProgresoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresoUsuario>
          }
          groupBy: {
            args: Prisma.ProgresoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Insignia: {
        payload: Prisma.$InsigniaPayload<ExtArgs>
        fields: Prisma.InsigniaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsigniaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsigniaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          findFirst: {
            args: Prisma.InsigniaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsigniaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          findMany: {
            args: Prisma.InsigniaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>[]
          }
          create: {
            args: Prisma.InsigniaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          createMany: {
            args: Prisma.InsigniaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsigniaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>[]
          }
          delete: {
            args: Prisma.InsigniaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          update: {
            args: Prisma.InsigniaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          deleteMany: {
            args: Prisma.InsigniaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsigniaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InsigniaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsigniaPayload>
          }
          aggregate: {
            args: Prisma.InsigniaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsignia>
          }
          groupBy: {
            args: Prisma.InsigniaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsigniaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsigniaCountArgs<ExtArgs>
            result: $Utils.Optional<InsigniaCountAggregateOutputType> | number
          }
        }
      }
      ProgresoInsignia: {
        payload: Prisma.$ProgresoInsigniaPayload<ExtArgs>
        fields: Prisma.ProgresoInsigniaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresoInsigniaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresoInsigniaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          findFirst: {
            args: Prisma.ProgresoInsigniaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresoInsigniaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          findMany: {
            args: Prisma.ProgresoInsigniaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>[]
          }
          create: {
            args: Prisma.ProgresoInsigniaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          createMany: {
            args: Prisma.ProgresoInsigniaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresoInsigniaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>[]
          }
          delete: {
            args: Prisma.ProgresoInsigniaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          update: {
            args: Prisma.ProgresoInsigniaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          deleteMany: {
            args: Prisma.ProgresoInsigniaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresoInsigniaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgresoInsigniaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgresoInsigniaPayload>
          }
          aggregate: {
            args: Prisma.ProgresoInsigniaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresoInsignia>
          }
          groupBy: {
            args: Prisma.ProgresoInsigniaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgresoInsigniaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresoInsigniaCountArgs<ExtArgs>
            result: $Utils.Optional<ProgresoInsigniaCountAggregateOutputType> | number
          }
        }
      }
      SesionSimulacion: {
        payload: Prisma.$SesionSimulacionPayload<ExtArgs>
        fields: Prisma.SesionSimulacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SesionSimulacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SesionSimulacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          findFirst: {
            args: Prisma.SesionSimulacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SesionSimulacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          findMany: {
            args: Prisma.SesionSimulacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>[]
          }
          create: {
            args: Prisma.SesionSimulacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          createMany: {
            args: Prisma.SesionSimulacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SesionSimulacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>[]
          }
          delete: {
            args: Prisma.SesionSimulacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          update: {
            args: Prisma.SesionSimulacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          deleteMany: {
            args: Prisma.SesionSimulacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SesionSimulacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SesionSimulacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SesionSimulacionPayload>
          }
          aggregate: {
            args: Prisma.SesionSimulacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSesionSimulacion>
          }
          groupBy: {
            args: Prisma.SesionSimulacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SesionSimulacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SesionSimulacionCountArgs<ExtArgs>
            result: $Utils.Optional<SesionSimulacionCountAggregateOutputType> | number
          }
        }
      }
      RespuestaEjercicio: {
        payload: Prisma.$RespuestaEjercicioPayload<ExtArgs>
        fields: Prisma.RespuestaEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespuestaEjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespuestaEjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          findFirst: {
            args: Prisma.RespuestaEjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespuestaEjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          findMany: {
            args: Prisma.RespuestaEjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>[]
          }
          create: {
            args: Prisma.RespuestaEjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          createMany: {
            args: Prisma.RespuestaEjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespuestaEjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>[]
          }
          delete: {
            args: Prisma.RespuestaEjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          update: {
            args: Prisma.RespuestaEjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.RespuestaEjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespuestaEjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RespuestaEjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaEjercicioPayload>
          }
          aggregate: {
            args: Prisma.RespuestaEjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespuestaEjercicio>
          }
          groupBy: {
            args: Prisma.RespuestaEjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespuestaEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespuestaEjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<RespuestaEjercicioCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    sesiones: number
    respuestas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sesiones?: boolean | UsuarioCountOutputTypeCountSesionesArgs
    respuestas?: boolean | UsuarioCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionSimulacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaEjercicioWhereInput
  }


  /**
   * Count Type AlgoritmoCountOutputType
   */

  export type AlgoritmoCountOutputType = {
    ejercicios: number
    sesiones: number
  }

  export type AlgoritmoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | AlgoritmoCountOutputTypeCountEjerciciosArgs
    sesiones?: boolean | AlgoritmoCountOutputTypeCountSesionesArgs
  }

  // Custom InputTypes
  /**
   * AlgoritmoCountOutputType without action
   */
  export type AlgoritmoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlgoritmoCountOutputType
     */
    select?: AlgoritmoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlgoritmoCountOutputType without action
   */
  export type AlgoritmoCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioPrediccionWhereInput
  }

  /**
   * AlgoritmoCountOutputType without action
   */
  export type AlgoritmoCountOutputTypeCountSesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionSimulacionWhereInput
  }


  /**
   * Count Type EjercicioPrediccionCountOutputType
   */

  export type EjercicioPrediccionCountOutputType = {
    respuestas: number
  }

  export type EjercicioPrediccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | EjercicioPrediccionCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * EjercicioPrediccionCountOutputType without action
   */
  export type EjercicioPrediccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccionCountOutputType
     */
    select?: EjercicioPrediccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioPrediccionCountOutputType without action
   */
  export type EjercicioPrediccionCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaEjercicioWhereInput
  }


  /**
   * Count Type ProgresoUsuarioCountOutputType
   */

  export type ProgresoUsuarioCountOutputType = {
    insignias: number
  }

  export type ProgresoUsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insignias?: boolean | ProgresoUsuarioCountOutputTypeCountInsigniasArgs
  }

  // Custom InputTypes
  /**
   * ProgresoUsuarioCountOutputType without action
   */
  export type ProgresoUsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuarioCountOutputType
     */
    select?: ProgresoUsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgresoUsuarioCountOutputType without action
   */
  export type ProgresoUsuarioCountOutputTypeCountInsigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoInsigniaWhereInput
  }


  /**
   * Count Type InsigniaCountOutputType
   */

  export type InsigniaCountOutputType = {
    progresosOtorgados: number
  }

  export type InsigniaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresosOtorgados?: boolean | InsigniaCountOutputTypeCountProgresosOtorgadosArgs
  }

  // Custom InputTypes
  /**
   * InsigniaCountOutputType without action
   */
  export type InsigniaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsigniaCountOutputType
     */
    select?: InsigniaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsigniaCountOutputType without action
   */
  export type InsigniaCountOutputTypeCountProgresosOtorgadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoInsigniaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    rol: $Enums.Rol | null
    contrasena: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    rol: $Enums.Rol | null
    contrasena: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    rol: number
    contrasena: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    rol?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    rol?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    rol?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nombre: string
    correo: string
    rol: $Enums.Rol
    contrasena: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    contrasena?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    progreso?: boolean | Usuario$progresoArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    respuestas?: boolean | Usuario$respuestasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    contrasena?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    rol?: boolean
    contrasena?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | Usuario$progresoArgs<ExtArgs>
    sesiones?: boolean | Usuario$sesionesArgs<ExtArgs>
    respuestas?: boolean | Usuario$respuestasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      progreso: Prisma.$ProgresoUsuarioPayload<ExtArgs> | null
      sesiones: Prisma.$SesionSimulacionPayload<ExtArgs>[]
      respuestas: Prisma.$RespuestaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      correo: string
      rol: $Enums.Rol
      contrasena: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progreso<T extends Usuario$progresoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$progresoArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sesiones<T extends Usuario$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findMany"> | Null>
    respuestas<T extends Usuario$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.progreso
   */
  export type Usuario$progresoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    where?: ProgresoUsuarioWhereInput
  }

  /**
   * Usuario.sesiones
   */
  export type Usuario$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    where?: SesionSimulacionWhereInput
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    cursor?: SesionSimulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SesionSimulacionScalarFieldEnum | SesionSimulacionScalarFieldEnum[]
  }

  /**
   * Usuario.respuestas
   */
  export type Usuario$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    where?: RespuestaEjercicioWhereInput
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    cursor?: RespuestaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestaEjercicioScalarFieldEnum | RespuestaEjercicioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    credencialesAdmin: string | null
    ultimoAcceso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    credencialesAdmin: string | null
    ultimoAcceso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    contrasena: number
    credencialesAdmin: number
    ultimoAcceso: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministradorMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    credencialesAdmin?: true
    ultimoAcceso?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    credencialesAdmin?: true
    ultimoAcceso?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    credencialesAdmin?: true
    ultimoAcceso?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: string
    nombre: string
    correo: string
    contrasena: string
    credencialesAdmin: string
    ultimoAcceso: Date
    createdAt: Date
    updatedAt: Date
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    credencialesAdmin?: boolean
    ultimoAcceso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    credencialesAdmin?: boolean
    ultimoAcceso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    credencialesAdmin?: boolean
    ultimoAcceso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      correo: string
      contrasena: string
      credencialesAdmin: string
      ultimoAcceso: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Administrador model
   */ 
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'String'>
    readonly nombre: FieldRef<"Administrador", 'String'>
    readonly correo: FieldRef<"Administrador", 'String'>
    readonly contrasena: FieldRef<"Administrador", 'String'>
    readonly credencialesAdmin: FieldRef<"Administrador", 'String'>
    readonly ultimoAcceso: FieldRef<"Administrador", 'DateTime'>
    readonly createdAt: FieldRef<"Administrador", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
  }


  /**
   * Model Algoritmo
   */

  export type AggregateAlgoritmo = {
    _count: AlgoritmoCountAggregateOutputType | null
    _min: AlgoritmoMinAggregateOutputType | null
    _max: AlgoritmoMaxAggregateOutputType | null
  }

  export type AlgoritmoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    complejidadTiempo: string | null
    complejidadEspacio: string | null
    categoria: $Enums.CategoriaAlgoritmo | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlgoritmoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    complejidadTiempo: string | null
    complejidadEspacio: string | null
    categoria: $Enums.CategoriaAlgoritmo | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlgoritmoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    complejidadTiempo: number
    complejidadEspacio: number
    categoria: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlgoritmoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    complejidadTiempo?: true
    complejidadEspacio?: true
    categoria?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlgoritmoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    complejidadTiempo?: true
    complejidadEspacio?: true
    categoria?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlgoritmoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    complejidadTiempo?: true
    complejidadEspacio?: true
    categoria?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlgoritmoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Algoritmo to aggregate.
     */
    where?: AlgoritmoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Algoritmos to fetch.
     */
    orderBy?: AlgoritmoOrderByWithRelationInput | AlgoritmoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlgoritmoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Algoritmos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Algoritmos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Algoritmos
    **/
    _count?: true | AlgoritmoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlgoritmoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlgoritmoMaxAggregateInputType
  }

  export type GetAlgoritmoAggregateType<T extends AlgoritmoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlgoritmo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlgoritmo[P]>
      : GetScalarType<T[P], AggregateAlgoritmo[P]>
  }




  export type AlgoritmoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlgoritmoWhereInput
    orderBy?: AlgoritmoOrderByWithAggregationInput | AlgoritmoOrderByWithAggregationInput[]
    by: AlgoritmoScalarFieldEnum[] | AlgoritmoScalarFieldEnum
    having?: AlgoritmoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlgoritmoCountAggregateInputType | true
    _min?: AlgoritmoMinAggregateInputType
    _max?: AlgoritmoMaxAggregateInputType
  }

  export type AlgoritmoGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlgoritmoCountAggregateOutputType | null
    _min: AlgoritmoMinAggregateOutputType | null
    _max: AlgoritmoMaxAggregateOutputType | null
  }

  type GetAlgoritmoGroupByPayload<T extends AlgoritmoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlgoritmoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlgoritmoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlgoritmoGroupByOutputType[P]>
            : GetScalarType<T[P], AlgoritmoGroupByOutputType[P]>
        }
      >
    >


  export type AlgoritmoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    complejidadTiempo?: boolean
    complejidadEspacio?: boolean
    categoria?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ejercicios?: boolean | Algoritmo$ejerciciosArgs<ExtArgs>
    sesiones?: boolean | Algoritmo$sesionesArgs<ExtArgs>
    _count?: boolean | AlgoritmoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["algoritmo"]>

  export type AlgoritmoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    complejidadTiempo?: boolean
    complejidadEspacio?: boolean
    categoria?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["algoritmo"]>

  export type AlgoritmoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    complejidadTiempo?: boolean
    complejidadEspacio?: boolean
    categoria?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlgoritmoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | Algoritmo$ejerciciosArgs<ExtArgs>
    sesiones?: boolean | Algoritmo$sesionesArgs<ExtArgs>
    _count?: boolean | AlgoritmoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlgoritmoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlgoritmoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Algoritmo"
    objects: {
      ejercicios: Prisma.$EjercicioPrediccionPayload<ExtArgs>[]
      sesiones: Prisma.$SesionSimulacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      complejidadTiempo: string
      complejidadEspacio: string
      categoria: $Enums.CategoriaAlgoritmo
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["algoritmo"]>
    composites: {}
  }

  type AlgoritmoGetPayload<S extends boolean | null | undefined | AlgoritmoDefaultArgs> = $Result.GetResult<Prisma.$AlgoritmoPayload, S>

  type AlgoritmoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlgoritmoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlgoritmoCountAggregateInputType | true
    }

  export interface AlgoritmoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Algoritmo'], meta: { name: 'Algoritmo' } }
    /**
     * Find zero or one Algoritmo that matches the filter.
     * @param {AlgoritmoFindUniqueArgs} args - Arguments to find a Algoritmo
     * @example
     * // Get one Algoritmo
     * const algoritmo = await prisma.algoritmo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlgoritmoFindUniqueArgs>(args: SelectSubset<T, AlgoritmoFindUniqueArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Algoritmo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlgoritmoFindUniqueOrThrowArgs} args - Arguments to find a Algoritmo
     * @example
     * // Get one Algoritmo
     * const algoritmo = await prisma.algoritmo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlgoritmoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlgoritmoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Algoritmo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoFindFirstArgs} args - Arguments to find a Algoritmo
     * @example
     * // Get one Algoritmo
     * const algoritmo = await prisma.algoritmo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlgoritmoFindFirstArgs>(args?: SelectSubset<T, AlgoritmoFindFirstArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Algoritmo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoFindFirstOrThrowArgs} args - Arguments to find a Algoritmo
     * @example
     * // Get one Algoritmo
     * const algoritmo = await prisma.algoritmo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlgoritmoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlgoritmoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Algoritmos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Algoritmos
     * const algoritmos = await prisma.algoritmo.findMany()
     * 
     * // Get first 10 Algoritmos
     * const algoritmos = await prisma.algoritmo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const algoritmoWithIdOnly = await prisma.algoritmo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlgoritmoFindManyArgs>(args?: SelectSubset<T, AlgoritmoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Algoritmo.
     * @param {AlgoritmoCreateArgs} args - Arguments to create a Algoritmo.
     * @example
     * // Create one Algoritmo
     * const Algoritmo = await prisma.algoritmo.create({
     *   data: {
     *     // ... data to create a Algoritmo
     *   }
     * })
     * 
     */
    create<T extends AlgoritmoCreateArgs>(args: SelectSubset<T, AlgoritmoCreateArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Algoritmos.
     * @param {AlgoritmoCreateManyArgs} args - Arguments to create many Algoritmos.
     * @example
     * // Create many Algoritmos
     * const algoritmo = await prisma.algoritmo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlgoritmoCreateManyArgs>(args?: SelectSubset<T, AlgoritmoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Algoritmos and returns the data saved in the database.
     * @param {AlgoritmoCreateManyAndReturnArgs} args - Arguments to create many Algoritmos.
     * @example
     * // Create many Algoritmos
     * const algoritmo = await prisma.algoritmo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Algoritmos and only return the `id`
     * const algoritmoWithIdOnly = await prisma.algoritmo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlgoritmoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlgoritmoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Algoritmo.
     * @param {AlgoritmoDeleteArgs} args - Arguments to delete one Algoritmo.
     * @example
     * // Delete one Algoritmo
     * const Algoritmo = await prisma.algoritmo.delete({
     *   where: {
     *     // ... filter to delete one Algoritmo
     *   }
     * })
     * 
     */
    delete<T extends AlgoritmoDeleteArgs>(args: SelectSubset<T, AlgoritmoDeleteArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Algoritmo.
     * @param {AlgoritmoUpdateArgs} args - Arguments to update one Algoritmo.
     * @example
     * // Update one Algoritmo
     * const algoritmo = await prisma.algoritmo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlgoritmoUpdateArgs>(args: SelectSubset<T, AlgoritmoUpdateArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Algoritmos.
     * @param {AlgoritmoDeleteManyArgs} args - Arguments to filter Algoritmos to delete.
     * @example
     * // Delete a few Algoritmos
     * const { count } = await prisma.algoritmo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlgoritmoDeleteManyArgs>(args?: SelectSubset<T, AlgoritmoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Algoritmos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Algoritmos
     * const algoritmo = await prisma.algoritmo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlgoritmoUpdateManyArgs>(args: SelectSubset<T, AlgoritmoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Algoritmo.
     * @param {AlgoritmoUpsertArgs} args - Arguments to update or create a Algoritmo.
     * @example
     * // Update or create a Algoritmo
     * const algoritmo = await prisma.algoritmo.upsert({
     *   create: {
     *     // ... data to create a Algoritmo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Algoritmo we want to update
     *   }
     * })
     */
    upsert<T extends AlgoritmoUpsertArgs>(args: SelectSubset<T, AlgoritmoUpsertArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Algoritmos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoCountArgs} args - Arguments to filter Algoritmos to count.
     * @example
     * // Count the number of Algoritmos
     * const count = await prisma.algoritmo.count({
     *   where: {
     *     // ... the filter for the Algoritmos we want to count
     *   }
     * })
    **/
    count<T extends AlgoritmoCountArgs>(
      args?: Subset<T, AlgoritmoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlgoritmoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Algoritmo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlgoritmoAggregateArgs>(args: Subset<T, AlgoritmoAggregateArgs>): Prisma.PrismaPromise<GetAlgoritmoAggregateType<T>>

    /**
     * Group by Algoritmo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlgoritmoGroupByArgs} args - Group by arguments.
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
      T extends AlgoritmoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlgoritmoGroupByArgs['orderBy'] }
        : { orderBy?: AlgoritmoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlgoritmoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlgoritmoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Algoritmo model
   */
  readonly fields: AlgoritmoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Algoritmo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlgoritmoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ejercicios<T extends Algoritmo$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Algoritmo$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findMany"> | Null>
    sesiones<T extends Algoritmo$sesionesArgs<ExtArgs> = {}>(args?: Subset<T, Algoritmo$sesionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Algoritmo model
   */ 
  interface AlgoritmoFieldRefs {
    readonly id: FieldRef<"Algoritmo", 'String'>
    readonly nombre: FieldRef<"Algoritmo", 'String'>
    readonly descripcion: FieldRef<"Algoritmo", 'String'>
    readonly complejidadTiempo: FieldRef<"Algoritmo", 'String'>
    readonly complejidadEspacio: FieldRef<"Algoritmo", 'String'>
    readonly categoria: FieldRef<"Algoritmo", 'CategoriaAlgoritmo'>
    readonly activo: FieldRef<"Algoritmo", 'Boolean'>
    readonly createdAt: FieldRef<"Algoritmo", 'DateTime'>
    readonly updatedAt: FieldRef<"Algoritmo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Algoritmo findUnique
   */
  export type AlgoritmoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter, which Algoritmo to fetch.
     */
    where: AlgoritmoWhereUniqueInput
  }

  /**
   * Algoritmo findUniqueOrThrow
   */
  export type AlgoritmoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter, which Algoritmo to fetch.
     */
    where: AlgoritmoWhereUniqueInput
  }

  /**
   * Algoritmo findFirst
   */
  export type AlgoritmoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter, which Algoritmo to fetch.
     */
    where?: AlgoritmoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Algoritmos to fetch.
     */
    orderBy?: AlgoritmoOrderByWithRelationInput | AlgoritmoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Algoritmos.
     */
    cursor?: AlgoritmoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Algoritmos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Algoritmos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Algoritmos.
     */
    distinct?: AlgoritmoScalarFieldEnum | AlgoritmoScalarFieldEnum[]
  }

  /**
   * Algoritmo findFirstOrThrow
   */
  export type AlgoritmoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter, which Algoritmo to fetch.
     */
    where?: AlgoritmoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Algoritmos to fetch.
     */
    orderBy?: AlgoritmoOrderByWithRelationInput | AlgoritmoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Algoritmos.
     */
    cursor?: AlgoritmoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Algoritmos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Algoritmos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Algoritmos.
     */
    distinct?: AlgoritmoScalarFieldEnum | AlgoritmoScalarFieldEnum[]
  }

  /**
   * Algoritmo findMany
   */
  export type AlgoritmoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter, which Algoritmos to fetch.
     */
    where?: AlgoritmoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Algoritmos to fetch.
     */
    orderBy?: AlgoritmoOrderByWithRelationInput | AlgoritmoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Algoritmos.
     */
    cursor?: AlgoritmoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Algoritmos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Algoritmos.
     */
    skip?: number
    distinct?: AlgoritmoScalarFieldEnum | AlgoritmoScalarFieldEnum[]
  }

  /**
   * Algoritmo create
   */
  export type AlgoritmoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * The data needed to create a Algoritmo.
     */
    data: XOR<AlgoritmoCreateInput, AlgoritmoUncheckedCreateInput>
  }

  /**
   * Algoritmo createMany
   */
  export type AlgoritmoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Algoritmos.
     */
    data: AlgoritmoCreateManyInput | AlgoritmoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Algoritmo createManyAndReturn
   */
  export type AlgoritmoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Algoritmos.
     */
    data: AlgoritmoCreateManyInput | AlgoritmoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Algoritmo update
   */
  export type AlgoritmoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * The data needed to update a Algoritmo.
     */
    data: XOR<AlgoritmoUpdateInput, AlgoritmoUncheckedUpdateInput>
    /**
     * Choose, which Algoritmo to update.
     */
    where: AlgoritmoWhereUniqueInput
  }

  /**
   * Algoritmo updateMany
   */
  export type AlgoritmoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Algoritmos.
     */
    data: XOR<AlgoritmoUpdateManyMutationInput, AlgoritmoUncheckedUpdateManyInput>
    /**
     * Filter which Algoritmos to update
     */
    where?: AlgoritmoWhereInput
  }

  /**
   * Algoritmo upsert
   */
  export type AlgoritmoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * The filter to search for the Algoritmo to update in case it exists.
     */
    where: AlgoritmoWhereUniqueInput
    /**
     * In case the Algoritmo found by the `where` argument doesn't exist, create a new Algoritmo with this data.
     */
    create: XOR<AlgoritmoCreateInput, AlgoritmoUncheckedCreateInput>
    /**
     * In case the Algoritmo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlgoritmoUpdateInput, AlgoritmoUncheckedUpdateInput>
  }

  /**
   * Algoritmo delete
   */
  export type AlgoritmoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
    /**
     * Filter which Algoritmo to delete.
     */
    where: AlgoritmoWhereUniqueInput
  }

  /**
   * Algoritmo deleteMany
   */
  export type AlgoritmoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Algoritmos to delete
     */
    where?: AlgoritmoWhereInput
  }

  /**
   * Algoritmo.ejercicios
   */
  export type Algoritmo$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    where?: EjercicioPrediccionWhereInput
    orderBy?: EjercicioPrediccionOrderByWithRelationInput | EjercicioPrediccionOrderByWithRelationInput[]
    cursor?: EjercicioPrediccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjercicioPrediccionScalarFieldEnum | EjercicioPrediccionScalarFieldEnum[]
  }

  /**
   * Algoritmo.sesiones
   */
  export type Algoritmo$sesionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    where?: SesionSimulacionWhereInput
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    cursor?: SesionSimulacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SesionSimulacionScalarFieldEnum | SesionSimulacionScalarFieldEnum[]
  }

  /**
   * Algoritmo without action
   */
  export type AlgoritmoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Algoritmo
     */
    select?: AlgoritmoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlgoritmoInclude<ExtArgs> | null
  }


  /**
   * Model EjercicioPrediccion
   */

  export type AggregateEjercicioPrediccion = {
    _count: EjercicioPrediccionCountAggregateOutputType | null
    _min: EjercicioPrediccionMinAggregateOutputType | null
    _max: EjercicioPrediccionMaxAggregateOutputType | null
  }

  export type EjercicioPrediccionMinAggregateOutputType = {
    id: string | null
    pregunta: string | null
    respuestaCorrecta: string | null
    dificultad: $Enums.DificultadEjercicio | null
    feedbackPositivo: string | null
    feedbackNegativo: string | null
    createdAt: Date | null
    algoritmoId: string | null
  }

  export type EjercicioPrediccionMaxAggregateOutputType = {
    id: string | null
    pregunta: string | null
    respuestaCorrecta: string | null
    dificultad: $Enums.DificultadEjercicio | null
    feedbackPositivo: string | null
    feedbackNegativo: string | null
    createdAt: Date | null
    algoritmoId: string | null
  }

  export type EjercicioPrediccionCountAggregateOutputType = {
    id: number
    pregunta: number
    respuestaCorrecta: number
    dificultad: number
    feedbackPositivo: number
    feedbackNegativo: number
    createdAt: number
    algoritmoId: number
    _all: number
  }


  export type EjercicioPrediccionMinAggregateInputType = {
    id?: true
    pregunta?: true
    respuestaCorrecta?: true
    dificultad?: true
    feedbackPositivo?: true
    feedbackNegativo?: true
    createdAt?: true
    algoritmoId?: true
  }

  export type EjercicioPrediccionMaxAggregateInputType = {
    id?: true
    pregunta?: true
    respuestaCorrecta?: true
    dificultad?: true
    feedbackPositivo?: true
    feedbackNegativo?: true
    createdAt?: true
    algoritmoId?: true
  }

  export type EjercicioPrediccionCountAggregateInputType = {
    id?: true
    pregunta?: true
    respuestaCorrecta?: true
    dificultad?: true
    feedbackPositivo?: true
    feedbackNegativo?: true
    createdAt?: true
    algoritmoId?: true
    _all?: true
  }

  export type EjercicioPrediccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EjercicioPrediccion to aggregate.
     */
    where?: EjercicioPrediccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EjercicioPrediccions to fetch.
     */
    orderBy?: EjercicioPrediccionOrderByWithRelationInput | EjercicioPrediccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioPrediccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EjercicioPrediccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EjercicioPrediccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EjercicioPrediccions
    **/
    _count?: true | EjercicioPrediccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioPrediccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioPrediccionMaxAggregateInputType
  }

  export type GetEjercicioPrediccionAggregateType<T extends EjercicioPrediccionAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicioPrediccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicioPrediccion[P]>
      : GetScalarType<T[P], AggregateEjercicioPrediccion[P]>
  }




  export type EjercicioPrediccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioPrediccionWhereInput
    orderBy?: EjercicioPrediccionOrderByWithAggregationInput | EjercicioPrediccionOrderByWithAggregationInput[]
    by: EjercicioPrediccionScalarFieldEnum[] | EjercicioPrediccionScalarFieldEnum
    having?: EjercicioPrediccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioPrediccionCountAggregateInputType | true
    _min?: EjercicioPrediccionMinAggregateInputType
    _max?: EjercicioPrediccionMaxAggregateInputType
  }

  export type EjercicioPrediccionGroupByOutputType = {
    id: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt: Date
    algoritmoId: string
    _count: EjercicioPrediccionCountAggregateOutputType | null
    _min: EjercicioPrediccionMinAggregateOutputType | null
    _max: EjercicioPrediccionMaxAggregateOutputType | null
  }

  type GetEjercicioPrediccionGroupByPayload<T extends EjercicioPrediccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioPrediccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioPrediccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioPrediccionGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioPrediccionGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioPrediccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pregunta?: boolean
    respuestaCorrecta?: boolean
    dificultad?: boolean
    feedbackPositivo?: boolean
    feedbackNegativo?: boolean
    createdAt?: boolean
    algoritmoId?: boolean
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
    respuestas?: boolean | EjercicioPrediccion$respuestasArgs<ExtArgs>
    _count?: boolean | EjercicioPrediccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicioPrediccion"]>

  export type EjercicioPrediccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pregunta?: boolean
    respuestaCorrecta?: boolean
    dificultad?: boolean
    feedbackPositivo?: boolean
    feedbackNegativo?: boolean
    createdAt?: boolean
    algoritmoId?: boolean
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicioPrediccion"]>

  export type EjercicioPrediccionSelectScalar = {
    id?: boolean
    pregunta?: boolean
    respuestaCorrecta?: boolean
    dificultad?: boolean
    feedbackPositivo?: boolean
    feedbackNegativo?: boolean
    createdAt?: boolean
    algoritmoId?: boolean
  }

  export type EjercicioPrediccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
    respuestas?: boolean | EjercicioPrediccion$respuestasArgs<ExtArgs>
    _count?: boolean | EjercicioPrediccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioPrediccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }

  export type $EjercicioPrediccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EjercicioPrediccion"
    objects: {
      algoritmo: Prisma.$AlgoritmoPayload<ExtArgs>
      respuestas: Prisma.$RespuestaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pregunta: string
      respuestaCorrecta: string
      dificultad: $Enums.DificultadEjercicio
      feedbackPositivo: string
      feedbackNegativo: string
      createdAt: Date
      algoritmoId: string
    }, ExtArgs["result"]["ejercicioPrediccion"]>
    composites: {}
  }

  type EjercicioPrediccionGetPayload<S extends boolean | null | undefined | EjercicioPrediccionDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPrediccionPayload, S>

  type EjercicioPrediccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EjercicioPrediccionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EjercicioPrediccionCountAggregateInputType | true
    }

  export interface EjercicioPrediccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EjercicioPrediccion'], meta: { name: 'EjercicioPrediccion' } }
    /**
     * Find zero or one EjercicioPrediccion that matches the filter.
     * @param {EjercicioPrediccionFindUniqueArgs} args - Arguments to find a EjercicioPrediccion
     * @example
     * // Get one EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioPrediccionFindUniqueArgs>(args: SelectSubset<T, EjercicioPrediccionFindUniqueArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EjercicioPrediccion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EjercicioPrediccionFindUniqueOrThrowArgs} args - Arguments to find a EjercicioPrediccion
     * @example
     * // Get one EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioPrediccionFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioPrediccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EjercicioPrediccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionFindFirstArgs} args - Arguments to find a EjercicioPrediccion
     * @example
     * // Get one EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioPrediccionFindFirstArgs>(args?: SelectSubset<T, EjercicioPrediccionFindFirstArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EjercicioPrediccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionFindFirstOrThrowArgs} args - Arguments to find a EjercicioPrediccion
     * @example
     * // Get one EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioPrediccionFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioPrediccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EjercicioPrediccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EjercicioPrediccions
     * const ejercicioPrediccions = await prisma.ejercicioPrediccion.findMany()
     * 
     * // Get first 10 EjercicioPrediccions
     * const ejercicioPrediccions = await prisma.ejercicioPrediccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioPrediccionWithIdOnly = await prisma.ejercicioPrediccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioPrediccionFindManyArgs>(args?: SelectSubset<T, EjercicioPrediccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EjercicioPrediccion.
     * @param {EjercicioPrediccionCreateArgs} args - Arguments to create a EjercicioPrediccion.
     * @example
     * // Create one EjercicioPrediccion
     * const EjercicioPrediccion = await prisma.ejercicioPrediccion.create({
     *   data: {
     *     // ... data to create a EjercicioPrediccion
     *   }
     * })
     * 
     */
    create<T extends EjercicioPrediccionCreateArgs>(args: SelectSubset<T, EjercicioPrediccionCreateArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EjercicioPrediccions.
     * @param {EjercicioPrediccionCreateManyArgs} args - Arguments to create many EjercicioPrediccions.
     * @example
     * // Create many EjercicioPrediccions
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioPrediccionCreateManyArgs>(args?: SelectSubset<T, EjercicioPrediccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EjercicioPrediccions and returns the data saved in the database.
     * @param {EjercicioPrediccionCreateManyAndReturnArgs} args - Arguments to create many EjercicioPrediccions.
     * @example
     * // Create many EjercicioPrediccions
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EjercicioPrediccions and only return the `id`
     * const ejercicioPrediccionWithIdOnly = await prisma.ejercicioPrediccion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioPrediccionCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioPrediccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EjercicioPrediccion.
     * @param {EjercicioPrediccionDeleteArgs} args - Arguments to delete one EjercicioPrediccion.
     * @example
     * // Delete one EjercicioPrediccion
     * const EjercicioPrediccion = await prisma.ejercicioPrediccion.delete({
     *   where: {
     *     // ... filter to delete one EjercicioPrediccion
     *   }
     * })
     * 
     */
    delete<T extends EjercicioPrediccionDeleteArgs>(args: SelectSubset<T, EjercicioPrediccionDeleteArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EjercicioPrediccion.
     * @param {EjercicioPrediccionUpdateArgs} args - Arguments to update one EjercicioPrediccion.
     * @example
     * // Update one EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioPrediccionUpdateArgs>(args: SelectSubset<T, EjercicioPrediccionUpdateArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EjercicioPrediccions.
     * @param {EjercicioPrediccionDeleteManyArgs} args - Arguments to filter EjercicioPrediccions to delete.
     * @example
     * // Delete a few EjercicioPrediccions
     * const { count } = await prisma.ejercicioPrediccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioPrediccionDeleteManyArgs>(args?: SelectSubset<T, EjercicioPrediccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EjercicioPrediccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EjercicioPrediccions
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioPrediccionUpdateManyArgs>(args: SelectSubset<T, EjercicioPrediccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EjercicioPrediccion.
     * @param {EjercicioPrediccionUpsertArgs} args - Arguments to update or create a EjercicioPrediccion.
     * @example
     * // Update or create a EjercicioPrediccion
     * const ejercicioPrediccion = await prisma.ejercicioPrediccion.upsert({
     *   create: {
     *     // ... data to create a EjercicioPrediccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EjercicioPrediccion we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioPrediccionUpsertArgs>(args: SelectSubset<T, EjercicioPrediccionUpsertArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EjercicioPrediccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionCountArgs} args - Arguments to filter EjercicioPrediccions to count.
     * @example
     * // Count the number of EjercicioPrediccions
     * const count = await prisma.ejercicioPrediccion.count({
     *   where: {
     *     // ... the filter for the EjercicioPrediccions we want to count
     *   }
     * })
    **/
    count<T extends EjercicioPrediccionCountArgs>(
      args?: Subset<T, EjercicioPrediccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioPrediccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EjercicioPrediccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjercicioPrediccionAggregateArgs>(args: Subset<T, EjercicioPrediccionAggregateArgs>): Prisma.PrismaPromise<GetEjercicioPrediccionAggregateType<T>>

    /**
     * Group by EjercicioPrediccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioPrediccionGroupByArgs} args - Group by arguments.
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
      T extends EjercicioPrediccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioPrediccionGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioPrediccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EjercicioPrediccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioPrediccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EjercicioPrediccion model
   */
  readonly fields: EjercicioPrediccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EjercicioPrediccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioPrediccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    algoritmo<T extends AlgoritmoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlgoritmoDefaultArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    respuestas<T extends EjercicioPrediccion$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioPrediccion$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the EjercicioPrediccion model
   */ 
  interface EjercicioPrediccionFieldRefs {
    readonly id: FieldRef<"EjercicioPrediccion", 'String'>
    readonly pregunta: FieldRef<"EjercicioPrediccion", 'String'>
    readonly respuestaCorrecta: FieldRef<"EjercicioPrediccion", 'String'>
    readonly dificultad: FieldRef<"EjercicioPrediccion", 'DificultadEjercicio'>
    readonly feedbackPositivo: FieldRef<"EjercicioPrediccion", 'String'>
    readonly feedbackNegativo: FieldRef<"EjercicioPrediccion", 'String'>
    readonly createdAt: FieldRef<"EjercicioPrediccion", 'DateTime'>
    readonly algoritmoId: FieldRef<"EjercicioPrediccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EjercicioPrediccion findUnique
   */
  export type EjercicioPrediccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter, which EjercicioPrediccion to fetch.
     */
    where: EjercicioPrediccionWhereUniqueInput
  }

  /**
   * EjercicioPrediccion findUniqueOrThrow
   */
  export type EjercicioPrediccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter, which EjercicioPrediccion to fetch.
     */
    where: EjercicioPrediccionWhereUniqueInput
  }

  /**
   * EjercicioPrediccion findFirst
   */
  export type EjercicioPrediccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter, which EjercicioPrediccion to fetch.
     */
    where?: EjercicioPrediccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EjercicioPrediccions to fetch.
     */
    orderBy?: EjercicioPrediccionOrderByWithRelationInput | EjercicioPrediccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EjercicioPrediccions.
     */
    cursor?: EjercicioPrediccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EjercicioPrediccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EjercicioPrediccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EjercicioPrediccions.
     */
    distinct?: EjercicioPrediccionScalarFieldEnum | EjercicioPrediccionScalarFieldEnum[]
  }

  /**
   * EjercicioPrediccion findFirstOrThrow
   */
  export type EjercicioPrediccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter, which EjercicioPrediccion to fetch.
     */
    where?: EjercicioPrediccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EjercicioPrediccions to fetch.
     */
    orderBy?: EjercicioPrediccionOrderByWithRelationInput | EjercicioPrediccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EjercicioPrediccions.
     */
    cursor?: EjercicioPrediccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EjercicioPrediccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EjercicioPrediccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EjercicioPrediccions.
     */
    distinct?: EjercicioPrediccionScalarFieldEnum | EjercicioPrediccionScalarFieldEnum[]
  }

  /**
   * EjercicioPrediccion findMany
   */
  export type EjercicioPrediccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter, which EjercicioPrediccions to fetch.
     */
    where?: EjercicioPrediccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EjercicioPrediccions to fetch.
     */
    orderBy?: EjercicioPrediccionOrderByWithRelationInput | EjercicioPrediccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EjercicioPrediccions.
     */
    cursor?: EjercicioPrediccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EjercicioPrediccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EjercicioPrediccions.
     */
    skip?: number
    distinct?: EjercicioPrediccionScalarFieldEnum | EjercicioPrediccionScalarFieldEnum[]
  }

  /**
   * EjercicioPrediccion create
   */
  export type EjercicioPrediccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * The data needed to create a EjercicioPrediccion.
     */
    data: XOR<EjercicioPrediccionCreateInput, EjercicioPrediccionUncheckedCreateInput>
  }

  /**
   * EjercicioPrediccion createMany
   */
  export type EjercicioPrediccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EjercicioPrediccions.
     */
    data: EjercicioPrediccionCreateManyInput | EjercicioPrediccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EjercicioPrediccion createManyAndReturn
   */
  export type EjercicioPrediccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EjercicioPrediccions.
     */
    data: EjercicioPrediccionCreateManyInput | EjercicioPrediccionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EjercicioPrediccion update
   */
  export type EjercicioPrediccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * The data needed to update a EjercicioPrediccion.
     */
    data: XOR<EjercicioPrediccionUpdateInput, EjercicioPrediccionUncheckedUpdateInput>
    /**
     * Choose, which EjercicioPrediccion to update.
     */
    where: EjercicioPrediccionWhereUniqueInput
  }

  /**
   * EjercicioPrediccion updateMany
   */
  export type EjercicioPrediccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EjercicioPrediccions.
     */
    data: XOR<EjercicioPrediccionUpdateManyMutationInput, EjercicioPrediccionUncheckedUpdateManyInput>
    /**
     * Filter which EjercicioPrediccions to update
     */
    where?: EjercicioPrediccionWhereInput
  }

  /**
   * EjercicioPrediccion upsert
   */
  export type EjercicioPrediccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * The filter to search for the EjercicioPrediccion to update in case it exists.
     */
    where: EjercicioPrediccionWhereUniqueInput
    /**
     * In case the EjercicioPrediccion found by the `where` argument doesn't exist, create a new EjercicioPrediccion with this data.
     */
    create: XOR<EjercicioPrediccionCreateInput, EjercicioPrediccionUncheckedCreateInput>
    /**
     * In case the EjercicioPrediccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioPrediccionUpdateInput, EjercicioPrediccionUncheckedUpdateInput>
  }

  /**
   * EjercicioPrediccion delete
   */
  export type EjercicioPrediccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
    /**
     * Filter which EjercicioPrediccion to delete.
     */
    where: EjercicioPrediccionWhereUniqueInput
  }

  /**
   * EjercicioPrediccion deleteMany
   */
  export type EjercicioPrediccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EjercicioPrediccions to delete
     */
    where?: EjercicioPrediccionWhereInput
  }

  /**
   * EjercicioPrediccion.respuestas
   */
  export type EjercicioPrediccion$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    where?: RespuestaEjercicioWhereInput
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    cursor?: RespuestaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestaEjercicioScalarFieldEnum | RespuestaEjercicioScalarFieldEnum[]
  }

  /**
   * EjercicioPrediccion without action
   */
  export type EjercicioPrediccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioPrediccion
     */
    select?: EjercicioPrediccionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioPrediccionInclude<ExtArgs> | null
  }


  /**
   * Model ProgresoUsuario
   */

  export type AggregateProgresoUsuario = {
    _count: ProgresoUsuarioCountAggregateOutputType | null
    _avg: ProgresoUsuarioAvgAggregateOutputType | null
    _sum: ProgresoUsuarioSumAggregateOutputType | null
    _min: ProgresoUsuarioMinAggregateOutputType | null
    _max: ProgresoUsuarioMaxAggregateOutputType | null
  }

  export type ProgresoUsuarioAvgAggregateOutputType = {
    puntosTotales: number | null
    nivelActual: number | null
    rachaDias: number | null
    posicionRanking: number | null
  }

  export type ProgresoUsuarioSumAggregateOutputType = {
    puntosTotales: number | null
    nivelActual: number | null
    rachaDias: number | null
    posicionRanking: number | null
  }

  export type ProgresoUsuarioMinAggregateOutputType = {
    id: string | null
    puntosTotales: number | null
    nivelActual: number | null
    rachaDias: number | null
    posicionRanking: number | null
    ultimaActividad: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type ProgresoUsuarioMaxAggregateOutputType = {
    id: string | null
    puntosTotales: number | null
    nivelActual: number | null
    rachaDias: number | null
    posicionRanking: number | null
    ultimaActividad: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: string | null
  }

  export type ProgresoUsuarioCountAggregateOutputType = {
    id: number
    puntosTotales: number
    nivelActual: number
    rachaDias: number
    posicionRanking: number
    ultimaActividad: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type ProgresoUsuarioAvgAggregateInputType = {
    puntosTotales?: true
    nivelActual?: true
    rachaDias?: true
    posicionRanking?: true
  }

  export type ProgresoUsuarioSumAggregateInputType = {
    puntosTotales?: true
    nivelActual?: true
    rachaDias?: true
    posicionRanking?: true
  }

  export type ProgresoUsuarioMinAggregateInputType = {
    id?: true
    puntosTotales?: true
    nivelActual?: true
    rachaDias?: true
    posicionRanking?: true
    ultimaActividad?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type ProgresoUsuarioMaxAggregateInputType = {
    id?: true
    puntosTotales?: true
    nivelActual?: true
    rachaDias?: true
    posicionRanking?: true
    ultimaActividad?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type ProgresoUsuarioCountAggregateInputType = {
    id?: true
    puntosTotales?: true
    nivelActual?: true
    rachaDias?: true
    posicionRanking?: true
    ultimaActividad?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type ProgresoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoUsuario to aggregate.
     */
    where?: ProgresoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoUsuarios to fetch.
     */
    orderBy?: ProgresoUsuarioOrderByWithRelationInput | ProgresoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgresoUsuarios
    **/
    _count?: true | ProgresoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoUsuarioMaxAggregateInputType
  }

  export type GetProgresoUsuarioAggregateType<T extends ProgresoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresoUsuario[P]>
      : GetScalarType<T[P], AggregateProgresoUsuario[P]>
  }




  export type ProgresoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoUsuarioWhereInput
    orderBy?: ProgresoUsuarioOrderByWithAggregationInput | ProgresoUsuarioOrderByWithAggregationInput[]
    by: ProgresoUsuarioScalarFieldEnum[] | ProgresoUsuarioScalarFieldEnum
    having?: ProgresoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoUsuarioCountAggregateInputType | true
    _avg?: ProgresoUsuarioAvgAggregateInputType
    _sum?: ProgresoUsuarioSumAggregateInputType
    _min?: ProgresoUsuarioMinAggregateInputType
    _max?: ProgresoUsuarioMaxAggregateInputType
  }

  export type ProgresoUsuarioGroupByOutputType = {
    id: string
    puntosTotales: number
    nivelActual: number
    rachaDias: number
    posicionRanking: number
    ultimaActividad: Date
    createdAt: Date
    updatedAt: Date
    usuarioId: string
    _count: ProgresoUsuarioCountAggregateOutputType | null
    _avg: ProgresoUsuarioAvgAggregateOutputType | null
    _sum: ProgresoUsuarioSumAggregateOutputType | null
    _min: ProgresoUsuarioMinAggregateOutputType | null
    _max: ProgresoUsuarioMaxAggregateOutputType | null
  }

  type GetProgresoUsuarioGroupByPayload<T extends ProgresoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puntosTotales?: boolean
    nivelActual?: boolean
    rachaDias?: boolean
    posicionRanking?: boolean
    ultimaActividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    insignias?: boolean | ProgresoUsuario$insigniasArgs<ExtArgs>
    _count?: boolean | ProgresoUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoUsuario"]>

  export type ProgresoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puntosTotales?: boolean
    nivelActual?: boolean
    rachaDias?: boolean
    posicionRanking?: boolean
    ultimaActividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoUsuario"]>

  export type ProgresoUsuarioSelectScalar = {
    id?: boolean
    puntosTotales?: boolean
    nivelActual?: boolean
    rachaDias?: boolean
    posicionRanking?: boolean
    ultimaActividad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type ProgresoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    insignias?: boolean | ProgresoUsuario$insigniasArgs<ExtArgs>
    _count?: boolean | ProgresoUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgresoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProgresoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgresoUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      insignias: Prisma.$ProgresoInsigniaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      puntosTotales: number
      nivelActual: number
      rachaDias: number
      posicionRanking: number
      ultimaActividad: Date
      createdAt: Date
      updatedAt: Date
      usuarioId: string
    }, ExtArgs["result"]["progresoUsuario"]>
    composites: {}
  }

  type ProgresoUsuarioGetPayload<S extends boolean | null | undefined | ProgresoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ProgresoUsuarioPayload, S>

  type ProgresoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgresoUsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgresoUsuarioCountAggregateInputType | true
    }

  export interface ProgresoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgresoUsuario'], meta: { name: 'ProgresoUsuario' } }
    /**
     * Find zero or one ProgresoUsuario that matches the filter.
     * @param {ProgresoUsuarioFindUniqueArgs} args - Arguments to find a ProgresoUsuario
     * @example
     * // Get one ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoUsuarioFindUniqueArgs>(args: SelectSubset<T, ProgresoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProgresoUsuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgresoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ProgresoUsuario
     * @example
     * // Get one ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProgresoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioFindFirstArgs} args - Arguments to find a ProgresoUsuario
     * @example
     * // Get one ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoUsuarioFindFirstArgs>(args?: SelectSubset<T, ProgresoUsuarioFindFirstArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProgresoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioFindFirstOrThrowArgs} args - Arguments to find a ProgresoUsuario
     * @example
     * // Get one ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProgresoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgresoUsuarios
     * const progresoUsuarios = await prisma.progresoUsuario.findMany()
     * 
     * // Get first 10 ProgresoUsuarios
     * const progresoUsuarios = await prisma.progresoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoUsuarioWithIdOnly = await prisma.progresoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoUsuarioFindManyArgs>(args?: SelectSubset<T, ProgresoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProgresoUsuario.
     * @param {ProgresoUsuarioCreateArgs} args - Arguments to create a ProgresoUsuario.
     * @example
     * // Create one ProgresoUsuario
     * const ProgresoUsuario = await prisma.progresoUsuario.create({
     *   data: {
     *     // ... data to create a ProgresoUsuario
     *   }
     * })
     * 
     */
    create<T extends ProgresoUsuarioCreateArgs>(args: SelectSubset<T, ProgresoUsuarioCreateArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProgresoUsuarios.
     * @param {ProgresoUsuarioCreateManyArgs} args - Arguments to create many ProgresoUsuarios.
     * @example
     * // Create many ProgresoUsuarios
     * const progresoUsuario = await prisma.progresoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoUsuarioCreateManyArgs>(args?: SelectSubset<T, ProgresoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgresoUsuarios and returns the data saved in the database.
     * @param {ProgresoUsuarioCreateManyAndReturnArgs} args - Arguments to create many ProgresoUsuarios.
     * @example
     * // Create many ProgresoUsuarios
     * const progresoUsuario = await prisma.progresoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgresoUsuarios and only return the `id`
     * const progresoUsuarioWithIdOnly = await prisma.progresoUsuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProgresoUsuario.
     * @param {ProgresoUsuarioDeleteArgs} args - Arguments to delete one ProgresoUsuario.
     * @example
     * // Delete one ProgresoUsuario
     * const ProgresoUsuario = await prisma.progresoUsuario.delete({
     *   where: {
     *     // ... filter to delete one ProgresoUsuario
     *   }
     * })
     * 
     */
    delete<T extends ProgresoUsuarioDeleteArgs>(args: SelectSubset<T, ProgresoUsuarioDeleteArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProgresoUsuario.
     * @param {ProgresoUsuarioUpdateArgs} args - Arguments to update one ProgresoUsuario.
     * @example
     * // Update one ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoUsuarioUpdateArgs>(args: SelectSubset<T, ProgresoUsuarioUpdateArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProgresoUsuarios.
     * @param {ProgresoUsuarioDeleteManyArgs} args - Arguments to filter ProgresoUsuarios to delete.
     * @example
     * // Delete a few ProgresoUsuarios
     * const { count } = await prisma.progresoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoUsuarioDeleteManyArgs>(args?: SelectSubset<T, ProgresoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgresoUsuarios
     * const progresoUsuario = await prisma.progresoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoUsuarioUpdateManyArgs>(args: SelectSubset<T, ProgresoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgresoUsuario.
     * @param {ProgresoUsuarioUpsertArgs} args - Arguments to update or create a ProgresoUsuario.
     * @example
     * // Update or create a ProgresoUsuario
     * const progresoUsuario = await prisma.progresoUsuario.upsert({
     *   create: {
     *     // ... data to create a ProgresoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgresoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoUsuarioUpsertArgs>(args: SelectSubset<T, ProgresoUsuarioUpsertArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProgresoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioCountArgs} args - Arguments to filter ProgresoUsuarios to count.
     * @example
     * // Count the number of ProgresoUsuarios
     * const count = await prisma.progresoUsuario.count({
     *   where: {
     *     // ... the filter for the ProgresoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ProgresoUsuarioCountArgs>(
      args?: Subset<T, ProgresoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgresoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoUsuarioAggregateArgs>(args: Subset<T, ProgresoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetProgresoUsuarioAggregateType<T>>

    /**
     * Group by ProgresoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoUsuarioGroupByArgs} args - Group by arguments.
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
      T extends ProgresoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgresoUsuario model
   */
  readonly fields: ProgresoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgresoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    insignias<T extends ProgresoUsuario$insigniasArgs<ExtArgs> = {}>(args?: Subset<T, ProgresoUsuario$insigniasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProgresoUsuario model
   */ 
  interface ProgresoUsuarioFieldRefs {
    readonly id: FieldRef<"ProgresoUsuario", 'String'>
    readonly puntosTotales: FieldRef<"ProgresoUsuario", 'Int'>
    readonly nivelActual: FieldRef<"ProgresoUsuario", 'Int'>
    readonly rachaDias: FieldRef<"ProgresoUsuario", 'Int'>
    readonly posicionRanking: FieldRef<"ProgresoUsuario", 'Int'>
    readonly ultimaActividad: FieldRef<"ProgresoUsuario", 'DateTime'>
    readonly createdAt: FieldRef<"ProgresoUsuario", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgresoUsuario", 'DateTime'>
    readonly usuarioId: FieldRef<"ProgresoUsuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgresoUsuario findUnique
   */
  export type ProgresoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoUsuario to fetch.
     */
    where: ProgresoUsuarioWhereUniqueInput
  }

  /**
   * ProgresoUsuario findUniqueOrThrow
   */
  export type ProgresoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoUsuario to fetch.
     */
    where: ProgresoUsuarioWhereUniqueInput
  }

  /**
   * ProgresoUsuario findFirst
   */
  export type ProgresoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoUsuario to fetch.
     */
    where?: ProgresoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoUsuarios to fetch.
     */
    orderBy?: ProgresoUsuarioOrderByWithRelationInput | ProgresoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoUsuarios.
     */
    cursor?: ProgresoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoUsuarios.
     */
    distinct?: ProgresoUsuarioScalarFieldEnum | ProgresoUsuarioScalarFieldEnum[]
  }

  /**
   * ProgresoUsuario findFirstOrThrow
   */
  export type ProgresoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoUsuario to fetch.
     */
    where?: ProgresoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoUsuarios to fetch.
     */
    orderBy?: ProgresoUsuarioOrderByWithRelationInput | ProgresoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoUsuarios.
     */
    cursor?: ProgresoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoUsuarios.
     */
    distinct?: ProgresoUsuarioScalarFieldEnum | ProgresoUsuarioScalarFieldEnum[]
  }

  /**
   * ProgresoUsuario findMany
   */
  export type ProgresoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoUsuarios to fetch.
     */
    where?: ProgresoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoUsuarios to fetch.
     */
    orderBy?: ProgresoUsuarioOrderByWithRelationInput | ProgresoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgresoUsuarios.
     */
    cursor?: ProgresoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoUsuarios.
     */
    skip?: number
    distinct?: ProgresoUsuarioScalarFieldEnum | ProgresoUsuarioScalarFieldEnum[]
  }

  /**
   * ProgresoUsuario create
   */
  export type ProgresoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgresoUsuario.
     */
    data: XOR<ProgresoUsuarioCreateInput, ProgresoUsuarioUncheckedCreateInput>
  }

  /**
   * ProgresoUsuario createMany
   */
  export type ProgresoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgresoUsuarios.
     */
    data: ProgresoUsuarioCreateManyInput | ProgresoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgresoUsuario createManyAndReturn
   */
  export type ProgresoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProgresoUsuarios.
     */
    data: ProgresoUsuarioCreateManyInput | ProgresoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgresoUsuario update
   */
  export type ProgresoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgresoUsuario.
     */
    data: XOR<ProgresoUsuarioUpdateInput, ProgresoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ProgresoUsuario to update.
     */
    where: ProgresoUsuarioWhereUniqueInput
  }

  /**
   * ProgresoUsuario updateMany
   */
  export type ProgresoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgresoUsuarios.
     */
    data: XOR<ProgresoUsuarioUpdateManyMutationInput, ProgresoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoUsuarios to update
     */
    where?: ProgresoUsuarioWhereInput
  }

  /**
   * ProgresoUsuario upsert
   */
  export type ProgresoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgresoUsuario to update in case it exists.
     */
    where: ProgresoUsuarioWhereUniqueInput
    /**
     * In case the ProgresoUsuario found by the `where` argument doesn't exist, create a new ProgresoUsuario with this data.
     */
    create: XOR<ProgresoUsuarioCreateInput, ProgresoUsuarioUncheckedCreateInput>
    /**
     * In case the ProgresoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoUsuarioUpdateInput, ProgresoUsuarioUncheckedUpdateInput>
  }

  /**
   * ProgresoUsuario delete
   */
  export type ProgresoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ProgresoUsuario to delete.
     */
    where: ProgresoUsuarioWhereUniqueInput
  }

  /**
   * ProgresoUsuario deleteMany
   */
  export type ProgresoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoUsuarios to delete
     */
    where?: ProgresoUsuarioWhereInput
  }

  /**
   * ProgresoUsuario.insignias
   */
  export type ProgresoUsuario$insigniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    where?: ProgresoInsigniaWhereInput
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    cursor?: ProgresoInsigniaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoInsigniaScalarFieldEnum | ProgresoInsigniaScalarFieldEnum[]
  }

  /**
   * ProgresoUsuario without action
   */
  export type ProgresoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoUsuario
     */
    select?: ProgresoUsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Insignia
   */

  export type AggregateInsignia = {
    _count: InsigniaCountAggregateOutputType | null
    _min: InsigniaMinAggregateOutputType | null
    _max: InsigniaMaxAggregateOutputType | null
  }

  export type InsigniaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    imagen: string | null
    criterioDesbloqueo: string | null
    createdAt: Date | null
  }

  export type InsigniaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    imagen: string | null
    criterioDesbloqueo: string | null
    createdAt: Date | null
  }

  export type InsigniaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    imagen: number
    criterioDesbloqueo: number
    createdAt: number
    _all: number
  }


  export type InsigniaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    criterioDesbloqueo?: true
    createdAt?: true
  }

  export type InsigniaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    criterioDesbloqueo?: true
    createdAt?: true
  }

  export type InsigniaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    imagen?: true
    criterioDesbloqueo?: true
    createdAt?: true
    _all?: true
  }

  export type InsigniaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insignia to aggregate.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insignias
    **/
    _count?: true | InsigniaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsigniaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsigniaMaxAggregateInputType
  }

  export type GetInsigniaAggregateType<T extends InsigniaAggregateArgs> = {
        [P in keyof T & keyof AggregateInsignia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsignia[P]>
      : GetScalarType<T[P], AggregateInsignia[P]>
  }




  export type InsigniaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsigniaWhereInput
    orderBy?: InsigniaOrderByWithAggregationInput | InsigniaOrderByWithAggregationInput[]
    by: InsigniaScalarFieldEnum[] | InsigniaScalarFieldEnum
    having?: InsigniaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsigniaCountAggregateInputType | true
    _min?: InsigniaMinAggregateInputType
    _max?: InsigniaMaxAggregateInputType
  }

  export type InsigniaGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt: Date
    _count: InsigniaCountAggregateOutputType | null
    _min: InsigniaMinAggregateOutputType | null
    _max: InsigniaMaxAggregateOutputType | null
  }

  type GetInsigniaGroupByPayload<T extends InsigniaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsigniaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsigniaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsigniaGroupByOutputType[P]>
            : GetScalarType<T[P], InsigniaGroupByOutputType[P]>
        }
      >
    >


  export type InsigniaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    criterioDesbloqueo?: boolean
    createdAt?: boolean
    progresosOtorgados?: boolean | Insignia$progresosOtorgadosArgs<ExtArgs>
    _count?: boolean | InsigniaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insignia"]>

  export type InsigniaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    criterioDesbloqueo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["insignia"]>

  export type InsigniaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    imagen?: boolean
    criterioDesbloqueo?: boolean
    createdAt?: boolean
  }

  export type InsigniaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progresosOtorgados?: boolean | Insignia$progresosOtorgadosArgs<ExtArgs>
    _count?: boolean | InsigniaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsigniaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InsigniaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insignia"
    objects: {
      progresosOtorgados: Prisma.$ProgresoInsigniaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string
      imagen: string
      criterioDesbloqueo: string
      createdAt: Date
    }, ExtArgs["result"]["insignia"]>
    composites: {}
  }

  type InsigniaGetPayload<S extends boolean | null | undefined | InsigniaDefaultArgs> = $Result.GetResult<Prisma.$InsigniaPayload, S>

  type InsigniaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InsigniaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InsigniaCountAggregateInputType | true
    }

  export interface InsigniaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insignia'], meta: { name: 'Insignia' } }
    /**
     * Find zero or one Insignia that matches the filter.
     * @param {InsigniaFindUniqueArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsigniaFindUniqueArgs>(args: SelectSubset<T, InsigniaFindUniqueArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Insignia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InsigniaFindUniqueOrThrowArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsigniaFindUniqueOrThrowArgs>(args: SelectSubset<T, InsigniaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Insignia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindFirstArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsigniaFindFirstArgs>(args?: SelectSubset<T, InsigniaFindFirstArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Insignia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindFirstOrThrowArgs} args - Arguments to find a Insignia
     * @example
     * // Get one Insignia
     * const insignia = await prisma.insignia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsigniaFindFirstOrThrowArgs>(args?: SelectSubset<T, InsigniaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Insignias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insignias
     * const insignias = await prisma.insignia.findMany()
     * 
     * // Get first 10 Insignias
     * const insignias = await prisma.insignia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insigniaWithIdOnly = await prisma.insignia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsigniaFindManyArgs>(args?: SelectSubset<T, InsigniaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Insignia.
     * @param {InsigniaCreateArgs} args - Arguments to create a Insignia.
     * @example
     * // Create one Insignia
     * const Insignia = await prisma.insignia.create({
     *   data: {
     *     // ... data to create a Insignia
     *   }
     * })
     * 
     */
    create<T extends InsigniaCreateArgs>(args: SelectSubset<T, InsigniaCreateArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Insignias.
     * @param {InsigniaCreateManyArgs} args - Arguments to create many Insignias.
     * @example
     * // Create many Insignias
     * const insignia = await prisma.insignia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsigniaCreateManyArgs>(args?: SelectSubset<T, InsigniaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insignias and returns the data saved in the database.
     * @param {InsigniaCreateManyAndReturnArgs} args - Arguments to create many Insignias.
     * @example
     * // Create many Insignias
     * const insignia = await prisma.insignia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insignias and only return the `id`
     * const insigniaWithIdOnly = await prisma.insignia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsigniaCreateManyAndReturnArgs>(args?: SelectSubset<T, InsigniaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Insignia.
     * @param {InsigniaDeleteArgs} args - Arguments to delete one Insignia.
     * @example
     * // Delete one Insignia
     * const Insignia = await prisma.insignia.delete({
     *   where: {
     *     // ... filter to delete one Insignia
     *   }
     * })
     * 
     */
    delete<T extends InsigniaDeleteArgs>(args: SelectSubset<T, InsigniaDeleteArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Insignia.
     * @param {InsigniaUpdateArgs} args - Arguments to update one Insignia.
     * @example
     * // Update one Insignia
     * const insignia = await prisma.insignia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsigniaUpdateArgs>(args: SelectSubset<T, InsigniaUpdateArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Insignias.
     * @param {InsigniaDeleteManyArgs} args - Arguments to filter Insignias to delete.
     * @example
     * // Delete a few Insignias
     * const { count } = await prisma.insignia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsigniaDeleteManyArgs>(args?: SelectSubset<T, InsigniaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insignias
     * const insignia = await prisma.insignia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsigniaUpdateManyArgs>(args: SelectSubset<T, InsigniaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insignia.
     * @param {InsigniaUpsertArgs} args - Arguments to update or create a Insignia.
     * @example
     * // Update or create a Insignia
     * const insignia = await prisma.insignia.upsert({
     *   create: {
     *     // ... data to create a Insignia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insignia we want to update
     *   }
     * })
     */
    upsert<T extends InsigniaUpsertArgs>(args: SelectSubset<T, InsigniaUpsertArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Insignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaCountArgs} args - Arguments to filter Insignias to count.
     * @example
     * // Count the number of Insignias
     * const count = await prisma.insignia.count({
     *   where: {
     *     // ... the filter for the Insignias we want to count
     *   }
     * })
    **/
    count<T extends InsigniaCountArgs>(
      args?: Subset<T, InsigniaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsigniaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsigniaAggregateArgs>(args: Subset<T, InsigniaAggregateArgs>): Prisma.PrismaPromise<GetInsigniaAggregateType<T>>

    /**
     * Group by Insignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsigniaGroupByArgs} args - Group by arguments.
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
      T extends InsigniaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsigniaGroupByArgs['orderBy'] }
        : { orderBy?: InsigniaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsigniaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsigniaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insignia model
   */
  readonly fields: InsigniaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insignia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsigniaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progresosOtorgados<T extends Insignia$progresosOtorgadosArgs<ExtArgs> = {}>(args?: Subset<T, Insignia$progresosOtorgadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Insignia model
   */ 
  interface InsigniaFieldRefs {
    readonly id: FieldRef<"Insignia", 'String'>
    readonly nombre: FieldRef<"Insignia", 'String'>
    readonly descripcion: FieldRef<"Insignia", 'String'>
    readonly imagen: FieldRef<"Insignia", 'String'>
    readonly criterioDesbloqueo: FieldRef<"Insignia", 'String'>
    readonly createdAt: FieldRef<"Insignia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insignia findUnique
   */
  export type InsigniaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia findUniqueOrThrow
   */
  export type InsigniaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia findFirst
   */
  export type InsigniaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insignias.
     */
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia findFirstOrThrow
   */
  export type InsigniaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignia to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insignias.
     */
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia findMany
   */
  export type InsigniaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter, which Insignias to fetch.
     */
    where?: InsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insignias to fetch.
     */
    orderBy?: InsigniaOrderByWithRelationInput | InsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insignias.
     */
    cursor?: InsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insignias.
     */
    skip?: number
    distinct?: InsigniaScalarFieldEnum | InsigniaScalarFieldEnum[]
  }

  /**
   * Insignia create
   */
  export type InsigniaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The data needed to create a Insignia.
     */
    data: XOR<InsigniaCreateInput, InsigniaUncheckedCreateInput>
  }

  /**
   * Insignia createMany
   */
  export type InsigniaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insignias.
     */
    data: InsigniaCreateManyInput | InsigniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insignia createManyAndReturn
   */
  export type InsigniaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Insignias.
     */
    data: InsigniaCreateManyInput | InsigniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insignia update
   */
  export type InsigniaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The data needed to update a Insignia.
     */
    data: XOR<InsigniaUpdateInput, InsigniaUncheckedUpdateInput>
    /**
     * Choose, which Insignia to update.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia updateMany
   */
  export type InsigniaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insignias.
     */
    data: XOR<InsigniaUpdateManyMutationInput, InsigniaUncheckedUpdateManyInput>
    /**
     * Filter which Insignias to update
     */
    where?: InsigniaWhereInput
  }

  /**
   * Insignia upsert
   */
  export type InsigniaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * The filter to search for the Insignia to update in case it exists.
     */
    where: InsigniaWhereUniqueInput
    /**
     * In case the Insignia found by the `where` argument doesn't exist, create a new Insignia with this data.
     */
    create: XOR<InsigniaCreateInput, InsigniaUncheckedCreateInput>
    /**
     * In case the Insignia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsigniaUpdateInput, InsigniaUncheckedUpdateInput>
  }

  /**
   * Insignia delete
   */
  export type InsigniaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
    /**
     * Filter which Insignia to delete.
     */
    where: InsigniaWhereUniqueInput
  }

  /**
   * Insignia deleteMany
   */
  export type InsigniaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insignias to delete
     */
    where?: InsigniaWhereInput
  }

  /**
   * Insignia.progresosOtorgados
   */
  export type Insignia$progresosOtorgadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    where?: ProgresoInsigniaWhereInput
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    cursor?: ProgresoInsigniaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresoInsigniaScalarFieldEnum | ProgresoInsigniaScalarFieldEnum[]
  }

  /**
   * Insignia without action
   */
  export type InsigniaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insignia
     */
    select?: InsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsigniaInclude<ExtArgs> | null
  }


  /**
   * Model ProgresoInsignia
   */

  export type AggregateProgresoInsignia = {
    _count: ProgresoInsigniaCountAggregateOutputType | null
    _min: ProgresoInsigniaMinAggregateOutputType | null
    _max: ProgresoInsigniaMaxAggregateOutputType | null
  }

  export type ProgresoInsigniaMinAggregateOutputType = {
    id: string | null
    fechaObtencion: Date | null
    progresoId: string | null
    insigniaId: string | null
  }

  export type ProgresoInsigniaMaxAggregateOutputType = {
    id: string | null
    fechaObtencion: Date | null
    progresoId: string | null
    insigniaId: string | null
  }

  export type ProgresoInsigniaCountAggregateOutputType = {
    id: number
    fechaObtencion: number
    progresoId: number
    insigniaId: number
    _all: number
  }


  export type ProgresoInsigniaMinAggregateInputType = {
    id?: true
    fechaObtencion?: true
    progresoId?: true
    insigniaId?: true
  }

  export type ProgresoInsigniaMaxAggregateInputType = {
    id?: true
    fechaObtencion?: true
    progresoId?: true
    insigniaId?: true
  }

  export type ProgresoInsigniaCountAggregateInputType = {
    id?: true
    fechaObtencion?: true
    progresoId?: true
    insigniaId?: true
    _all?: true
  }

  export type ProgresoInsigniaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoInsignia to aggregate.
     */
    where?: ProgresoInsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoInsignias to fetch.
     */
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresoInsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoInsignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoInsignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgresoInsignias
    **/
    _count?: true | ProgresoInsigniaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresoInsigniaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresoInsigniaMaxAggregateInputType
  }

  export type GetProgresoInsigniaAggregateType<T extends ProgresoInsigniaAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresoInsignia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresoInsignia[P]>
      : GetScalarType<T[P], AggregateProgresoInsignia[P]>
  }




  export type ProgresoInsigniaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresoInsigniaWhereInput
    orderBy?: ProgresoInsigniaOrderByWithAggregationInput | ProgresoInsigniaOrderByWithAggregationInput[]
    by: ProgresoInsigniaScalarFieldEnum[] | ProgresoInsigniaScalarFieldEnum
    having?: ProgresoInsigniaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresoInsigniaCountAggregateInputType | true
    _min?: ProgresoInsigniaMinAggregateInputType
    _max?: ProgresoInsigniaMaxAggregateInputType
  }

  export type ProgresoInsigniaGroupByOutputType = {
    id: string
    fechaObtencion: Date
    progresoId: string
    insigniaId: string
    _count: ProgresoInsigniaCountAggregateOutputType | null
    _min: ProgresoInsigniaMinAggregateOutputType | null
    _max: ProgresoInsigniaMaxAggregateOutputType | null
  }

  type GetProgresoInsigniaGroupByPayload<T extends ProgresoInsigniaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresoInsigniaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresoInsigniaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresoInsigniaGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresoInsigniaGroupByOutputType[P]>
        }
      >
    >


  export type ProgresoInsigniaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaObtencion?: boolean
    progresoId?: boolean
    insigniaId?: boolean
    progreso?: boolean | ProgresoUsuarioDefaultArgs<ExtArgs>
    insignia?: boolean | InsigniaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoInsignia"]>

  export type ProgresoInsigniaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaObtencion?: boolean
    progresoId?: boolean
    insigniaId?: boolean
    progreso?: boolean | ProgresoUsuarioDefaultArgs<ExtArgs>
    insignia?: boolean | InsigniaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresoInsignia"]>

  export type ProgresoInsigniaSelectScalar = {
    id?: boolean
    fechaObtencion?: boolean
    progresoId?: boolean
    insigniaId?: boolean
  }

  export type ProgresoInsigniaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | ProgresoUsuarioDefaultArgs<ExtArgs>
    insignia?: boolean | InsigniaDefaultArgs<ExtArgs>
  }
  export type ProgresoInsigniaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progreso?: boolean | ProgresoUsuarioDefaultArgs<ExtArgs>
    insignia?: boolean | InsigniaDefaultArgs<ExtArgs>
  }

  export type $ProgresoInsigniaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgresoInsignia"
    objects: {
      progreso: Prisma.$ProgresoUsuarioPayload<ExtArgs>
      insignia: Prisma.$InsigniaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fechaObtencion: Date
      progresoId: string
      insigniaId: string
    }, ExtArgs["result"]["progresoInsignia"]>
    composites: {}
  }

  type ProgresoInsigniaGetPayload<S extends boolean | null | undefined | ProgresoInsigniaDefaultArgs> = $Result.GetResult<Prisma.$ProgresoInsigniaPayload, S>

  type ProgresoInsigniaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgresoInsigniaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgresoInsigniaCountAggregateInputType | true
    }

  export interface ProgresoInsigniaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgresoInsignia'], meta: { name: 'ProgresoInsignia' } }
    /**
     * Find zero or one ProgresoInsignia that matches the filter.
     * @param {ProgresoInsigniaFindUniqueArgs} args - Arguments to find a ProgresoInsignia
     * @example
     * // Get one ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgresoInsigniaFindUniqueArgs>(args: SelectSubset<T, ProgresoInsigniaFindUniqueArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProgresoInsignia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgresoInsigniaFindUniqueOrThrowArgs} args - Arguments to find a ProgresoInsignia
     * @example
     * // Get one ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgresoInsigniaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgresoInsigniaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProgresoInsignia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaFindFirstArgs} args - Arguments to find a ProgresoInsignia
     * @example
     * // Get one ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgresoInsigniaFindFirstArgs>(args?: SelectSubset<T, ProgresoInsigniaFindFirstArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProgresoInsignia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaFindFirstOrThrowArgs} args - Arguments to find a ProgresoInsignia
     * @example
     * // Get one ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgresoInsigniaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgresoInsigniaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProgresoInsignias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgresoInsignias
     * const progresoInsignias = await prisma.progresoInsignia.findMany()
     * 
     * // Get first 10 ProgresoInsignias
     * const progresoInsignias = await prisma.progresoInsignia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresoInsigniaWithIdOnly = await prisma.progresoInsignia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgresoInsigniaFindManyArgs>(args?: SelectSubset<T, ProgresoInsigniaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProgresoInsignia.
     * @param {ProgresoInsigniaCreateArgs} args - Arguments to create a ProgresoInsignia.
     * @example
     * // Create one ProgresoInsignia
     * const ProgresoInsignia = await prisma.progresoInsignia.create({
     *   data: {
     *     // ... data to create a ProgresoInsignia
     *   }
     * })
     * 
     */
    create<T extends ProgresoInsigniaCreateArgs>(args: SelectSubset<T, ProgresoInsigniaCreateArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProgresoInsignias.
     * @param {ProgresoInsigniaCreateManyArgs} args - Arguments to create many ProgresoInsignias.
     * @example
     * // Create many ProgresoInsignias
     * const progresoInsignia = await prisma.progresoInsignia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgresoInsigniaCreateManyArgs>(args?: SelectSubset<T, ProgresoInsigniaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgresoInsignias and returns the data saved in the database.
     * @param {ProgresoInsigniaCreateManyAndReturnArgs} args - Arguments to create many ProgresoInsignias.
     * @example
     * // Create many ProgresoInsignias
     * const progresoInsignia = await prisma.progresoInsignia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgresoInsignias and only return the `id`
     * const progresoInsigniaWithIdOnly = await prisma.progresoInsignia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgresoInsigniaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgresoInsigniaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProgresoInsignia.
     * @param {ProgresoInsigniaDeleteArgs} args - Arguments to delete one ProgresoInsignia.
     * @example
     * // Delete one ProgresoInsignia
     * const ProgresoInsignia = await prisma.progresoInsignia.delete({
     *   where: {
     *     // ... filter to delete one ProgresoInsignia
     *   }
     * })
     * 
     */
    delete<T extends ProgresoInsigniaDeleteArgs>(args: SelectSubset<T, ProgresoInsigniaDeleteArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProgresoInsignia.
     * @param {ProgresoInsigniaUpdateArgs} args - Arguments to update one ProgresoInsignia.
     * @example
     * // Update one ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgresoInsigniaUpdateArgs>(args: SelectSubset<T, ProgresoInsigniaUpdateArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProgresoInsignias.
     * @param {ProgresoInsigniaDeleteManyArgs} args - Arguments to filter ProgresoInsignias to delete.
     * @example
     * // Delete a few ProgresoInsignias
     * const { count } = await prisma.progresoInsignia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgresoInsigniaDeleteManyArgs>(args?: SelectSubset<T, ProgresoInsigniaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgresoInsignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgresoInsignias
     * const progresoInsignia = await prisma.progresoInsignia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgresoInsigniaUpdateManyArgs>(args: SelectSubset<T, ProgresoInsigniaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgresoInsignia.
     * @param {ProgresoInsigniaUpsertArgs} args - Arguments to update or create a ProgresoInsignia.
     * @example
     * // Update or create a ProgresoInsignia
     * const progresoInsignia = await prisma.progresoInsignia.upsert({
     *   create: {
     *     // ... data to create a ProgresoInsignia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgresoInsignia we want to update
     *   }
     * })
     */
    upsert<T extends ProgresoInsigniaUpsertArgs>(args: SelectSubset<T, ProgresoInsigniaUpsertArgs<ExtArgs>>): Prisma__ProgresoInsigniaClient<$Result.GetResult<Prisma.$ProgresoInsigniaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProgresoInsignias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaCountArgs} args - Arguments to filter ProgresoInsignias to count.
     * @example
     * // Count the number of ProgresoInsignias
     * const count = await prisma.progresoInsignia.count({
     *   where: {
     *     // ... the filter for the ProgresoInsignias we want to count
     *   }
     * })
    **/
    count<T extends ProgresoInsigniaCountArgs>(
      args?: Subset<T, ProgresoInsigniaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresoInsigniaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgresoInsignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresoInsigniaAggregateArgs>(args: Subset<T, ProgresoInsigniaAggregateArgs>): Prisma.PrismaPromise<GetProgresoInsigniaAggregateType<T>>

    /**
     * Group by ProgresoInsignia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresoInsigniaGroupByArgs} args - Group by arguments.
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
      T extends ProgresoInsigniaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresoInsigniaGroupByArgs['orderBy'] }
        : { orderBy?: ProgresoInsigniaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresoInsigniaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresoInsigniaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgresoInsignia model
   */
  readonly fields: ProgresoInsigniaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgresoInsignia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresoInsigniaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progreso<T extends ProgresoUsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgresoUsuarioDefaultArgs<ExtArgs>>): Prisma__ProgresoUsuarioClient<$Result.GetResult<Prisma.$ProgresoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    insignia<T extends InsigniaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsigniaDefaultArgs<ExtArgs>>): Prisma__InsigniaClient<$Result.GetResult<Prisma.$InsigniaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProgresoInsignia model
   */ 
  interface ProgresoInsigniaFieldRefs {
    readonly id: FieldRef<"ProgresoInsignia", 'String'>
    readonly fechaObtencion: FieldRef<"ProgresoInsignia", 'DateTime'>
    readonly progresoId: FieldRef<"ProgresoInsignia", 'String'>
    readonly insigniaId: FieldRef<"ProgresoInsignia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProgresoInsignia findUnique
   */
  export type ProgresoInsigniaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoInsignia to fetch.
     */
    where: ProgresoInsigniaWhereUniqueInput
  }

  /**
   * ProgresoInsignia findUniqueOrThrow
   */
  export type ProgresoInsigniaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoInsignia to fetch.
     */
    where: ProgresoInsigniaWhereUniqueInput
  }

  /**
   * ProgresoInsignia findFirst
   */
  export type ProgresoInsigniaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoInsignia to fetch.
     */
    where?: ProgresoInsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoInsignias to fetch.
     */
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoInsignias.
     */
    cursor?: ProgresoInsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoInsignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoInsignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoInsignias.
     */
    distinct?: ProgresoInsigniaScalarFieldEnum | ProgresoInsigniaScalarFieldEnum[]
  }

  /**
   * ProgresoInsignia findFirstOrThrow
   */
  export type ProgresoInsigniaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoInsignia to fetch.
     */
    where?: ProgresoInsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoInsignias to fetch.
     */
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgresoInsignias.
     */
    cursor?: ProgresoInsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoInsignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoInsignias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgresoInsignias.
     */
    distinct?: ProgresoInsigniaScalarFieldEnum | ProgresoInsigniaScalarFieldEnum[]
  }

  /**
   * ProgresoInsignia findMany
   */
  export type ProgresoInsigniaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter, which ProgresoInsignias to fetch.
     */
    where?: ProgresoInsigniaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgresoInsignias to fetch.
     */
    orderBy?: ProgresoInsigniaOrderByWithRelationInput | ProgresoInsigniaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgresoInsignias.
     */
    cursor?: ProgresoInsigniaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgresoInsignias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgresoInsignias.
     */
    skip?: number
    distinct?: ProgresoInsigniaScalarFieldEnum | ProgresoInsigniaScalarFieldEnum[]
  }

  /**
   * ProgresoInsignia create
   */
  export type ProgresoInsigniaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgresoInsignia.
     */
    data: XOR<ProgresoInsigniaCreateInput, ProgresoInsigniaUncheckedCreateInput>
  }

  /**
   * ProgresoInsignia createMany
   */
  export type ProgresoInsigniaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgresoInsignias.
     */
    data: ProgresoInsigniaCreateManyInput | ProgresoInsigniaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgresoInsignia createManyAndReturn
   */
  export type ProgresoInsigniaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProgresoInsignias.
     */
    data: ProgresoInsigniaCreateManyInput | ProgresoInsigniaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgresoInsignia update
   */
  export type ProgresoInsigniaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgresoInsignia.
     */
    data: XOR<ProgresoInsigniaUpdateInput, ProgresoInsigniaUncheckedUpdateInput>
    /**
     * Choose, which ProgresoInsignia to update.
     */
    where: ProgresoInsigniaWhereUniqueInput
  }

  /**
   * ProgresoInsignia updateMany
   */
  export type ProgresoInsigniaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgresoInsignias.
     */
    data: XOR<ProgresoInsigniaUpdateManyMutationInput, ProgresoInsigniaUncheckedUpdateManyInput>
    /**
     * Filter which ProgresoInsignias to update
     */
    where?: ProgresoInsigniaWhereInput
  }

  /**
   * ProgresoInsignia upsert
   */
  export type ProgresoInsigniaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgresoInsignia to update in case it exists.
     */
    where: ProgresoInsigniaWhereUniqueInput
    /**
     * In case the ProgresoInsignia found by the `where` argument doesn't exist, create a new ProgresoInsignia with this data.
     */
    create: XOR<ProgresoInsigniaCreateInput, ProgresoInsigniaUncheckedCreateInput>
    /**
     * In case the ProgresoInsignia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresoInsigniaUpdateInput, ProgresoInsigniaUncheckedUpdateInput>
  }

  /**
   * ProgresoInsignia delete
   */
  export type ProgresoInsigniaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
    /**
     * Filter which ProgresoInsignia to delete.
     */
    where: ProgresoInsigniaWhereUniqueInput
  }

  /**
   * ProgresoInsignia deleteMany
   */
  export type ProgresoInsigniaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgresoInsignias to delete
     */
    where?: ProgresoInsigniaWhereInput
  }

  /**
   * ProgresoInsignia without action
   */
  export type ProgresoInsigniaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgresoInsignia
     */
    select?: ProgresoInsigniaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresoInsigniaInclude<ExtArgs> | null
  }


  /**
   * Model SesionSimulacion
   */

  export type AggregateSesionSimulacion = {
    _count: SesionSimulacionCountAggregateOutputType | null
    _avg: SesionSimulacionAvgAggregateOutputType | null
    _sum: SesionSimulacionSumAggregateOutputType | null
    _min: SesionSimulacionMinAggregateOutputType | null
    _max: SesionSimulacionMaxAggregateOutputType | null
  }

  export type SesionSimulacionAvgAggregateOutputType = {
    pasosCompletados: number | null
    totalPasos: number | null
  }

  export type SesionSimulacionSumAggregateOutputType = {
    pasosCompletados: number | null
    totalPasos: number | null
  }

  export type SesionSimulacionMinAggregateOutputType = {
    id: string | null
    pasosCompletados: number | null
    totalPasos: number | null
    completada: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    usuarioId: string | null
    algoritmoId: string | null
  }

  export type SesionSimulacionMaxAggregateOutputType = {
    id: string | null
    pasosCompletados: number | null
    totalPasos: number | null
    completada: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    usuarioId: string | null
    algoritmoId: string | null
  }

  export type SesionSimulacionCountAggregateOutputType = {
    id: number
    pasosCompletados: number
    totalPasos: number
    completada: number
    fechaInicio: number
    fechaFin: number
    usuarioId: number
    algoritmoId: number
    _all: number
  }


  export type SesionSimulacionAvgAggregateInputType = {
    pasosCompletados?: true
    totalPasos?: true
  }

  export type SesionSimulacionSumAggregateInputType = {
    pasosCompletados?: true
    totalPasos?: true
  }

  export type SesionSimulacionMinAggregateInputType = {
    id?: true
    pasosCompletados?: true
    totalPasos?: true
    completada?: true
    fechaInicio?: true
    fechaFin?: true
    usuarioId?: true
    algoritmoId?: true
  }

  export type SesionSimulacionMaxAggregateInputType = {
    id?: true
    pasosCompletados?: true
    totalPasos?: true
    completada?: true
    fechaInicio?: true
    fechaFin?: true
    usuarioId?: true
    algoritmoId?: true
  }

  export type SesionSimulacionCountAggregateInputType = {
    id?: true
    pasosCompletados?: true
    totalPasos?: true
    completada?: true
    fechaInicio?: true
    fechaFin?: true
    usuarioId?: true
    algoritmoId?: true
    _all?: true
  }

  export type SesionSimulacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SesionSimulacion to aggregate.
     */
    where?: SesionSimulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SesionSimulacions to fetch.
     */
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SesionSimulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SesionSimulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SesionSimulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SesionSimulacions
    **/
    _count?: true | SesionSimulacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SesionSimulacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SesionSimulacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SesionSimulacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SesionSimulacionMaxAggregateInputType
  }

  export type GetSesionSimulacionAggregateType<T extends SesionSimulacionAggregateArgs> = {
        [P in keyof T & keyof AggregateSesionSimulacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSesionSimulacion[P]>
      : GetScalarType<T[P], AggregateSesionSimulacion[P]>
  }




  export type SesionSimulacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SesionSimulacionWhereInput
    orderBy?: SesionSimulacionOrderByWithAggregationInput | SesionSimulacionOrderByWithAggregationInput[]
    by: SesionSimulacionScalarFieldEnum[] | SesionSimulacionScalarFieldEnum
    having?: SesionSimulacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SesionSimulacionCountAggregateInputType | true
    _avg?: SesionSimulacionAvgAggregateInputType
    _sum?: SesionSimulacionSumAggregateInputType
    _min?: SesionSimulacionMinAggregateInputType
    _max?: SesionSimulacionMaxAggregateInputType
  }

  export type SesionSimulacionGroupByOutputType = {
    id: string
    pasosCompletados: number
    totalPasos: number
    completada: boolean
    fechaInicio: Date
    fechaFin: Date | null
    usuarioId: string
    algoritmoId: string
    _count: SesionSimulacionCountAggregateOutputType | null
    _avg: SesionSimulacionAvgAggregateOutputType | null
    _sum: SesionSimulacionSumAggregateOutputType | null
    _min: SesionSimulacionMinAggregateOutputType | null
    _max: SesionSimulacionMaxAggregateOutputType | null
  }

  type GetSesionSimulacionGroupByPayload<T extends SesionSimulacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SesionSimulacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SesionSimulacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SesionSimulacionGroupByOutputType[P]>
            : GetScalarType<T[P], SesionSimulacionGroupByOutputType[P]>
        }
      >
    >


  export type SesionSimulacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasosCompletados?: boolean
    totalPasos?: boolean
    completada?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    usuarioId?: boolean
    algoritmoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesionSimulacion"]>

  export type SesionSimulacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasosCompletados?: boolean
    totalPasos?: boolean
    completada?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    usuarioId?: boolean
    algoritmoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sesionSimulacion"]>

  export type SesionSimulacionSelectScalar = {
    id?: boolean
    pasosCompletados?: boolean
    totalPasos?: boolean
    completada?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    usuarioId?: boolean
    algoritmoId?: boolean
  }

  export type SesionSimulacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }
  export type SesionSimulacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    algoritmo?: boolean | AlgoritmoDefaultArgs<ExtArgs>
  }

  export type $SesionSimulacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SesionSimulacion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      algoritmo: Prisma.$AlgoritmoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pasosCompletados: number
      totalPasos: number
      completada: boolean
      fechaInicio: Date
      fechaFin: Date | null
      usuarioId: string
      algoritmoId: string
    }, ExtArgs["result"]["sesionSimulacion"]>
    composites: {}
  }

  type SesionSimulacionGetPayload<S extends boolean | null | undefined | SesionSimulacionDefaultArgs> = $Result.GetResult<Prisma.$SesionSimulacionPayload, S>

  type SesionSimulacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SesionSimulacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SesionSimulacionCountAggregateInputType | true
    }

  export interface SesionSimulacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SesionSimulacion'], meta: { name: 'SesionSimulacion' } }
    /**
     * Find zero or one SesionSimulacion that matches the filter.
     * @param {SesionSimulacionFindUniqueArgs} args - Arguments to find a SesionSimulacion
     * @example
     * // Get one SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SesionSimulacionFindUniqueArgs>(args: SelectSubset<T, SesionSimulacionFindUniqueArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SesionSimulacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SesionSimulacionFindUniqueOrThrowArgs} args - Arguments to find a SesionSimulacion
     * @example
     * // Get one SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SesionSimulacionFindUniqueOrThrowArgs>(args: SelectSubset<T, SesionSimulacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SesionSimulacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionFindFirstArgs} args - Arguments to find a SesionSimulacion
     * @example
     * // Get one SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SesionSimulacionFindFirstArgs>(args?: SelectSubset<T, SesionSimulacionFindFirstArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SesionSimulacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionFindFirstOrThrowArgs} args - Arguments to find a SesionSimulacion
     * @example
     * // Get one SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SesionSimulacionFindFirstOrThrowArgs>(args?: SelectSubset<T, SesionSimulacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SesionSimulacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SesionSimulacions
     * const sesionSimulacions = await prisma.sesionSimulacion.findMany()
     * 
     * // Get first 10 SesionSimulacions
     * const sesionSimulacions = await prisma.sesionSimulacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sesionSimulacionWithIdOnly = await prisma.sesionSimulacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SesionSimulacionFindManyArgs>(args?: SelectSubset<T, SesionSimulacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SesionSimulacion.
     * @param {SesionSimulacionCreateArgs} args - Arguments to create a SesionSimulacion.
     * @example
     * // Create one SesionSimulacion
     * const SesionSimulacion = await prisma.sesionSimulacion.create({
     *   data: {
     *     // ... data to create a SesionSimulacion
     *   }
     * })
     * 
     */
    create<T extends SesionSimulacionCreateArgs>(args: SelectSubset<T, SesionSimulacionCreateArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SesionSimulacions.
     * @param {SesionSimulacionCreateManyArgs} args - Arguments to create many SesionSimulacions.
     * @example
     * // Create many SesionSimulacions
     * const sesionSimulacion = await prisma.sesionSimulacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SesionSimulacionCreateManyArgs>(args?: SelectSubset<T, SesionSimulacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SesionSimulacions and returns the data saved in the database.
     * @param {SesionSimulacionCreateManyAndReturnArgs} args - Arguments to create many SesionSimulacions.
     * @example
     * // Create many SesionSimulacions
     * const sesionSimulacion = await prisma.sesionSimulacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SesionSimulacions and only return the `id`
     * const sesionSimulacionWithIdOnly = await prisma.sesionSimulacion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SesionSimulacionCreateManyAndReturnArgs>(args?: SelectSubset<T, SesionSimulacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SesionSimulacion.
     * @param {SesionSimulacionDeleteArgs} args - Arguments to delete one SesionSimulacion.
     * @example
     * // Delete one SesionSimulacion
     * const SesionSimulacion = await prisma.sesionSimulacion.delete({
     *   where: {
     *     // ... filter to delete one SesionSimulacion
     *   }
     * })
     * 
     */
    delete<T extends SesionSimulacionDeleteArgs>(args: SelectSubset<T, SesionSimulacionDeleteArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SesionSimulacion.
     * @param {SesionSimulacionUpdateArgs} args - Arguments to update one SesionSimulacion.
     * @example
     * // Update one SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SesionSimulacionUpdateArgs>(args: SelectSubset<T, SesionSimulacionUpdateArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SesionSimulacions.
     * @param {SesionSimulacionDeleteManyArgs} args - Arguments to filter SesionSimulacions to delete.
     * @example
     * // Delete a few SesionSimulacions
     * const { count } = await prisma.sesionSimulacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SesionSimulacionDeleteManyArgs>(args?: SelectSubset<T, SesionSimulacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SesionSimulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SesionSimulacions
     * const sesionSimulacion = await prisma.sesionSimulacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SesionSimulacionUpdateManyArgs>(args: SelectSubset<T, SesionSimulacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SesionSimulacion.
     * @param {SesionSimulacionUpsertArgs} args - Arguments to update or create a SesionSimulacion.
     * @example
     * // Update or create a SesionSimulacion
     * const sesionSimulacion = await prisma.sesionSimulacion.upsert({
     *   create: {
     *     // ... data to create a SesionSimulacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SesionSimulacion we want to update
     *   }
     * })
     */
    upsert<T extends SesionSimulacionUpsertArgs>(args: SelectSubset<T, SesionSimulacionUpsertArgs<ExtArgs>>): Prisma__SesionSimulacionClient<$Result.GetResult<Prisma.$SesionSimulacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SesionSimulacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionCountArgs} args - Arguments to filter SesionSimulacions to count.
     * @example
     * // Count the number of SesionSimulacions
     * const count = await prisma.sesionSimulacion.count({
     *   where: {
     *     // ... the filter for the SesionSimulacions we want to count
     *   }
     * })
    **/
    count<T extends SesionSimulacionCountArgs>(
      args?: Subset<T, SesionSimulacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SesionSimulacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SesionSimulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SesionSimulacionAggregateArgs>(args: Subset<T, SesionSimulacionAggregateArgs>): Prisma.PrismaPromise<GetSesionSimulacionAggregateType<T>>

    /**
     * Group by SesionSimulacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SesionSimulacionGroupByArgs} args - Group by arguments.
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
      T extends SesionSimulacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SesionSimulacionGroupByArgs['orderBy'] }
        : { orderBy?: SesionSimulacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SesionSimulacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesionSimulacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SesionSimulacion model
   */
  readonly fields: SesionSimulacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SesionSimulacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SesionSimulacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    algoritmo<T extends AlgoritmoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlgoritmoDefaultArgs<ExtArgs>>): Prisma__AlgoritmoClient<$Result.GetResult<Prisma.$AlgoritmoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SesionSimulacion model
   */ 
  interface SesionSimulacionFieldRefs {
    readonly id: FieldRef<"SesionSimulacion", 'String'>
    readonly pasosCompletados: FieldRef<"SesionSimulacion", 'Int'>
    readonly totalPasos: FieldRef<"SesionSimulacion", 'Int'>
    readonly completada: FieldRef<"SesionSimulacion", 'Boolean'>
    readonly fechaInicio: FieldRef<"SesionSimulacion", 'DateTime'>
    readonly fechaFin: FieldRef<"SesionSimulacion", 'DateTime'>
    readonly usuarioId: FieldRef<"SesionSimulacion", 'String'>
    readonly algoritmoId: FieldRef<"SesionSimulacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SesionSimulacion findUnique
   */
  export type SesionSimulacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter, which SesionSimulacion to fetch.
     */
    where: SesionSimulacionWhereUniqueInput
  }

  /**
   * SesionSimulacion findUniqueOrThrow
   */
  export type SesionSimulacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter, which SesionSimulacion to fetch.
     */
    where: SesionSimulacionWhereUniqueInput
  }

  /**
   * SesionSimulacion findFirst
   */
  export type SesionSimulacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter, which SesionSimulacion to fetch.
     */
    where?: SesionSimulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SesionSimulacions to fetch.
     */
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SesionSimulacions.
     */
    cursor?: SesionSimulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SesionSimulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SesionSimulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SesionSimulacions.
     */
    distinct?: SesionSimulacionScalarFieldEnum | SesionSimulacionScalarFieldEnum[]
  }

  /**
   * SesionSimulacion findFirstOrThrow
   */
  export type SesionSimulacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter, which SesionSimulacion to fetch.
     */
    where?: SesionSimulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SesionSimulacions to fetch.
     */
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SesionSimulacions.
     */
    cursor?: SesionSimulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SesionSimulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SesionSimulacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SesionSimulacions.
     */
    distinct?: SesionSimulacionScalarFieldEnum | SesionSimulacionScalarFieldEnum[]
  }

  /**
   * SesionSimulacion findMany
   */
  export type SesionSimulacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter, which SesionSimulacions to fetch.
     */
    where?: SesionSimulacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SesionSimulacions to fetch.
     */
    orderBy?: SesionSimulacionOrderByWithRelationInput | SesionSimulacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SesionSimulacions.
     */
    cursor?: SesionSimulacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SesionSimulacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SesionSimulacions.
     */
    skip?: number
    distinct?: SesionSimulacionScalarFieldEnum | SesionSimulacionScalarFieldEnum[]
  }

  /**
   * SesionSimulacion create
   */
  export type SesionSimulacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * The data needed to create a SesionSimulacion.
     */
    data: XOR<SesionSimulacionCreateInput, SesionSimulacionUncheckedCreateInput>
  }

  /**
   * SesionSimulacion createMany
   */
  export type SesionSimulacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SesionSimulacions.
     */
    data: SesionSimulacionCreateManyInput | SesionSimulacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SesionSimulacion createManyAndReturn
   */
  export type SesionSimulacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SesionSimulacions.
     */
    data: SesionSimulacionCreateManyInput | SesionSimulacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SesionSimulacion update
   */
  export type SesionSimulacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * The data needed to update a SesionSimulacion.
     */
    data: XOR<SesionSimulacionUpdateInput, SesionSimulacionUncheckedUpdateInput>
    /**
     * Choose, which SesionSimulacion to update.
     */
    where: SesionSimulacionWhereUniqueInput
  }

  /**
   * SesionSimulacion updateMany
   */
  export type SesionSimulacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SesionSimulacions.
     */
    data: XOR<SesionSimulacionUpdateManyMutationInput, SesionSimulacionUncheckedUpdateManyInput>
    /**
     * Filter which SesionSimulacions to update
     */
    where?: SesionSimulacionWhereInput
  }

  /**
   * SesionSimulacion upsert
   */
  export type SesionSimulacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * The filter to search for the SesionSimulacion to update in case it exists.
     */
    where: SesionSimulacionWhereUniqueInput
    /**
     * In case the SesionSimulacion found by the `where` argument doesn't exist, create a new SesionSimulacion with this data.
     */
    create: XOR<SesionSimulacionCreateInput, SesionSimulacionUncheckedCreateInput>
    /**
     * In case the SesionSimulacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SesionSimulacionUpdateInput, SesionSimulacionUncheckedUpdateInput>
  }

  /**
   * SesionSimulacion delete
   */
  export type SesionSimulacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
    /**
     * Filter which SesionSimulacion to delete.
     */
    where: SesionSimulacionWhereUniqueInput
  }

  /**
   * SesionSimulacion deleteMany
   */
  export type SesionSimulacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SesionSimulacions to delete
     */
    where?: SesionSimulacionWhereInput
  }

  /**
   * SesionSimulacion without action
   */
  export type SesionSimulacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SesionSimulacion
     */
    select?: SesionSimulacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SesionSimulacionInclude<ExtArgs> | null
  }


  /**
   * Model RespuestaEjercicio
   */

  export type AggregateRespuestaEjercicio = {
    _count: RespuestaEjercicioCountAggregateOutputType | null
    _avg: RespuestaEjercicioAvgAggregateOutputType | null
    _sum: RespuestaEjercicioSumAggregateOutputType | null
    _min: RespuestaEjercicioMinAggregateOutputType | null
    _max: RespuestaEjercicioMaxAggregateOutputType | null
  }

  export type RespuestaEjercicioAvgAggregateOutputType = {
    puntosGanados: number | null
  }

  export type RespuestaEjercicioSumAggregateOutputType = {
    puntosGanados: number | null
  }

  export type RespuestaEjercicioMinAggregateOutputType = {
    id: string | null
    respuesta: string | null
    correcto: boolean | null
    puntosGanados: number | null
    fechaRespuesta: Date | null
    usuarioId: string | null
    ejercicioId: string | null
  }

  export type RespuestaEjercicioMaxAggregateOutputType = {
    id: string | null
    respuesta: string | null
    correcto: boolean | null
    puntosGanados: number | null
    fechaRespuesta: Date | null
    usuarioId: string | null
    ejercicioId: string | null
  }

  export type RespuestaEjercicioCountAggregateOutputType = {
    id: number
    respuesta: number
    correcto: number
    puntosGanados: number
    fechaRespuesta: number
    usuarioId: number
    ejercicioId: number
    _all: number
  }


  export type RespuestaEjercicioAvgAggregateInputType = {
    puntosGanados?: true
  }

  export type RespuestaEjercicioSumAggregateInputType = {
    puntosGanados?: true
  }

  export type RespuestaEjercicioMinAggregateInputType = {
    id?: true
    respuesta?: true
    correcto?: true
    puntosGanados?: true
    fechaRespuesta?: true
    usuarioId?: true
    ejercicioId?: true
  }

  export type RespuestaEjercicioMaxAggregateInputType = {
    id?: true
    respuesta?: true
    correcto?: true
    puntosGanados?: true
    fechaRespuesta?: true
    usuarioId?: true
    ejercicioId?: true
  }

  export type RespuestaEjercicioCountAggregateInputType = {
    id?: true
    respuesta?: true
    correcto?: true
    puntosGanados?: true
    fechaRespuesta?: true
    usuarioId?: true
    ejercicioId?: true
    _all?: true
  }

  export type RespuestaEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespuestaEjercicio to aggregate.
     */
    where?: RespuestaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespuestaEjercicios to fetch.
     */
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespuestaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespuestaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespuestaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RespuestaEjercicios
    **/
    _count?: true | RespuestaEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespuestaEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespuestaEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespuestaEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespuestaEjercicioMaxAggregateInputType
  }

  export type GetRespuestaEjercicioAggregateType<T extends RespuestaEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRespuestaEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespuestaEjercicio[P]>
      : GetScalarType<T[P], AggregateRespuestaEjercicio[P]>
  }




  export type RespuestaEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaEjercicioWhereInput
    orderBy?: RespuestaEjercicioOrderByWithAggregationInput | RespuestaEjercicioOrderByWithAggregationInput[]
    by: RespuestaEjercicioScalarFieldEnum[] | RespuestaEjercicioScalarFieldEnum
    having?: RespuestaEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespuestaEjercicioCountAggregateInputType | true
    _avg?: RespuestaEjercicioAvgAggregateInputType
    _sum?: RespuestaEjercicioSumAggregateInputType
    _min?: RespuestaEjercicioMinAggregateInputType
    _max?: RespuestaEjercicioMaxAggregateInputType
  }

  export type RespuestaEjercicioGroupByOutputType = {
    id: string
    respuesta: string
    correcto: boolean
    puntosGanados: number
    fechaRespuesta: Date
    usuarioId: string
    ejercicioId: string
    _count: RespuestaEjercicioCountAggregateOutputType | null
    _avg: RespuestaEjercicioAvgAggregateOutputType | null
    _sum: RespuestaEjercicioSumAggregateOutputType | null
    _min: RespuestaEjercicioMinAggregateOutputType | null
    _max: RespuestaEjercicioMaxAggregateOutputType | null
  }

  type GetRespuestaEjercicioGroupByPayload<T extends RespuestaEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespuestaEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespuestaEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespuestaEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], RespuestaEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type RespuestaEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    respuesta?: boolean
    correcto?: boolean
    puntosGanados?: boolean
    fechaRespuesta?: boolean
    usuarioId?: boolean
    ejercicioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioPrediccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuestaEjercicio"]>

  export type RespuestaEjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    respuesta?: boolean
    correcto?: boolean
    puntosGanados?: boolean
    fechaRespuesta?: boolean
    usuarioId?: boolean
    ejercicioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioPrediccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuestaEjercicio"]>

  export type RespuestaEjercicioSelectScalar = {
    id?: boolean
    respuesta?: boolean
    correcto?: boolean
    puntosGanados?: boolean
    fechaRespuesta?: boolean
    usuarioId?: boolean
    ejercicioId?: boolean
  }

  export type RespuestaEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioPrediccionDefaultArgs<ExtArgs>
  }
  export type RespuestaEjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioPrediccionDefaultArgs<ExtArgs>
  }

  export type $RespuestaEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RespuestaEjercicio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPrediccionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      respuesta: string
      correcto: boolean
      puntosGanados: number
      fechaRespuesta: Date
      usuarioId: string
      ejercicioId: string
    }, ExtArgs["result"]["respuestaEjercicio"]>
    composites: {}
  }

  type RespuestaEjercicioGetPayload<S extends boolean | null | undefined | RespuestaEjercicioDefaultArgs> = $Result.GetResult<Prisma.$RespuestaEjercicioPayload, S>

  type RespuestaEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RespuestaEjercicioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RespuestaEjercicioCountAggregateInputType | true
    }

  export interface RespuestaEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RespuestaEjercicio'], meta: { name: 'RespuestaEjercicio' } }
    /**
     * Find zero or one RespuestaEjercicio that matches the filter.
     * @param {RespuestaEjercicioFindUniqueArgs} args - Arguments to find a RespuestaEjercicio
     * @example
     * // Get one RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespuestaEjercicioFindUniqueArgs>(args: SelectSubset<T, RespuestaEjercicioFindUniqueArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RespuestaEjercicio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RespuestaEjercicioFindUniqueOrThrowArgs} args - Arguments to find a RespuestaEjercicio
     * @example
     * // Get one RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespuestaEjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, RespuestaEjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RespuestaEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioFindFirstArgs} args - Arguments to find a RespuestaEjercicio
     * @example
     * // Get one RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespuestaEjercicioFindFirstArgs>(args?: SelectSubset<T, RespuestaEjercicioFindFirstArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RespuestaEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioFindFirstOrThrowArgs} args - Arguments to find a RespuestaEjercicio
     * @example
     * // Get one RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespuestaEjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, RespuestaEjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RespuestaEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RespuestaEjercicios
     * const respuestaEjercicios = await prisma.respuestaEjercicio.findMany()
     * 
     * // Get first 10 RespuestaEjercicios
     * const respuestaEjercicios = await prisma.respuestaEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respuestaEjercicioWithIdOnly = await prisma.respuestaEjercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespuestaEjercicioFindManyArgs>(args?: SelectSubset<T, RespuestaEjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RespuestaEjercicio.
     * @param {RespuestaEjercicioCreateArgs} args - Arguments to create a RespuestaEjercicio.
     * @example
     * // Create one RespuestaEjercicio
     * const RespuestaEjercicio = await prisma.respuestaEjercicio.create({
     *   data: {
     *     // ... data to create a RespuestaEjercicio
     *   }
     * })
     * 
     */
    create<T extends RespuestaEjercicioCreateArgs>(args: SelectSubset<T, RespuestaEjercicioCreateArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RespuestaEjercicios.
     * @param {RespuestaEjercicioCreateManyArgs} args - Arguments to create many RespuestaEjercicios.
     * @example
     * // Create many RespuestaEjercicios
     * const respuestaEjercicio = await prisma.respuestaEjercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespuestaEjercicioCreateManyArgs>(args?: SelectSubset<T, RespuestaEjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RespuestaEjercicios and returns the data saved in the database.
     * @param {RespuestaEjercicioCreateManyAndReturnArgs} args - Arguments to create many RespuestaEjercicios.
     * @example
     * // Create many RespuestaEjercicios
     * const respuestaEjercicio = await prisma.respuestaEjercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RespuestaEjercicios and only return the `id`
     * const respuestaEjercicioWithIdOnly = await prisma.respuestaEjercicio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespuestaEjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, RespuestaEjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RespuestaEjercicio.
     * @param {RespuestaEjercicioDeleteArgs} args - Arguments to delete one RespuestaEjercicio.
     * @example
     * // Delete one RespuestaEjercicio
     * const RespuestaEjercicio = await prisma.respuestaEjercicio.delete({
     *   where: {
     *     // ... filter to delete one RespuestaEjercicio
     *   }
     * })
     * 
     */
    delete<T extends RespuestaEjercicioDeleteArgs>(args: SelectSubset<T, RespuestaEjercicioDeleteArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RespuestaEjercicio.
     * @param {RespuestaEjercicioUpdateArgs} args - Arguments to update one RespuestaEjercicio.
     * @example
     * // Update one RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespuestaEjercicioUpdateArgs>(args: SelectSubset<T, RespuestaEjercicioUpdateArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RespuestaEjercicios.
     * @param {RespuestaEjercicioDeleteManyArgs} args - Arguments to filter RespuestaEjercicios to delete.
     * @example
     * // Delete a few RespuestaEjercicios
     * const { count } = await prisma.respuestaEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespuestaEjercicioDeleteManyArgs>(args?: SelectSubset<T, RespuestaEjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RespuestaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RespuestaEjercicios
     * const respuestaEjercicio = await prisma.respuestaEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespuestaEjercicioUpdateManyArgs>(args: SelectSubset<T, RespuestaEjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RespuestaEjercicio.
     * @param {RespuestaEjercicioUpsertArgs} args - Arguments to update or create a RespuestaEjercicio.
     * @example
     * // Update or create a RespuestaEjercicio
     * const respuestaEjercicio = await prisma.respuestaEjercicio.upsert({
     *   create: {
     *     // ... data to create a RespuestaEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RespuestaEjercicio we want to update
     *   }
     * })
     */
    upsert<T extends RespuestaEjercicioUpsertArgs>(args: SelectSubset<T, RespuestaEjercicioUpsertArgs<ExtArgs>>): Prisma__RespuestaEjercicioClient<$Result.GetResult<Prisma.$RespuestaEjercicioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RespuestaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioCountArgs} args - Arguments to filter RespuestaEjercicios to count.
     * @example
     * // Count the number of RespuestaEjercicios
     * const count = await prisma.respuestaEjercicio.count({
     *   where: {
     *     // ... the filter for the RespuestaEjercicios we want to count
     *   }
     * })
    **/
    count<T extends RespuestaEjercicioCountArgs>(
      args?: Subset<T, RespuestaEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespuestaEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RespuestaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespuestaEjercicioAggregateArgs>(args: Subset<T, RespuestaEjercicioAggregateArgs>): Prisma.PrismaPromise<GetRespuestaEjercicioAggregateType<T>>

    /**
     * Group by RespuestaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaEjercicioGroupByArgs} args - Group by arguments.
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
      T extends RespuestaEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespuestaEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: RespuestaEjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespuestaEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespuestaEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RespuestaEjercicio model
   */
  readonly fields: RespuestaEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RespuestaEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespuestaEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ejercicio<T extends EjercicioPrediccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioPrediccionDefaultArgs<ExtArgs>>): Prisma__EjercicioPrediccionClient<$Result.GetResult<Prisma.$EjercicioPrediccionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RespuestaEjercicio model
   */ 
  interface RespuestaEjercicioFieldRefs {
    readonly id: FieldRef<"RespuestaEjercicio", 'String'>
    readonly respuesta: FieldRef<"RespuestaEjercicio", 'String'>
    readonly correcto: FieldRef<"RespuestaEjercicio", 'Boolean'>
    readonly puntosGanados: FieldRef<"RespuestaEjercicio", 'Int'>
    readonly fechaRespuesta: FieldRef<"RespuestaEjercicio", 'DateTime'>
    readonly usuarioId: FieldRef<"RespuestaEjercicio", 'String'>
    readonly ejercicioId: FieldRef<"RespuestaEjercicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RespuestaEjercicio findUnique
   */
  export type RespuestaEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RespuestaEjercicio to fetch.
     */
    where: RespuestaEjercicioWhereUniqueInput
  }

  /**
   * RespuestaEjercicio findUniqueOrThrow
   */
  export type RespuestaEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RespuestaEjercicio to fetch.
     */
    where: RespuestaEjercicioWhereUniqueInput
  }

  /**
   * RespuestaEjercicio findFirst
   */
  export type RespuestaEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RespuestaEjercicio to fetch.
     */
    where?: RespuestaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespuestaEjercicios to fetch.
     */
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespuestaEjercicios.
     */
    cursor?: RespuestaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespuestaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespuestaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespuestaEjercicios.
     */
    distinct?: RespuestaEjercicioScalarFieldEnum | RespuestaEjercicioScalarFieldEnum[]
  }

  /**
   * RespuestaEjercicio findFirstOrThrow
   */
  export type RespuestaEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RespuestaEjercicio to fetch.
     */
    where?: RespuestaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespuestaEjercicios to fetch.
     */
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RespuestaEjercicios.
     */
    cursor?: RespuestaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespuestaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespuestaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RespuestaEjercicios.
     */
    distinct?: RespuestaEjercicioScalarFieldEnum | RespuestaEjercicioScalarFieldEnum[]
  }

  /**
   * RespuestaEjercicio findMany
   */
  export type RespuestaEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RespuestaEjercicios to fetch.
     */
    where?: RespuestaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RespuestaEjercicios to fetch.
     */
    orderBy?: RespuestaEjercicioOrderByWithRelationInput | RespuestaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RespuestaEjercicios.
     */
    cursor?: RespuestaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RespuestaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RespuestaEjercicios.
     */
    skip?: number
    distinct?: RespuestaEjercicioScalarFieldEnum | RespuestaEjercicioScalarFieldEnum[]
  }

  /**
   * RespuestaEjercicio create
   */
  export type RespuestaEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a RespuestaEjercicio.
     */
    data: XOR<RespuestaEjercicioCreateInput, RespuestaEjercicioUncheckedCreateInput>
  }

  /**
   * RespuestaEjercicio createMany
   */
  export type RespuestaEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RespuestaEjercicios.
     */
    data: RespuestaEjercicioCreateManyInput | RespuestaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RespuestaEjercicio createManyAndReturn
   */
  export type RespuestaEjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RespuestaEjercicios.
     */
    data: RespuestaEjercicioCreateManyInput | RespuestaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RespuestaEjercicio update
   */
  export type RespuestaEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a RespuestaEjercicio.
     */
    data: XOR<RespuestaEjercicioUpdateInput, RespuestaEjercicioUncheckedUpdateInput>
    /**
     * Choose, which RespuestaEjercicio to update.
     */
    where: RespuestaEjercicioWhereUniqueInput
  }

  /**
   * RespuestaEjercicio updateMany
   */
  export type RespuestaEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RespuestaEjercicios.
     */
    data: XOR<RespuestaEjercicioUpdateManyMutationInput, RespuestaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RespuestaEjercicios to update
     */
    where?: RespuestaEjercicioWhereInput
  }

  /**
   * RespuestaEjercicio upsert
   */
  export type RespuestaEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the RespuestaEjercicio to update in case it exists.
     */
    where: RespuestaEjercicioWhereUniqueInput
    /**
     * In case the RespuestaEjercicio found by the `where` argument doesn't exist, create a new RespuestaEjercicio with this data.
     */
    create: XOR<RespuestaEjercicioCreateInput, RespuestaEjercicioUncheckedCreateInput>
    /**
     * In case the RespuestaEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespuestaEjercicioUpdateInput, RespuestaEjercicioUncheckedUpdateInput>
  }

  /**
   * RespuestaEjercicio delete
   */
  export type RespuestaEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
    /**
     * Filter which RespuestaEjercicio to delete.
     */
    where: RespuestaEjercicioWhereUniqueInput
  }

  /**
   * RespuestaEjercicio deleteMany
   */
  export type RespuestaEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RespuestaEjercicios to delete
     */
    where?: RespuestaEjercicioWhereInput
  }

  /**
   * RespuestaEjercicio without action
   */
  export type RespuestaEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RespuestaEjercicio
     */
    select?: RespuestaEjercicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaEjercicioInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    rol: 'rol',
    contrasena: 'contrasena',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    contrasena: 'contrasena',
    credencialesAdmin: 'credencialesAdmin',
    ultimoAcceso: 'ultimoAcceso',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const AlgoritmoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    complejidadTiempo: 'complejidadTiempo',
    complejidadEspacio: 'complejidadEspacio',
    categoria: 'categoria',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlgoritmoScalarFieldEnum = (typeof AlgoritmoScalarFieldEnum)[keyof typeof AlgoritmoScalarFieldEnum]


  export const EjercicioPrediccionScalarFieldEnum: {
    id: 'id',
    pregunta: 'pregunta',
    respuestaCorrecta: 'respuestaCorrecta',
    dificultad: 'dificultad',
    feedbackPositivo: 'feedbackPositivo',
    feedbackNegativo: 'feedbackNegativo',
    createdAt: 'createdAt',
    algoritmoId: 'algoritmoId'
  };

  export type EjercicioPrediccionScalarFieldEnum = (typeof EjercicioPrediccionScalarFieldEnum)[keyof typeof EjercicioPrediccionScalarFieldEnum]


  export const ProgresoUsuarioScalarFieldEnum: {
    id: 'id',
    puntosTotales: 'puntosTotales',
    nivelActual: 'nivelActual',
    rachaDias: 'rachaDias',
    posicionRanking: 'posicionRanking',
    ultimaActividad: 'ultimaActividad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type ProgresoUsuarioScalarFieldEnum = (typeof ProgresoUsuarioScalarFieldEnum)[keyof typeof ProgresoUsuarioScalarFieldEnum]


  export const InsigniaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen: 'imagen',
    criterioDesbloqueo: 'criterioDesbloqueo',
    createdAt: 'createdAt'
  };

  export type InsigniaScalarFieldEnum = (typeof InsigniaScalarFieldEnum)[keyof typeof InsigniaScalarFieldEnum]


  export const ProgresoInsigniaScalarFieldEnum: {
    id: 'id',
    fechaObtencion: 'fechaObtencion',
    progresoId: 'progresoId',
    insigniaId: 'insigniaId'
  };

  export type ProgresoInsigniaScalarFieldEnum = (typeof ProgresoInsigniaScalarFieldEnum)[keyof typeof ProgresoInsigniaScalarFieldEnum]


  export const SesionSimulacionScalarFieldEnum: {
    id: 'id',
    pasosCompletados: 'pasosCompletados',
    totalPasos: 'totalPasos',
    completada: 'completada',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    usuarioId: 'usuarioId',
    algoritmoId: 'algoritmoId'
  };

  export type SesionSimulacionScalarFieldEnum = (typeof SesionSimulacionScalarFieldEnum)[keyof typeof SesionSimulacionScalarFieldEnum]


  export const RespuestaEjercicioScalarFieldEnum: {
    id: 'id',
    respuesta: 'respuesta',
    correcto: 'correcto',
    puntosGanados: 'puntosGanados',
    fechaRespuesta: 'fechaRespuesta',
    usuarioId: 'usuarioId',
    ejercicioId: 'ejercicioId'
  };

  export type RespuestaEjercicioScalarFieldEnum = (typeof RespuestaEjercicioScalarFieldEnum)[keyof typeof RespuestaEjercicioScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CategoriaAlgoritmo'
   */
  export type EnumCategoriaAlgoritmoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaAlgoritmo'>
    


  /**
   * Reference to a field of type 'CategoriaAlgoritmo[]'
   */
  export type ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaAlgoritmo[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DificultadEjercicio'
   */
  export type EnumDificultadEjercicioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DificultadEjercicio'>
    


  /**
   * Reference to a field of type 'DificultadEjercicio[]'
   */
  export type ListEnumDificultadEjercicioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DificultadEjercicio[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    contrasena?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    progreso?: XOR<ProgresoUsuarioNullableRelationFilter, ProgresoUsuarioWhereInput> | null
    sesiones?: SesionSimulacionListRelationFilter
    respuestas?: RespuestaEjercicioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    progreso?: ProgresoUsuarioOrderByWithRelationInput
    sesiones?: SesionSimulacionOrderByRelationAggregateInput
    respuestas?: RespuestaEjercicioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    contrasena?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    progreso?: XOR<ProgresoUsuarioNullableRelationFilter, ProgresoUsuarioWhereInput> | null
    sesiones?: SesionSimulacionListRelationFilter
    respuestas?: RespuestaEjercicioListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: StringFilter<"Administrador"> | string
    nombre?: StringFilter<"Administrador"> | string
    correo?: StringFilter<"Administrador"> | string
    contrasena?: StringFilter<"Administrador"> | string
    credencialesAdmin?: StringFilter<"Administrador"> | string
    ultimoAcceso?: DateTimeFilter<"Administrador"> | Date | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    credencialesAdmin?: SortOrder
    ultimoAcceso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correo?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nombre?: StringFilter<"Administrador"> | string
    contrasena?: StringFilter<"Administrador"> | string
    credencialesAdmin?: StringFilter<"Administrador"> | string
    ultimoAcceso?: DateTimeFilter<"Administrador"> | Date | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeFilter<"Administrador"> | Date | string
  }, "id" | "correo">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    credencialesAdmin?: SortOrder
    ultimoAcceso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrador"> | string
    nombre?: StringWithAggregatesFilter<"Administrador"> | string
    correo?: StringWithAggregatesFilter<"Administrador"> | string
    contrasena?: StringWithAggregatesFilter<"Administrador"> | string
    credencialesAdmin?: StringWithAggregatesFilter<"Administrador"> | string
    ultimoAcceso?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
  }

  export type AlgoritmoWhereInput = {
    AND?: AlgoritmoWhereInput | AlgoritmoWhereInput[]
    OR?: AlgoritmoWhereInput[]
    NOT?: AlgoritmoWhereInput | AlgoritmoWhereInput[]
    id?: StringFilter<"Algoritmo"> | string
    nombre?: StringFilter<"Algoritmo"> | string
    descripcion?: StringFilter<"Algoritmo"> | string
    complejidadTiempo?: StringFilter<"Algoritmo"> | string
    complejidadEspacio?: StringFilter<"Algoritmo"> | string
    categoria?: EnumCategoriaAlgoritmoFilter<"Algoritmo"> | $Enums.CategoriaAlgoritmo
    activo?: BoolFilter<"Algoritmo"> | boolean
    createdAt?: DateTimeFilter<"Algoritmo"> | Date | string
    updatedAt?: DateTimeFilter<"Algoritmo"> | Date | string
    ejercicios?: EjercicioPrediccionListRelationFilter
    sesiones?: SesionSimulacionListRelationFilter
  }

  export type AlgoritmoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    complejidadTiempo?: SortOrder
    complejidadEspacio?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ejercicios?: EjercicioPrediccionOrderByRelationAggregateInput
    sesiones?: SesionSimulacionOrderByRelationAggregateInput
  }

  export type AlgoritmoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: AlgoritmoWhereInput | AlgoritmoWhereInput[]
    OR?: AlgoritmoWhereInput[]
    NOT?: AlgoritmoWhereInput | AlgoritmoWhereInput[]
    descripcion?: StringFilter<"Algoritmo"> | string
    complejidadTiempo?: StringFilter<"Algoritmo"> | string
    complejidadEspacio?: StringFilter<"Algoritmo"> | string
    categoria?: EnumCategoriaAlgoritmoFilter<"Algoritmo"> | $Enums.CategoriaAlgoritmo
    activo?: BoolFilter<"Algoritmo"> | boolean
    createdAt?: DateTimeFilter<"Algoritmo"> | Date | string
    updatedAt?: DateTimeFilter<"Algoritmo"> | Date | string
    ejercicios?: EjercicioPrediccionListRelationFilter
    sesiones?: SesionSimulacionListRelationFilter
  }, "id" | "nombre">

  export type AlgoritmoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    complejidadTiempo?: SortOrder
    complejidadEspacio?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlgoritmoCountOrderByAggregateInput
    _max?: AlgoritmoMaxOrderByAggregateInput
    _min?: AlgoritmoMinOrderByAggregateInput
  }

  export type AlgoritmoScalarWhereWithAggregatesInput = {
    AND?: AlgoritmoScalarWhereWithAggregatesInput | AlgoritmoScalarWhereWithAggregatesInput[]
    OR?: AlgoritmoScalarWhereWithAggregatesInput[]
    NOT?: AlgoritmoScalarWhereWithAggregatesInput | AlgoritmoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Algoritmo"> | string
    nombre?: StringWithAggregatesFilter<"Algoritmo"> | string
    descripcion?: StringWithAggregatesFilter<"Algoritmo"> | string
    complejidadTiempo?: StringWithAggregatesFilter<"Algoritmo"> | string
    complejidadEspacio?: StringWithAggregatesFilter<"Algoritmo"> | string
    categoria?: EnumCategoriaAlgoritmoWithAggregatesFilter<"Algoritmo"> | $Enums.CategoriaAlgoritmo
    activo?: BoolWithAggregatesFilter<"Algoritmo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Algoritmo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Algoritmo"> | Date | string
  }

  export type EjercicioPrediccionWhereInput = {
    AND?: EjercicioPrediccionWhereInput | EjercicioPrediccionWhereInput[]
    OR?: EjercicioPrediccionWhereInput[]
    NOT?: EjercicioPrediccionWhereInput | EjercicioPrediccionWhereInput[]
    id?: StringFilter<"EjercicioPrediccion"> | string
    pregunta?: StringFilter<"EjercicioPrediccion"> | string
    respuestaCorrecta?: StringFilter<"EjercicioPrediccion"> | string
    dificultad?: EnumDificultadEjercicioFilter<"EjercicioPrediccion"> | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFilter<"EjercicioPrediccion"> | string
    feedbackNegativo?: StringFilter<"EjercicioPrediccion"> | string
    createdAt?: DateTimeFilter<"EjercicioPrediccion"> | Date | string
    algoritmoId?: StringFilter<"EjercicioPrediccion"> | string
    algoritmo?: XOR<AlgoritmoRelationFilter, AlgoritmoWhereInput>
    respuestas?: RespuestaEjercicioListRelationFilter
  }

  export type EjercicioPrediccionOrderByWithRelationInput = {
    id?: SortOrder
    pregunta?: SortOrder
    respuestaCorrecta?: SortOrder
    dificultad?: SortOrder
    feedbackPositivo?: SortOrder
    feedbackNegativo?: SortOrder
    createdAt?: SortOrder
    algoritmoId?: SortOrder
    algoritmo?: AlgoritmoOrderByWithRelationInput
    respuestas?: RespuestaEjercicioOrderByRelationAggregateInput
  }

  export type EjercicioPrediccionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EjercicioPrediccionWhereInput | EjercicioPrediccionWhereInput[]
    OR?: EjercicioPrediccionWhereInput[]
    NOT?: EjercicioPrediccionWhereInput | EjercicioPrediccionWhereInput[]
    pregunta?: StringFilter<"EjercicioPrediccion"> | string
    respuestaCorrecta?: StringFilter<"EjercicioPrediccion"> | string
    dificultad?: EnumDificultadEjercicioFilter<"EjercicioPrediccion"> | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFilter<"EjercicioPrediccion"> | string
    feedbackNegativo?: StringFilter<"EjercicioPrediccion"> | string
    createdAt?: DateTimeFilter<"EjercicioPrediccion"> | Date | string
    algoritmoId?: StringFilter<"EjercicioPrediccion"> | string
    algoritmo?: XOR<AlgoritmoRelationFilter, AlgoritmoWhereInput>
    respuestas?: RespuestaEjercicioListRelationFilter
  }, "id">

  export type EjercicioPrediccionOrderByWithAggregationInput = {
    id?: SortOrder
    pregunta?: SortOrder
    respuestaCorrecta?: SortOrder
    dificultad?: SortOrder
    feedbackPositivo?: SortOrder
    feedbackNegativo?: SortOrder
    createdAt?: SortOrder
    algoritmoId?: SortOrder
    _count?: EjercicioPrediccionCountOrderByAggregateInput
    _max?: EjercicioPrediccionMaxOrderByAggregateInput
    _min?: EjercicioPrediccionMinOrderByAggregateInput
  }

  export type EjercicioPrediccionScalarWhereWithAggregatesInput = {
    AND?: EjercicioPrediccionScalarWhereWithAggregatesInput | EjercicioPrediccionScalarWhereWithAggregatesInput[]
    OR?: EjercicioPrediccionScalarWhereWithAggregatesInput[]
    NOT?: EjercicioPrediccionScalarWhereWithAggregatesInput | EjercicioPrediccionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
    pregunta?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
    respuestaCorrecta?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
    dificultad?: EnumDificultadEjercicioWithAggregatesFilter<"EjercicioPrediccion"> | $Enums.DificultadEjercicio
    feedbackPositivo?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
    feedbackNegativo?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EjercicioPrediccion"> | Date | string
    algoritmoId?: StringWithAggregatesFilter<"EjercicioPrediccion"> | string
  }

  export type ProgresoUsuarioWhereInput = {
    AND?: ProgresoUsuarioWhereInput | ProgresoUsuarioWhereInput[]
    OR?: ProgresoUsuarioWhereInput[]
    NOT?: ProgresoUsuarioWhereInput | ProgresoUsuarioWhereInput[]
    id?: StringFilter<"ProgresoUsuario"> | string
    puntosTotales?: IntFilter<"ProgresoUsuario"> | number
    nivelActual?: IntFilter<"ProgresoUsuario"> | number
    rachaDias?: IntFilter<"ProgresoUsuario"> | number
    posicionRanking?: IntFilter<"ProgresoUsuario"> | number
    ultimaActividad?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    createdAt?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    usuarioId?: StringFilter<"ProgresoUsuario"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    insignias?: ProgresoInsigniaListRelationFilter
  }

  export type ProgresoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
    ultimaActividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    insignias?: ProgresoInsigniaOrderByRelationAggregateInput
  }

  export type ProgresoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: ProgresoUsuarioWhereInput | ProgresoUsuarioWhereInput[]
    OR?: ProgresoUsuarioWhereInput[]
    NOT?: ProgresoUsuarioWhereInput | ProgresoUsuarioWhereInput[]
    puntosTotales?: IntFilter<"ProgresoUsuario"> | number
    nivelActual?: IntFilter<"ProgresoUsuario"> | number
    rachaDias?: IntFilter<"ProgresoUsuario"> | number
    posicionRanking?: IntFilter<"ProgresoUsuario"> | number
    ultimaActividad?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    createdAt?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"ProgresoUsuario"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    insignias?: ProgresoInsigniaListRelationFilter
  }, "id" | "usuarioId">

  export type ProgresoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
    ultimaActividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: ProgresoUsuarioCountOrderByAggregateInput
    _avg?: ProgresoUsuarioAvgOrderByAggregateInput
    _max?: ProgresoUsuarioMaxOrderByAggregateInput
    _min?: ProgresoUsuarioMinOrderByAggregateInput
    _sum?: ProgresoUsuarioSumOrderByAggregateInput
  }

  export type ProgresoUsuarioScalarWhereWithAggregatesInput = {
    AND?: ProgresoUsuarioScalarWhereWithAggregatesInput | ProgresoUsuarioScalarWhereWithAggregatesInput[]
    OR?: ProgresoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ProgresoUsuarioScalarWhereWithAggregatesInput | ProgresoUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgresoUsuario"> | string
    puntosTotales?: IntWithAggregatesFilter<"ProgresoUsuario"> | number
    nivelActual?: IntWithAggregatesFilter<"ProgresoUsuario"> | number
    rachaDias?: IntWithAggregatesFilter<"ProgresoUsuario"> | number
    posicionRanking?: IntWithAggregatesFilter<"ProgresoUsuario"> | number
    ultimaActividad?: DateTimeWithAggregatesFilter<"ProgresoUsuario"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ProgresoUsuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgresoUsuario"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"ProgresoUsuario"> | string
  }

  export type InsigniaWhereInput = {
    AND?: InsigniaWhereInput | InsigniaWhereInput[]
    OR?: InsigniaWhereInput[]
    NOT?: InsigniaWhereInput | InsigniaWhereInput[]
    id?: StringFilter<"Insignia"> | string
    nombre?: StringFilter<"Insignia"> | string
    descripcion?: StringFilter<"Insignia"> | string
    imagen?: StringFilter<"Insignia"> | string
    criterioDesbloqueo?: StringFilter<"Insignia"> | string
    createdAt?: DateTimeFilter<"Insignia"> | Date | string
    progresosOtorgados?: ProgresoInsigniaListRelationFilter
  }

  export type InsigniaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    criterioDesbloqueo?: SortOrder
    createdAt?: SortOrder
    progresosOtorgados?: ProgresoInsigniaOrderByRelationAggregateInput
  }

  export type InsigniaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: InsigniaWhereInput | InsigniaWhereInput[]
    OR?: InsigniaWhereInput[]
    NOT?: InsigniaWhereInput | InsigniaWhereInput[]
    descripcion?: StringFilter<"Insignia"> | string
    imagen?: StringFilter<"Insignia"> | string
    criterioDesbloqueo?: StringFilter<"Insignia"> | string
    createdAt?: DateTimeFilter<"Insignia"> | Date | string
    progresosOtorgados?: ProgresoInsigniaListRelationFilter
  }, "id" | "nombre">

  export type InsigniaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    criterioDesbloqueo?: SortOrder
    createdAt?: SortOrder
    _count?: InsigniaCountOrderByAggregateInput
    _max?: InsigniaMaxOrderByAggregateInput
    _min?: InsigniaMinOrderByAggregateInput
  }

  export type InsigniaScalarWhereWithAggregatesInput = {
    AND?: InsigniaScalarWhereWithAggregatesInput | InsigniaScalarWhereWithAggregatesInput[]
    OR?: InsigniaScalarWhereWithAggregatesInput[]
    NOT?: InsigniaScalarWhereWithAggregatesInput | InsigniaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insignia"> | string
    nombre?: StringWithAggregatesFilter<"Insignia"> | string
    descripcion?: StringWithAggregatesFilter<"Insignia"> | string
    imagen?: StringWithAggregatesFilter<"Insignia"> | string
    criterioDesbloqueo?: StringWithAggregatesFilter<"Insignia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Insignia"> | Date | string
  }

  export type ProgresoInsigniaWhereInput = {
    AND?: ProgresoInsigniaWhereInput | ProgresoInsigniaWhereInput[]
    OR?: ProgresoInsigniaWhereInput[]
    NOT?: ProgresoInsigniaWhereInput | ProgresoInsigniaWhereInput[]
    id?: StringFilter<"ProgresoInsignia"> | string
    fechaObtencion?: DateTimeFilter<"ProgresoInsignia"> | Date | string
    progresoId?: StringFilter<"ProgresoInsignia"> | string
    insigniaId?: StringFilter<"ProgresoInsignia"> | string
    progreso?: XOR<ProgresoUsuarioRelationFilter, ProgresoUsuarioWhereInput>
    insignia?: XOR<InsigniaRelationFilter, InsigniaWhereInput>
  }

  export type ProgresoInsigniaOrderByWithRelationInput = {
    id?: SortOrder
    fechaObtencion?: SortOrder
    progresoId?: SortOrder
    insigniaId?: SortOrder
    progreso?: ProgresoUsuarioOrderByWithRelationInput
    insignia?: InsigniaOrderByWithRelationInput
  }

  export type ProgresoInsigniaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    progresoId_insigniaId?: ProgresoInsigniaProgresoIdInsigniaIdCompoundUniqueInput
    AND?: ProgresoInsigniaWhereInput | ProgresoInsigniaWhereInput[]
    OR?: ProgresoInsigniaWhereInput[]
    NOT?: ProgresoInsigniaWhereInput | ProgresoInsigniaWhereInput[]
    fechaObtencion?: DateTimeFilter<"ProgresoInsignia"> | Date | string
    progresoId?: StringFilter<"ProgresoInsignia"> | string
    insigniaId?: StringFilter<"ProgresoInsignia"> | string
    progreso?: XOR<ProgresoUsuarioRelationFilter, ProgresoUsuarioWhereInput>
    insignia?: XOR<InsigniaRelationFilter, InsigniaWhereInput>
  }, "id" | "progresoId_insigniaId">

  export type ProgresoInsigniaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaObtencion?: SortOrder
    progresoId?: SortOrder
    insigniaId?: SortOrder
    _count?: ProgresoInsigniaCountOrderByAggregateInput
    _max?: ProgresoInsigniaMaxOrderByAggregateInput
    _min?: ProgresoInsigniaMinOrderByAggregateInput
  }

  export type ProgresoInsigniaScalarWhereWithAggregatesInput = {
    AND?: ProgresoInsigniaScalarWhereWithAggregatesInput | ProgresoInsigniaScalarWhereWithAggregatesInput[]
    OR?: ProgresoInsigniaScalarWhereWithAggregatesInput[]
    NOT?: ProgresoInsigniaScalarWhereWithAggregatesInput | ProgresoInsigniaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgresoInsignia"> | string
    fechaObtencion?: DateTimeWithAggregatesFilter<"ProgresoInsignia"> | Date | string
    progresoId?: StringWithAggregatesFilter<"ProgresoInsignia"> | string
    insigniaId?: StringWithAggregatesFilter<"ProgresoInsignia"> | string
  }

  export type SesionSimulacionWhereInput = {
    AND?: SesionSimulacionWhereInput | SesionSimulacionWhereInput[]
    OR?: SesionSimulacionWhereInput[]
    NOT?: SesionSimulacionWhereInput | SesionSimulacionWhereInput[]
    id?: StringFilter<"SesionSimulacion"> | string
    pasosCompletados?: IntFilter<"SesionSimulacion"> | number
    totalPasos?: IntFilter<"SesionSimulacion"> | number
    completada?: BoolFilter<"SesionSimulacion"> | boolean
    fechaInicio?: DateTimeFilter<"SesionSimulacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"SesionSimulacion"> | Date | string | null
    usuarioId?: StringFilter<"SesionSimulacion"> | string
    algoritmoId?: StringFilter<"SesionSimulacion"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    algoritmo?: XOR<AlgoritmoRelationFilter, AlgoritmoWhereInput>
  }

  export type SesionSimulacionOrderByWithRelationInput = {
    id?: SortOrder
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
    completada?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    algoritmoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    algoritmo?: AlgoritmoOrderByWithRelationInput
  }

  export type SesionSimulacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SesionSimulacionWhereInput | SesionSimulacionWhereInput[]
    OR?: SesionSimulacionWhereInput[]
    NOT?: SesionSimulacionWhereInput | SesionSimulacionWhereInput[]
    pasosCompletados?: IntFilter<"SesionSimulacion"> | number
    totalPasos?: IntFilter<"SesionSimulacion"> | number
    completada?: BoolFilter<"SesionSimulacion"> | boolean
    fechaInicio?: DateTimeFilter<"SesionSimulacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"SesionSimulacion"> | Date | string | null
    usuarioId?: StringFilter<"SesionSimulacion"> | string
    algoritmoId?: StringFilter<"SesionSimulacion"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    algoritmo?: XOR<AlgoritmoRelationFilter, AlgoritmoWhereInput>
  }, "id">

  export type SesionSimulacionOrderByWithAggregationInput = {
    id?: SortOrder
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
    completada?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    algoritmoId?: SortOrder
    _count?: SesionSimulacionCountOrderByAggregateInput
    _avg?: SesionSimulacionAvgOrderByAggregateInput
    _max?: SesionSimulacionMaxOrderByAggregateInput
    _min?: SesionSimulacionMinOrderByAggregateInput
    _sum?: SesionSimulacionSumOrderByAggregateInput
  }

  export type SesionSimulacionScalarWhereWithAggregatesInput = {
    AND?: SesionSimulacionScalarWhereWithAggregatesInput | SesionSimulacionScalarWhereWithAggregatesInput[]
    OR?: SesionSimulacionScalarWhereWithAggregatesInput[]
    NOT?: SesionSimulacionScalarWhereWithAggregatesInput | SesionSimulacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SesionSimulacion"> | string
    pasosCompletados?: IntWithAggregatesFilter<"SesionSimulacion"> | number
    totalPasos?: IntWithAggregatesFilter<"SesionSimulacion"> | number
    completada?: BoolWithAggregatesFilter<"SesionSimulacion"> | boolean
    fechaInicio?: DateTimeWithAggregatesFilter<"SesionSimulacion"> | Date | string
    fechaFin?: DateTimeNullableWithAggregatesFilter<"SesionSimulacion"> | Date | string | null
    usuarioId?: StringWithAggregatesFilter<"SesionSimulacion"> | string
    algoritmoId?: StringWithAggregatesFilter<"SesionSimulacion"> | string
  }

  export type RespuestaEjercicioWhereInput = {
    AND?: RespuestaEjercicioWhereInput | RespuestaEjercicioWhereInput[]
    OR?: RespuestaEjercicioWhereInput[]
    NOT?: RespuestaEjercicioWhereInput | RespuestaEjercicioWhereInput[]
    id?: StringFilter<"RespuestaEjercicio"> | string
    respuesta?: StringFilter<"RespuestaEjercicio"> | string
    correcto?: BoolFilter<"RespuestaEjercicio"> | boolean
    puntosGanados?: IntFilter<"RespuestaEjercicio"> | number
    fechaRespuesta?: DateTimeFilter<"RespuestaEjercicio"> | Date | string
    usuarioId?: StringFilter<"RespuestaEjercicio"> | string
    ejercicioId?: StringFilter<"RespuestaEjercicio"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioPrediccionRelationFilter, EjercicioPrediccionWhereInput>
  }

  export type RespuestaEjercicioOrderByWithRelationInput = {
    id?: SortOrder
    respuesta?: SortOrder
    correcto?: SortOrder
    puntosGanados?: SortOrder
    fechaRespuesta?: SortOrder
    usuarioId?: SortOrder
    ejercicioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ejercicio?: EjercicioPrediccionOrderByWithRelationInput
  }

  export type RespuestaEjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RespuestaEjercicioWhereInput | RespuestaEjercicioWhereInput[]
    OR?: RespuestaEjercicioWhereInput[]
    NOT?: RespuestaEjercicioWhereInput | RespuestaEjercicioWhereInput[]
    respuesta?: StringFilter<"RespuestaEjercicio"> | string
    correcto?: BoolFilter<"RespuestaEjercicio"> | boolean
    puntosGanados?: IntFilter<"RespuestaEjercicio"> | number
    fechaRespuesta?: DateTimeFilter<"RespuestaEjercicio"> | Date | string
    usuarioId?: StringFilter<"RespuestaEjercicio"> | string
    ejercicioId?: StringFilter<"RespuestaEjercicio"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    ejercicio?: XOR<EjercicioPrediccionRelationFilter, EjercicioPrediccionWhereInput>
  }, "id">

  export type RespuestaEjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    respuesta?: SortOrder
    correcto?: SortOrder
    puntosGanados?: SortOrder
    fechaRespuesta?: SortOrder
    usuarioId?: SortOrder
    ejercicioId?: SortOrder
    _count?: RespuestaEjercicioCountOrderByAggregateInput
    _avg?: RespuestaEjercicioAvgOrderByAggregateInput
    _max?: RespuestaEjercicioMaxOrderByAggregateInput
    _min?: RespuestaEjercicioMinOrderByAggregateInput
    _sum?: RespuestaEjercicioSumOrderByAggregateInput
  }

  export type RespuestaEjercicioScalarWhereWithAggregatesInput = {
    AND?: RespuestaEjercicioScalarWhereWithAggregatesInput | RespuestaEjercicioScalarWhereWithAggregatesInput[]
    OR?: RespuestaEjercicioScalarWhereWithAggregatesInput[]
    NOT?: RespuestaEjercicioScalarWhereWithAggregatesInput | RespuestaEjercicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RespuestaEjercicio"> | string
    respuesta?: StringWithAggregatesFilter<"RespuestaEjercicio"> | string
    correcto?: BoolWithAggregatesFilter<"RespuestaEjercicio"> | boolean
    puntosGanados?: IntWithAggregatesFilter<"RespuestaEjercicio"> | number
    fechaRespuesta?: DateTimeWithAggregatesFilter<"RespuestaEjercicio"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"RespuestaEjercicio"> | string
    ejercicioId?: StringWithAggregatesFilter<"RespuestaEjercicio"> | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioCreateNestedOneWithoutUsuarioInput
    sesiones?: SesionSimulacionCreateNestedManyWithoutUsuarioInput
    respuestas?: RespuestaEjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioUncheckedCreateNestedOneWithoutUsuarioInput
    sesiones?: SesionSimulacionUncheckedCreateNestedManyWithoutUsuarioInput
    respuestas?: RespuestaEjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUpdateOneWithoutUsuarioNestedInput
    sesiones?: SesionSimulacionUpdateManyWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    sesiones?: SesionSimulacionUncheckedUpdateManyWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    id?: string
    nombre: string
    correo: string
    contrasena: string
    credencialesAdmin: string
    ultimoAcceso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUncheckedCreateInput = {
    id?: string
    nombre: string
    correo: string
    contrasena: string
    credencialesAdmin: string
    ultimoAcceso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    credencialesAdmin?: StringFieldUpdateOperationsInput | string
    ultimoAcceso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    credencialesAdmin?: StringFieldUpdateOperationsInput | string
    ultimoAcceso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateManyInput = {
    id?: string
    nombre: string
    correo: string
    contrasena: string
    credencialesAdmin: string
    ultimoAcceso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministradorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    credencialesAdmin?: StringFieldUpdateOperationsInput | string
    ultimoAcceso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    credencialesAdmin?: StringFieldUpdateOperationsInput | string
    ultimoAcceso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlgoritmoCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: EjercicioPrediccionCreateNestedManyWithoutAlgoritmoInput
    sesiones?: SesionSimulacionCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: EjercicioPrediccionUncheckedCreateNestedManyWithoutAlgoritmoInput
    sesiones?: SesionSimulacionUncheckedCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: EjercicioPrediccionUpdateManyWithoutAlgoritmoNestedInput
    sesiones?: SesionSimulacionUpdateManyWithoutAlgoritmoNestedInput
  }

  export type AlgoritmoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: EjercicioPrediccionUncheckedUpdateManyWithoutAlgoritmoNestedInput
    sesiones?: SesionSimulacionUncheckedUpdateManyWithoutAlgoritmoNestedInput
  }

  export type AlgoritmoCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlgoritmoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlgoritmoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioPrediccionCreateInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    algoritmo: AlgoritmoCreateNestedOneWithoutEjerciciosInput
    respuestas?: RespuestaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioPrediccionUncheckedCreateInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    algoritmoId: string
    respuestas?: RespuestaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioPrediccionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    algoritmo?: AlgoritmoUpdateOneRequiredWithoutEjerciciosNestedInput
    respuestas?: RespuestaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioPrediccionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    algoritmoId?: StringFieldUpdateOperationsInput | string
    respuestas?: RespuestaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioPrediccionCreateManyInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    algoritmoId: string
  }

  export type EjercicioPrediccionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioPrediccionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoUsuarioCreateInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
    insignias?: ProgresoInsigniaCreateNestedManyWithoutProgresoInput
  }

  export type ProgresoUsuarioUncheckedCreateInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
    insignias?: ProgresoInsigniaUncheckedCreateNestedManyWithoutProgresoInput
  }

  export type ProgresoUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
    insignias?: ProgresoInsigniaUpdateManyWithoutProgresoNestedInput
  }

  export type ProgresoUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    insignias?: ProgresoInsigniaUncheckedUpdateManyWithoutProgresoNestedInput
  }

  export type ProgresoUsuarioCreateManyInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
  }

  export type ProgresoUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type InsigniaCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt?: Date | string
    progresosOtorgados?: ProgresoInsigniaCreateNestedManyWithoutInsigniaInput
  }

  export type InsigniaUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt?: Date | string
    progresosOtorgados?: ProgresoInsigniaUncheckedCreateNestedManyWithoutInsigniaInput
  }

  export type InsigniaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progresosOtorgados?: ProgresoInsigniaUpdateManyWithoutInsigniaNestedInput
  }

  export type InsigniaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progresosOtorgados?: ProgresoInsigniaUncheckedUpdateManyWithoutInsigniaNestedInput
  }

  export type InsigniaCreateManyInput = {
    id?: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt?: Date | string
  }

  export type InsigniaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsigniaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoInsigniaCreateInput = {
    id?: string
    fechaObtencion?: Date | string
    progreso: ProgresoUsuarioCreateNestedOneWithoutInsigniasInput
    insignia: InsigniaCreateNestedOneWithoutProgresosOtorgadosInput
  }

  export type ProgresoInsigniaUncheckedCreateInput = {
    id?: string
    fechaObtencion?: Date | string
    progresoId: string
    insigniaId: string
  }

  export type ProgresoInsigniaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUpdateOneRequiredWithoutInsigniasNestedInput
    insignia?: InsigniaUpdateOneRequiredWithoutProgresosOtorgadosNestedInput
  }

  export type ProgresoInsigniaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progresoId?: StringFieldUpdateOperationsInput | string
    insigniaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoInsigniaCreateManyInput = {
    id?: string
    fechaObtencion?: Date | string
    progresoId: string
    insigniaId: string
  }

  export type ProgresoInsigniaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresoInsigniaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progresoId?: StringFieldUpdateOperationsInput | string
    insigniaId?: StringFieldUpdateOperationsInput | string
  }

  export type SesionSimulacionCreateInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutSesionesInput
    algoritmo: AlgoritmoCreateNestedOneWithoutSesionesInput
  }

  export type SesionSimulacionUncheckedCreateInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuarioId: string
    algoritmoId: string
  }

  export type SesionSimulacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSesionesNestedInput
    algoritmo?: AlgoritmoUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionSimulacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type SesionSimulacionCreateManyInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuarioId: string
    algoritmoId: string
  }

  export type SesionSimulacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SesionSimulacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioCreateInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRespuestasInput
    ejercicio: EjercicioPrediccionCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaEjercicioUncheckedCreateInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuarioId: string
    ejercicioId: string
  }

  export type RespuestaEjercicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRespuestasNestedInput
    ejercicio?: EjercicioPrediccionUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaEjercicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioCreateManyInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuarioId: string
    ejercicioId: string
  }

  export type RespuestaEjercicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaEjercicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type ProgresoUsuarioNullableRelationFilter = {
    is?: ProgresoUsuarioWhereInput | null
    isNot?: ProgresoUsuarioWhereInput | null
  }

  export type SesionSimulacionListRelationFilter = {
    every?: SesionSimulacionWhereInput
    some?: SesionSimulacionWhereInput
    none?: SesionSimulacionWhereInput
  }

  export type RespuestaEjercicioListRelationFilter = {
    every?: RespuestaEjercicioWhereInput
    some?: RespuestaEjercicioWhereInput
    none?: RespuestaEjercicioWhereInput
  }

  export type SesionSimulacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RespuestaEjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    rol?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    credencialesAdmin?: SortOrder
    ultimoAcceso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    credencialesAdmin?: SortOrder
    ultimoAcceso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    credencialesAdmin?: SortOrder
    ultimoAcceso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoriaAlgoritmoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaAlgoritmo | EnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel> | $Enums.CategoriaAlgoritmo
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EjercicioPrediccionListRelationFilter = {
    every?: EjercicioPrediccionWhereInput
    some?: EjercicioPrediccionWhereInput
    none?: EjercicioPrediccionWhereInput
  }

  export type EjercicioPrediccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlgoritmoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    complejidadTiempo?: SortOrder
    complejidadEspacio?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlgoritmoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    complejidadTiempo?: SortOrder
    complejidadEspacio?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlgoritmoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    complejidadTiempo?: SortOrder
    complejidadEspacio?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoriaAlgoritmoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaAlgoritmo | EnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaAlgoritmoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaAlgoritmo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDificultadEjercicioFilter<$PrismaModel = never> = {
    equals?: $Enums.DificultadEjercicio | EnumDificultadEjercicioFieldRefInput<$PrismaModel>
    in?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    not?: NestedEnumDificultadEjercicioFilter<$PrismaModel> | $Enums.DificultadEjercicio
  }

  export type AlgoritmoRelationFilter = {
    is?: AlgoritmoWhereInput
    isNot?: AlgoritmoWhereInput
  }

  export type EjercicioPrediccionCountOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
    respuestaCorrecta?: SortOrder
    dificultad?: SortOrder
    feedbackPositivo?: SortOrder
    feedbackNegativo?: SortOrder
    createdAt?: SortOrder
    algoritmoId?: SortOrder
  }

  export type EjercicioPrediccionMaxOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
    respuestaCorrecta?: SortOrder
    dificultad?: SortOrder
    feedbackPositivo?: SortOrder
    feedbackNegativo?: SortOrder
    createdAt?: SortOrder
    algoritmoId?: SortOrder
  }

  export type EjercicioPrediccionMinOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
    respuestaCorrecta?: SortOrder
    dificultad?: SortOrder
    feedbackPositivo?: SortOrder
    feedbackNegativo?: SortOrder
    createdAt?: SortOrder
    algoritmoId?: SortOrder
  }

  export type EnumDificultadEjercicioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DificultadEjercicio | EnumDificultadEjercicioFieldRefInput<$PrismaModel>
    in?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    not?: NestedEnumDificultadEjercicioWithAggregatesFilter<$PrismaModel> | $Enums.DificultadEjercicio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDificultadEjercicioFilter<$PrismaModel>
    _max?: NestedEnumDificultadEjercicioFilter<$PrismaModel>
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

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProgresoInsigniaListRelationFilter = {
    every?: ProgresoInsigniaWhereInput
    some?: ProgresoInsigniaWhereInput
    none?: ProgresoInsigniaWhereInput
  }

  export type ProgresoInsigniaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgresoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
    ultimaActividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProgresoUsuarioAvgOrderByAggregateInput = {
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
  }

  export type ProgresoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
    ultimaActividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProgresoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
    ultimaActividad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProgresoUsuarioSumOrderByAggregateInput = {
    puntosTotales?: SortOrder
    nivelActual?: SortOrder
    rachaDias?: SortOrder
    posicionRanking?: SortOrder
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

  export type InsigniaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    criterioDesbloqueo?: SortOrder
    createdAt?: SortOrder
  }

  export type InsigniaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    criterioDesbloqueo?: SortOrder
    createdAt?: SortOrder
  }

  export type InsigniaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    criterioDesbloqueo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgresoUsuarioRelationFilter = {
    is?: ProgresoUsuarioWhereInput
    isNot?: ProgresoUsuarioWhereInput
  }

  export type InsigniaRelationFilter = {
    is?: InsigniaWhereInput
    isNot?: InsigniaWhereInput
  }

  export type ProgresoInsigniaProgresoIdInsigniaIdCompoundUniqueInput = {
    progresoId: string
    insigniaId: string
  }

  export type ProgresoInsigniaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaObtencion?: SortOrder
    progresoId?: SortOrder
    insigniaId?: SortOrder
  }

  export type ProgresoInsigniaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaObtencion?: SortOrder
    progresoId?: SortOrder
    insigniaId?: SortOrder
  }

  export type ProgresoInsigniaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaObtencion?: SortOrder
    progresoId?: SortOrder
    insigniaId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SesionSimulacionCountOrderByAggregateInput = {
    id?: SortOrder
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
    completada?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    usuarioId?: SortOrder
    algoritmoId?: SortOrder
  }

  export type SesionSimulacionAvgOrderByAggregateInput = {
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
  }

  export type SesionSimulacionMaxOrderByAggregateInput = {
    id?: SortOrder
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
    completada?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    usuarioId?: SortOrder
    algoritmoId?: SortOrder
  }

  export type SesionSimulacionMinOrderByAggregateInput = {
    id?: SortOrder
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
    completada?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    usuarioId?: SortOrder
    algoritmoId?: SortOrder
  }

  export type SesionSimulacionSumOrderByAggregateInput = {
    pasosCompletados?: SortOrder
    totalPasos?: SortOrder
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

  export type EjercicioPrediccionRelationFilter = {
    is?: EjercicioPrediccionWhereInput
    isNot?: EjercicioPrediccionWhereInput
  }

  export type RespuestaEjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    respuesta?: SortOrder
    correcto?: SortOrder
    puntosGanados?: SortOrder
    fechaRespuesta?: SortOrder
    usuarioId?: SortOrder
    ejercicioId?: SortOrder
  }

  export type RespuestaEjercicioAvgOrderByAggregateInput = {
    puntosGanados?: SortOrder
  }

  export type RespuestaEjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    respuesta?: SortOrder
    correcto?: SortOrder
    puntosGanados?: SortOrder
    fechaRespuesta?: SortOrder
    usuarioId?: SortOrder
    ejercicioId?: SortOrder
  }

  export type RespuestaEjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    respuesta?: SortOrder
    correcto?: SortOrder
    puntosGanados?: SortOrder
    fechaRespuesta?: SortOrder
    usuarioId?: SortOrder
    ejercicioId?: SortOrder
  }

  export type RespuestaEjercicioSumOrderByAggregateInput = {
    puntosGanados?: SortOrder
  }

  export type ProgresoUsuarioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutUsuarioInput
    connect?: ProgresoUsuarioWhereUniqueInput
  }

  export type SesionSimulacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput> | SesionSimulacionCreateWithoutUsuarioInput[] | SesionSimulacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutUsuarioInput | SesionSimulacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SesionSimulacionCreateManyUsuarioInputEnvelope
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
  }

  export type RespuestaEjercicioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput> | RespuestaEjercicioCreateWithoutUsuarioInput[] | RespuestaEjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutUsuarioInput | RespuestaEjercicioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RespuestaEjercicioCreateManyUsuarioInputEnvelope
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
  }

  export type ProgresoUsuarioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutUsuarioInput
    connect?: ProgresoUsuarioWhereUniqueInput
  }

  export type SesionSimulacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput> | SesionSimulacionCreateWithoutUsuarioInput[] | SesionSimulacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutUsuarioInput | SesionSimulacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: SesionSimulacionCreateManyUsuarioInputEnvelope
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
  }

  export type RespuestaEjercicioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput> | RespuestaEjercicioCreateWithoutUsuarioInput[] | RespuestaEjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutUsuarioInput | RespuestaEjercicioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RespuestaEjercicioCreateManyUsuarioInputEnvelope
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgresoUsuarioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutUsuarioInput
    upsert?: ProgresoUsuarioUpsertWithoutUsuarioInput
    disconnect?: ProgresoUsuarioWhereInput | boolean
    delete?: ProgresoUsuarioWhereInput | boolean
    connect?: ProgresoUsuarioWhereUniqueInput
    update?: XOR<XOR<ProgresoUsuarioUpdateToOneWithWhereWithoutUsuarioInput, ProgresoUsuarioUpdateWithoutUsuarioInput>, ProgresoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type SesionSimulacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput> | SesionSimulacionCreateWithoutUsuarioInput[] | SesionSimulacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutUsuarioInput | SesionSimulacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SesionSimulacionUpsertWithWhereUniqueWithoutUsuarioInput | SesionSimulacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SesionSimulacionCreateManyUsuarioInputEnvelope
    set?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    disconnect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    delete?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    update?: SesionSimulacionUpdateWithWhereUniqueWithoutUsuarioInput | SesionSimulacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SesionSimulacionUpdateManyWithWhereWithoutUsuarioInput | SesionSimulacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
  }

  export type RespuestaEjercicioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput> | RespuestaEjercicioCreateWithoutUsuarioInput[] | RespuestaEjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutUsuarioInput | RespuestaEjercicioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RespuestaEjercicioUpsertWithWhereUniqueWithoutUsuarioInput | RespuestaEjercicioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RespuestaEjercicioCreateManyUsuarioInputEnvelope
    set?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    disconnect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    delete?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    update?: RespuestaEjercicioUpdateWithWhereUniqueWithoutUsuarioInput | RespuestaEjercicioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RespuestaEjercicioUpdateManyWithWhereWithoutUsuarioInput | RespuestaEjercicioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
  }

  export type ProgresoUsuarioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutUsuarioInput
    upsert?: ProgresoUsuarioUpsertWithoutUsuarioInput
    disconnect?: ProgresoUsuarioWhereInput | boolean
    delete?: ProgresoUsuarioWhereInput | boolean
    connect?: ProgresoUsuarioWhereUniqueInput
    update?: XOR<XOR<ProgresoUsuarioUpdateToOneWithWhereWithoutUsuarioInput, ProgresoUsuarioUpdateWithoutUsuarioInput>, ProgresoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type SesionSimulacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput> | SesionSimulacionCreateWithoutUsuarioInput[] | SesionSimulacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutUsuarioInput | SesionSimulacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: SesionSimulacionUpsertWithWhereUniqueWithoutUsuarioInput | SesionSimulacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SesionSimulacionCreateManyUsuarioInputEnvelope
    set?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    disconnect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    delete?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    update?: SesionSimulacionUpdateWithWhereUniqueWithoutUsuarioInput | SesionSimulacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SesionSimulacionUpdateManyWithWhereWithoutUsuarioInput | SesionSimulacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
  }

  export type RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput> | RespuestaEjercicioCreateWithoutUsuarioInput[] | RespuestaEjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutUsuarioInput | RespuestaEjercicioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RespuestaEjercicioUpsertWithWhereUniqueWithoutUsuarioInput | RespuestaEjercicioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RespuestaEjercicioCreateManyUsuarioInputEnvelope
    set?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    disconnect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    delete?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    update?: RespuestaEjercicioUpdateWithWhereUniqueWithoutUsuarioInput | RespuestaEjercicioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RespuestaEjercicioUpdateManyWithWhereWithoutUsuarioInput | RespuestaEjercicioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
  }

  export type EjercicioPrediccionCreateNestedManyWithoutAlgoritmoInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput> | EjercicioPrediccionCreateWithoutAlgoritmoInput[] | EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput | EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput[]
    createMany?: EjercicioPrediccionCreateManyAlgoritmoInputEnvelope
    connect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
  }

  export type SesionSimulacionCreateNestedManyWithoutAlgoritmoInput = {
    create?: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput> | SesionSimulacionCreateWithoutAlgoritmoInput[] | SesionSimulacionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutAlgoritmoInput | SesionSimulacionCreateOrConnectWithoutAlgoritmoInput[]
    createMany?: SesionSimulacionCreateManyAlgoritmoInputEnvelope
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
  }

  export type EjercicioPrediccionUncheckedCreateNestedManyWithoutAlgoritmoInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput> | EjercicioPrediccionCreateWithoutAlgoritmoInput[] | EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput | EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput[]
    createMany?: EjercicioPrediccionCreateManyAlgoritmoInputEnvelope
    connect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
  }

  export type SesionSimulacionUncheckedCreateNestedManyWithoutAlgoritmoInput = {
    create?: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput> | SesionSimulacionCreateWithoutAlgoritmoInput[] | SesionSimulacionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutAlgoritmoInput | SesionSimulacionCreateOrConnectWithoutAlgoritmoInput[]
    createMany?: SesionSimulacionCreateManyAlgoritmoInputEnvelope
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
  }

  export type EnumCategoriaAlgoritmoFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaAlgoritmo
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EjercicioPrediccionUpdateManyWithoutAlgoritmoNestedInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput> | EjercicioPrediccionCreateWithoutAlgoritmoInput[] | EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput | EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput[]
    upsert?: EjercicioPrediccionUpsertWithWhereUniqueWithoutAlgoritmoInput | EjercicioPrediccionUpsertWithWhereUniqueWithoutAlgoritmoInput[]
    createMany?: EjercicioPrediccionCreateManyAlgoritmoInputEnvelope
    set?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    disconnect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    delete?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    connect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    update?: EjercicioPrediccionUpdateWithWhereUniqueWithoutAlgoritmoInput | EjercicioPrediccionUpdateWithWhereUniqueWithoutAlgoritmoInput[]
    updateMany?: EjercicioPrediccionUpdateManyWithWhereWithoutAlgoritmoInput | EjercicioPrediccionUpdateManyWithWhereWithoutAlgoritmoInput[]
    deleteMany?: EjercicioPrediccionScalarWhereInput | EjercicioPrediccionScalarWhereInput[]
  }

  export type SesionSimulacionUpdateManyWithoutAlgoritmoNestedInput = {
    create?: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput> | SesionSimulacionCreateWithoutAlgoritmoInput[] | SesionSimulacionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutAlgoritmoInput | SesionSimulacionCreateOrConnectWithoutAlgoritmoInput[]
    upsert?: SesionSimulacionUpsertWithWhereUniqueWithoutAlgoritmoInput | SesionSimulacionUpsertWithWhereUniqueWithoutAlgoritmoInput[]
    createMany?: SesionSimulacionCreateManyAlgoritmoInputEnvelope
    set?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    disconnect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    delete?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    update?: SesionSimulacionUpdateWithWhereUniqueWithoutAlgoritmoInput | SesionSimulacionUpdateWithWhereUniqueWithoutAlgoritmoInput[]
    updateMany?: SesionSimulacionUpdateManyWithWhereWithoutAlgoritmoInput | SesionSimulacionUpdateManyWithWhereWithoutAlgoritmoInput[]
    deleteMany?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
  }

  export type EjercicioPrediccionUncheckedUpdateManyWithoutAlgoritmoNestedInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput> | EjercicioPrediccionCreateWithoutAlgoritmoInput[] | EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput | EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput[]
    upsert?: EjercicioPrediccionUpsertWithWhereUniqueWithoutAlgoritmoInput | EjercicioPrediccionUpsertWithWhereUniqueWithoutAlgoritmoInput[]
    createMany?: EjercicioPrediccionCreateManyAlgoritmoInputEnvelope
    set?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    disconnect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    delete?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    connect?: EjercicioPrediccionWhereUniqueInput | EjercicioPrediccionWhereUniqueInput[]
    update?: EjercicioPrediccionUpdateWithWhereUniqueWithoutAlgoritmoInput | EjercicioPrediccionUpdateWithWhereUniqueWithoutAlgoritmoInput[]
    updateMany?: EjercicioPrediccionUpdateManyWithWhereWithoutAlgoritmoInput | EjercicioPrediccionUpdateManyWithWhereWithoutAlgoritmoInput[]
    deleteMany?: EjercicioPrediccionScalarWhereInput | EjercicioPrediccionScalarWhereInput[]
  }

  export type SesionSimulacionUncheckedUpdateManyWithoutAlgoritmoNestedInput = {
    create?: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput> | SesionSimulacionCreateWithoutAlgoritmoInput[] | SesionSimulacionUncheckedCreateWithoutAlgoritmoInput[]
    connectOrCreate?: SesionSimulacionCreateOrConnectWithoutAlgoritmoInput | SesionSimulacionCreateOrConnectWithoutAlgoritmoInput[]
    upsert?: SesionSimulacionUpsertWithWhereUniqueWithoutAlgoritmoInput | SesionSimulacionUpsertWithWhereUniqueWithoutAlgoritmoInput[]
    createMany?: SesionSimulacionCreateManyAlgoritmoInputEnvelope
    set?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    disconnect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    delete?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    connect?: SesionSimulacionWhereUniqueInput | SesionSimulacionWhereUniqueInput[]
    update?: SesionSimulacionUpdateWithWhereUniqueWithoutAlgoritmoInput | SesionSimulacionUpdateWithWhereUniqueWithoutAlgoritmoInput[]
    updateMany?: SesionSimulacionUpdateManyWithWhereWithoutAlgoritmoInput | SesionSimulacionUpdateManyWithWhereWithoutAlgoritmoInput[]
    deleteMany?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
  }

  export type AlgoritmoCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<AlgoritmoCreateWithoutEjerciciosInput, AlgoritmoUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: AlgoritmoCreateOrConnectWithoutEjerciciosInput
    connect?: AlgoritmoWhereUniqueInput
  }

  export type RespuestaEjercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput> | RespuestaEjercicioCreateWithoutEjercicioInput[] | RespuestaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutEjercicioInput | RespuestaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RespuestaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
  }

  export type RespuestaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput> | RespuestaEjercicioCreateWithoutEjercicioInput[] | RespuestaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutEjercicioInput | RespuestaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RespuestaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
  }

  export type EnumDificultadEjercicioFieldUpdateOperationsInput = {
    set?: $Enums.DificultadEjercicio
  }

  export type AlgoritmoUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<AlgoritmoCreateWithoutEjerciciosInput, AlgoritmoUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: AlgoritmoCreateOrConnectWithoutEjerciciosInput
    upsert?: AlgoritmoUpsertWithoutEjerciciosInput
    connect?: AlgoritmoWhereUniqueInput
    update?: XOR<XOR<AlgoritmoUpdateToOneWithWhereWithoutEjerciciosInput, AlgoritmoUpdateWithoutEjerciciosInput>, AlgoritmoUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RespuestaEjercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput> | RespuestaEjercicioCreateWithoutEjercicioInput[] | RespuestaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutEjercicioInput | RespuestaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RespuestaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RespuestaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RespuestaEjercicioCreateManyEjercicioInputEnvelope
    set?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    disconnect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    delete?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    update?: RespuestaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RespuestaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RespuestaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RespuestaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
  }

  export type RespuestaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput> | RespuestaEjercicioCreateWithoutEjercicioInput[] | RespuestaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RespuestaEjercicioCreateOrConnectWithoutEjercicioInput | RespuestaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RespuestaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RespuestaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RespuestaEjercicioCreateManyEjercicioInputEnvelope
    set?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    disconnect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    delete?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    connect?: RespuestaEjercicioWhereUniqueInput | RespuestaEjercicioWhereUniqueInput[]
    update?: RespuestaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RespuestaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RespuestaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RespuestaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProgresoInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProgresoInsigniaCreateNestedManyWithoutProgresoInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput> | ProgresoInsigniaCreateWithoutProgresoInput[] | ProgresoInsigniaUncheckedCreateWithoutProgresoInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutProgresoInput | ProgresoInsigniaCreateOrConnectWithoutProgresoInput[]
    createMany?: ProgresoInsigniaCreateManyProgresoInputEnvelope
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
  }

  export type ProgresoInsigniaUncheckedCreateNestedManyWithoutProgresoInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput> | ProgresoInsigniaCreateWithoutProgresoInput[] | ProgresoInsigniaUncheckedCreateWithoutProgresoInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutProgresoInput | ProgresoInsigniaCreateOrConnectWithoutProgresoInput[]
    createMany?: ProgresoInsigniaCreateManyProgresoInputEnvelope
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutProgresoNestedInput = {
    create?: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProgresoInput
    upsert?: UsuarioUpsertWithoutProgresoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProgresoInput, UsuarioUpdateWithoutProgresoInput>, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type ProgresoInsigniaUpdateManyWithoutProgresoNestedInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput> | ProgresoInsigniaCreateWithoutProgresoInput[] | ProgresoInsigniaUncheckedCreateWithoutProgresoInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutProgresoInput | ProgresoInsigniaCreateOrConnectWithoutProgresoInput[]
    upsert?: ProgresoInsigniaUpsertWithWhereUniqueWithoutProgresoInput | ProgresoInsigniaUpsertWithWhereUniqueWithoutProgresoInput[]
    createMany?: ProgresoInsigniaCreateManyProgresoInputEnvelope
    set?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    disconnect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    delete?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    update?: ProgresoInsigniaUpdateWithWhereUniqueWithoutProgresoInput | ProgresoInsigniaUpdateWithWhereUniqueWithoutProgresoInput[]
    updateMany?: ProgresoInsigniaUpdateManyWithWhereWithoutProgresoInput | ProgresoInsigniaUpdateManyWithWhereWithoutProgresoInput[]
    deleteMany?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
  }

  export type ProgresoInsigniaUncheckedUpdateManyWithoutProgresoNestedInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput> | ProgresoInsigniaCreateWithoutProgresoInput[] | ProgresoInsigniaUncheckedCreateWithoutProgresoInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutProgresoInput | ProgresoInsigniaCreateOrConnectWithoutProgresoInput[]
    upsert?: ProgresoInsigniaUpsertWithWhereUniqueWithoutProgresoInput | ProgresoInsigniaUpsertWithWhereUniqueWithoutProgresoInput[]
    createMany?: ProgresoInsigniaCreateManyProgresoInputEnvelope
    set?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    disconnect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    delete?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    update?: ProgresoInsigniaUpdateWithWhereUniqueWithoutProgresoInput | ProgresoInsigniaUpdateWithWhereUniqueWithoutProgresoInput[]
    updateMany?: ProgresoInsigniaUpdateManyWithWhereWithoutProgresoInput | ProgresoInsigniaUpdateManyWithWhereWithoutProgresoInput[]
    deleteMany?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
  }

  export type ProgresoInsigniaCreateNestedManyWithoutInsigniaInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput> | ProgresoInsigniaCreateWithoutInsigniaInput[] | ProgresoInsigniaUncheckedCreateWithoutInsigniaInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutInsigniaInput | ProgresoInsigniaCreateOrConnectWithoutInsigniaInput[]
    createMany?: ProgresoInsigniaCreateManyInsigniaInputEnvelope
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
  }

  export type ProgresoInsigniaUncheckedCreateNestedManyWithoutInsigniaInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput> | ProgresoInsigniaCreateWithoutInsigniaInput[] | ProgresoInsigniaUncheckedCreateWithoutInsigniaInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutInsigniaInput | ProgresoInsigniaCreateOrConnectWithoutInsigniaInput[]
    createMany?: ProgresoInsigniaCreateManyInsigniaInputEnvelope
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
  }

  export type ProgresoInsigniaUpdateManyWithoutInsigniaNestedInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput> | ProgresoInsigniaCreateWithoutInsigniaInput[] | ProgresoInsigniaUncheckedCreateWithoutInsigniaInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutInsigniaInput | ProgresoInsigniaCreateOrConnectWithoutInsigniaInput[]
    upsert?: ProgresoInsigniaUpsertWithWhereUniqueWithoutInsigniaInput | ProgresoInsigniaUpsertWithWhereUniqueWithoutInsigniaInput[]
    createMany?: ProgresoInsigniaCreateManyInsigniaInputEnvelope
    set?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    disconnect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    delete?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    update?: ProgresoInsigniaUpdateWithWhereUniqueWithoutInsigniaInput | ProgresoInsigniaUpdateWithWhereUniqueWithoutInsigniaInput[]
    updateMany?: ProgresoInsigniaUpdateManyWithWhereWithoutInsigniaInput | ProgresoInsigniaUpdateManyWithWhereWithoutInsigniaInput[]
    deleteMany?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
  }

  export type ProgresoInsigniaUncheckedUpdateManyWithoutInsigniaNestedInput = {
    create?: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput> | ProgresoInsigniaCreateWithoutInsigniaInput[] | ProgresoInsigniaUncheckedCreateWithoutInsigniaInput[]
    connectOrCreate?: ProgresoInsigniaCreateOrConnectWithoutInsigniaInput | ProgresoInsigniaCreateOrConnectWithoutInsigniaInput[]
    upsert?: ProgresoInsigniaUpsertWithWhereUniqueWithoutInsigniaInput | ProgresoInsigniaUpsertWithWhereUniqueWithoutInsigniaInput[]
    createMany?: ProgresoInsigniaCreateManyInsigniaInputEnvelope
    set?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    disconnect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    delete?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    connect?: ProgresoInsigniaWhereUniqueInput | ProgresoInsigniaWhereUniqueInput[]
    update?: ProgresoInsigniaUpdateWithWhereUniqueWithoutInsigniaInput | ProgresoInsigniaUpdateWithWhereUniqueWithoutInsigniaInput[]
    updateMany?: ProgresoInsigniaUpdateManyWithWhereWithoutInsigniaInput | ProgresoInsigniaUpdateManyWithWhereWithoutInsigniaInput[]
    deleteMany?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
  }

  export type ProgresoUsuarioCreateNestedOneWithoutInsigniasInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutInsigniasInput, ProgresoUsuarioUncheckedCreateWithoutInsigniasInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutInsigniasInput
    connect?: ProgresoUsuarioWhereUniqueInput
  }

  export type InsigniaCreateNestedOneWithoutProgresosOtorgadosInput = {
    create?: XOR<InsigniaCreateWithoutProgresosOtorgadosInput, InsigniaUncheckedCreateWithoutProgresosOtorgadosInput>
    connectOrCreate?: InsigniaCreateOrConnectWithoutProgresosOtorgadosInput
    connect?: InsigniaWhereUniqueInput
  }

  export type ProgresoUsuarioUpdateOneRequiredWithoutInsigniasNestedInput = {
    create?: XOR<ProgresoUsuarioCreateWithoutInsigniasInput, ProgresoUsuarioUncheckedCreateWithoutInsigniasInput>
    connectOrCreate?: ProgresoUsuarioCreateOrConnectWithoutInsigniasInput
    upsert?: ProgresoUsuarioUpsertWithoutInsigniasInput
    connect?: ProgresoUsuarioWhereUniqueInput
    update?: XOR<XOR<ProgresoUsuarioUpdateToOneWithWhereWithoutInsigniasInput, ProgresoUsuarioUpdateWithoutInsigniasInput>, ProgresoUsuarioUncheckedUpdateWithoutInsigniasInput>
  }

  export type InsigniaUpdateOneRequiredWithoutProgresosOtorgadosNestedInput = {
    create?: XOR<InsigniaCreateWithoutProgresosOtorgadosInput, InsigniaUncheckedCreateWithoutProgresosOtorgadosInput>
    connectOrCreate?: InsigniaCreateOrConnectWithoutProgresosOtorgadosInput
    upsert?: InsigniaUpsertWithoutProgresosOtorgadosInput
    connect?: InsigniaWhereUniqueInput
    update?: XOR<XOR<InsigniaUpdateToOneWithWhereWithoutProgresosOtorgadosInput, InsigniaUpdateWithoutProgresosOtorgadosInput>, InsigniaUncheckedUpdateWithoutProgresosOtorgadosInput>
  }

  export type UsuarioCreateNestedOneWithoutSesionesInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AlgoritmoCreateNestedOneWithoutSesionesInput = {
    create?: XOR<AlgoritmoCreateWithoutSesionesInput, AlgoritmoUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: AlgoritmoCreateOrConnectWithoutSesionesInput
    connect?: AlgoritmoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSesionesInput
    upsert?: UsuarioUpsertWithoutSesionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSesionesInput, UsuarioUpdateWithoutSesionesInput>, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type AlgoritmoUpdateOneRequiredWithoutSesionesNestedInput = {
    create?: XOR<AlgoritmoCreateWithoutSesionesInput, AlgoritmoUncheckedCreateWithoutSesionesInput>
    connectOrCreate?: AlgoritmoCreateOrConnectWithoutSesionesInput
    upsert?: AlgoritmoUpsertWithoutSesionesInput
    connect?: AlgoritmoWhereUniqueInput
    update?: XOR<XOR<AlgoritmoUpdateToOneWithWhereWithoutSesionesInput, AlgoritmoUpdateWithoutSesionesInput>, AlgoritmoUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<UsuarioCreateWithoutRespuestasInput, UsuarioUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRespuestasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EjercicioPrediccionCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutRespuestasInput, EjercicioPrediccionUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutRespuestasInput
    connect?: EjercicioPrediccionWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<UsuarioCreateWithoutRespuestasInput, UsuarioUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRespuestasInput
    upsert?: UsuarioUpsertWithoutRespuestasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRespuestasInput, UsuarioUpdateWithoutRespuestasInput>, UsuarioUncheckedUpdateWithoutRespuestasInput>
  }

  export type EjercicioPrediccionUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<EjercicioPrediccionCreateWithoutRespuestasInput, EjercicioPrediccionUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: EjercicioPrediccionCreateOrConnectWithoutRespuestasInput
    upsert?: EjercicioPrediccionUpsertWithoutRespuestasInput
    connect?: EjercicioPrediccionWhereUniqueInput
    update?: XOR<XOR<EjercicioPrediccionUpdateToOneWithWhereWithoutRespuestasInput, EjercicioPrediccionUpdateWithoutRespuestasInput>, EjercicioPrediccionUncheckedUpdateWithoutRespuestasInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
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

  export type NestedEnumCategoriaAlgoritmoFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaAlgoritmo | EnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel> | $Enums.CategoriaAlgoritmo
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCategoriaAlgoritmoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaAlgoritmo | EnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoriaAlgoritmo[] | ListEnumCategoriaAlgoritmoFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaAlgoritmoWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaAlgoritmo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel>
    _max?: NestedEnumCategoriaAlgoritmoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDificultadEjercicioFilter<$PrismaModel = never> = {
    equals?: $Enums.DificultadEjercicio | EnumDificultadEjercicioFieldRefInput<$PrismaModel>
    in?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    not?: NestedEnumDificultadEjercicioFilter<$PrismaModel> | $Enums.DificultadEjercicio
  }

  export type NestedEnumDificultadEjercicioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DificultadEjercicio | EnumDificultadEjercicioFieldRefInput<$PrismaModel>
    in?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    notIn?: $Enums.DificultadEjercicio[] | ListEnumDificultadEjercicioFieldRefInput<$PrismaModel>
    not?: NestedEnumDificultadEjercicioWithAggregatesFilter<$PrismaModel> | $Enums.DificultadEjercicio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDificultadEjercicioFilter<$PrismaModel>
    _max?: NestedEnumDificultadEjercicioFilter<$PrismaModel>
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

  export type ProgresoUsuarioCreateWithoutUsuarioInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insignias?: ProgresoInsigniaCreateNestedManyWithoutProgresoInput
  }

  export type ProgresoUsuarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    insignias?: ProgresoInsigniaUncheckedCreateNestedManyWithoutProgresoInput
  }

  export type ProgresoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: ProgresoUsuarioWhereUniqueInput
    create: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type SesionSimulacionCreateWithoutUsuarioInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    algoritmo: AlgoritmoCreateNestedOneWithoutSesionesInput
  }

  export type SesionSimulacionUncheckedCreateWithoutUsuarioInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    algoritmoId: string
  }

  export type SesionSimulacionCreateOrConnectWithoutUsuarioInput = {
    where: SesionSimulacionWhereUniqueInput
    create: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput>
  }

  export type SesionSimulacionCreateManyUsuarioInputEnvelope = {
    data: SesionSimulacionCreateManyUsuarioInput | SesionSimulacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RespuestaEjercicioCreateWithoutUsuarioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    ejercicio: EjercicioPrediccionCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaEjercicioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    ejercicioId: string
  }

  export type RespuestaEjercicioCreateOrConnectWithoutUsuarioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    create: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput>
  }

  export type RespuestaEjercicioCreateManyUsuarioInputEnvelope = {
    data: RespuestaEjercicioCreateManyUsuarioInput | RespuestaEjercicioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoUsuarioUpsertWithoutUsuarioInput = {
    update: XOR<ProgresoUsuarioUpdateWithoutUsuarioInput, ProgresoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProgresoUsuarioCreateWithoutUsuarioInput, ProgresoUsuarioUncheckedCreateWithoutUsuarioInput>
    where?: ProgresoUsuarioWhereInput
  }

  export type ProgresoUsuarioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProgresoUsuarioWhereInput
    data: XOR<ProgresoUsuarioUpdateWithoutUsuarioInput, ProgresoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProgresoUsuarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insignias?: ProgresoInsigniaUpdateManyWithoutProgresoNestedInput
  }

  export type ProgresoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insignias?: ProgresoInsigniaUncheckedUpdateManyWithoutProgresoNestedInput
  }

  export type SesionSimulacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SesionSimulacionWhereUniqueInput
    update: XOR<SesionSimulacionUpdateWithoutUsuarioInput, SesionSimulacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SesionSimulacionCreateWithoutUsuarioInput, SesionSimulacionUncheckedCreateWithoutUsuarioInput>
  }

  export type SesionSimulacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SesionSimulacionWhereUniqueInput
    data: XOR<SesionSimulacionUpdateWithoutUsuarioInput, SesionSimulacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type SesionSimulacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: SesionSimulacionScalarWhereInput
    data: XOR<SesionSimulacionUpdateManyMutationInput, SesionSimulacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SesionSimulacionScalarWhereInput = {
    AND?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
    OR?: SesionSimulacionScalarWhereInput[]
    NOT?: SesionSimulacionScalarWhereInput | SesionSimulacionScalarWhereInput[]
    id?: StringFilter<"SesionSimulacion"> | string
    pasosCompletados?: IntFilter<"SesionSimulacion"> | number
    totalPasos?: IntFilter<"SesionSimulacion"> | number
    completada?: BoolFilter<"SesionSimulacion"> | boolean
    fechaInicio?: DateTimeFilter<"SesionSimulacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"SesionSimulacion"> | Date | string | null
    usuarioId?: StringFilter<"SesionSimulacion"> | string
    algoritmoId?: StringFilter<"SesionSimulacion"> | string
  }

  export type RespuestaEjercicioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    update: XOR<RespuestaEjercicioUpdateWithoutUsuarioInput, RespuestaEjercicioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RespuestaEjercicioCreateWithoutUsuarioInput, RespuestaEjercicioUncheckedCreateWithoutUsuarioInput>
  }

  export type RespuestaEjercicioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    data: XOR<RespuestaEjercicioUpdateWithoutUsuarioInput, RespuestaEjercicioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RespuestaEjercicioUpdateManyWithWhereWithoutUsuarioInput = {
    where: RespuestaEjercicioScalarWhereInput
    data: XOR<RespuestaEjercicioUpdateManyMutationInput, RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RespuestaEjercicioScalarWhereInput = {
    AND?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
    OR?: RespuestaEjercicioScalarWhereInput[]
    NOT?: RespuestaEjercicioScalarWhereInput | RespuestaEjercicioScalarWhereInput[]
    id?: StringFilter<"RespuestaEjercicio"> | string
    respuesta?: StringFilter<"RespuestaEjercicio"> | string
    correcto?: BoolFilter<"RespuestaEjercicio"> | boolean
    puntosGanados?: IntFilter<"RespuestaEjercicio"> | number
    fechaRespuesta?: DateTimeFilter<"RespuestaEjercicio"> | Date | string
    usuarioId?: StringFilter<"RespuestaEjercicio"> | string
    ejercicioId?: StringFilter<"RespuestaEjercicio"> | string
  }

  export type EjercicioPrediccionCreateWithoutAlgoritmoInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    respuestas?: RespuestaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    respuestas?: RespuestaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioPrediccionCreateOrConnectWithoutAlgoritmoInput = {
    where: EjercicioPrediccionWhereUniqueInput
    create: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput>
  }

  export type EjercicioPrediccionCreateManyAlgoritmoInputEnvelope = {
    data: EjercicioPrediccionCreateManyAlgoritmoInput | EjercicioPrediccionCreateManyAlgoritmoInput[]
    skipDuplicates?: boolean
  }

  export type SesionSimulacionCreateWithoutAlgoritmoInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutSesionesInput
  }

  export type SesionSimulacionUncheckedCreateWithoutAlgoritmoInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuarioId: string
  }

  export type SesionSimulacionCreateOrConnectWithoutAlgoritmoInput = {
    where: SesionSimulacionWhereUniqueInput
    create: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput>
  }

  export type SesionSimulacionCreateManyAlgoritmoInputEnvelope = {
    data: SesionSimulacionCreateManyAlgoritmoInput | SesionSimulacionCreateManyAlgoritmoInput[]
    skipDuplicates?: boolean
  }

  export type EjercicioPrediccionUpsertWithWhereUniqueWithoutAlgoritmoInput = {
    where: EjercicioPrediccionWhereUniqueInput
    update: XOR<EjercicioPrediccionUpdateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedUpdateWithoutAlgoritmoInput>
    create: XOR<EjercicioPrediccionCreateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedCreateWithoutAlgoritmoInput>
  }

  export type EjercicioPrediccionUpdateWithWhereUniqueWithoutAlgoritmoInput = {
    where: EjercicioPrediccionWhereUniqueInput
    data: XOR<EjercicioPrediccionUpdateWithoutAlgoritmoInput, EjercicioPrediccionUncheckedUpdateWithoutAlgoritmoInput>
  }

  export type EjercicioPrediccionUpdateManyWithWhereWithoutAlgoritmoInput = {
    where: EjercicioPrediccionScalarWhereInput
    data: XOR<EjercicioPrediccionUpdateManyMutationInput, EjercicioPrediccionUncheckedUpdateManyWithoutAlgoritmoInput>
  }

  export type EjercicioPrediccionScalarWhereInput = {
    AND?: EjercicioPrediccionScalarWhereInput | EjercicioPrediccionScalarWhereInput[]
    OR?: EjercicioPrediccionScalarWhereInput[]
    NOT?: EjercicioPrediccionScalarWhereInput | EjercicioPrediccionScalarWhereInput[]
    id?: StringFilter<"EjercicioPrediccion"> | string
    pregunta?: StringFilter<"EjercicioPrediccion"> | string
    respuestaCorrecta?: StringFilter<"EjercicioPrediccion"> | string
    dificultad?: EnumDificultadEjercicioFilter<"EjercicioPrediccion"> | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFilter<"EjercicioPrediccion"> | string
    feedbackNegativo?: StringFilter<"EjercicioPrediccion"> | string
    createdAt?: DateTimeFilter<"EjercicioPrediccion"> | Date | string
    algoritmoId?: StringFilter<"EjercicioPrediccion"> | string
  }

  export type SesionSimulacionUpsertWithWhereUniqueWithoutAlgoritmoInput = {
    where: SesionSimulacionWhereUniqueInput
    update: XOR<SesionSimulacionUpdateWithoutAlgoritmoInput, SesionSimulacionUncheckedUpdateWithoutAlgoritmoInput>
    create: XOR<SesionSimulacionCreateWithoutAlgoritmoInput, SesionSimulacionUncheckedCreateWithoutAlgoritmoInput>
  }

  export type SesionSimulacionUpdateWithWhereUniqueWithoutAlgoritmoInput = {
    where: SesionSimulacionWhereUniqueInput
    data: XOR<SesionSimulacionUpdateWithoutAlgoritmoInput, SesionSimulacionUncheckedUpdateWithoutAlgoritmoInput>
  }

  export type SesionSimulacionUpdateManyWithWhereWithoutAlgoritmoInput = {
    where: SesionSimulacionScalarWhereInput
    data: XOR<SesionSimulacionUpdateManyMutationInput, SesionSimulacionUncheckedUpdateManyWithoutAlgoritmoInput>
  }

  export type AlgoritmoCreateWithoutEjerciciosInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sesiones?: SesionSimulacionCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoUncheckedCreateWithoutEjerciciosInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sesiones?: SesionSimulacionUncheckedCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoCreateOrConnectWithoutEjerciciosInput = {
    where: AlgoritmoWhereUniqueInput
    create: XOR<AlgoritmoCreateWithoutEjerciciosInput, AlgoritmoUncheckedCreateWithoutEjerciciosInput>
  }

  export type RespuestaEjercicioCreateWithoutEjercicioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaEjercicioUncheckedCreateWithoutEjercicioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuarioId: string
  }

  export type RespuestaEjercicioCreateOrConnectWithoutEjercicioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    create: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RespuestaEjercicioCreateManyEjercicioInputEnvelope = {
    data: RespuestaEjercicioCreateManyEjercicioInput | RespuestaEjercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type AlgoritmoUpsertWithoutEjerciciosInput = {
    update: XOR<AlgoritmoUpdateWithoutEjerciciosInput, AlgoritmoUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<AlgoritmoCreateWithoutEjerciciosInput, AlgoritmoUncheckedCreateWithoutEjerciciosInput>
    where?: AlgoritmoWhereInput
  }

  export type AlgoritmoUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: AlgoritmoWhereInput
    data: XOR<AlgoritmoUpdateWithoutEjerciciosInput, AlgoritmoUncheckedUpdateWithoutEjerciciosInput>
  }

  export type AlgoritmoUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionSimulacionUpdateManyWithoutAlgoritmoNestedInput
  }

  export type AlgoritmoUncheckedUpdateWithoutEjerciciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionSimulacionUncheckedUpdateManyWithoutAlgoritmoNestedInput
  }

  export type RespuestaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    update: XOR<RespuestaEjercicioUpdateWithoutEjercicioInput, RespuestaEjercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RespuestaEjercicioCreateWithoutEjercicioInput, RespuestaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RespuestaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RespuestaEjercicioWhereUniqueInput
    data: XOR<RespuestaEjercicioUpdateWithoutEjercicioInput, RespuestaEjercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type RespuestaEjercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: RespuestaEjercicioScalarWhereInput
    data: XOR<RespuestaEjercicioUpdateManyMutationInput, RespuestaEjercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type UsuarioCreateWithoutProgresoInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sesiones?: SesionSimulacionCreateNestedManyWithoutUsuarioInput
    respuestas?: RespuestaEjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProgresoInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sesiones?: SesionSimulacionUncheckedCreateNestedManyWithoutUsuarioInput
    respuestas?: RespuestaEjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProgresoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
  }

  export type ProgresoInsigniaCreateWithoutProgresoInput = {
    id?: string
    fechaObtencion?: Date | string
    insignia: InsigniaCreateNestedOneWithoutProgresosOtorgadosInput
  }

  export type ProgresoInsigniaUncheckedCreateWithoutProgresoInput = {
    id?: string
    fechaObtencion?: Date | string
    insigniaId: string
  }

  export type ProgresoInsigniaCreateOrConnectWithoutProgresoInput = {
    where: ProgresoInsigniaWhereUniqueInput
    create: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput>
  }

  export type ProgresoInsigniaCreateManyProgresoInputEnvelope = {
    data: ProgresoInsigniaCreateManyProgresoInput | ProgresoInsigniaCreateManyProgresoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutProgresoInput = {
    update: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
    create: XOR<UsuarioCreateWithoutProgresoInput, UsuarioUncheckedCreateWithoutProgresoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProgresoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProgresoInput, UsuarioUncheckedUpdateWithoutProgresoInput>
  }

  export type UsuarioUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionSimulacionUpdateManyWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sesiones?: SesionSimulacionUncheckedUpdateManyWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProgresoInsigniaUpsertWithWhereUniqueWithoutProgresoInput = {
    where: ProgresoInsigniaWhereUniqueInput
    update: XOR<ProgresoInsigniaUpdateWithoutProgresoInput, ProgresoInsigniaUncheckedUpdateWithoutProgresoInput>
    create: XOR<ProgresoInsigniaCreateWithoutProgresoInput, ProgresoInsigniaUncheckedCreateWithoutProgresoInput>
  }

  export type ProgresoInsigniaUpdateWithWhereUniqueWithoutProgresoInput = {
    where: ProgresoInsigniaWhereUniqueInput
    data: XOR<ProgresoInsigniaUpdateWithoutProgresoInput, ProgresoInsigniaUncheckedUpdateWithoutProgresoInput>
  }

  export type ProgresoInsigniaUpdateManyWithWhereWithoutProgresoInput = {
    where: ProgresoInsigniaScalarWhereInput
    data: XOR<ProgresoInsigniaUpdateManyMutationInput, ProgresoInsigniaUncheckedUpdateManyWithoutProgresoInput>
  }

  export type ProgresoInsigniaScalarWhereInput = {
    AND?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
    OR?: ProgresoInsigniaScalarWhereInput[]
    NOT?: ProgresoInsigniaScalarWhereInput | ProgresoInsigniaScalarWhereInput[]
    id?: StringFilter<"ProgresoInsignia"> | string
    fechaObtencion?: DateTimeFilter<"ProgresoInsignia"> | Date | string
    progresoId?: StringFilter<"ProgresoInsignia"> | string
    insigniaId?: StringFilter<"ProgresoInsignia"> | string
  }

  export type ProgresoInsigniaCreateWithoutInsigniaInput = {
    id?: string
    fechaObtencion?: Date | string
    progreso: ProgresoUsuarioCreateNestedOneWithoutInsigniasInput
  }

  export type ProgresoInsigniaUncheckedCreateWithoutInsigniaInput = {
    id?: string
    fechaObtencion?: Date | string
    progresoId: string
  }

  export type ProgresoInsigniaCreateOrConnectWithoutInsigniaInput = {
    where: ProgresoInsigniaWhereUniqueInput
    create: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput>
  }

  export type ProgresoInsigniaCreateManyInsigniaInputEnvelope = {
    data: ProgresoInsigniaCreateManyInsigniaInput | ProgresoInsigniaCreateManyInsigniaInput[]
    skipDuplicates?: boolean
  }

  export type ProgresoInsigniaUpsertWithWhereUniqueWithoutInsigniaInput = {
    where: ProgresoInsigniaWhereUniqueInput
    update: XOR<ProgresoInsigniaUpdateWithoutInsigniaInput, ProgresoInsigniaUncheckedUpdateWithoutInsigniaInput>
    create: XOR<ProgresoInsigniaCreateWithoutInsigniaInput, ProgresoInsigniaUncheckedCreateWithoutInsigniaInput>
  }

  export type ProgresoInsigniaUpdateWithWhereUniqueWithoutInsigniaInput = {
    where: ProgresoInsigniaWhereUniqueInput
    data: XOR<ProgresoInsigniaUpdateWithoutInsigniaInput, ProgresoInsigniaUncheckedUpdateWithoutInsigniaInput>
  }

  export type ProgresoInsigniaUpdateManyWithWhereWithoutInsigniaInput = {
    where: ProgresoInsigniaScalarWhereInput
    data: XOR<ProgresoInsigniaUpdateManyMutationInput, ProgresoInsigniaUncheckedUpdateManyWithoutInsigniaInput>
  }

  export type ProgresoUsuarioCreateWithoutInsigniasInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProgresoInput
  }

  export type ProgresoUsuarioUncheckedCreateWithoutInsigniasInput = {
    id?: string
    puntosTotales?: number
    nivelActual?: number
    rachaDias?: number
    posicionRanking?: number
    ultimaActividad?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: string
  }

  export type ProgresoUsuarioCreateOrConnectWithoutInsigniasInput = {
    where: ProgresoUsuarioWhereUniqueInput
    create: XOR<ProgresoUsuarioCreateWithoutInsigniasInput, ProgresoUsuarioUncheckedCreateWithoutInsigniasInput>
  }

  export type InsigniaCreateWithoutProgresosOtorgadosInput = {
    id?: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt?: Date | string
  }

  export type InsigniaUncheckedCreateWithoutProgresosOtorgadosInput = {
    id?: string
    nombre: string
    descripcion: string
    imagen: string
    criterioDesbloqueo: string
    createdAt?: Date | string
  }

  export type InsigniaCreateOrConnectWithoutProgresosOtorgadosInput = {
    where: InsigniaWhereUniqueInput
    create: XOR<InsigniaCreateWithoutProgresosOtorgadosInput, InsigniaUncheckedCreateWithoutProgresosOtorgadosInput>
  }

  export type ProgresoUsuarioUpsertWithoutInsigniasInput = {
    update: XOR<ProgresoUsuarioUpdateWithoutInsigniasInput, ProgresoUsuarioUncheckedUpdateWithoutInsigniasInput>
    create: XOR<ProgresoUsuarioCreateWithoutInsigniasInput, ProgresoUsuarioUncheckedCreateWithoutInsigniasInput>
    where?: ProgresoUsuarioWhereInput
  }

  export type ProgresoUsuarioUpdateToOneWithWhereWithoutInsigniasInput = {
    where?: ProgresoUsuarioWhereInput
    data: XOR<ProgresoUsuarioUpdateWithoutInsigniasInput, ProgresoUsuarioUncheckedUpdateWithoutInsigniasInput>
  }

  export type ProgresoUsuarioUpdateWithoutInsigniasInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProgresoNestedInput
  }

  export type ProgresoUsuarioUncheckedUpdateWithoutInsigniasInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosTotales?: IntFieldUpdateOperationsInput | number
    nivelActual?: IntFieldUpdateOperationsInput | number
    rachaDias?: IntFieldUpdateOperationsInput | number
    posicionRanking?: IntFieldUpdateOperationsInput | number
    ultimaActividad?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type InsigniaUpsertWithoutProgresosOtorgadosInput = {
    update: XOR<InsigniaUpdateWithoutProgresosOtorgadosInput, InsigniaUncheckedUpdateWithoutProgresosOtorgadosInput>
    create: XOR<InsigniaCreateWithoutProgresosOtorgadosInput, InsigniaUncheckedCreateWithoutProgresosOtorgadosInput>
    where?: InsigniaWhereInput
  }

  export type InsigniaUpdateToOneWithWhereWithoutProgresosOtorgadosInput = {
    where?: InsigniaWhereInput
    data: XOR<InsigniaUpdateWithoutProgresosOtorgadosInput, InsigniaUncheckedUpdateWithoutProgresosOtorgadosInput>
  }

  export type InsigniaUpdateWithoutProgresosOtorgadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsigniaUncheckedUpdateWithoutProgresosOtorgadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
    criterioDesbloqueo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioCreateNestedOneWithoutUsuarioInput
    respuestas?: RespuestaEjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioUncheckedCreateNestedOneWithoutUsuarioInput
    respuestas?: RespuestaEjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSesionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
  }

  export type AlgoritmoCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: EjercicioPrediccionCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoUncheckedCreateWithoutSesionesInput = {
    id?: string
    nombre: string
    descripcion: string
    complejidadTiempo: string
    complejidadEspacio: string
    categoria: $Enums.CategoriaAlgoritmo
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: EjercicioPrediccionUncheckedCreateNestedManyWithoutAlgoritmoInput
  }

  export type AlgoritmoCreateOrConnectWithoutSesionesInput = {
    where: AlgoritmoWhereUniqueInput
    create: XOR<AlgoritmoCreateWithoutSesionesInput, AlgoritmoUncheckedCreateWithoutSesionesInput>
  }

  export type UsuarioUpsertWithoutSesionesInput = {
    update: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
    create: XOR<UsuarioCreateWithoutSesionesInput, UsuarioUncheckedCreateWithoutSesionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSesionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSesionesInput, UsuarioUncheckedUpdateWithoutSesionesInput>
  }

  export type UsuarioUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUpdateOneWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    respuestas?: RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AlgoritmoUpsertWithoutSesionesInput = {
    update: XOR<AlgoritmoUpdateWithoutSesionesInput, AlgoritmoUncheckedUpdateWithoutSesionesInput>
    create: XOR<AlgoritmoCreateWithoutSesionesInput, AlgoritmoUncheckedCreateWithoutSesionesInput>
    where?: AlgoritmoWhereInput
  }

  export type AlgoritmoUpdateToOneWithWhereWithoutSesionesInput = {
    where?: AlgoritmoWhereInput
    data: XOR<AlgoritmoUpdateWithoutSesionesInput, AlgoritmoUncheckedUpdateWithoutSesionesInput>
  }

  export type AlgoritmoUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: EjercicioPrediccionUpdateManyWithoutAlgoritmoNestedInput
  }

  export type AlgoritmoUncheckedUpdateWithoutSesionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    complejidadTiempo?: StringFieldUpdateOperationsInput | string
    complejidadEspacio?: StringFieldUpdateOperationsInput | string
    categoria?: EnumCategoriaAlgoritmoFieldUpdateOperationsInput | $Enums.CategoriaAlgoritmo
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: EjercicioPrediccionUncheckedUpdateManyWithoutAlgoritmoNestedInput
  }

  export type UsuarioCreateWithoutRespuestasInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioCreateNestedOneWithoutUsuarioInput
    sesiones?: SesionSimulacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRespuestasInput = {
    id?: string
    nombre: string
    correo: string
    rol?: $Enums.Rol
    contrasena: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progreso?: ProgresoUsuarioUncheckedCreateNestedOneWithoutUsuarioInput
    sesiones?: SesionSimulacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRespuestasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRespuestasInput, UsuarioUncheckedCreateWithoutRespuestasInput>
  }

  export type EjercicioPrediccionCreateWithoutRespuestasInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    algoritmo: AlgoritmoCreateNestedOneWithoutEjerciciosInput
  }

  export type EjercicioPrediccionUncheckedCreateWithoutRespuestasInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
    algoritmoId: string
  }

  export type EjercicioPrediccionCreateOrConnectWithoutRespuestasInput = {
    where: EjercicioPrediccionWhereUniqueInput
    create: XOR<EjercicioPrediccionCreateWithoutRespuestasInput, EjercicioPrediccionUncheckedCreateWithoutRespuestasInput>
  }

  export type UsuarioUpsertWithoutRespuestasInput = {
    update: XOR<UsuarioUpdateWithoutRespuestasInput, UsuarioUncheckedUpdateWithoutRespuestasInput>
    create: XOR<UsuarioCreateWithoutRespuestasInput, UsuarioUncheckedCreateWithoutRespuestasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRespuestasInput, UsuarioUncheckedUpdateWithoutRespuestasInput>
  }

  export type UsuarioUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUpdateOneWithoutUsuarioNestedInput
    sesiones?: SesionSimulacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUncheckedUpdateOneWithoutUsuarioNestedInput
    sesiones?: SesionSimulacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EjercicioPrediccionUpsertWithoutRespuestasInput = {
    update: XOR<EjercicioPrediccionUpdateWithoutRespuestasInput, EjercicioPrediccionUncheckedUpdateWithoutRespuestasInput>
    create: XOR<EjercicioPrediccionCreateWithoutRespuestasInput, EjercicioPrediccionUncheckedCreateWithoutRespuestasInput>
    where?: EjercicioPrediccionWhereInput
  }

  export type EjercicioPrediccionUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: EjercicioPrediccionWhereInput
    data: XOR<EjercicioPrediccionUpdateWithoutRespuestasInput, EjercicioPrediccionUncheckedUpdateWithoutRespuestasInput>
  }

  export type EjercicioPrediccionUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    algoritmo?: AlgoritmoUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type EjercicioPrediccionUncheckedUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type SesionSimulacionCreateManyUsuarioInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    algoritmoId: string
  }

  export type RespuestaEjercicioCreateManyUsuarioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    ejercicioId: string
  }

  export type SesionSimulacionUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    algoritmo?: AlgoritmoUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionSimulacionUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type SesionSimulacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    algoritmoId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicio?: EjercicioPrediccionUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaEjercicioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicioId?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioPrediccionCreateManyAlgoritmoInput = {
    id?: string
    pregunta: string
    respuestaCorrecta: string
    dificultad: $Enums.DificultadEjercicio
    feedbackPositivo: string
    feedbackNegativo: string
    createdAt?: Date | string
  }

  export type SesionSimulacionCreateManyAlgoritmoInput = {
    id?: string
    pasosCompletados?: number
    totalPasos: number
    completada?: boolean
    fechaInicio?: Date | string
    fechaFin?: Date | string | null
    usuarioId: string
  }

  export type EjercicioPrediccionUpdateWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioPrediccionUncheckedUpdateWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioPrediccionUncheckedUpdateManyWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pregunta?: StringFieldUpdateOperationsInput | string
    respuestaCorrecta?: StringFieldUpdateOperationsInput | string
    dificultad?: EnumDificultadEjercicioFieldUpdateOperationsInput | $Enums.DificultadEjercicio
    feedbackPositivo?: StringFieldUpdateOperationsInput | string
    feedbackNegativo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SesionSimulacionUpdateWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutSesionesNestedInput
  }

  export type SesionSimulacionUncheckedUpdateWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type SesionSimulacionUncheckedUpdateManyWithoutAlgoritmoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pasosCompletados?: IntFieldUpdateOperationsInput | number
    totalPasos?: IntFieldUpdateOperationsInput | number
    completada?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioCreateManyEjercicioInput = {
    id?: string
    respuesta: string
    correcto: boolean
    puntosGanados?: number
    fechaRespuesta?: Date | string
    usuarioId: string
  }

  export type RespuestaEjercicioUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaEjercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RespuestaEjercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    respuesta?: StringFieldUpdateOperationsInput | string
    correcto?: BoolFieldUpdateOperationsInput | boolean
    puntosGanados?: IntFieldUpdateOperationsInput | number
    fechaRespuesta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoInsigniaCreateManyProgresoInput = {
    id?: string
    fechaObtencion?: Date | string
    insigniaId: string
  }

  export type ProgresoInsigniaUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    insignia?: InsigniaUpdateOneRequiredWithoutProgresosOtorgadosNestedInput
  }

  export type ProgresoInsigniaUncheckedUpdateWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    insigniaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoInsigniaUncheckedUpdateManyWithoutProgresoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    insigniaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoInsigniaCreateManyInsigniaInput = {
    id?: string
    fechaObtencion?: Date | string
    progresoId: string
  }

  export type ProgresoInsigniaUpdateWithoutInsigniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progreso?: ProgresoUsuarioUpdateOneRequiredWithoutInsigniasNestedInput
  }

  export type ProgresoInsigniaUncheckedUpdateWithoutInsigniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progresoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgresoInsigniaUncheckedUpdateManyWithoutInsigniaInput = {
    id?: StringFieldUpdateOperationsInput | string
    fechaObtencion?: DateTimeFieldUpdateOperationsInput | Date | string
    progresoId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlgoritmoCountOutputTypeDefaultArgs instead
     */
    export type AlgoritmoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlgoritmoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjercicioPrediccionCountOutputTypeDefaultArgs instead
     */
    export type EjercicioPrediccionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjercicioPrediccionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgresoUsuarioCountOutputTypeDefaultArgs instead
     */
    export type ProgresoUsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgresoUsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsigniaCountOutputTypeDefaultArgs instead
     */
    export type InsigniaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsigniaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdministradorDefaultArgs instead
     */
    export type AdministradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdministradorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlgoritmoDefaultArgs instead
     */
    export type AlgoritmoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlgoritmoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EjercicioPrediccionDefaultArgs instead
     */
    export type EjercicioPrediccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EjercicioPrediccionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgresoUsuarioDefaultArgs instead
     */
    export type ProgresoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgresoUsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsigniaDefaultArgs instead
     */
    export type InsigniaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsigniaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgresoInsigniaDefaultArgs instead
     */
    export type ProgresoInsigniaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgresoInsigniaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SesionSimulacionDefaultArgs instead
     */
    export type SesionSimulacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SesionSimulacionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RespuestaEjercicioDefaultArgs instead
     */
    export type RespuestaEjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RespuestaEjercicioDefaultArgs<ExtArgs>

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