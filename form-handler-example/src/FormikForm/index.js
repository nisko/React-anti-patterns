import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  data: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Data required'),
});

export default () => (
  <div>
    <Formik
      initialValues={{ data: '' }}
      validationSchema={SigninSchema}
      onSubmit={(values) => {
          alert(values.data);
      }}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <label>Formik form:</label>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.data}
            name="data"
          />
          {props.errors.data && props.touched.data ? (
            <div>{props.errors.data}</div>
          ) : null}
          <button type="submit">Ok</button>
        </form>
      )}
    />
  </div>
);
