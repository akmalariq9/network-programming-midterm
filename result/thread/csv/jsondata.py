import json

# Fungsi untuk membaca dan menguraikan file JSON
def read_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

# Fungsi untuk menghitung nilai-nilai yang diinginkan
def calculate_metrics(data):
    total_data = data['Total']
    
    total_transfer = total_data['receivedKBytesPerSec'] + total_data['sentKBytesPerSec']
    request_per_second = total_data['throughput']
    time_per_request = total_data['meanResTime']
    transfer_rate = total_transfer
    
    return total_transfer, request_per_second, time_per_request, transfer_rate

# File path ke file JSON
file_path = 'data.json'

# Baca dan uraikan data JSON
data = read_json(file_path)

# Hitung metrik
total_transfer, request_per_second, time_per_request, transfer_rate = calculate_metrics(data)

# Tampilkan hasil
print(f'Total Transfer: {total_transfer} KB/sec')
print(f'Request per Second: {request_per_second} req/sec')
print(f'Time per Request: {time_per_request} ms')
print(f'Transfer Rate: {transfer_rate} KB/sec')
