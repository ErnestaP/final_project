import zmq

context = zmq.Context()
socket = context.socket(zmq.PULL)
socket.connect("tcp://server:5557")

while True:       
    event = socket.recv_json()
    with open('log.txt', 'w') as opened_file:
        opened_file.write(f"Date: {event['date']}")
        opened_file.write(f"Log: {event['log']}")
    print(f"Logs received event {event['date']}, log: {event['log']}")