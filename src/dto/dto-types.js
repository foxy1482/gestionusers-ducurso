import { Type } from '@sinclair/typebox';
export const idDTOSchema = Type.String({
    format: 'uuid', errorMessage: {
        type: 'El tipo no es válido, debe ser un string',
        format: 'El formato no es válido, debe ser un uuid4'
    }
});

export const nameDTOSchema = Type.String({
    minLength: 2, maxLength: 20,
    errorMessage: { minLength: 'El nombre debe tener mínimo 2 caracteres', maxLength: 'El nombre debe tener un máximo de 20 caracteres'}
});

export const surnameDTOSchema = Type.String({
    minLength: 4, maxLength: 50,
    errorMessage: { minLength: 'El apellido debe tener mínimo 4 caracteres', maxLength: 'El apellido debe tener un máximo de 50 caracteres'}
});

export const emailDTOSchema = Type.String({
    format: 'email', errorMessage: {
        type: 'El tipo no es válido, debe ser un string',
        format: 'El formato del email no es válido, debe cumplir el [RFC 5322]'
    }
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        type: 'El tipo de la contraseña no es válido, debe ser un string',
        format: 'El formato de la contraseña no es válido, debe contener una mayúscula, una minúscula y un número',
        minLength: 'La contraseña debe tener mínimo 10 caracteres',
        maxLength: 'La contraseña debe tener un máximo de 25 caracteres'
    }
});
