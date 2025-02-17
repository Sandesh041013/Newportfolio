import * as Yup from 'yup';
export const ContactSchema  = Yup.object({
    name: Yup.string()
    .required("Full name is required")
    .matches(/^[a-z.A-Z\s]+$/, "Full name can only contain letters and spaces")
    .test(
      "has-two-words",
      "Full name must contain at least two words",
      (value) => value && value.trim().split(/\s+/).length >= 2
    ),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
  });