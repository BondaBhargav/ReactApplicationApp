import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
export const StudentsRegister = () => {
  const [data, addNevStudent] = useState([]);
 

  return (
    <>
      <h1 className="text-center me-5">StudentsRegister</h1>
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          date: "",
          highestQualification: "",
          collage: "",
          skills: "",
          gender: "",
        }} 
        
        onSubmit={(values) => {

          addNevStudent((prev) => [...prev, { ...values }]);
          
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .min(3, "kanisam 3 char unfali ra babu")
            .required(),
          secondName: yup.string().optional(),
          date: yup.date().required(),
          highestQualification: yup.string().required(),
          skills: yup.string().required(),
          gender: yup.string().required("please select"),
          collage:yup.string().required()
        })}
      >
        {(studensform) => {
       
          return (
            <div className="container">
              <div className="row">
                <form onSubmit={studensform.handleSubmit} className="w-75 form">
                  <div className="form-control">
                    <label className="text-start">First Name</label>
                    <input
                      type="text"
                      className={
                        studensform.errors.firstName
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="firstName"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                      placeholder="Enter Your First Name"
                    />
                    {studensform.errors.firstName && (
                      <p>{studensform.errors.firstName}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="text-start">Second Name </label>
                    <input
                      type="text"
                      className={
                        studensform.errors.secondName
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="secondName"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                      placeholder="Enter Your Second Name"
                    />
                    {studensform.errors.secondName && (
                      <p>{studensform.errors.secondName}</p>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="text-start">Date-of-Birth </label>
                    <input
                      type="date"
                      className={
                        studensform.errors.date&&studensform.touched.date
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="date"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                    />
                    {studensform.errors.date &&studensform.touched.date && (
                      <p>{studensform.errors.date}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="text-start">Skills</label>
                    <input
                      type="text"
                      className={
                        studensform.errors.skills &&studensform.touched.skills
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="skills"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                      placeholder="Enter Skills"
                    />
                    {studensform.errors.skills &&studensform.touched.skills && (
                      <p>{studensform.errors.skills}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="text-start">Highest Qualification</label>
                    <input
                      type="text"
                      className={
                        studensform.errors.highestQualification &&studensform.touched.highestQualification
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="highestQualification"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                      placeholder="Enter Highest Qualification"
                    />
                    {studensform.errors.highestQualification &&studensform.touched.highestQualification  && (
                      <p>{studensform.errors.collage}</p>)}

                  </div>
                  <div className="form-control">
                    <label className="text-start">Collage Name</label>
                    <input
                      type="text"
                      className={
                        studensform.errors.collage &&studensform.touched.collage
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      name="collage"
                      onBlur={studensform.handleBlur}
                      onChange={studensform.handleChange}
                      placeholder="Enter Collage Name"
                    />
                    {studensform.errors.collage &&studensform.touched.collage  && (
                      <p>{studensform.errors.collage}</p>
                    )}
                  </div>
                  <div className="form-control">
                    <div className="d-flex flex-column">
                      <label className="text-start">Gender </label>
                      <div className="d-flex gap-2 ms-3">
                        <input
                          type="radio"
                          name="gender"
                          onBlur={studensform.handleBlur}
                          onChange={studensform.handleChange}
                          value="male"
                        />
                        male
                      </div>
                      <div className="d-flex gap-2 ms-3">
                        <input
                          type="radio"
                          name="gender"
                          onBlur={studensform.handleBlur}
                          onChange={studensform.handleChange}
                          value="female"
                        />
                        female
                      </div>
                      <div className="d-flex gap-2 ms-3">
                        <input
                          type="radio"
                          name="gender"
                          onBlur={studensform.handleBlur}
                          onChange={studensform.handleChange}
                          value="others"
                        />
                        others
                      </div>

                      {studensform.errors.gender  &&studensform.touched.gender && (
                        <p>{studensform.errors.gender}</p>
                      )}
                    </div>
                  </div>
                  <button type="submit" disabled={!studensform.isValid}>Submit</button>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};
