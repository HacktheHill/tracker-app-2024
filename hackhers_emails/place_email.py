import json
import boto3
import csv

payload = {
    "recipients": []
}

with open('xxxxxxxxxxxxxxx.csv', mode='r') as registration_csv:
    csv_reader = csv.DictReader(registration_csv)
    for row in csv_reader:
        recipient_obj = {
            "email": row['email'],
            "subject": "HackHers - RSVP",
            "values_to_substitute": {
                "confirmURL": f"https://tracker.hackthehill.com/confirm?id={row['id']}"
            }
        }

        payload['recipients'].append(recipient_obj)

with open('hackhers-rsvp.html', mode='r') as template:
    payload["body_html"] = template.read()

lambda_client = boto3.client(
    'lambda',
    aws_access_key_id='****',
    aws_secret_access_key='*****',
    region_name='us-east-1'
)

response = lambda_client.invoke(
    FunctionName='SESWorker',
    InvocationType='RequestResponse', 
    Payload=json.dumps(payload)
)

response_payload = response['Payload'].read()
print("Lambda Response:", response_payload.decode('utf-8'))