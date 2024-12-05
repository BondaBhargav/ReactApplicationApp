import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React from "react";

export const EmployeeRegister = () => {
  return (
    <>
      <h1>This is formik emample method-2</h1>
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          age: null,

          company: "",

          gender: "",
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .min(3, "kanisam 3 char unfali ra babu")
            .required(),
          age: yup.number("must be num").required("Required Age"),
          gender:yup.string().required("select Gender")
        })}

        onSubmit={(values)=>{console.log(values)}}
      >
        {(emp) => (
          <Form className="form-control w-75">
            <div>
              <label className="text-start">First Name</label>
              <Field
                name="firstName"
                className={
                  emp.errors.firstName
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />

              <ErrorMessage name="firstName" component="p"></ErrorMessage>
            </div>
            <div>
              <label className="text-start">Second Name</label>
              <Field
                name="secondName"
                className={
                  emp.errors.secondName
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />

              <ErrorMessage name="secondName" component="p"></ErrorMessage>
            </div>
            <div>
              <label className="text-start">Age</label>
              <Field
                name="age"
                className={
                  (emp.errors.age&&emp.touched.age)
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />

              <ErrorMessage name="age" component="p"></ErrorMessage>
            </div>

            <div>
              <label className="text-start">Company name</label>
              <Field
                name="company"
                className={
                  emp.errors.company
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />

              <ErrorMessage name="company" component="p"></ErrorMessage>
            </div>

            <div>
              <label className="text-start">Slect Gender</label>
              <br />
              <Field name="gender" type="radio" value="male" />
              male
              <Field name="gender" type="radio" value="female" />
              female
              <Field name="gender" type="radio" value="others" />
              others
              <ErrorMessage name="gender" component="p"></ErrorMessage>
            </div>
            <button type="submit">onSubmit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
