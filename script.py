import sys
import json

send_message_back = {
    'arguments': sys.argv[1:],
    'message': """Hello,
This is my message.

To the world"""
}


print(json.dumps(send_message_back))
