import getpass
import random
a={}
accid=0
def getList(dict): 
    return dict.keys() 
def signup():
  i=0
  f=open("bank1.txt","a+")
  usename=input("Enter a name")
  password = int(input("password:"))
  l=list(range(100,1000))
  random.shuffle(l)
  accid=l.pop()
  amount=float(input("Balance(shoud be >500 & <50000):"))
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
  a.update({accid:[usename,email,password,amount]})
  f.write(" %s\r\n"%a)
  print("your userid:",accid)
  f.close()
  
  
  
def deposit(userid):
    f=open("bank1.txt","r+")
    u=eval(f.read())
    amount=u[userid][3]
    f.close()
    d_amount=int(input("Enter amount to deposit"))
    if d_amount<500 and (d_amount+amount)>50000:
        print("canot be deposited")
    else:
        amount=amount+d_amount
        print(amount)
    f1=open("bank1.txt","w+")
    u[userid][3]=amount
    f1.write("%s\n\r"%u)
    f1.close()
        
        
        
def withdraw(userid):
    f=open("bank1.txt","r+")
    y=eval(f.read())
    amount=y[userid][3]
    f.close()
    w_amount=int(input("enter withdraw amount"))
    if amount<=500 and (amount-w_amount<500):
        print("cannot be  withdraw the amount")
    else:
        amount=amount-w_amount
        print (amount)
    f1=open("bank1.txt","w+")
    y[userid][3]=amount
    f1.write("%s\n\r"%y)
    f1.close()
        
        
def bal_check(userid):
    f=open("bank1.txt","r+")
    r=eval(f.read())
    amount=r[userid][3]
    print(amount)
    
    
def login():
    c=0
    f=open("bank1.txt","r+")
    idt=int(input("UserID:"))
    passw=int(input("password:"))
    b=f.read()
    c=eval(b)
    d=0
    l=getList(c)
    for i in l:
        while d<3:
            if i==idt:
                if passw==c[idt][2]:
                    print("Login succesfull")
                    k=int(input("enter your choice 1.deposit 2.withdraw 3.balance check"))
                    if(k==1):
                        deposit(idt)
                    elif(k==2):
                        withdraw(idt)
                    elif(k==3):
                        bal_check(idt)
                    break
                else:
                    print("login unsuccesfull")
                    userid=int(input("userid:"))
                    password=int(input("password:"))
                    d=d+1
            else:
                print("userid and password are incorrect..... enter correctly")
                idt=int(input("userid:"))
                passw=int(input("password:"))
                d=d+1


c="y"
while(c=="y"):   
  ch=int(input("enter your choices 1.login 2.register"))
  if(ch==1):
    login()
  elif(ch==2):
    signup()
  else:
    print("choices is uncoorect")
  c=input("enter y to continue..")
