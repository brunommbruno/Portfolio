import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import mailIcon from "../img/mail.png";

import { Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        "service_m762tdf",
        "template_r024awh",
        templateParams,
        "user_4TeJCXU3E9ID63l4ztBgJ"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="line" id="contacts">
        <span className="jumbo-underline text-center" />
      </div>
      <div className="contact-form">
        <Container>
          <Row>
            <Col className="contact-info">
              <h1>Contact</h1>
              <img src={mailIcon} alt="mail icon" />
              <h2>Leave me a message</h2>
              <p>
                Or contact me personally through my email:{" "}
                <span>brunommbruno@gmail.com </span>
                or through my{" "}
                <span>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/bruno-bruno-498138200/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </span>
              </p>
            </Col>
            <Col>
              <div className=" text-center">
                <div className="contactForm">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <input
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter youur name",
                        },
                        maxLenght: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Your Name"
                    />
                    {/* {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span> */}
                    {/* )} */}
                    <div className="">
                      <input
                        type="email"
                        {...register("email", {
                          required: {
                            value: true,
                            pattern:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Email Address"
                      ></input>
                      {/* {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )} */}
                    </div>

                    {/* Row 2 of form */}

                    <div className="">
                      <input
                        type="text"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Please enter a subject",
                          },
                          maxLength: {
                            value: 75,
                            message: "Subject cannot exceed 75 characters",
                          },
                        })}
                        className="form-control formInput"
                        placeholder="Subject"
                      ></input>
                      {/* {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )} */}
                    </div>
                    {/* Row 3 of form */}

                    <textarea
                      rows={3}
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {/* {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )} */}
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
