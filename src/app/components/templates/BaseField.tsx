import React, { HTMLInputTypeAttribute } from 'react';

import { ErrorMessage, Field, FieldAttributes, FieldProps } from 'formik';

import Text from '../atoms/Text';

interface BaseFieldProps extends FieldAttributes<any> {
    render: React.ReactElement;
    name: string;
    type: HTMLInputTypeAttribute;
}

export const BaseField: React.FC<BaseFieldProps> = ({ render, name, type, ...props }) => (
    <Field name={name} type={type} {...props}>
        {({ field }: FieldProps) => (
            <>
                {React.cloneElement(render, {
                    ...field,
                })}

                <ErrorMessage name={name} render={(msg) => <Text variant="error">{msg}</Text>} />
            </>
        )}
    </Field>
);

export default BaseField;
