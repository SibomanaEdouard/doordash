import requests
#this is the input to be filled by user
FirstName=input("Firstname : ")
LastName=input("Lastname :  ")
Email=input("email :  ")
MobilePhone=input("phone :  ")
Password=input("password: ")
Country=input("country:")

#this is th link to signup to doordash
signup_url="https://identity.doordash.com/auth/user/signup"

data={
    'firstname':FirstName,
    'lastname':LastName,
    'email':Email,
    'phone':MobilePhone,
    'country':Country,
    'password':Password
}

#this is to send to request to the server
response=requests.post(signup_url,data=data)
if response.status_code==200:
    print("account created successfully")
else:
    print("Failed to create acount")
