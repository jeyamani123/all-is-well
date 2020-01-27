def add(a, b):
    c = a + b
    return c
def sub(a, b):
    c = a - b
    return c
def mul(a, b):
    c = a * b
    return c
def div(a, b):
    c = a / b
    return c
c = 'Y'
f=open("calc.txt","w+")
while (c == 'Y'):
    ch = int(input("Enter Your Choice. 1.Sum 2.Difference 3.Product 4.Division"))
    if (ch == 1):
        a = int(input("Enter Number:"))
        b = int(input("Enter Number:"))
        d=add(a,b)
        f.write("Number1:%d\r\n" % a)
        f.write("Number2:%d\r\n" % b)
        f.write("add: %d\r\n"%d)
    elif (ch == 2):
        a = int(input("Enter Number:"))
        b = int(input("Enter Number:"))
        d=(sub(a, b))
        f.write("Number1:%d\r\n" %a)
        f.write("Number2:%d\r\n" %b)
        f.write("sub: %d\r\n" %d)
    elif (ch == 3):
        a = int(input("Enter Number:"))
        b = int(input("Enter Number:"))
        d=mul(a, b)
        f.write("Number1:%d\r\n" %a)
        f.write("Number2:%d\r\n" %b)
        f.write("mul:%d\r\n"%d)
    elif (ch == 4):
        a = int(input("Enter Number:"))
        b = int(input("Enter Number:"))
        d=div(a, b)
        f.write("Number1:%d\r\n" % a)
        f.write("Number2:%d\r\n" % b)
        f.write("div:%d\r\n"%d)
    else:
        f.write("Wrong!!! Enter Valid Choice\r\n")
    c = input("Continue(Y/N)")
    f.write("choices:%s\r\n"%c)
f.close()
f=open("calc.txt","r+")
print(f.read())
f.close()
