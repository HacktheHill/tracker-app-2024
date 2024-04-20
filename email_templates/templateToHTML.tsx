import { render } from "@react-email/render";
import HackHerRegistrationConfirmation from "./hackHerRegistrationConfirmation";
import React from "react";

export function convertTemplateToHTML() {
	return render(<HackHerRegistrationConfirmation />, { pretty: true });
}

export default convertTemplateToHTML;
