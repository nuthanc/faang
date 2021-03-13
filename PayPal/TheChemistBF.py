from os import path

THIS_DIR = path.dirname(path.realpath(__file__))
file_path = path.join(THIS_DIR, 'tc.txt')

with open(file_path) as f:
    data = f.read().splitlines()

desired = int(data[0])
n = int(data[1])
li = []

for i in range(2,len(data)):
    li.append(data[i])

def ret_sum(li):
    for i in range(n):
        for j in range(i+1, n):
            sub = abs(li[i] - li[j])


ret_sum(li)
