import socketserver as SocketServer
class MyTCPHandler(SocketServer.BaseRequestHandler): #定义request handler类，从StreamRequestHandler类继承

    def handle(self):
        conn = self.request
        conn.sendall(bytes("Welcome to localhost", encoding='utf8'))
        while True:
            recv_data = conn.recv(1024)
            if len(recv_data) == 0:
                break
            conn.sendall(recv_data.upper())

if __name__ == "__main__":
    HOST, PORT = "localhost", 8000
    server = SocketServer.TCPServer((HOST, PORT), MyTCPHandler) #传入监听地址、端口号和request handler类
    server.serve_forever() #启动监听处理request