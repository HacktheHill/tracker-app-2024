import * as React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";


export function hackHerRegistrationConfirmation() {
    return (
		<Html lang="en">
			<Text>
				<h1>Thank you for signing up to HackHers!</h1>
			</Text>
		</Html>
    )
}
 
export default hackHerRegistrationConfirmation;