from socket import socket, AF_INET, SOCK_DGRAM
from time import ctime

HOST = 'localhost'
PORT = 8000
BUFSIZ = 1024
ADDR = (HOST, PORT)

udpSockClient = socket(AF_INET, SOCK_DGRAM)

while True:
    data = input('> ')
    udpSockClient.sendto(bytes(data, 'utf-8'), ADDR)
    data, ADDR = udpSockClient.recvfrom(BUFSIZ)
    if not data:
        break
    print(data.decode('utf-8'))
udpSockClient.close()