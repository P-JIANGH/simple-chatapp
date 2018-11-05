from socket import socket, AF_INET, SOCK_DGRAM
from time import ctime

HOST = ''
PORT = 8000
BUFSIZ = 1024
ADDR = (HOST, PORT)

udpSockServer = socket(AF_INET, SOCK_DGRAM)
udpSockServer.bind(ADDR)

while True:
    print('waiting for message...')
    data, addr = udpSockServer.recvfrom(BUFSIZ)
    udpSockServer.sendto(bytes('[%s] %s' % (ctime(), data.decode('utf-8')), 'utf-8'), addr)
    print('...received from and returned to:', addr)
udpSockServer.close()
