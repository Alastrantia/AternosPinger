import socket
import time
import struct

# Replace with your server's IP address and port
SERVER_IP = 'alastrantia.aternos.me'
SERVER_PORT = 43968  # Your specified port

def create_handshake_packet(protocol_version, server_address, server_port, next_state):
    # Create a handshake packet according to the Minecraft protocol
    packet = bytearray()
    packet.append(0x00)  # Packet ID for Handshake

    # Ensure protocol_version is within the valid range
    if not (0 <= protocol_version <= 255):
        raise ValueError(f"Invalid protocol version: {protocol_version}")

    packet.extend(struct.pack('>B', protocol_version))  # Protocol version
    packet.extend(struct.pack('>H', len(server_address)))  # Length of server address
    packet.extend(server_address.encode('utf-8'))  # Server address
    packet.extend(struct.pack('>H', server_port))  # Server port

    # Ensure next_state is within the valid range
    if not (0 <= next_state <= 255):
        raise ValueError(f"Invalid next state: {next_state}")

    packet.append(next_state)  # Next state (1 for Status)
    return packet

def main():
    protocol_version = 769  # Updated protocol version for Minecraft 1.21.4
    next_state = 1  # 1 for Status

    while True:
        try:
            # Create a socket connection
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.connect((SERVER_IP, SERVER_PORT))
                print(f"Connected to {SERVER_IP}:{SERVER_PORT}")

                # Send handshake packet
                handshake_packet = create_handshake_packet(protocol_version, SERVER_IP, SERVER_PORT, next_state)
                s.sendall(handshake_packet)

                # Send status request packet
                s.sendall(b'\x00')  # Packet ID for Status Request

                # Wait for a response (optional)
                response = s.recv(1024)
                print(f"Received response: {response}")

                # Keep the connection alive
                while True:
                    time.sleep(60)  # Adjust the sleep time as needed
                    s.sendall(b'\x00')  # Sending a dummy byte to keep the connection alive

        except ValueError as ve:
            print(f"Value error: {ve}")
            break
        except Exception as e:
            print(f"An error occurred: {e}")
            time.sleep(5)  # Wait before trying to reconnect

if __name__ == "__main__":
    main()
