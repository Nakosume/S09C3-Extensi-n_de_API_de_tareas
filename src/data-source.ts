import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ep-proud-haze-26916324.us-east-2.aws.neon.fl0.io",
    port: 5432,
    username: "fl0user",
    password: "DSVKdikms4c9",
    database: "JUJU",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false },
})
