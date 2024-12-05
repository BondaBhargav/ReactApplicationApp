import React from 'react';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction } from './store';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AccountApp = () => {
  const transactions = useSelector((state) => state.account.transactions);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Account Form</h2>
      <Formik
        initialValues={{
          amount: '',
          fullname: '',
          number: '',
          type: 'credit',
        }}
        validationSchema={yup.object({
          amount: yup
            .number()
            .typeError('Amount must be a number')
            .positive('Please enter a positive number')
            .required('Please enter an amount'),
          number: yup
            .string()
            .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit mobile number')
            .required('Enter your mobile number'),
          fullname: yup
            .string()
            .min(3, 'Minimum 3 characters are required')
            .required('Enter your name'),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          dispatch(addTransaction(values)); // Dispatch new transaction
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Name:
              </label>
              <Field
                name="fullname"
                className="form-control"
                placeholder="Enter your full name"
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Mobile No:
              </label>
              <Field
                name="number"
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
              />
              <ErrorMessage
                name="number"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
              </label>
              <Field
                name="amount"
                type="number"
                className="form-control"
                placeholder="Enter the amount"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Amount Type:
              </label>
              <Field as="select" name="type" className="form-select">
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-danger mt-1"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <h3 className="mt-5">Transaction History</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Transaction Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.fullname}</td>
              <td>{transaction.number}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
