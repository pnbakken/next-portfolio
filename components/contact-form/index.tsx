import { sendMessageToFirebase } from "../../tools/firebase/firebase";
import { $, $all } from "../../tools/helpers/domSelector";
import { languages } from "../../tools/languages/languages";
import { createMessage } from "../utility-components/create-message";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  messageSubject: yup.string().required(),
  messageText: yup.string().required(),
});

const ContactForm = ({ lang }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function contactForm(e) {
    e.preventDefault();

    setLoading(true);
    const form = $("#contact-form");

    try {
      if (form) {
        e.preventDefault();
        createMessage(
          $("#form-message"),
          "info-message",
          languages[lang].sending
        );
        if (validateForm(form)) {
          console.log("Form valid");
          const newMessage = await packageForm(form);
          const sendt = await sendMessageToFirebase(newMessage);
          if (sendt) {
            createMessage(
              $("#form-message"),
              "success-message",
              languages[lang].messageSuccess
            );
            $("#submit-message").classList.add("disabled-button");
            $("#submit-message").onclick = (e) => e.preventDefault();
          }
        } else {
          createMessage(
            $("#form-message"),
            "error-message",
            languages[lang].missingInput
          );
        }
      }
    } catch (error) {
      createMessage($("#form-message"), "error-message", "Generic error");
    } finally {
      setLoading(false);
    }
  }

  // Reference Firebase messages collection

  return (
    <form id="contact-form" onSubmit={handleSubmit(contactForm)}>
      <h3
        id="form-heading"
        className="has-text"
        data-textname="contactFormHeading"
      >
        {languages[lang].contactFormHeading}
      </h3>
      <fieldset disabled={loading}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label has-text"
            data-textname="contactEmail"
          >
            {languages[lang].contactEmail}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label has-text"
            data-textname="contactName"
          >
            {languages[lang].contactName}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="subject"
            className="form-label has-text"
            data-textname="contactSubject"
          >
            {languages[lang].contactSubject}
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label has-text"
            data-textname="messageText"
          >
            {languages[lang].messageText}
          </label>
          <textarea
            className="form-control"
            id="message-text"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-3">
          <div id="form-message"></div>
          <button
            type="submit"
            id="submit-message"
            className="form-button pseudo-button has-text"
            data-textname="sendButton"
          >
            Send
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactForm;

const messagesRef = "";

function validateForm(form) {
  console.log("Validating form...");
  let valid = true;
  $all("input, textarea", form)!.forEach((input) => {
    console.log(input.value);
    if (input) {
      if (!input.value.trim()) {
        input.classList.add("input-error");
        valid = false;
      } else {
        input.classList.remove("input-error");
      }
    }
  });
  return valid;
}

async function packageForm(form) {
  const message = {
    name: $("#name", form).value,
    email: $("#email", form).value,
    subject: $("#subject", form).value,
    text: $("#message-text", form).value,
    time: new Date().toLocaleString(),
    opened: false,
  };
  console.log("Packing form...");
  return message;
}
