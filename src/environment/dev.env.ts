import { IEnv } from "../types"

const development_environment_variables: IEnv =  {
    stage: process.env.ENVIRONMENT || 'development',
    port: 8082,
    domain:'',
    apiPath: '/api',
    staticPath: '/public',
    db: {
        // add localhost mongodb details.
        name: '',
        user:'root',
        pw: 'toor',
        account: '@yts',
        uri: (user: string, pw :string, name :string, account: string): string => {
            return `mongodb+srv://${user}:${pw}${account}.l2tcwmw.mongodb.net/${name}?retryWrites=true&w=majority`;
        }
    },
    secretKey:"SuperStrongSecretKey001"
}

export = { ...development_environment_variables }