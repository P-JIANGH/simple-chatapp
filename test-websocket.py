import asyncio
import websockets

async def hello(websocket, path):
    recv_msg = await websocket.recv()
    print('>>> %s' % recv_msg)

    
    await websocket.send('123')

start_server = websockets.serve(hello, 'localhost', 8000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
