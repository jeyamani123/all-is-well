import getpass
import random
a={}
def signup():
  i=0
  usename=input("Enter a name")
  password = int(input("password:"))
  l=list(range(100,1000))
  random.shuffle(l)
  accid=l.pop()
  email = input("enter a email")
  kit="@gmail.com"
  while(i<3):
    if(len(email)>10):
      if kit in email:
        break
      else:
        email = input("enter a email")
        i=i+1
    else:
        email = input("enter a email")
        i=i+1
  l=list(range(100,1000))
  random.shuffle(l)
  accid=l.pop()
  a.update({accid:[usename,email,password]})
  print("your userid:",accid)
def login(userid,password):
    c=0
    for i,j in a.items():
        while c<3:
            if j==password and i==userid:
                print("Login succesfull")
                break
            else:
                print("login unsuccesfull")
                userid=int(input())
                password=int(input())
                c=c+1
c="y"
while(c=="y"):   
  ch=int(input("enter your choices 1.login 2.register"))
  if(ch==1):
    idt=int(input("UserID:"))
    passw=int(input("password:"))
    login(idt,passw)
  elif(ch==2):
    signup()
  else:
    print("choices is uncoorect")
  c=input("enter y to continue..")
