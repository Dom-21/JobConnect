from mailbox import Message
from dotenv import load_dotenv
from flask import Flask, request, jsonify, render_template, send_from_directory, session
from flask_mail import Mail
from flask_session import Session
import os
import mysql.connector
from werkzeug.utils import secure_filename
from flask_cors import CORS
import bcrypt

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders


global user_email
user_email = None

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

load_dotenv()

@app.route('/')
def index():
    return render_template('index.html')




@app.route('/submit', methods=['POST'])
def submit():
    try:
        
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']


        smtp_port = 587                 # Standard secure SMTP port
        smtp_server = "smtp.gmail.com"  # Google SMTP Server

        # Set up the email lists
        email_from = os.getenv('MAIL_USERNAME')
        email_inp = os.getenv('MAIL_TO_USERNAME')
        email_list=[]
        email_list.append(email_inp)

        # Define the password (better to reference externally)
        pswd = os.getenv('MAIL_PASSWORD') 


        subject = 'This is a contact mail from Job Connect'



        # Define the email function (dont call it email!)
        def send_emails(email_list):

            for person in email_list:

                # Make the body of the email
                body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
                # make a MIME object to define parts of the email
                msg = MIMEMultipart()
                msg['From'] = email_from
                msg['To'] = person
                msg['Subject'] = subject

                # Attach the body of the message
                msg.attach(MIMEText(body, 'plain'))

                # Cast as string
                text = msg.as_string()

                # Connect with the server
                TIE_server = smtplib.SMTP(smtp_server, smtp_port)
                TIE_server.starttls()
                TIE_server.login(email_from, pswd)
                
                # Send emails to "person" as list is iterated
                TIE_server.sendmail(email_from, person, text)

            # Close the port
            TIE_server.quit()


        # Run the function
        send_emails(email_list)

        return f"Thank you {name}! Your message has been sent."
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Print error for debugging
        return jsonify({"error": "Internal Server Error"}), 500



if __name__ == '__main__':
    app.run(host="0.0.0.0",port=10000,debug=True)
    #app.run(debug=True)