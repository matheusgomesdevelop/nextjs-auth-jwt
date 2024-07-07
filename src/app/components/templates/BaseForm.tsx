import React from 'react';

import { Form, Formik, FormikConfig, FormikHelpers, FormikValues } from 'formik';

interface BaseFormProps extends FormikConfig<FormikValues> {
    children: React.ReactNode;
    'data-testid'?: string;
    className?: string;
    style?: React.CSSProperties;
}

const BaseForm: React.FC<BaseFormProps> = ({ children, className, style, ...props }) => (
    <Formik {...props}>
        <Form data-testid={props['data-testid']} className={className} style={style}>
            {children}
        </Form>
    </Formik>
);

export type { FormikHelpers, FormikValues };

export default BaseForm;
