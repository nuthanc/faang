def trap(height):
        l, val = height[0] if len(height) else 0, 0
        r = 0
        rp = 0
        for p in range(1, len(height)-1):
            if height[p-1] > l:
                l = height[p-1]
            if l > height[p]:
                if rp <= p: # Initially I didn't think of this
                    r = 0
                    for i in range(p+1, len(height)): # I had only this where I was calculating for every loop
                        if height[i] > r:
                            r = height[i]
                            rp = i
                        if r >= l:
                            break
                if r > height[p]:
                    val += min(l, r) - height[p]
        return val


print(trap(height=[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
