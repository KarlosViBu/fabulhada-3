import jwt from 'jsonwebtoken';


export const signToken = ( _id: string, email?: string ) => {

    let id:string = '6489fc522cdc7c84609c4659';

    if ( !process.env.JWT_SECRET_SEED ) {
        throw new Error('No hay semilla de JWT - Revisar variables de entorno');
    }

     id  = _id
    // const { _id = '' } = _id;

    return jwt.sign(
        // payload
        { id, email },

        // Seed
        process.env.JWT_SECRET_SEED,

        // Opciones
        { expiresIn: '30d' }
    )

}


export const isValidToken = ( token: string ):Promise<string> => {
    if ( !process.env.JWT_SECRET_SEED ) {
        throw new Error('No hay semilla de JWT - Revisar variables de entorno');
    }

    if ( token.length <= 10 ) {
        return Promise.reject('JWT no es válido');
    }

    return new Promise( (resolve, reject) => {

        try {
            jwt.verify( token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
                if ( err ) return reject('JWT no es válido');

                const { _id } = payload as { _id: string };

                resolve(_id);

            })
        } catch (error) {
            reject('JWT no es válido');
        }


    })

}

