from socket import socket, AF_INET, SOCK_STREAM
from time import ctime

HOST = ''
PORT = 8000
BUFSIZ = 1024
ADDR = (HOST, PORT)

tcpSerSock = socket(AF_INET, SOCK_STREAM)
tcpSerSock.bind(ADDR)
tcpSerSock.listen(5)

while True:
    print('waiting for connection...')
    tcpCliSock, addr = tcpSerSock.accept()
    print('...connection from:', addr)

    while True:
        data = tcpCliSock.recv(BUFSIZ).decode('utf-8')
        if not data:
            break
        tcpCliSock.send(bytes('[%s] %s' % (ctime(), data), 'utf-8'))
    tcpCliSock.close()
tcpSerSock.close()
